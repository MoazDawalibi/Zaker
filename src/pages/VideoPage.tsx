import React, { useState } from 'react';
import { VideoPage as VideoPageData } from '../../data.json';

const VideoPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="VideoPage">
      <img loading="lazy" src="/Video/video.png" alt="" />

      <main>
        <h1>{VideoPageData.title}</h1>
        <p>{VideoPageData.description}</p>
        <img loading="lazy" src={VideoPageData.mainImage} alt="" />
      </main>

      <span>
        {Object.entries(VideoPageData.Data).map((item, index) => (
          <article key={index}>
            <img
              loading="lazy"
              src={`/Video/${item[1].img}.png`}
              alt={`${index}`}
            />

            <h4>{item[1].number}</h4>
            <p>{item[1].title}</p>
          </article>
        ))}
      </span>
    </div>
  );
};

export default VideoPage;
