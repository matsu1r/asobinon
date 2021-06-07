import React from 'react';
import PropTypes from 'prop-types';
import styles from './youtube-embed.module.css';

const getVideoIdFromUrl = (url: string) => {
  // https://stackoverflow.com/a/8593188/15161394
  const regex = /(\?v=|\&v=|\/\d\/|\/embed\/|\/v\/|\.be\/)([a-zA-Z0-9\-\_]+)/;
  const regexyoutubeurl = url.match(regex);
  if (regexyoutubeurl) {
    return regexyoutubeurl[2];
  } else {
    return '';
  }
};

// https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2

const YoutubeEmbed = ({ id }: { id: string }) => {
  if (id.includes('youtube.com') || id.includes('youtu.be')) {
    id = getVideoIdFromUrl(id);
  }

  return (
    <div className={styles.videoResponsive}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

YoutubeEmbed.propTypes = {
  id: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
