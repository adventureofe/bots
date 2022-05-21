import { ICommand } from 'wokcommands'
import * as ctrl from "../../ctrl"

export default {
    category: 'testing',
    description: 'replies with pong publicly',
    slash: true,
    testOnly: true,
    guildOnly: true,
    permissions: ctrl.ping_public_permissions,

    callback: ({interaction}) => {
        interaction.reply({
            content: "pong",
        })
    },
} as ICommand