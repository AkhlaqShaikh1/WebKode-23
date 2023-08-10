import ImageGallery from 'react-image-gallery';
import React from 'react';
import gallery_image_1 from "../../assets/gallery_image_1.jpg"
import gallery_image_2 from "../../assets/gallery_image_2.jpg"
import gallery_image_3 from "../../assets/gallery_image_3.jpg"
import gallery_image_4 from "../../assets/gallery_image_4.jpg"
import gallery_image_5 from "../../assets/gallery_image_5.jpg"
import './Gallery.css';

const Gallery = () => {
  const images = [
    {
      original: gallery_image_1,
      thumbnail: gallery_image_1,
    },
    {
      original: gallery_image_2,
      thumbnail: gallery_image_2,
    },
    {
      original: gallery_image_3,
      thumbnail: gallery_image_3,
    },
    {
      original: gallery_image_4,
      thumbnail: gallery_image_4,
    },
    {
      original: gallery_image_5,
      thumbnail: gallery_image_5,
    },
  ];
  
  const galleryOptions = {
    showThumbnails: false,
    showPlayButton: false,
    autoPlay: true,
    slideInterval: 5000
  };

  return (
    <div className="gallery-wrapper">
      <ImageGallery items={images} {...galleryOptions} />
    </div>
  );
};

export default Gallery;

