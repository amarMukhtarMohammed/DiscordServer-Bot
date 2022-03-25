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
    if (message.content === 'What is a server?') {
        message.reply({
            content: 'Discord gives you the power to create an invite-only home for your friends or community - a place where you can talk, hang out, and have fun. We call these special places servers. You can join or create servers for all kinds of communities -- be it a book club 📚, a dance class 💃 , a study group 🖊️, or just some friends you want to spend time with. ',
        })
    } else if (message.content === 'How to use text and voice channels?') {
        message.reply({
            content: 'Text channels are separate spaces for talking over text. They keep conversations organized and give everyone plenty of room to talk. Create separate channels for all the topics your group likes to talk about--from fishing trips to cooking tips. Voice channels are where you can hang out over voice and video. There’s no calling or ringing required - just click on a voice channel to enter it. Friends in your server can see you’re in there, and pop in to talk, wave hello over video, or share their screen. '
        })
    }
    else if (message.content === 'How to talk and hang out in your server?') {
        message.reply({
            content: 'With voice channels, you can easily start chatting with your friends and community right away! Follow these guides below to learn how to voice chat, video chat, or share your screen or watch other people stream right within your server!'
        })
    }
    else if (message.content === 'How to voice chat?') {
        message.reply({
            content: 'Step 1: Join a Voice Channel! Step 2: Start talking! '
        })
    }
    else if (message.content === 'How to video chat?') {
        message.reply({
            content: 'Step 1: Join a Voice Channel! Step 2: Share your Video!'
        })
    }
    else if (message.content === 'How to share your screen?') {
        message.reply({
            content: 'Step 1: Join a Voice Channel! Step 2: Activate screen share Step 3: Pick an application or screen to share Step 4: Go Live!'
        })
    }
    else if (message.content === 'How to watch a screen share stream?') {
        message.reply({
            content: 'Step 1: Find a stream Step 2: Join the Stream'
        })
    }
    else if (message.content === 'How to make your own emojis?') {
        message.reply({
            content: 'Step 1: Make sure you have the Manage Emoji permission Step 2: Head to your Server Settings Step 3: Go to the Emoji tab and Upload!'
        })
    }
})

client.login(process.env.TOKEN) //retrieves TOKEN and becomes operational