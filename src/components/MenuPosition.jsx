import { useState } from 'react'
import {GoTriangleDown} from 'react-icons/go'


function MenuPosition(props){
    
    const [isListShowed, setIsListShowed] = useState(false)

    return(
        <div className="position">
            <div className="position-text">
                <p className="position-name"><span className='underline'>{props.name}</span></p>
                <p className="position-ingredients">{props.ingredients}</p>
            </div>
            <div className="small-price">
                <p className="small-price-text">{props.priceSmall}</p>
            </div>
            <div className="big-price">
                <p className="big-price-text">{props.priceBig}</p>
            </div>
            <div>
                {props.isPizza ? <button className="add-cart" onClick={() => setIsListShowed(!isListShowed)}>Dodaj do koszyka <GoTriangleDown/></button>: 
                <button className="add-cart">Dodaj do koszyka</button>
                }{isListShowed ? 
                <div className="add-to-cart">
                    <button className='size' style={{position: 'relative', zIndex: 99}}>Średnia (32cm)</button>
                    <button className='size' style={{position: 'relative', zIndex: 99}}>Duża (40cm)</button>
                </div> : null}
            </div>
        </div>
    )
}
export default MenuPosition