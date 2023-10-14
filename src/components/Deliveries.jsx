import OneStep from "./OneStep"
import Pizza from '../assets/pizza.png'
import Document from '../assets/document.png'
import Ready from '../assets/ready.png'
function Deliveries(){
    return(
        <> <hr />
        <div className="block">
            <h2 className="heading">Zamówienia online</h2>
            <div className="instruction-holder">
                <OneStep image={Pizza} title="Wybór" desc="Dodaj do koszyka swoje zamówienie"/>
                <OneStep image={Document} title="Informacje" desc="Podaj informacje o dostawie i płatności" /> 
                <OneStep image={Ready} title="Oczekiwanie" desc="Oczekuj na realizację twojego zamówienia"/>
            </div>
            <p className="bottom-text">Szybko i prosto, a przede wszystkim wygodnie 🙂</p>
        </div>
        </>
    )
}

export default Deliveries