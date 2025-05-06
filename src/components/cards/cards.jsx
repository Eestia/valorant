import './cards.css'
import ranked from '../../assets/ranked.png';
import Unrank from '../../assets/Unrank.png';
import Spike from '../../assets/Spike.png';
export default function Cards(){
    return(
        <section id='section-cards'>
            <div className='carte'>
                <div>
                    <img id='img1' src={ranked} alt="ranked" />
                </div>
                <div>
                    <p>Ranked</p>
                    <button>Jouer</button>
                </div>
            </div>
            <div className='carte'>
                <div>
                    <img id='img1' src={Unrank} alt="Unrank" />
                </div>
                <div>
                    <p>Unrank</p>
                    <button>Jouer</button>
                </div>
            </div>
            <div className='carte'>
                <div>
                    <img id='img1' src={Spike} alt="Spike" />
                </div>
                <div>
                    <p>Spike-rush</p>
                    <button>Jouer</button>
                </div>
            </div>
        </section>
    )
}