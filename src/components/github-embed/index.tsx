import React, { useEffect, useState } from 'react';

const GithubEmbed = ({ url }: { url: string }) => {
  const [code, setCode] = useState('');
  useEffect(() => {
    const fetcher = async () => {
      const result = await fetch(url).then((res) => res.text());
      setCode(result);
    };
    fetcher();
  }, [url]);
  return code;
};

export default GithubEmbed;
