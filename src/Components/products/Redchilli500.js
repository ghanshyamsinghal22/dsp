import ProductDisplay from '../PrdouctDisplay';
import RedChilli_500_0 from '../../img/500gm/Redchilli500g-0.jpg';
import RedChilli_500_1 from '../../img/500gm/Redchilli500g-1.jpg';
import RedChilli_500_2 from '../../img/500gm/Redchilli500g-2.jpg';
import RedChilli_500_3 from '../../img/500gm/Redchilli500g-3.jpg';
function RedChilli500(){
  const productData = {
    name: "D S Premium Red Chilli Powder (500 gm)",
    price: 190,
    originalprice:200,
    images: [RedChilli_500_0,RedChilli_500_1,RedChilli_500_2,RedChilli_500_3],
    description:
    "DSpremium Longi Mirch Powder is crafted from the finest Longi Mirch chilies, dried and ground to produce a vibrant red spice powder that elevates the look and flavor of any dish. Known for its bright red color and moderate spiciness, DSpremium Longi Mirch Powder adds both visual appeal and a distinctive taste to your culinary creations. Ideal for Indian recipes, it brings a mild to moderate heat to curries, stews, marinades, and masalas, making it a versatile addition to your spice collection. This Longi Mirch Powder is particularly favored for adding a rich red color to gravies and sauces without overpowering them with excessive heat. Use it to enhance the flavor and color of snacks, chutneys, pickles, and spice blends, and enjoy the balanced warmth and vibrant hue that DSpremium Longi Mirch Powder brings to your dishes.",
    weight:500
};
  console.log(productData);
  return(
  <>
  <ProductDisplay product={productData} />
  </>
  );
}
export default RedChilli500;