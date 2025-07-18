import React, { useState } from 'react';
// import './Youtube.css';

const Youtube = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const Songs = [
    {
      id: 1,
      title: 'Tumshangilie Maria',
      youtubeId: 'pHVkIUIHmKw',
      description: 'To our dear Lady.',
      image: 'https://img.youtube.com/vi/pHVkIUIHmKw/0.jpg',
      hook: '“Hail Mary, full of grace…” 🌹',
    },
    {
      id: 2,
      title: 'Shangwe za Noeli',
      youtubeId: 'IXkMZV9XxoA',
      description: 'Celebrate the birth of our Savior with reverence and joy.',
      image: 'https://img.youtube.com/vi/IXkMZV9XxoA/0.jpg',
      hook: '“Unto us a child is born!” 🎄',
    },
    {
      id: 5,
      title: 'Mfariji wa Kweli',
      youtubeId: '3H5KwBSt3uk',
      description: 'A somber melody to guide your Lenten meditation.',
      image: 'https://img.youtube.com/vi/3H5KwBSt3uk/0.jpg',
      hook: '“He bore our griefs…” ✝️',
    },
    {
      id: 6,
      title: 'Ulinzi wa Mama Maria',
      youtubeId: 'OsHHPDC5fs4',
      description: 'A powerful reflection on the protection of Mary.',
      image: 'https://img.youtube.com/vi/OsHHPDC5fs4/0.jpg',
      hook: '“Under her mantle, we fear no evil.” 🕊️',
    },
  ];

  const selectedVideo = Songs[selectedIndex];

  const goToPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : Songs.length - 1));
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev < Songs.length - 1 ? prev + 1 : 0));
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  return (
    <div className="youtube-container">
      {selectedVideo && (
        <div className="video-modal fade-in" onClick={closeModal}>
          <button className="close-btn" onClick={closeModal}>&times;</button>
          <div className="iframe-wrapper" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={selectedVideo.title}
            ></iframe>
            <div className="controls">
              <button onClick={goToPrev}>⏮ Prev</button>
              <button onClick={goToNext}>Next ⏭</button>
            </div>
          </div>
        </div>
      )}

      <div className="video-column">
        {Songs.map((song, index) => (
          <div
            className="video-card"
            key={song.id}
            onClick={() => setSelectedIndex(index)}
          >
            <img src={song.image} alt={song.title} />
            <div className="video-info">
              <h4>{song.title}</h4>
              <p>{song.description}</p>
              <span className="hook">{song.hook}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Youtube;
