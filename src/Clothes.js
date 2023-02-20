import React from "react";

function Clothes ({itemsForSale}) {
    return (
<div className='products'>
    {itemsForSale.map((think => {
        const {clothesId, clothesImage, clothesName, searchTerm, clothesPrice} = think;
        return (
            <div className="product-card" key={clothesId}>
                <img  src={clothesImage} width="400px" height="500px" alt="clothes"/>
                <div className="product-info">
                <h3>{clothesName}</h3>
                <h4>{searchTerm}</h4>
                <h4>${clothesPrice}</h4>
                </div>

            </div>
        )
    }))}
</div>
    )
}
export default Clothes;