import { useState } from "react"


export default function useTabelaOuForm(){
    const [visivel, setInvisivel] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setInvisivel('tabela')
    const exibirFormulario = () => setInvisivel('form')


    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirFormulario,
        exibirTabela
    }
}

// LOGICA DE APLICAÇÃO DENTRO DE UM HOOK