const {MessageEmbed} = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: "shot",
    category: "roleplay",
    run: async (client, message, args) => {
        const toHug = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!toHug) {
            let {body} = await superagent
            .get(`https://nekos.life/api/v2/img/shotmyself`)

            let embed = new MessageEmbed()
            .setTitle(`${message.author.username} Совершил самоубийство...`)
            .setImage(body.url)
            .setColor("BLACK")
            message.channel.send(embed)
        } else {
            let {body} = await superagent
            .get(`https://nekos.life/api/v2/img/shoot`)

            let embed = new MessageEmbed()
            .setTitle(`${message.author.username} выстрелил в ${toHug.user.username}`)
            .setImage(body.url)
            .setColor("PURPLE")
            message.channel.send(embed)
            console.log(`Выполнено: shot пользователем ${message.author.tag}`)
        }
    }
}