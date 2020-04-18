const {MessageEmbed} = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: "suicide",
    category: "roleplay",
    run: async (client, message, args) => {
        const toHug = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!toHug) {
            let {body} = await superagent
            .get(`https://nekos.life/api/v2/img/suicide`)

            let embed = new MessageEmbed()
            .setTitle(`${message.author.username} покончил с собой`)
            .setImage(body.url)
            .setColor("BLACK")
            message.channel.send(embed)
            console.log(`Выполнено: suicide пользователем ${message.author.tag}`)
        }
    }
}