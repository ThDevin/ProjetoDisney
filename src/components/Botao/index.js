import { Link } from 'react-router-dom'
import './Botao.css'

export default function Botao() {
    return (
        <button className='butao'>
            <Link className='lupa' to='/card'>
                <img src='../../images/lupa.png' alt='Lupinha' />
            </Link>
        </button>
    )
}
