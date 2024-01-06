const url = require('url');
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = "691667256327-mbo9gccm6e6p2q61i724fn66js7vdra3.apps.googleusercontent.com";
const CLIENT_SECRET = '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';
const REDIRECT_URI = "https://twed.com.br/";

const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
const code_url = '4/0AfJohXkfY14SRuI_OqOQgQwc4phjwWcTFxux_a4My8AvK7pMJoJ5Dj7S6RH0zYU6WfCCZg'; //Code vindo da REDIRECT_URI

async function getAccessToken(code) {
    try {
        const response = await oauth2Client.getToken(code);
        console.log('Access Token:', response.tokens.access_token);
        console.log('Object response:', response.tokens);
    } catch (error) {
        console.error('Error getting access token:', error);
    }
}

getAccessToken(code_url);