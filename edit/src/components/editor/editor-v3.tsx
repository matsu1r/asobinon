import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Editor
import MDEditor from '@namskiiiii/react-md-editor-naked';
import '@namskiiiii/react-md-editor-naked/dist/markdown-editor.css';
const gfm = require('remark-gfm');
const matter = require('remark-frontmatter');
const headingId = require('remark-heading-id');
const emoji = require('remark-emoji');
const remarkPluginsCustomized = [gfm, emoji, headingId, [matter, ['yaml']]];

import {
  Badge,
  Stack,
  Box,
  useToast,
  Code,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Heading,
  Checkbox,
  Flex,
} from '@chakra-ui/react';

// fetch and decode
import useSWR from 'swr';
import { GetResOk } from '@/models/github';
import { decode } from 'js-base64';

import ReactMarkdown from 'react-markdown';
// form
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CheckboxControl, InputControl, SubmitButton } from 'formik-chakra-ui';

// auth
import { useAuthentication } from '@/hooks/authentication';
import { getIdToken } from '@/lib/firebase';
import EditorWarning from './editor-warning';

// InitialDataはGetServerSidePropsでページロード時に取得
const EditorV3 = ({ path, initialData }: { path: string; initialData: GetResOk }) => {
  const router = useRouter();
  const [errorString, setErrorString] = useState('');

  const toast = useToast();
  let decoded = '';
  const [md, setMd] = useState(decoded);
  useEffect(() => {
    decoded = decode(initialData.content);
    setMd(decoded);
  }, [initialData.content.length > 0]);

  /*------------------------------
  ユーザーIDを認証
  ------------------------------*/
  const { user } = useAuthentication();

  /* ------------------------------
  GitHubから取得
  ------------------------ */

  const fetcher = async (path: string) => {
    const result: GetResOk = await fetch(
      `${process.env.HTTPS_URL}/api/get-github?path=${encodeURIComponent(path)}`,
      {
        headers: {
          authorization: process.env.FUNCTIONS_AUTH ?? '',
        },
      },
    )
      .then(async (res) => {
        console.info(`%cData fetched`, `font-weight:bold`);

        const data = await res.json();
        return data;
      })
      .catch((e) => console.error(e));

    return result;
  };

  const { data, mutate } = useSWR(`${path}`, (path) => fetcher(path), {
    refreshInterval: 0,
    revalidateOnFocus: false,
  });

  const dataDecoded = decode(data?.content ?? '');

  // 矛盾をチェック
  const [isConflict, setIsConflict] = useState(false);

  /*-------------------------------
  編集成功
  -------------------------------*/
  const handleSuccess = () => {
    toast({
      title: '編集が反映されました',
      status: 'success',
    });
    router.push(`/editor/success?path=${path}`);
  };

  /* ------------------------------------
  削除された時
  ---------------------------------------- */
  const [removed, setRemoved] = useState(false);
  const handleRemoved = () => {
    setErrorString('他の人がファイルを削除しました。');
    setRemoved(true);
    // モーダル
    onOpen();
  };

  /* -------------------------
  Conflictしたとき
  ------------------- */
  const { isOpen, onOpen, onClose } = useDisclosure();
  // 解決したらチェック(ページロード時は解決したことになっている)
  const [resolvedConflict, setResolvedConflict] = useState(true);
  const toggleResolved = () => setResolvedConflict(!resolvedConflict);

  // 随時チェック
  useEffect(() => {
    if (initialData.sha !== data?.sha) {
      setResolvedConflict(false);
      setIsConflict(true);
    } else {
      setResolvedConflict(true);
      setIsConflict(false);
    }
  }, [data?.sha]);

  const handleConflict = () => {
    setErrorString('他の人が行った編集を、うまく自分の内容と合成してください。');
    setResolvedConflict(false);
    // ここで下のMarkdownが更新される
    mutate();
    // モーダル
    onOpen();
  };

  /*-------------------------
   Form
  ------------------------ */

  const [sending, setSending] = useState(false);
  const initialValues = {
    message: '',
    agreed: false,
  };
  const validation = Yup.object({
    message: Yup.string()
      .required('コミットメッセージは必須です')
      .min(5, '短すぎます')
      .max(70, '長すぎます'),
    agreed: Yup.bool().required('利用規約に同意いただかない場合は利用できません'),
  });

  const handleSubmit = async (commitMessage: string) => {
    const idToken = await getIdToken();
    console.debug({ id: idToken });
    const body = {
      message: '[編集支援サイト] ' + commitMessage,
      path: path,
      content: md,
      committer: {
        name: `${user.name}`,
        email: `asobinon-editor-uid-${user.uid}@asobinon.org`,
      },
      // 解決しない限りは前のshaを送る
      sha: resolvedConflict ? data?.sha : initialData.sha,
    };
    setSending(true);
    fetch(`${process.env.HTTPS_URL}/api/edit`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify(body),
    })
      .then(async (res) => {
        setSending(false);
        // 201はファイル作成
        if (res.status == (200 || 201)) {
          handleSuccess();
        } else {
          // shaが矛盾すると409 Conflictになる
          if (res.status == 409) {
            handleConflict();
          } else {
            // 削除された
            if (res.status == 404) {
              handleRemoved();
            } else {
              const data = await res.json();
              setErrorString(data.message ?? '内部のAPIからエラー理由が帰って来ませんでした');
              toast({
                title: '送信に失敗しました',
                description: errorString,
                status: 'error',
              });
            }
          }
        }
      })
      .catch((e) => {
        setErrorString(
          e.message ?? '内部でエラーが発生しました。運営に教えていただけると助かります',
        );
        toast({
          title: '送信に失敗しました',
          description: errorString,
          status: 'error',
        });
      });
  };

  const ConflictModal = () => (
    <Modal isOpen={isOpen} onClose={() => {}}>
      {/* Conflictすると開く。コピーすると追加でロード */}
      <ModalOverlay />
      {removed ? (
        <ModalContent>
          <ModalHeader>他の人がファイルを削除しました</ModalHeader>
          <ModalBody>
            <Box>申し訳ありませんが、このエディタはファイルの作成を想定していません。</Box>
            <Box>内容を保護するため、コピーしてメモ帳などに保存してください。</Box>
            <Box>
              それから、「GitHubアカウントがある方」タブの手順でファイルを作成してください。
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="purple"
              mr={3}
              onClick={() => {
                onClose();
              }}
            >
              わかりました
            </Button>
          </ModalFooter>
        </ModalContent>
      ) : (
        <ModalContent>
          <ModalHeader>他の人がファイルを編集しました</ModalHeader>
          <ModalBody>
            <Box>自分の書いた部分と比べて、相手の編集と矛盾をなくしてください。</Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
              }}
            >
              わかりました
            </Button>
          </ModalFooter>
        </ModalContent>
      )}
    </Modal>
  );

  /* ------------------------
  下書きを保存
  -------------------------- */

  const initialSha = initialData.sha;

  type Draft = string | null;
  const draft = (): Draft => {
    if (typeof localStorage !== 'undefined') {
      const storage = JSON.parse(localStorage.getItem('draft') ?? '{}');
      if (storage[initialSha]) {
        // 今のshaに応じたドラフトを引き出す
        return storage[initialSha];
      } else return null;
    } else return null;
  };

  const saveDraft = (saveString: string) => {
    console.info('Saving', saveString);
    const draftData = { [initialSha]: saveString };
    // stateを更新
    setCurrentDraft(saveString);
    const pastStorage = JSON.parse(localStorage.getItem('draft') ?? '{}');
    localStorage.setItem('draft', JSON.stringify({ ...pastStorage, ...draftData }));
    toast({
      status: 'info',
      title: '下書きを保存しました',
    });
  };

  // 3秒ごとにチェックする
  const saveInterval = 3;
  const [nowDraft, setNowDraft] = useState(new Date());
  const [currentDraft, setCurrentDraft] = useState(draft() ?? '');
  const [canRestore, setCanRestore] = useState(false);
  useEffect(() => {
    // もし今のshaに対応した下書きがあったなら
    if (draft()) setCanRestore(true);
  }, []);
  // https://blog.ikappio.com/drawing-with-setinterval-on-react/
  useEffect(() => {
    // dependenciesでmd指定しないと更新されない
    // しかしこれを指定すると「入力中」はタイマーが全然進まない
    // ので、差分があるとき「だけ」保存するようにしている
    const intervalId = setInterval(() => {
      // canRestoreの時は保存しない!
      if (md !== currentDraft && !canRestore) {
        // localStorageに保存
        saveDraft(md);
      }

      // タイマーを進める
      setNowDraft(new Date());
    }, 1000 * saveInterval);
    return function () {
      clearInterval(intervalId);
    };
  }, [md, nowDraft]);

  const loadDraft = () => {
    setCanRestore(false);
    if (typeof localStorage !== 'undefined') {
      if (draft() !== null) {
        setMd(draft() ?? '');
        toast({
          status: 'success',
          title: '下書きを復元しました',
        });
      } else {
        toast({
          status: 'error',
          title: '下書きを読み取れませんでした',
        });
      }
    }
  };

  const clearDraft = () => {
    if (typeof localStorage !== 'undefined') {
      const readyToDelete = prompt('全ての下書きを消すには、deleteと入力してください。');
      if (readyToDelete == 'delete') {
        localStorage.removeItem('draft');
        toast({
          status: 'info',
          title: '下書きが全て消去されました。',
        });
      }
    }
  };

  const LoadDraftButton = () => {
    return (
      <Stack spacing={3}>
        {/* canRestoreは、「下書きがあってかつshaが同じ」時trueになる */}
        {canRestore && (
          <Button colorScheme="green" onClick={loadDraft}>
            下書きがあります！ここを押して復元してください！
          </Button>
        )}

        <>
          <Badge>最終下書きチェック: {nowDraft.toLocaleTimeString('ja-JP')}</Badge>
          {draft() !== md && (
            <Badge colorScheme="yellow">
              編集を停止して{saveInterval}秒経過すると保存されます。
            </Badge>
          )}
        </>
      </Stack>
    );
  };

  /*-----------------------------------*/

  return (
    <>
      <Stack spacing={6}>
        <Badge>ASOBINON Editor v3</Badge>
        <EditorWarning />
        <Stack spacing={3}>
          <Heading>自分の編集中のファイル</Heading>
          <Badge>SHA: {initialData.sha} </Badge>
          <LoadDraftButton />
          <Box minH="100vh">
            <MDEditor
              height={1000}
              value={md}
              onChange={(current) => setMd(current ?? '')}
              previewOptions={{
                // 下のconflictプレビューと揃える
                remarkPlugins: remarkPluginsCustomized,
              }}
            />
          </Box>
        </Stack>
        {isConflict && (
          // ここは矛盾が発生しないと表示されない
          <Stack spacing={3}>
            <Heading>現在のGitHubのファイル</Heading>
            {removed ? (
              <>
                <Box>削除されました。</Box>
              </>
            ) : (
              <>
                {' '}
                <Badge>SHA: {data?.sha} </Badge>
                {/* 「data」は現在のGitHubのデータ */}
                <Flex gridGap={3}>
                  <Code p={3}>{dataDecoded}</Code>
                  <Box p={3} borderWidth={1} borderColor="gray.500">
                    <ReactMarkdown remarkPlugins={remarkPluginsCustomized}>
                      {dataDecoded}
                    </ReactMarkdown>
                  </Box>
                </Flex>
              </>
            )}
          </Stack>
        )}
        <Formik
          onSubmit={(values) => {
            handleSubmit(values.message);
          }}
          validationSchema={validation}
          initialValues={initialValues}
        >
          {({ values, handleSubmit }) => (
            <Stack as="form" onSubmit={handleSubmit as any}>
              <Box>
                <InputControl name="message" />

                <Badge>{values.message.length}文字</Badge>
              </Box>
              {isConflict && (
                <Box>
                  <Checkbox isChecked={resolvedConflict} onChange={toggleResolved}>
                    矛盾が解決しました
                  </Checkbox>
                </Box>
              )}
              <CheckboxControl name="agreed" isChecked={values.agreed} value="agreed">
                利用規約に同意しました
              </CheckboxControl>
              <>
                {initialData.content && values.agreed && (
                  <>
                    {resolvedConflict && !removed && (
                      <SubmitButton isLoading={sending}>
                        {isConflict && '矛盾が解決したので'}GitHubに反映させる
                      </SubmitButton>
                    )}
                    {resolvedConflict && <Badge>ボタンを押すと、全文が上書きされます。</Badge>}
                    {errorString.length > 0 && <Code colorScheme="red">{errorString}</Code>}
                  </>
                )}
              </>
            </Stack>
          )}
        </Formik>
        <Stack spacing={3}>
          <Box>下書きはブラウザに保存されています。以下のボタンで消去できます。</Box>
          <Button onClick={clearDraft} colorScheme="red">
            下書きデータを全部消去
          </Button>
        </Stack>
        <ConflictModal />
      </Stack>
    </>
  );
};

export default EditorV3;
