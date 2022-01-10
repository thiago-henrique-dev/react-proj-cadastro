import { useState } from 'react'
import Cliente from '../core/Cliente'
import Botao from './Botao'
import Entrada from './Entrada'

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
    
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id  //  Se ele nao tiver o id vai ser nullo por padrao
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? '')


    return (
        <div>   
            {id ? ( // Renderização condicional:
                    // Se o ID estiver setado, ele vai rend essa entrada 
                    // caso nao esteja ele retorna falso
                <Entrada 
                someteLeitura
                texto="Código" 
                valor={id}
                className="mb-4"
                />
            ) : false} 
            <Entrada 
                texto="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
                />
            <Entrada 
                texto="Idade" 
                tipo="number" 
                valor={idade}
                valorMudou={setIdade}
                className=""
                
                
                />
                <div className="flex justify-end mt-7">
                    <Botao cor="blue" className="mr-2" 
                        onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                        {id ? 'Alterar' : 'Salvar'} 
                    </Botao>
                    <Botao onClick={props.cancelado}>
                        Cancelar
                        </Botao>
                    
                </div>

        </div>

        
    )
}