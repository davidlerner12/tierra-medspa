'use client';
import { useState, useRef, useCallback } from 'react';

const PLAY_ICON = 'https://cdn.prod.website-files.com/6756e21effc0cd662fdaa70a/6756e21effc0cd662fdaa748_Group%2046805046.svg';

const VIDEOS = [
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

function VideoItem({
  video,
  isPlaying,
  onPlay,
  onPause,
}: {
  video: { src: string; poster: string };
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  const handlePlayClick = useCallback(() => {
    if (!ref.current) return;
    ref.current.play();
    onPlay();
  }, [onPlay]);

  const handlePauseClick = useCallback(() => {
    if (!ref.current) return;
    ref.current.pause();
    onPause();
  }, [onPause]);

  const handleVideoEnd = useCallback(() => {
    onPause();
  }, [onPause]);

  // Pause the actual video element when parent says we're no longer active
  // This handles the case where another video started playing
  if (!isPlaying && ref.current && !ref.current.paused) {
    ref.current.pause();
  }

  return (
    <div className="videos_cms-item">
      <div className="videos_item-body">
        <div className="videos_vimeo-embed">
          <div className="video-block">
            <video
              ref={ref}
              playsInline
              preload="none"
              onEnded={handleVideoEnd}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src={video.src} type="video/mp4" />
            </video>
          </div>
        </div>
        {!isPlaying && (
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
        {isPlaying && (
          <div className="videos_pause-button" onClick={handlePauseClick} />
        )}
      </div>
    </div>
  );
}

export default function Videos() {
  // Track which video index is currently playing (-1 = none)
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <section className="section_videos">
      <div className="videos_container">
        <div className="videos_section-padding">
          <div className="videos_cms-body">
            <div className="videos_cms-list">
              {VIDEOS.map((video, i) => (
                <VideoItem
                  key={i}
                  video={video}
                  isPlaying={activeIndex === i}
                  onPlay={() => setActiveIndex(i)}
                  onPause={() => {
                    if (activeIndex === i) setActiveIndex(-1);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
