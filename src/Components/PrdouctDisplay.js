import React, { useState } from "react";
import "./ProductDisplay.css"; // Import the CSS file for styling
import vegicon from '../img/vegicon.gif';
const ProductDisplay = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="product-container">
      {/* Image Section */}
      <div className="image-section">
        {/* Main Large Image */}
        
        
        <img src={selectedImage} alt="Selected" className="main-image" />
{/* Thumbnails */}
<div className="thumbnail-section">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${image === selectedImage ? "active" : ""}`}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Product Info Section */}
      <div className="product-info">
        <h1>{product.name}</h1>
        <p style={{lineHeight:2}}>pack of {product.weight}gm</p>
        <div className="price-container">
<h4 className="price">₹ {product.price}</h4>
<h4 className="original-price">₹ {product.originalprice}</h4>
</div>
<p>(Inclusive of all taxes)
</p>
<img src={vegicon} style={{ width: "20px", height: "20px", objectFit: "contain" }} alt="icon" />         

        <p>{product.description}</p>
        <p>Country of Origin: India</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
