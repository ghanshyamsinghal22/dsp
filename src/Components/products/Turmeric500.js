import ProductDisplay from '../PrdouctDisplay';
import Turmeric_500_0 from '../../img/500gm/Turmeric500g-0.jpg';
import Turmeric_500_1 from '../../img/500gm/Turmeric500g-1.jpg';
import Turmeric_500_2 from '../../img/500gm/Turmeric500g-2.jpg';
import Turmeric_500_3 from '../../img/500gm/Turmeric500g-3.jpg';// const des="Turmeric powder is a versatile spice that adds both flavor and visual appeal to dishes. Its vibrant yellow color can make dishes more visually appealing, while its flavor enhances the overall taste. Turmeric powder is a key ingredient in curry powders, spice blends, and marinades.Turmeric powder is commonly used in a variety of dishes, including curries, stews, rice dishes, lentils, and vegetable preparations. It pairs well with ingredients like ginger, garlic, cumin, coriander, and chili peppers, creating a harmonious flavor profile. Apart from its culinary uses, turmeric powder is also appreciated for its potential health benefits due to the presence of curcumin, an active compound in turmeric.";
function Turmeric500(){
  const productData = {
    name: "D S Premium Turmeric Powder (500 gm)",
    price: 178,
    originalprice:190,
    images: [Turmeric_500_0,Turmeric_500_1,Turmeric_500_2,Turmeric_500_3],
    description:
    "DSpremium Turmeric Powder is a vibrant and aromatic spice that enhances both the flavor and appearance of a wide range of dishes. Its brilliant yellow hue brings warmth to curries, stews, rice dishes, lentils, and vegetable preparations, adding a beautiful color and earthy taste that enriches every bite. As a key ingredient in curry powders, spice blends, and marinades, DSpremium Turmeric Powder pairs harmoniously with spices like ginger, garlic, cumin, coriander, and chili peppers. Beyond its culinary appeal, DSpremium Turmeric Powder is valued for its health benefits, thanks to curcumin, its active compound known for potential antioxidant and anti-inflammatory properties. Elevate your cooking with the color, flavor, and wellness benefits of DSpremium Turmeric Powder.",
    weight:500
  };
  console.log(productData);
  return(
  <>
  <ProductDisplay product={productData} />
  </>
  );
}
export default Turmeric500;