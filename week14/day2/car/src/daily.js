import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';




const carouselImages = [
    'https://example.com/hongkong.jpg',
    'https://example.com/macao.jpg',
    'https://example.com/japan.jpg',
    'https://example.com/lasvegas.jpg'
  ];



  function App() {
    return (
      <div>
        <Carousel>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
  
  export default App;
  