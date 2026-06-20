const mineflayer = require('mineflayer');
const http = require('http');

http.createServer((req, res) => res.end('Bot is running!')).listen(process.env.PORT || 3000);

function createBot() {
    const bot = mineflayer.createBot({
        host: 'us.freegamehost.xyz', 
        port: 3601,                 
        username: 'ShaizyBot',
        version: '1.21.11'            
    });

    bot.on('resourcePack', () => {
        bot.acceptResourcePack();
    });

    bot.on('login', () => {
        setTimeout(() => bot.chat('/login EPIC1122'), 3000);
        setTimeout(() => bot.chat('/server secret'), 5000);
    });

    bot.on('end', () => setTimeout(createBot, 5000));
}
createBot();
