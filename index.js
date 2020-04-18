const { MessageEmbed, Client, Collection } = require("discord.js");
const config = require("./config.json");
const fs = require('fs');
const client = new Client();


client.aliases = new Collection();
client.commands = new Collection();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});


require("./util/eventHandler.js")(client);





client.on("message", async message => {
    const prefix = "d!"

    if(message.author.bot) return;
    let messageArray = message.content.split(' ')
    let command = messageArray[0]
    let args = messageArray.slice(1)
    let cmd = messageArray[0].toLowerCase();

    if(!message.content.startsWith(prefix)) return;

    let command_file = client.commands.get(command.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
    if (command_file) command_file.run(client, message, args)
   
});

client.on('message', async message => {
    const eURL = message.attachments.first() ? message.attachments.first().url : undefined
    if(message.author.bot) return;
   
   
    for (let i = 0; i < config.chat.length; i++) {
    if(message.channel.id === config.chat[i]) {
    config.chat.forEach(ch => {
    if(message.author.id === "700599407070019584" && message.channel.id === ch) return message.channel.send("Вы замьючены в сежсерверном чате!") 
   if(message.content.indexOf('discord.gg') != -1 || message.content.indexOf('discordapp.com/invite') != -1) return message.react('❌')
   if(message.content.startsWith('//') ) return message.react('👀')
   if(message.content.indexOf('https://bit-ly.ru/') != -1 || message.content.indexOf('bit-ly') != -1) return message.react('❌');

   
   if(ch == message.channel.id) return message.react(`✉`);
   let chU = client.channels.cache.get(ch)

   if(!chU) return console.debug(`Найден повреждённый айди. Айди: ${ch}.`)

    
    if(message.author.id == "579178972106194952") {
    let embed = new MessageEmbed()
    .setColor("00CC66")
    .setAuthor(`${message.author.tag}  ☾⚙☽`, message.author.avatarURL())
    .setDescription(message.content)
    .setFooter(`Отправлено с ${message.guild.name}, из канала ${message.channel.name}`, message.guild.iconURL)
    .setImage(eURL)
    .setTimestamp()
    console.log(message.author.tag, ":", message.content,`|| Отправлено с ${message.guild.name}, из канала ${message.channel.name}`)
     return chU.send(embed)
    }
    
    if(message.author.id === "697755304263155715") {
        let embed = new MessageEmbed()
     .setColor("ORANGE")
     .setAuthor(`${message.author.tag} ☾🦊☽`, message.author.avatarURL())
     .setDescription(message.content)
     .setFooter(`Отправлено с ${message.guild.name}, из канала ${message.channel.name}`, message.guild.iconURL)
     .setImage(eURL)
     .setTimestamp()
     console.log(message.author.tag, ":", message.content,`|| Отправлено с ${message.guild.name}, из канала ${message.channel.name}`)
     return chU.send(embed)
    }
    if(message.author.id === "475872888570773510") {
        let embed = new MessageEmbed()
     .setColor("RED")
     .setAuthor(`${message.author.tag} ☾🍺☽`, message.author.avatarURL())
     .setDescription(message.content)
     .setFooter(`Отправлено с ${message.guild.name}, из канала ${message.channel.name}`, message.guild.iconURL)
     .setImage(eURL)
     .setTimestamp()
     console.log(message.author.tag, ":", message.content,`|| Отправлено с ${message.guild.name}, из канала ${message.channel.name}`)
     return chU.send(embed)
    }
    if(message.author.id == "649793510358384661") {
        let embed = new MessageEmbed()
        .setColor("FF0000")
        .setAuthor(`${message.author.tag}  ☾💯☽`, message.author.avatarURL())
        .setDescription(message.content)
        .setFooter(`Отправлено с ${message.guild.name}, из канала ${message.channel.name}`, message.guild.iconURL)
        .setImage(eURL)
        .setTimestamp()
        console.log(message.author.tag, ":", message.content,`|| Отправлено с ${message.guild.name}, из канала ${message.channel.name}`)
         return chU.send(embed)
        }
    if(message.author.id === "388218132067516417") {
        let embed = new MessageEmbed()
     .setColor("PURPLE")
     .setAuthor(`${message.author.tag}  ☾⚙☽`, message.author.avatarURL())
     .setDescription(message.content)
     .setFooter(`Отправлено с ${message.guild.name}, из канала ${message.channel.name}`, message.guild.iconURL)
     .setImage(eURL)
     .setTimestamp()
     console.log(message.author.tag, ":", message.content,`|| Отправлено с ${message.guild.name}, из канала ${message.channel.name}`)
     return chU.send(embed)
    }
    if(message.author.id != message.guild.ownerID) {
        let embed = new MessageEmbed()
        .setColor(client.errColor)
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setDescription(message.content)
        .setFooter(`Отправлено с ${message.guild.name}, из канала ${message.channel.name}`, message.guild.iconURL)
        .setImage(eURL)
        .setTimestamp()
        console.log(message.author.tag, ":", message.content,`|| Отправлено с ${message.guild.name}, из канала ${message.channel.name}`)
         return chU.send(embed)
        }
    if(message.author.id === message.guild.ownerID) {
            let embed = new MessageEmbed()
        .setColor(client.errColor)
        .setAuthor(`${message.author.tag} ☾Создатель сервера☽`, message.author.avatarURL())
        .setDescription(message.content)
        .setFooter(`Отправлено с ${message.guild.name}, из канала ${message.channel.name}`, message.guild.iconURL)
        .setImage(eURL)
        .setTimestamp()
        console.log(message.author.tag, ":", message.content,`|| Отправлено с ${message.guild.name}, из канала ${message.channel.name}`)
         return chU.send(embed)
        }
     }) 
}
    };
});



client.login(config.token)