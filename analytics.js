const axios = require('axios');


const access_token = "ya29.a0AfB_byC0Y-_o1YgNk-3w5r-Cymz37WMNH7XQ1qFIyukxV77pqQLnNz2FGhpexxPwfm38lUvHnXmPtEqyPAkwe1I5KHE0mgq4pSHm_t7X-TTV6DdbqTjD8g-_vZjvRX9I_MSzhbg47lFcWNlHdZNhNNJEEgUP0WTQn4jRXJtEaCgYKAQsSARASFQHGX2Mi-wx6RSYD5Jbs5D8SDHS9IQ0175"


//Funções auxiliares
async function getUserID() {
    const response = await axios.get('https://www.googleapis.com/oauth2/v3/tokeninfo', {
        params: {
            access_token: access_token
        }
    })
    console.log("\n\n\n \x1b[32m%s\x1b[0m", "✅ Status do access_token \n");
    console.log(response.data);
    return response.data.sub;
}


async function getChannelAnalytics() {
    const response = await axios.get('https://youtubeanalytics.googleapis.com/v2/reports', {
        params: {
            'endDate': '2023-12-30',
            'ids': 'channel==mine',
            'metrics': 'likes,dislikes,views',
            'startDate': '2023-12-01'
        },
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json'
        }
    })
    console.log("\n\n\n \x1b[31m\x1b[1m\x1b[4m%s\x1b[0m", "🚀 Resultados da analise \n");
    console.log(response.data);
}

//Fluxo principal
(async () => {
    try {
        const idUser = await getUserID();
        await getChannelAnalytics();
    } catch (error) {
        console.log(error.response.status);
        console.log(error.response.statusText);
    }
})();






//Funcao de acesso avancado para retorno de informacoes da conta youtube como fote de perfil, nome, etc
// async function getChannelInfo(idChannel) {
//     const response = await axios.get('https://www.googleapis.com/youtube/v3/channels?part=id&mine=true', {
//         headers: {
//             'Authorization': 'Bearer ' + access_token,
//             'Content-Type': 'application/json'
//         }
//     })
//     console.log("\n\n\n \x1b[30m%s\x1b[3m", "ℹ️ Informações gerais do canal \n");
//     console.log(response.data);
//     return response.data.items[0].id;
// }

