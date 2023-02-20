import React from 'react';
import { data } from './data'
import { present } from './present';
import Pic from './Pic';
import { gifts } from './gifts';
import './App.css';
import { useState } from 'react';



function Home() {
  const [giftsList, setGiftsList] = useState(0);
  const {giftsId, giftsName, giftsImage, giftsPrice} = gifts[giftsList];
  const [babyList, setBabyList] = useState(data);
  const [showText,setShowText] = useState(false);
  const [apparel] = useState(present);

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
    
  
  <p>Every parent can use some common, practical baby shower gifts, whether for diapering, feeding, or bathing their baby. Read on to learn about some of the best practical baby shower gifts on the market. With our helpful list of baby shower gift ideas on hand, you'll be sure to choose something the new parents will find useful for their girl or boy!</p>
  </div>
  
  
  <div className='container'>
    
  <div className='giftsBox'>
    <img className='giftsImage' src={giftsImage} width="500px" alt="gifts"/>
    <div className='giftsContainer'>
    <button className=' giftsBtn' onClick={previousGiftsList}>Previous</button>
    
    <button className='giftsBtn' onClick={nextGiftsList}>Next</button>
    </div>
  </div>
  </div>

  <div className='container'>
  <h2>{giftsId}. {giftsName} - {giftsPrice}</h2>
  <div/>
  </div>
  
  
  
  <div >
  <Pic   benefits={apparel}/>
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
  

  )
  }


export default Home;
