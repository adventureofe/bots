import { ICommand } from 'wokcommands'
import * as ctrl from "../../ctrl"

export default {
    category: 'testing',
    description: 'replies with ping publicly',
    slash: true,
    testOnly: true,
    guildOnly: true,
    
    permissions: ctrl.pong_public_permissions,

    callback: ({interaction}) => {
        interaction.reply({
            content: "ping",
        })
    },
} as ICommand