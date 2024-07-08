import './Card.css'
import Botao from '../../components/Botao'

export default function Card() {
    return (
        <div className="foto2">
            <img src='./images/logo.png' alt='LOGO' className='logomini' />
            <input className='procurar'>
            </input>
            <div className='botao'>
            <Botao />
            </div>
        </div>
    )
}