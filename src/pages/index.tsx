import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from '../core/Cliente'
import Botao from '.././components/Botao'
import Formulario from "../components/Formulario";
import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import ClienteRepositorio from "../core/ClienteRepositorio";


export default function Home() {

    const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(obterTodos, [])

  function obterTodos(){
          repo.obterTodos().then(clientes => { //Ele vai obter todos e quando receber ele seta os clientes e coloca a tabela como visivel
            setClientes(clientes)
            setVisivel('tabela')
          })

  }


  function clienteSelecionado(cliente: Cliente){
     setCliente(cliente)
     setVisivel('form')
  } 

  async function clienteExcluido(cliente: Cliente){
     await repo.excluir(cliente)
     obterTodos()
  }

  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }


  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
      `}>
        <Layout titulo="Cadastro simples">
          {visivel === 'tabela' ? (
             <>   
                  <div className="flex justify-end">
                  <Botao 
                     cor="green" 
                     className="mb-4"
                     onClick={novoCliente}>
                        Novo Cliente
                      </Botao>
                  </div>
                  <Tabela clientes={clientes}
                  clienteSelecionado={clienteSelecionado} 
                  clienteExcluido={clienteExcluido}/>
                  </>
          ): (
                 <Formulario 
                 cliente={cliente}
                 clienteMudou={salvarCliente}
                 cancelado= {() => setVisivel('tabela')}
                 />  

          )} 
          
               
              
        </Layout>
    </div>
  )
}

//  <div className="flex justify-end"> Trocar o lado do botão
 
