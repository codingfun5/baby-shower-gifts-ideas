function Pic({benefits}) {
    return(
        <div>
            {benefits.map((think => {
                const {listId, list} = think;
                return(
                    <div >
                    <div key={listId.think}>
                        <img className='clothes' src={list} width="180px" alt="clothes"/>
                    </div>
                    </div>       
            )
            }))}
        </div>
    )
}
export default Pic;