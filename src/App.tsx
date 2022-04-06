import { FiSearch } from 'react-icons/fi'

import { Container } from './styles/styles'


export function App() {
  return (
    <Container>
      <h1 className='title'>Buscador CEP</h1>
      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP"/>

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

        <main className='main'>
          <h2>CEP: 2298792</h2>

          <span>Rua Teste da Silva</span>
          <span>Complemento: teste da silva</span>
          <span>Vila Teste</span>
          <span>Teste - TS</span>
        </main>

    </Container>
  )
}
