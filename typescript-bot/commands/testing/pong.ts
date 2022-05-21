import { ICommand } from 'wokcommands'

export default {
    category: 'testing',
    description: 'replies with ping privately',
    slash: true,
    testOnly: true, 
    guildOnly: true,
    
    callback: ({interaction}) => {
        interaction.reply({
            content: "ping",
            ephemeral: true
        })
    },
} as ICommand