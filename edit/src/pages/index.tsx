import Logo from '@/components/common/Logo';
import { SITE_DESC } from '@/lib/constants';
import { Center, Stack, Box } from '@chakra-ui/react';
import Layout from '../components/layout';

const Index = () => (
  <Layout meta={{ title: 'TOP', desc: SITE_DESC }}>
    <Center h="100vh">
      <Stack spacing={4}>
        <Logo />

        <Box>
          Docusaurusにはダイナミックに通信する機能がないので、仕方なく「フィードバック」などの処理を別サイトに分離しました。
        </Box>
      </Stack>
    </Center>
  </Layout>
);

export default Index;
