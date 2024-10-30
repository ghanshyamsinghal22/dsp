import ProductDisplay from '../PrdouctDisplay';
import Turmeric_200_0 from '../../img/200gm/Turmeric 200-0.jpg';
import Turmeric_200_1 from '../../img/200gm/Turmeric200-1.jpg';
import Turmeric_200_2 from '../../img/200gm/Turmeric200-2.jpg';
import Turmeric_200_3 from '../../img/200gm/Turmeric200-3.jpg';
function Turmeric200(){
  const productData = {
    name: "D S Premium Turmeric Powder (200 gm)",
    price: 500,
    originalprice:500,
    images: [Turmeric_200_0,Turmeric_200_1,Turmeric_200_2,Turmeric_200_3],
    description:"Turmeric powder is a versatile spice that adds both flavor and visual appeal to dishes. Its vibrant yellow color can make dishes more visually appealing, while its flavor enhances the overall taste. Turmeric powder is a key ingredient in curry powders, spice blends, and marinades. Turmeric powder is commonly used in a variety of dishes, including curries, stews, rice dishes, lentils, and vegetable preparations. It pairs well with ingredients like ginger, garlic, cumin, coriander, and chili peppers, creating a harmonious flavor profile. Apart from its culinary uses, turmeric powder is also appreciated for its potential health benefits due to the presence of curcumin, an active compound in turmeric.",
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