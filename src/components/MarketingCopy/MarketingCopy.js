import './MarketingCopy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


const MarketingCopy = ()=>{

    const link = 'https://www.tacobell.com/food/cravings-value-menu?gclsrc=aw.ds&gclid=CjwKCAiAm7OMBhAQEiwArvGi3BCGRKRSqx-eL0YszoXdeOYMfHc4ir354g9d86THvfZ7yh9OUMi7pBoC6YkQAvD_BwE'
    return(
        <div className='marketing-copy'>
                <div className='text-box'>
                    <h1>INTRODUCING</h1>
                    <h1>OUR $1</h1>
                    <h1>CRAVINGS</h1>
                    <h1>MENU!</h1>
                </div>

                <div className="btn-box">
                    <FontAwesomeIcon className="arrow" color="white" icon={faAngleDoubleDown} size="2x" /> 
                    <a href={link} target='_blank' rel='noreferrer' className="btn btn-color btn-animated">See cravings menu!</a>
                </div>

                <div className='social-icons'>
                    <a href='https://www.instagram.com/tacobell/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon className='icon' icon={faInstagram} size='3x'/>
                    </a>
                                
                    <a href='https://twitter.com/tacobell' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon className='icon' icon={faTwitter} size='3x'/>
                    </a>
                                
                    <a href='https://www.youtube.com/user/tacobell' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon className='icon' icon={faYoutube} size='3x'/>
                    </a>
                            
                </div>
            <div className='card-overlay'>


            </div>

            
        </div>
    );
};
export default MarketingCopy;