import DJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import 'dotenv/config'
import * as ctrl from "./ctrl"

const client = new DJS.Client({
    intents: [Intents.FLAGS.GUILDS,
             Intents.FLAGS.GUILD_MESSAGES,
             Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
             Intents.FLAGS.GUILD_MEMBERS,
            ],
})

client.on('ready', async () => {
    console.log(ctrl.console_boot_message),

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: [ctrl.test_server_id],
    })
})

client.login(process.env.TOKEN)
