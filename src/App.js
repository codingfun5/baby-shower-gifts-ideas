import { useState } from 'react';
import { data } from './data';
import { gifts } from './gifts';


import './App.css';

function App() {
  const [giftsList, setGiftsList] = useState(0);
  const {giftsId, giftsName, giftsImage, giftsPrice} = gifts[giftsList];
  const [babyList, setBabyList] = useState(data);
  const [showText,setShowText] = useState(false);
  
  function previousGiftsList() {
    setGiftsList((giftsList => {
      giftsList--;

      if (giftsList < 0) {
        return gifts.length - 1;
      }
      return giftsList;
    }));
  }
  const nextGiftsList = () =>{
    setGiftsList((giftsList =>{
      giftsList ++;
    if(giftsList > gifts.length -1) {
      giftsList = 0;
    }
      return giftsList;
      }))
  }


  
  const removeList = (id) => {
    let newBabyList = babyList.filter(List =>List.id!==id)
    setBabyList(newBabyList)
  }
  const showTextClick = (element) => {
    element.showMore = !element.showMore;
    setShowText(!showText)
  }
  return(
    <div>
  <div key={giftsId}>
    <div className='container'>
    <h1 className='caption'>Baby shower gifts ideas</h1>
    </div>
    <div className='giftsBox'>
  
  <p>Every parent can use some common, practical baby shower gifts, whether for diapering, feeding, or bathing their baby. Read on to learn about some of the best practical baby shower gifts on the market. With our helpful list of baby shower gift ideas on hand, you'll be sure to choose something the new parents will find useful for their girl or boy!</p>
  </div>
  
  
  <div className='container'>
    <div className='giftsBox'>
    <button className=' giftsBtn' onClick={previousGiftsList}>Previous</button>
    <img className='giftsImage' src={giftsImage} width="500px" alt="gifts"/>
    <button className='giftsBtn' onClick={nextGiftsList}>Next</button>
  </div>
  </div>
<div className='giftsBox'>
  <div className='container'>
  <h2>{giftsId}. {giftsName} - {giftsPrice}</h2>
  <div/>
  </div>
  </div> 
  
  <div className='picture'>
  <img  className='pictureImage' src="https://b3h2.scene7.com/is/image/BedBathandBeyond/112651560264404p__1?%24380%24=&wid=2000&hei=2000" width="180px" alt="pictureOne"/>
  <img className='pictureImage'  src="https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-05-10-22-32_195861171850_imageset?%24380%24=&wid=2000&hei=2000" width="180px" alt="pictureTwo"/>
  <img className='pictureImage'  src="https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-03-02-16-52_810028770614_2_imageset?%24380%24=&wid=2000&hei=2000" width="180px" alt="pictureThree"/>
  <img className='pictureImage'  src="https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-05-30-22-21_195861174004_imageset?$713$&wid=713&hei=713" width="180px" alt="pictureFour"/>
  <img className='pictureImage'  src="https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-04-30-23-14_op213803ek_imageset?$713$&wid=713&hei=713" width="180px" alt="pictureFive"/>
  <img className='pictureImage'  src="https://b3h2.scene7.com/is/image/BedBathandBeyond/2022-03-23-16-24_lle12123n_l174_1_imageset?$713$&wid=713&hei=713" width="180px" alt="pictureSix"/>
  <img className='pictureImage'  src="https://b3h2.scene7.com/is/image/BedBathandBeyond/2021-04-30-23-14_op213815ek_imageset?%24380%24=&wid=2000&hei=2000" width="180px" alt="pictureSeven"/>
  <img className='pictureImage' src="https://b3h2.scene7.com/is/image/BedBathandBeyond/315693168298883p?$713$&wid=713&hei=713" width="180px" alt="pictureEight"/>

  </div> 
  
  


      <div className='container'>
        <h1>Baby Registry {babyList.length}</h1>
        </div>
        {babyList.map((element => {
        const {id, name, description, image, source, price, showMore} = element;
        return (
          <div key={id}>
            <div className='container'>
              <h2>{id}. {name}</h2>
            </div>
            <div className='container'>
              <p>{source}</p>

            </div>
            <div className='container'>
              <p>{price}</p>

            </div>
            <div className='container'>
              <p>{showMore ? description : description.substring(0,80) + "..."}
              <button  onClick={() => showTextClick(element)}>{showMore ? "Show less" : "Show more"}</button>
              </p>

            </div>
            <div className='container'>
              <img className='image' src={image} width="400px" alt="babiList"/>

            </div>
            
            <div className='container'>
              <button className='btn' onClick={() => removeList(id)}>Remove</button>
            </div>
            </div>
            )
      }))}
      <div className='container'>
        <button  className='btn' onClick = {() => setBabyList([])}>Delete All</button>
        </div> 
  </div>
  </div>

  )
  }


export default App;
