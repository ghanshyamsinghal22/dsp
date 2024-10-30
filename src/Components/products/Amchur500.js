import ProductDisplay from '../PrdouctDisplay';
import Amchur_500_0 from '../../img/500gm/Amchur500-0.jpg';
import Amchur_500_1 from '../../img/500gm/Amchur500-1.jpg';
import Amchur_500_2 from '../../img/500gm/Amchur500-2.jpg';
import Amchur_500_3 from '../../img/500gm/Amchur500-3.jpg';
function Amchur500(){
  const productData = {
    name: "D S Premium Amchur Powder (500 gm)",
    price: 500,
    originalprice:500,
    images: [Amchur_500_0,Amchur_500_1,Amchur_500_2,Amchur_500_3],
    description:"Amchur powder is widely used in Indian cooking, It serves as a souring agent and flavor enhancer, similar to tamarind or lemon juice. It adds a distinctive tangy and slightly sweet taste to various dishes, including curries, chutneys, marinades, pickles, and salads. salads and fruit chats (a popular Indian fruit salad), amchur powder is used to enhance the taste by adding a tangy twist. It brings out the flavors of the fruits and provides a delightful contrast to the natural sweetness. Besides its flavor-enhancing properties, amchur powder is also known for its health benefits. It is a good source of vitamin C, which is essential for immune function and collagen production",
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