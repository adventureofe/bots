import discord
from discord.ext import commands

# What the bot prints to console when turned on (DEFAULT: "Bot is ready")
console_boot_message = "Bot is ready"

# What all command will start with (DEFAULT: "."
bot_command_prefix = "."

# your token
bot_token = "OTQwNDAwNDc0MzUwMzEzNTYy.YgG2MA.H_lWdBQLwAsdDoHtPagXDsFSWeY" 

class MyClient(discord.Client):
    async def on_ready(self):
        print(f'Logged on as {self.user}!')

    async def on_message(self, message):
        print(f'Message from {message.author}: {message.content}')

client = MyClient()
client.run(bot_token)
