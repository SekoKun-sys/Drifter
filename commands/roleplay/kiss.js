const {MessageEmbed} = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: "kiss",
    category: "roleplay",
    run: async (client, message, args) => {
        const toHug = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!toHug) {
            let {body} = await superagent
            .get(`https://nekos.life/api/v2/img/kiss`)

            let embed = new MessageEmbed()
            .setTitle(`${message.author.username} поцеловал сам себя, так как ему одиноко :sob:`)
            .setImage(body.url)
            .setColor("BLACK")
            message.channel.send(embed)
        } else {
            let {body} = await superagent
            .get(`https://nekos.life/api/v2/img/kiss`)

            let embed = new MessageEmbed()
            .setTitle(`${message.author.username} поцеловал ${toHug.user.username}`)
            .setImage(body.url)
            .setColor("PURPLE")
            message.channel.send(embed)
            console.log(`Выполнено: kiss пользователем ${message.author.tag}`)
        }
    }
}