
import Logo from '../assets/logo.png'
import Opinions from '../containers/Opinions'
import { Link } from 'react-router-dom';
function About(){
    return(
        <div className="block about">
            <h2 className="heading">O nas</h2>
            <article>
                <div className="article-holder">
                    <figure className='image'>
                        <img src={Logo} alt="Logo" className='logoImg' />
                    </figure>
                    <div className='article'>
                        <p className='text'>Menu Retro San oferuje szeroki wybór pysznych, tradycyjnych pizz, przygotowywanych z najwyższą starannością i najświeższych składników. Możesz wybierać spośród klasycznych smaków, takich jak margherita, standardowa czy funghi, lub eksperymentować z unikalnymi kombinacjami, które zaskoczą Twoje podniebienie. </p>
                        <Link to="/menu" className='button'>sprawdź menu</Link>
                    </div>
                </div>
            </article>
            <p className='bottom-text'><span className='underline'>Opinie naszych klientów:</span></p>
            <Opinions/>
        </div>
    )
}


export default About