import ProductDisplay from '../PrdouctDisplay';
import Amchur_500_0 from '../../img/500gm/Amchur500-0.jpg';
import Amchur_500_1 from '../../img/500gm/Amchur500-1.jpg';
import Amchur_500_2 from '../../img/500gm/Amchur500-2.jpg';
import Amchur_500_3 from '../../img/500gm/Amchur500-3.jpg';
function Amchur500(){
  const productData = {
    name: "D S Premium Amchur Powder (500 gm)",
    price: 180,
    originalprice:186,
    images: [Amchur_500_0,Amchur_500_1,Amchur_500_2,Amchur_500_3],
    description:
    "Amchur powder, a signature spice in Indian cooking, is a must-have in the kitchen for adding a delightful tang to a variety of dishes. DSpremium Amchur Powder, made from sun-dried green mangoes, serves as an exceptional souring agent, much like tamarind or lemon juice. Its unique, tangy flavor brings a vibrant twist to curries, chutneys, marinades, pickles, and even salads. In fruit chaats (a popular Indian fruit salad), DSpremium Amchur Powder enhances the natural sweetness of fruits, adding a mouth-watering contrast that brightens every bite. Beyond its flavor-enhancing qualities, DSpremium Amchur Powder is also rich in vitamin C, supporting immune function and promoting healthy skin through collagen production. Let DSpremium Amchur Powder bring out the best in your dishes with its perfect balance of tang and nutrition.",
    weight:500
};
  console.log(productData);
  return(
  <>
  <ProductDisplay product={productData} />
  </>
  );
}
export default Amchur500;