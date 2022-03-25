import DiscordJS, { Intents } from 'discord.js' //access discord.js node mudules in this file
import dotenv from 'dotenv'

dotenv.config() //access index.env file to use token

const client = new DiscordJS.Client({ //required to provide 'intents' on what we'll do with our bot
    intents: [
        Intents.FLAGS.GUILDS,  //if you use CTRL+SPACE you can auto import Intnents from discord.js
        Intents.FLAGS.GUILD_MESSAGES //*guilds are servers
    ]
})

client.on('ready', () => {
    console.log('amr629630-BOT ACTIVATED!') //outputed when bot is online
})

client.on('messageCreate', (message) => { //function that returns 'Mohammed' when user types 'Amar'
    if (message.content === 'marco') {
        message.reply({
            content: 'polo',
        })
    }
})

client.login(process.env.TOKEN) //retrieves TOKEN and becomes operational