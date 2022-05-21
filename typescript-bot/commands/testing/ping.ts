import { ICommand } from 'wokcommands'

export default {
    category: 'testing',
    description: 'replies with pong privately',
    slash: true,
    testOnly: true,
    guildOnly: true,

    callback: ({interaction}) => {
        interaction.reply({
            content: "pong",
            ephemeral: true
        })
    },
} as ICommand
