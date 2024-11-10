import ProductDisplay from '../PrdouctDisplay';
import Turmeric_200_0 from '../../img/200gm/Turmeric 200-0.jpg';
import Turmeric_200_1 from '../../img/200gm/Turmeric200-1.jpg';
import Turmeric_200_2 from '../../img/200gm/Turmeric200-2.jpg';
import Turmeric_200_3 from '../../img/200gm/Turmeric200-3.jpg';
function Turmeric200(){
  const productData = {
    name: "D S Premium Turmeric Powder (200 gm)",
    price: 105,
    originalprice:115,
    images: [Turmeric_200_0,Turmeric_200_1,Turmeric_200_2,Turmeric_200_3],
    description:
    "DSpremium Turmeric Powder is a vibrant and aromatic spice that enhances both the flavor and appearance of a wide range of dishes. Its brilliant yellow hue brings warmth to curries, stews, rice dishes, lentils, and vegetable preparations, adding a beautiful color and earthy taste that enriches every bite. As a key ingredient in curry powders, spice blends, and marinades, DSpremium Turmeric Powder pairs harmoniously with spices like ginger, garlic, cumin, coriander, and chili peppers. Beyond its culinary appeal, DSpremium Turmeric Powder is valued for its health benefits, thanks to curcumin, its active compound known for potential antioxidant and anti-inflammatory properties. Elevate your cooking with the color, flavor, and wellness benefits of DSpremium Turmeric Powder.",
    weight:200
  };
  console.log(productData);
  return(
  <>
  <ProductDisplay product={productData} />
  </>
  );
}
export default Turmeric200;