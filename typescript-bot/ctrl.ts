const admin = ["ADMINISTRATOR"]
const mod = ["KICK_MEMBERS"]
const member = ["SEND_MESSAGES"]

//What the bot prints to console when turned on (DEFAULT: "Bot is Online")
export const console_boot_message: String = "Bot is Online"

//who can use publically use the [/ping_public] command (DEFAULT: mod)
export const ping_public_permissions = mod

//who can publically use the [/pong_public] command (DEFAULT: mod)
export const pong_public_permissions = mod

//who can ban members (DEFAULT: admin)
export const ban_permissions = admin

//ID of server to test commands
export const test_server_id = '970532080276635668'
