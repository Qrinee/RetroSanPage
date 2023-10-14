import {AiFillHome} from 'react-icons/ai'
import {BsFillTelephoneFill, BsGoogle, BsInstagram} from 'react-icons/bs'
import {BiLogoFacebook, BiTimeFive} from 'react-icons/bi'
import HeadAndDesc from './HeadAndDesc'
function Contact(){
    return(
        <div className="block addict">
            <HeadAndDesc title="Kontakt" desc="Masz jakieś dodatkowe pytania?"/>
            <div className='contact-holder'>
                <div className='contact-full-block'>
                    <div className='contact-icon-block'>
                        <AiFillHome/>
                    </div>
                    <div className='contact-text-block'>
                        <p className='bigger'>Wierzawice 747,</p>
                        <p className='bigger'>37-300 Leżajsk</p>
                    </div>
                </div>  
                <div className='contact-full-block'>
                    <div className='contact-icon-block'>
                        <BsFillTelephoneFill />
                    </div>
                    <div className='contact-text-block'>
                        <p className='bigger phone'>693 484 488</p>
                    </div>
                </div> 
                <div className='contact-full-block'>
                    <div className='contact-icon-block'>
                        <BiTimeFive />
                    </div>
                    <div className='contact-text-block'>
                        <p className='bigger'>Poniedziałek: 
                            <span className='orange-text'> nieczynne</span>
                        </p>
                        <p className='bigger'>Wtorek-Piątek:
                            <span className='orange-text'> 14:30-22:00</span>
                        </p>
                        <p className='bigger'>Sobota-Niedziela:
                            <span className='orange-text'> 15:00-22:30</span>
                        </p>
                    </div>
                </div> 
            </div>
            <div className='social-circle-holder'>
                <div className='social-circle'><BsGoogle/></div>
                <div className='social-circle'><BiLogoFacebook/></div>
                <div className='social-circle'><BsInstagram/></div>
                
            </div>
        </div>
    )
}

export default Contact