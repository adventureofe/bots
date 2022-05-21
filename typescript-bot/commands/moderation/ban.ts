import { ICommand } from 'wokcommands'
import * as ctrl from "../../ctrl"

export default {
    category: 'moderation',
    description: 'Bans a member',
    slash: true,
    testOnly: true,
    guildOnly: true,
    permissions: ctrl.ban_permissions,

    minArgs: 1,
    maxArgs: 1,
    expectedArgs: 'member',

    callback: ({interaction, args}) => {
        const target = args

        if (!target) {
            interaction.reply({
                content: "Please tag someone to ban"
            })
            return
        }
    },
} as ICommand