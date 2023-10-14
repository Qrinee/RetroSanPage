import { useState } from 'react'
import Opinion from "../components/Opinion"


function Opinions(){
    const [position, setPosition] = useState(0)

    function toggleLeft(direction) {
      const newPosition = direction ? position + 440 : position - 440
    
      if (newPosition >= -1320 && newPosition <= 0) {
        setPosition(newPosition)
      }
    }
    return(
        <div className='opinion-holder'>
            <div className='arrow left-arrow' onClick={() => toggleLeft(true)}>&lt;</div>
            <div className='opinion-hidden'>
             <div className={`move ${position !== 0 ? 'animated' : ''}`} style={{ transform: `translateX(${position}px)` }}>
                <Opinion value="Zdecydowanie warto było zboczyć nieco z trasy, aby znaleźć się w tym miejscu!. Przemiła obsługa i przepyszna pizza. Polecam 😀" person="Jacek S."/>
                <Opinion value="Zdecydowanie warto było zboczyć nieco z trasy, aby znaleźć się w tym miejscu!. Przemiła obsługa i przepyszna pizza. Polecam 😀" person="Przemek S."/>
                <Opinion value="Zdecydowanie warto było zboczyć nieco z trasy, aby znaleźć się w tym miejscu!. Przemiła obsługa i przepyszna pizza. Polecam 😀" person="Natalia S."/>
                <Opinion value="Zdecydowanie warto było zboczyć nieco z trasy, aby znaleźć się w tym miejscu!. Przemiła obsługa i przepyszna pizza. Polecam 😀" person="Nikodem S."/>
                <Opinion value="Zdecydowanie warto było zboczyć nieco z trasy, aby znaleźć się w tym miejscu!. Przemiła obsługa i przepyszna pizza. Polecam 😀" person="Janina S."/>
            </div>
           
            </div>
            <div className='arrow right-arrow' onClick={() => toggleLeft(false)}>&gt;</div>
        </div>
    )
}

export default Opinions