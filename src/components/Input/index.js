import Botao from '../Botao'
import './input.css'


export default function Input() {
    return (
        <main>
            <div className='conteudo'>
                <input className='pesquisar' placeholder='Pesquisar'>
                </input>
                <Botao />
            </div>
        </main>
    )
}