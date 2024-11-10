import ProductDisplay from '../PrdouctDisplay';
import Coriander_200_0 from '../../img/200gm/Coriander 200-0.jpg';
import Coriander_200_1 from '../../img/200gm/Coriander 200-1.jpg';
import Coriander_200_2 from '../../img/200gm/Coriander 200-2.jpg';
import Coriander_200_3 from '../../img/200gm/Coriander 200-3.jpg';

function Coriander200(){
  const productData = {
    name: "D S Premium Coriander Powder (200 gm)",
    price: 90,
    originalprice:97,
    images: [Coriander_200_0,Coriander_200_1,Coriander_200_2,Coriander_200_3],
    description:
    "DSpremium Coriander Powder, made from carefully selected, dried, and ground coriander seeds, is a versatile spice that brings a warm, aromatic flavor to countless dishes. Widely cherished in various cuisines worldwide, DSpremium Coriander Powder is perfect for adding depth and a subtle earthiness to curries, stews, marinades, and spice blends. Its delightful aroma and flavor make it an essential ingredient in any kitchen. In addition to enhancing your meals, DSpremium Coriander Powder is a natural source of dietary fiber, vitamins, and essential minerals like calcium, iron, and magnesium. Add DSpremium Coriander Powder to your pantry to elevate your cooking and enjoy its numerous health benefits.",
    weight:200
};
  console.log(productData);
  return(
  <>
  <ProductDisplay product={productData} />
  </>
  );
}
export default Coriander200;