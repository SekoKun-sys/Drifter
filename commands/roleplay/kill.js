const {MessageEmbed} = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: "kill",
    category: "roleplay",
    run: async (client, message, args) => {
        const toKill = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!toKill) {
            let {body} = await superagent
            .get(`https://nekos.life/api/v2/img/suicide`)

            let embed = new MessageEmbed()
            .setTitle(`${message.author.username} совершил самоубийство!`)
            .setImage(body.url)
            .setColor("BLACK")
            message.channel.send(embed)
        } else {
            let {body} = await superagent
            .get(`https://nekos.life/api/v2/img/kill`)

            let embed = new MessageEmbed()
            .setTitle(`${message.author.username} убил ${toKill.user.username} :D`)
            .setImage(body.url)
            .setColor("RED")
            message.channel.send(embed)        
            console.log(`Выполнено: kill пользователем ${message.author.tag}`)
        }
    }
}