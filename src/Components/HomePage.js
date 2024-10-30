import React from 'react';

import './HomePage.css';
import Card from './Card';
import SayHomeImage from './SayhomeImage';
import Amchur500_0 from '../img/500gm/Amchur500-0.jpg';
import Redchilli500_0 from '../img/500gm/Redchilli500g-0.jpg';
import Coriander500_0 from '../img/500gm/Coriander500-0.jpg';
import Turmeric500_0 from '../img/500gm/Turmeric500g-0.jpg';
import Redchilli200_0 from '../img/200gm/RedChilli200-0.jpg';
import Coriander200_0 from '../img/200gm/Coriander 200-0.jpg';
import Turmeric200_0 from '../img/200gm/Turmeric 200-0.jpg';

function Home() {
  return (
    <div className="home">
    <SayHomeImage/>
    <div style={{backgroundColor:'#eaeaea'}}>
      <h1 style={{textAlign:'center'}}>Ground Spices (500 Gm)</h1>
    <div className='products-page'>
    <Card image={Amchur500_0} title={"Amchur Powder (500 gm)" } price={500} redirect={"/dspremium-amchur-500"}/>
    <Card image={Redchilli500_0} title={"Red Chilli Powder (500 gm)"} price={500} redirect={"/dspremium-redchilli-500"}/>
    <Card image={Coriander500_0} title={"Coriander Powder (500 gm)"} price={500} redirect={"/dspremium-cooriander-500"}/>
    <Card image={Turmeric500_0} title={"Turmeric Powder (500 gm)"} price={500} redirect={"/dspremium-turmeric-500"}/>
    </div>
    <br/>
    <div>
      <h1 style={{textAlign:'center'}}>Ground Spices (200 Gm)</h1>
    </div>
    <div className='products-page'>
    <Card image={Redchilli200_0} title={"Red Chilli Powder (200 gm)"} price={500} redirect={"/dspremium-redchilli-200"}/>
    <Card image={Coriander200_0} title={"Coriander Powder (200 gm)"} price={500} redirect={"/dspremium-cooriander-200"}/>
    <Card image={Turmeric200_0} title={"Turmeric Powder (200 gm)"} price={500} redirect={"/dspremium-turmeric-200"}/>
    </div>
    </div>
    </div>
  );
}

export default Home;