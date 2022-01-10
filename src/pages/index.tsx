import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from '../core/Cliente'
import Botao from '.././components/Botao'
import Formulario from "../components/Formulario";


export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 20, '2'),
    new Cliente('Carlos', 18, '3'),
    new Cliente('Thiago', 17, '4'),

  ]

  function clienteSelecionado(cliente: Cliente){
      console.log(cliente.nome)
  } 

  function clienteExcluido(cliente: Cliente){
      console.log(`Excluir...${cliente.nome}`)
  }

  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
      `}>
        <Layout titulo="Cadastro simples">
          <div className="flex justify-end">
           <Botao cor="green" className="mb-4">Novo Cliente</Botao>
          </div>
            <Tabela clientes={clientes}
             clienteSelecionado={clienteSelecionado} 
             clienteExcluido={clienteExcluido}/>

             <Formulario cliente={clientes[1]}/>
        </Layout>
    </div>
  )
}

//  <div className="flex justify-end"> Trocar o lado do botão
 
