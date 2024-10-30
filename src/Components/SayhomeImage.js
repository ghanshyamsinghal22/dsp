// import React, { useState, useEffect } from 'react';
// import './SayHomeImage.css'; // Import the CSS file for styling

// import image1 from '../img/dsp1.jpeg';
// import image2 from '../img/dsp2.jpeg';
// import image3 from '../img/dsp3.jpeg';
// // import image4 from '../img/dsp4.jpg';
// // import image5 from '../img/dsp5.jpg';


// const images = [image1, image2, image3]; // Array of image sources

// const SayHomeImage = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to keep track of the current image

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle through the images
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="say-home-image">
//       <img 
//         src={images[currentImageIndex]} // Display the current image
//         alt="Say Home"
//         className="image"
//       />
//     </div>
//   );
// };

// export default SayHomeImage;
import React, { useState, useEffect } from 'react';
import './SayHomeImage.css'; // Import the CSS file for styling

import image1 from '../img/dsp1.jpeg';
import image2 from '../img/dsp2.jpeg';
import image3 from '../img/dsp3.jpeg';
import image4 from '../img/dsp4.jpeg';
import image5 from '../img/dsp5.jpeg';

const images = [image1, image2, image3, image4,image5];

const SayHomeImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="say-home-image">
      <img 
        src={images[currentImageIndex]}
        alt="Say Home"
        className="image"
      />
    </div>
  );
};

export default SayHomeImage;
