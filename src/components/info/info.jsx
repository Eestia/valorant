import './info.css'
import Jett_spray from '../../assets/Jett_spray.webp';
import Reyna_spray from '../../assets/Reyna_spray.webp';
import Sage_spray from '../../assets/Sage_spray.webp';
export default function Info(){
    return(
        <section id='spray-section'>
            <div>
                <h2>INFO</h2>
            </div>
            <div className='spray-info'>
                <div className="spray-card">
                    <img id='Jett_spray' src={Jett_spray} alt="Jett_spray" />
                    <div className="info-hover">
                        <h2>Jett</h2>
                        <ul>
                            <li>Cloudburst : Lance un nuage qui bloque la vision.</li>
                            <li>Updraft : Propulse Jett vers le haut.</li>
                            <li>Tailwind : Dash rapide dans la direction du mouvement.</li>
                            <li>Blade Storm (Ultime) : Équipe des couteaux précis qui se rechargent après un kill.</li>
                        </ul>
                    </div>
                </div>
                <div className="spray-card">
                    <img id='Reyna_spray' src={Reyna_spray} alt="Reyna_spray" />
                    <div className="info-hover">
                        <h2>Reyna</h2>
                        <ul>
                            <li>Leer : Œil éthéré qui aveugle les ennemis regardant dans sa direction.</li>
                            <li>Devour : Consomme une orbe d'âme pour se soigner rapidement.</li>
                            <li>Dismiss : Consomme une orbe d'âme pour devenir intangible et, sous ultime, invisible.</li>
                            <li>Empress (Ultime) : Augmente la cadence de tir et permet des enchaînements plus rapides.</li>
                        </ul>
                    </div>
                </div>
                <div className="spray-card">
                    <img id='Sage_spray' src={Sage_spray} alt="Sage_spray" />
                    <div className="info-hover">
                        <h2>Sage</h2>
                        <ul>
                            <li>Orbe de lenteur : Crée une zone qui ralentit et gêne les déplacements.</li>
                            <li>Orbe de soin : Soigne un allié ou elle-même sur la durée.</li>
                            <li>Orbe de barrière : Invoque un mur solide orientable pour bloquer ou s’élever.</li>
                            <li>Résurrection : Ramène un allié mort à la vie avec toute sa santé.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}