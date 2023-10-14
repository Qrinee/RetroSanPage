import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
function Start(){
    return(
        <div className="block start">
            <figure>
                <img src={Logo} width={500}></img>
            </figure>
            <Link to="/menu" className='button'>złóż zamówienie</Link>
        </div>
    )
}


export default Start