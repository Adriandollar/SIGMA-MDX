const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


// Load configuration from config.json
const configData = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));



function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SIGMA-MD~1kRmUQgK#iQaoVtbIiAxGYVrM0NjsMQKP09P0OQRLpkuolhX-Z0M",//past your session id here
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/mrj4XkHF/subzero-bot.jpg",
MENU_IMG: process.env.MENU_IMG || "https://i.ibb.co/mrj4XkHF/subzero-bot.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hi 💁🏽 How Can I Assist You. Am alive Now.",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "fase",
BOT_NAME: process.env.BOT_NAME || "𝕲⃤𝖔⃤𝖉⃤ 𝐴𝐷𝑅𝐼𝐴𝑁 𝐷𝑂𝐿𝐿𝐴𝑅𝑆",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};



