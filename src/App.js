import { useState } from 'react';
import { data } from './data';
import { gifts } from './gifts';

import './App.css';

function App() {
  const [giftsList, setGiftsList] = useState(0);
  const {giftsId, giftsName, giftsImage, giftsDescription, giftsPrice, giftsSource} = gifts[giftsList];
 console.log(gifts[giftsList]);

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


  const [babyList, setBabyList] = useState(data)
  const [showText,setShowText] = useState(false)
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
    <div className='container'>
  <h1 >Hello</h1>
  </div>
  
  <div className='container'>
  <img src={giftsImage} width="500px" alt="gifts"/>
  </div>

  <div className='container'>
  <h2>{giftsId} - {giftsName}</h2>
  <div/>

  <div className='container'>
    <h2>{giftsPrice}</h2>
  </div>

  <div className='container'>
    <p>{giftsSource}</p>
  </div>

  <div className='container'>
    <p>{giftsDescription}</p>
  </div>

  <div className='container'>
    <button className='btn' onClick={previousGiftsList}>Previous</button>
    <button className='btn' onClick={nextGiftsList}>Next</button>

  </div>

    


      <div className='container'>
        <h1>Baby Shower Gifts List {babyList.length}</h1>
        </div>
        {babyList.map((element => {
        const {id, name, description, image, source, price, showMore} = element;
        return (
          <div key={id}>
            <div className='container'>
              <h2>{id} - {name}</h2>
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
              <img src={image} width="400px" alt="babiList"/>

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
