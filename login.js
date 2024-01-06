const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = "691667256327-mbo9gccm6e6p2q61i724fn66js7vdra3.apps.googleusercontent.com";
const CLIENT_SECRET = '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';
const REDIRECT_URI = "https://twed.com.br/";

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// // Gerar a URL de autorização.
const url = oauth2Client.generateAuthUrl({
 access_type: 'offline',
 scope: [
    'https://www.googleapis.com/auth/yt-analytics.readonly',
    // 'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
    // 'https://www.googleapis.com/auth/youtube',
    // 'https://www.googleapis.com/auth/youtube.readonly',
    // 'https://www.googleapis.com/auth/youtubepartner'
    ],
});
console.log('URL de autorização:', url);


//Scopes comentados sao de acesso avancado 