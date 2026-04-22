'use client';
import { useState, useRef } from 'react';

const PLAY_ICON = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa748_Group%2046805046.svg';

const VIDEOS = [
  {
    src: 'https://Growbi.b-cdn.net/Mindy%20-%20LED.mp4',
    poster: 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/679bae15b147a4754c2595d7_Mindy%20feedback%20.png',
  },
  {
    src: 'https://Growbi.b-cdn.net/EMS%20-%20KIM.mov',
    poster: 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/679bae03f0a1aa7ada498f74_Kim%20Facial%20Feedback.png',
  },
  {
    src: 'https://Growbi.b-cdn.net/Maria%20-%20Led.mp4',
    poster: 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa806_66ec19572bb1ab253ab1e454_thumb%20(3).jpg',
  },
  {
    src: 'https://Growbi.b-cdn.net/Tom%20-%20LED.MP4',
    poster: 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6756e21effc0cd662fdaa7ee_thumb%20(2).jpg',
  },
  {
    src: 'https://Growbi.b-cdn.net/Tamara%20Led.mov',
    poster: 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa73c/6797b2fea861dc88ee5c37d1_video-capture-t0000.00seg-1668.png',
  },
];

function VideoItem({ video, index }: { video: { src: string; poster: string }; index: number }) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    if (!ref.current) return;
    ref.current.play();
    setPlaying(true);
  };

  const handlePauseClick = () => {
    if (!ref.current) return;
    ref.current.pause();
    setPlaying(false);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.pause();
    setPlaying(false);
  };

  return (
    <div className="videos_cms-item" onMouseLeave={handleMouseLeave}>
      <div className="videos_item-body">
        <div className="videos_vimeo-embed">
          <div className="video-block">
            <video
              ref={ref}
              playsInline
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src={video.src} type="video/mp4" />
            </video>
          </div>
        </div>
        {!playing && (
          <div className="videos_play-button" onClick={handlePlayClick}>
            <div
              className="videos_preview-photo"
              style={{ backgroundImage: `url("${video.poster}")` }}
            />
            <div className="play-button_elipse">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PLAY_ICON} alt="" className="play-button_icon" />
            </div>
          </div>
        )}
        {playing && (
          <div className="videos_pause-button" onClick={handlePauseClick} />
        )}
      </div>
    </div>
  );
}

export default function Videos() {
  return (
    <section className="section_videos">
      <div className="videos_container">
        <div className="videos_section-padding">
          <div className="videos_cms-body">
            <div className="videos_cms-list">
              {VIDEOS.map((video, i) => (
                <VideoItem key={i} video={video} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
