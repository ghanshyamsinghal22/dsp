import ProductDisplay from '../PrdouctDisplay';
import RedChilli_200_0 from '../../img/200gm/RedChilli200-0.jpg';
import RedChilli_200_1 from '../../img/200gm/RedChilli200-1.jpg';
import RedChilli_200_2 from '../../img/200gm/RedChilli200-2.jpg';
import RedChilli_200_3 from '../../img/200gm/RedChilli200-3.jpg';
function RedChilli200(){
  const productData = {
    name: "D S Premium Red Chilli Powder (200 gm)",
    price: 110,
    originalprice:118,
    images: [RedChilli_200_0,RedChilli_200_1,RedChilli_200_2,RedChilli_200_3],
    description:
    "DSpremium Longi Mirch Powder is crafted from the finest Longi Mirch chilies, dried and ground to produce a vibrant red spice powder that elevates the look and flavor of any dish. Known for its bright red color and moderate spiciness, DSpremium Longi Mirch Powder adds both visual appeal and a distinctive taste to your culinary creations. Ideal for Indian recipes, it brings a mild to moderate heat to curries, stews, marinades, and masalas, making it a versatile addition to your spice collection. This Longi Mirch Powder is particularly favored for adding a rich red color to gravies and sauces without overpowering them with excessive heat. Use it to enhance the flavor and color of snacks, chutneys, pickles, and spice blends, and enjoy the balanced warmth and vibrant hue that DSpremium Longi Mirch Powder brings to your dishes.",
    weight:200
};
  console.log(productData);
  return(
  <>
  <ProductDisplay product={productData} />
  </>
  );
}
export default RedChilli200;