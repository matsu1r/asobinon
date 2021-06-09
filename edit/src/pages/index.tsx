import Logo from '@/components/common/Logo';
import { SITE_DESC } from '@/lib/constants';
import { Center, Heading, Stack, Box } from '@chakra-ui/react';
import Layout from '../components/layout';

const Index = () => (
  <Layout meta={{ title: 'TOP', desc: SITE_DESC }}>
    <Center h="100vh">
      <Stack spacing={4}>
        <Logo />
        <Heading>このサイトの仕組み</Heading>
        <img
          width={660}
          height={552}
          src="https://bn02pap001files.storage.live.com/y4m3eHy7m1RaOLH4UemtvCzEw3WI-g8XfM9IcVQyR2b1ocYTkzoI83K6CwCQVrYwvnJEZCvd-8jcy5Qu3LAKoJ2FtwcxKcrIW9Ftva5cUIZesS8FfCydG3mTnF6prbG_KORcVe_T10uMV_6U0nmwXdp-sLgaZgY-DOO3yt-7M9Z1rHpqK13kqPV9HTXGjaz8kW9?width=660&height=552&cropmode=none"
        />
        <Box>
          上図のように、アソビノン本体のMarkdownファイルを、このサイトから遠隔で更新できます。
        </Box>
        <Box>
          Docusaurusにはダイナミックに通信する機能がないので、仕方なく別サイトに分離しました。
        </Box>
      </Stack>
    </Center>
  </Layout>
);

export default Index;
