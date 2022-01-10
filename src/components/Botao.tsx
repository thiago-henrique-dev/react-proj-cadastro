interface BotaoProps {  //Nessa interface estou definindo que ele vai receber o children e as props desse children vai ser do BotaoProps
    cor?: 'green' | 'blue' | 'gray' // 3 cores opcinais
    className?: string //Propriedade do tipo string || Se for passada ela vai sobrescrever o que tinha antes
    children: any
}

export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'gray'
    return (
        <button className={`
            bg-gradient-to-r from-${cor}-400 to-${cor}-700
            text-white px-4 py-2 rounded-md
            ${props.className} 
        `}>
            {props.children}
        </button>
    )
}

