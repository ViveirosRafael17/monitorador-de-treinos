const messages = [
    'Se eu treinando já ta ruim, imagine se eu não treinar',
    'Lembre-se: Quanto mais frango você come menos frango você fica.',
    'Onde seu corpo cansa, sua mente descansa.',
    'Se aparecer pedras em seu caminho, levante-as e faça 4 séries de 10 repetições.',
    'Se for pra sofrer que seja treinando, pelo menos assim você tem resultados.',
    'Seja mais forte que sua descupas.',
    'Se achar que o tempo ta pasando rápido, faça 1 minuto de prancha.',
    'Que todas as dores virem músculos',
    'A vida começa com o final da sua zona de conforto.'
];

export const RandomMessage = () => {
    let randomIndex = Math.floor(Math.random() * messages.length);
    return <h2> {messages[randomIndex]} </h2>
}

