import RepoInfo from '@/components/common/repo-info';
import { Box, Container, Flex } from '@chakra-ui/react';

interface FooterProps {
  maxW: number;
}

const LayoutFooter = ({ maxW }: FooterProps) => {
  return (
    <Box as="footer" w="full" background="gray.700" py={8}>
      <Container maxW={`${maxW}px`}>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'center', lg: 'space-between' }}
          alignItems={{ base: 'center', lg: 'flex-end' }}
          px={{ base: 3, lg: 0 }}
        >
          <Box color="white">
            <Box mb={3}>これは「ASOBINON」の編集補助を担うWebアプリケーションです</Box>
            <RepoInfo />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default LayoutFooter;
