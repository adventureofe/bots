const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js")
const config = require("./config.json")
const moment = require("moment")

const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"] })

bot.once('ready' , () => {
    console.log('bot online')
    bot.user.setActivity('DEFAULT ACTIVITY')
})

//user ids
const id_me = "0" //enter id_here
const id_sean_1 ="702225543290159115"
const id_sean_2 = "970521209513082920"

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

async function reply_user(msg, user_id, reply, chance)
{
    let random_chance = (chance === undefined) ? 0 : Math.floor(Math.random() * chance);

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

//optimise reacting to user by
async function react_user(msg, reply)
{
        await msg.react(reply)
}

//Start listening for events to happen
bot.on("messageCreate", async msg => {

    //Don't ever let the bot get triggered by itself
    if (msg.author.bot) return;

    switch(msg.author.id)
    {
        case id_sean_1: react_user(msg, emoji_cube)
        break;
        case id_sean_2: react_user(msg, emoji_nails)
        break;
    }

    reply_text(msg, ["aaaa","bbbb", "cccc", "dddd"], "eeee") //react to text (array)
    reply_text(msg, "ffff", "gggg", 3) //reply to text (string( and 1/3 chance

    react_string(msg, ["abcd", "efgh"], emoji_clown) //react string with undefined chance
    react_string(msg, "wwww", emoji_cube)
    reply_string(msg, ["ijkl", "mnop"], "arrrrr") //reply to str (array)
});

//IMPORTANT: must have GUILD_MEMBERS intention at the top of this file
//Welcome message
const channel_id = "970532080276635671"

const aspie_logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8OKjFCdaREHFlukgnArw4IxbCIZsTHdPorzHvKIbHfvW_ODfVUULrkuBXiQdXOSXxz2A&usqp=CAU'

bot.on("guildMemberAdd", member => {
    // IMPORTANT: Titles and images are coupled!
    // ensure there are an equal amount of each and ensure they are on
    // the corresponding rows you wish them to be displayed on
    const welcome_titles =
    [
        "NAME: " + member.user.username +" has entered the chat!",
        "New Person: " + member.user.username + " entered the server!",
        "Everyone please welcome " + member.user.username
    ]

    const welcome_images =
    [
        "https://i.kym-cdn.com/entries/icons/facebook/000/027/879/yobammarere.jpg",
        "https://i.kym-cdn.com/entries/icons/mobile/000/020/002/memeeman.jpg",
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/312B/production/_122578521_bog2.jpg"
    ]

    const welcome_description =
        "NAME: " + member.user.username + "\n" +
        "ID: " + member.user.id + "\n" +
        "CREATED: " + moment(member.user.createdAt).format("MMMM/DD/YY @ h:mm:ss a") + "\n" +
        "AVATAR: " + member.user.defaultAvatarURL

    let random_chance =  Math.floor(Math.random() * welcome_titles.length);
    let random_colour = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

    const welcomeEmbed = new MessageEmbed()
    .setColor(random_colour)
    .setTitle(welcome_titles[random_chance])
    .setDescription(welcome_description)
    .setThumbnail(aspie_logo)
    .setImage(welcome_images[random_chance])

    member.guild.channels.cache.get(channel_id).send({ embeds: [welcomeEmbed] })
})

bot.on("guildMemberRemove", member => {
    // IMPORTANT: Titles and images are coupled!
    // ensure there are an equal amount of each and ensure they are on
    // the corresponding rows you wish them to be displayed on
    const quit_titles =
    [
        "Member: " + member.user.username + " has LEFT the server!",
         member.user.username + " just quit the server!",
    ]

    const quit_images =
    [
        "https://i.kym-cdn.com/entries/icons/original/000/026/638/cat.jpg",
        "https://i.pinimg.com/736x/f8/12/29/f81229152558b4aaefa8205c0b84285d.jpg"
    ]

    const quit_description =
        "NAME: " + member.user.username + "\n" +
        "ID: " + member.user.id + "\n" +
        "CREATED: " + moment(member.user.createdAt).format("MMMM/DD/YY @ h:mm:ss a") + "\n" +
        "AVATAR: " + member.user.defaultAvatarURL

    let random_chance =  Math.floor(Math.random() * quit_titles.length);
    let random_colour = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

    const quitEmbed = new MessageEmbed()
    .setColor(random_colour)
    .setTitle(quit_titles[random_chance])
    .setDescription(quit_description)
    .setThumbnail(aspie_logo)
    .setImage(quit_images[random_chance])

    member.guild.channels.cache.get(channel_id).send({ embeds: [quitEmbed] })
})

bot.login(config.token)
