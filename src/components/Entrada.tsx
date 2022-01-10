interface EntradaPropss {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    someteLeitura?: boolean
    className: string
    valorMudou?: (valor: any) => void

} 

export default function Entrada(props: EntradaPropss){
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-4">
                {props.texto}
            </label>
            <input type={props.tipo ?? 'text'}
            value={props.valor}
            readOnly={props.someteLeitura}
            onChange={e => props.valorMudou?.(e.target.value)} //Quando eu receber uma notificação de que houve a mudança, irei receber o evento   
            className={`border border-purple-500 rounded-lg
            focus: outline-none bg-gray-100 px-4 py-2 
            ${props.someteLeitura ?  '' : 'focus:bg-white'}
                        `}
        
            />
        </div>
        
    )
}