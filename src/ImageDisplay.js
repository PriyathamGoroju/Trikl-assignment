// ImageDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageDisplay = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          'https://api.unsplash.com/photos/random',
          {
            params: {
              client_id: 'wDtmPOSRGGuzNr1PWkQvQ4P0ghsexZXGiff0AWNIgGI',
            },
          }
        );
        setImageUrl(response.data.urls.regular);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="image-display">
      <img src={imageUrl} alt="Fetched from Unsplash" />
    </div>
  );
};

export default ImageDisplay;
