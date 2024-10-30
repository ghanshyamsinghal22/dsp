import ProductDisplay from '../PrdouctDisplay';
import RedChilli_500_0 from '../../img/500gm/Redchilli500g-0.jpg';
import RedChilli_500_1 from '../../img/500gm/Redchilli500g-1.jpg';
import RedChilli_500_2 from '../../img/500gm/Redchilli500g-2.jpg';
import RedChilli_500_3 from '../../img/500gm/Redchilli500g-3.jpg';
function RedChilli500(){
  const productData = {
    name: "D S Premium Red Chilli Powder (500 gm)",
    price: 500,
    originalprice:500,
    images: [RedChilli_500_0,RedChilli_500_1,RedChilli_500_2,RedChilli_500_3],
    description:"Chilies in this package contain an ADMixture of not more the 2 percent of mustard Edible oil Shyam Longi Mirch Powder is a bright red spice powder made from dried and ground Longi Mirch chilies. The powder is known for its vibrant red color, which adds visual appeal to dishes. It has a moderate level of spiciness and imparts a distinct flavor to the food. Longi Mirch Powder is popularly used in Indian recipes to add a mild to moderate level of heat along with its unique taste. It is commonly used in various Indian dishes such as curries, stews, marinades, and masalas. It is particularly favored for its ability to add rich red color to gravies and sauces without making them overly spicy. Longi Mirch Powder is also used in snacks, chutneys, pickles, and spice blends.",
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