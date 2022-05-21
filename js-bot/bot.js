const Discord = require('discord.js')
const config = require("./config.json")

const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

bot.once('ready' , () => {
    console.log('bot online')
    bot.user.setActivity('DEFAULT ACTIVITY')
})

//user ids
const id_me = "0" //enter id_here

// emoji ids
const emoji_cube = '🧊'
const emoji_smiley = '😃'
const emoji_eggplant = '🍆'
const emoji_shades ='😎' 
const emoji_clown = '🤡'
const emoji_poop = '💩'
const emoji_wave = '👋'
const emoji_nails = '💅'
const emoji_ok ='👌'
const emoji_rat = '🐀'
const emoji_salt = '🧂'

//react if msg is written by a certain user
async function react_user(msg, user_id, emoji, chance)
{
    //if defined, make random choice have a (1/chance) chance to be 0
    //if undefined, make 0 (always triggers)
    let random_chance = (chance === undefined) ? 0 : Math.floor(Math.random() * chance);
    
    if(random_chance === 0)
    {
        if (msg.author.id === user_id)
        {
            await msg.react(emoji)
            return
        }
    }
}

async function reply_user(msg, user_id, reply, chance)
{
    let random_chance = (chance === null) ? 0 : Math.floor(Math.random() * chance);

    if(random_chance === 0)
    {
        if (msg.author.id === user_id)
        {
            await msg.reply(reply)
            return
        }
    }
}


//react if msg is equal to string/strings
async function react_string(msg, strs, emoji, chance)
{  
    //if defined, make random choice have a (1/chance) chance to be 0
    //if undefined, make 0 (always triggers)
    let random_chance = (chance === undefined) ? 0 : Math.floor(Math.random() * chance);

    if(random_chance === 0)
    {
        //if strs is a string
        if(typeof strs === 'string')
        {
            if(msg.content.toLowerCase() === strs)
            {
                await msg.react(emoji)
                return
            }
        }

        //if array, loop through array
        else if (Array.isArray(strs))
        {
            for(let i = 0; i < strs.length; i++)
            {
                if(msg.content.toLowerCase() === strs[i])
                {
                    await msg.react(emoji)
                    return
                }
            }
        }
    
        else
        {
            console.log("ERROR in react_string: strs not an array not string")
            return
        }
    }
}

//reply if msg is equal to string/strings 
async function reply_string(msg, strs, reply, chance)
{ 
    //if chance var is defined, make random choice have a (1/chance) chance to be 0
    //if undefined, make 0 (always triggers)
    let random_chance = (chance === undefined) ? 0 : Math.floor(Math.random() * chance);

    if(random_chance === 0)
    {
        //if strs is a string
        if(typeof str === 'string')
        {
            if(msg.content.toLowerCase() === str)
            {
                await msg.reply(reply)
                return
            }
        }

        //if array, loop through array
        else if (Array.isArray(strs))
        {
            for(let i = 0; i < strs.length; i++)
            {
                if(msg.content.toLowerCase() === strs[i])
                {
                    await msg.reply(reply)
                    return
                }
            }
        }
        
        else
        {
            console.log("ERROR in reply_string: strs not an array string")
            return
        }
    }
}

//react if msg includes a certain word/words
async function react_text(msg, words, emoji, chance)
{ 
    console.log("react_text triggered")

    //if chance var is defined, make random choice have a (1/chance) chance to be 0
    //if undefined, make 0 (always triggers)
    let random_chance = (chance === undefined) ? 0 : Math.floor(Math.random() * chance);

    if(random_chance === 0)
    {

        //if words is a string
        if(typeof words === 'string')
        {
            if(msg.content.toLowerCase().includes(words))
            {
                await msg.react(emoji)
                return
            }
        }
        
        //if array, loop through array
        else if (Array.isArray(words))
        {
            for(let i = 0; i < words.length; i++)
            {
                if(msg.content.toLowerCase().includes(words[i]))
                {
                    await msg.react(emoji)
                    return
                }
            }
        }
        
        else
        {
            console.log("ERROR in react_text: words not an array or string")
            return
        }
    }
}

//reply if msg includes a certain word/words
async function reply_text(msg, words, reply, chance)
{  
    //if chance var is  defined, make random choice have a (1/chance) chance to be 0
    //if undefined, make 0 (always triggers)
    let random_chance = (chance === undefined) ? 0 : Math.floor(Math.random() * chance);

    if(random_chance === 0)
    {
        
        //if words is a string
        if(typeof words === 'string')
        {
            if(msg.content.toLowerCase().includes(words))
            {
                await msg.reply(reply)
                return
            }
        }
        
        //if array, loop through array
        else if(Array.isArray(words))
        {
            for(let i = 0; i < words.length; i++)
            {
                if(msg.content.toLowerCase().includes(words[i]))
                {
                    await msg.reply(reply)
                    return
                }
            }
        }
        
        else
        {
            console.log("ERROR in reply_text: words not an array or string")
            return
        }
    }
}


//Work in progress word counter function
let word = 0
async function word_counter(msg, words, title)
{
    try{
        for(let i = 0; i < words.length; i++)
        {
            if(msg.content.toLowerCase().includes(words[i]))
            {
                words++
                await msg.reply(title + " = " + words)
            }
        }
    }
    catch(error){
        console.error("error in word counter = ", error)
    }
}


// Work in progress censorship function
const channel_name = "audit-log"
async function delete_words(msg, words, reply)
{
    for(let i = 0; i < word_list.length; i++)
    {
        if(msg.content.toLowerCase().includes(words[i]))
        {
            const audit_channel = bot.channels.cache.find(channel => channel.name === "audit-log")

            await audit_channel.send
            (
                "ID: " + msg.author.id + "\n" +
                "Name: " + msg.member.displayName + "\n" +
                "Message: \"" + msg.content + "\"\n"
            )

            await msg.reply(reply)
            await msg.delete()
            return
        }
    }
}

//Start listening for events to happen
bot.on("message", async msg => {

    //Don't ever let the bot get triggered by itself
    if (msg.author.bot) return;

    react_user(msg, id_me, emoji_eggplant) //react user with undefined chance
    react_user(msg, id_me, emoji_shades, 10) //react to user with 1/10 chance
    reply_text(msg, ["aaaa","bbbb", "cccc", "dddd"], "eeee") //react to text (array)
    reply_text(msg, "ffff", "gggg", 3) //reply to text (string( and 1/3 chance

    react_string(msg, ["abcd", "efgh"], emoji_clown) //react string with undefined chance
    react_string(msg, "wwww", emoji_cube)
    reply_string(msg, ["ijkl", "mnop"], "arrrrr") //reply to str (array)

});

bot.login(config.token)
