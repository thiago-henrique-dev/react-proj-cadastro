import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import { useState, useEffect } from "react"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()
    const { tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela} = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])

  function obterTodos(){
          repo.obterTodos().then(clientes => { //Ele vai obter todos e quando receber ele seta os clientes e coloca a tabela como visivel
            setClientes(clientes)
            exibirTabela()
          })

  }


  function selecionarCliente(cliente: Cliente){
     setCliente(cliente)
        exibirFormulario()
      } 

  async function excluirCliente(cliente: Cliente){
     await repo.excluir(cliente)
     obterTodos()
  }

  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    exibirFormulario()
}
  return {
      cliente,
      clientes,
      novoCliente,
      salvarCliente,
      excluirCliente,
      selecionarCliente,
      obterTodos,
      tabelaVisivel,
      exibirTabela

  }

}