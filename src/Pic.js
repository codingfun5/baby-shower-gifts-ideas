import React from 'react';
function Pic({benefits}) {


    return(
        <div className=' picList'>
            {benefits.map((think => {
                const {listId, list} = think;
                return(
                    <div >
                    <div  key={listId.think}>
                        <img className='clothes' src={list} width="140px" alt="clothes"/>
                    </div>
                    </div>       
            )
            }))}
        </div>
    )
}
export default Pic;