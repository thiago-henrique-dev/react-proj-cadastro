import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from '../core/Cliente'
import Botao from '.././components/Botao'
import Formulario from "../components/Formulario";
import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useClientes from "../hooks/useClientes";


export default function Home() {

  const { novoCliente, 
     salvarCliente,
     selecionarCliente, 
     excluirCliente, 
     cliente,
     tabelaVisivel,
     exibirTabela,
     clientes} = useClientes()

  return (
    <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
      `}>
        <Layout titulo="Cadastro simples">
          { tabelaVisivel ? (
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
                  clienteSelecionado={selecionarCliente} 
                  clienteExcluido={excluirCliente}/>
                  </>
          ): (
                 <Formulario 
                 cliente={cliente}
                 clienteMudou={salvarCliente}
                 cancelado= {exibirTabela}
                 />  

          )} 
          
               
              
        </Layout>
    </div>
  )
}

//  <div className="flex justify-end"> Trocar o lado do botão
 

//
