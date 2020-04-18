const sa = require("superagent");
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "ravatar",
    run: async (client, message, args) => {
        console.log(`Выполнено: ravatar пользователем ${message.author.tag}`)
        let {body} = await sa
        .get(`https://nekos.life/api/v2/img/avatar`)

        let e = new MessageEmbed()
        .setAuthor(`Вот вам случайный аватар.`)
        .setImage(body.url)
        .setColor("PURPLE")
        message.channel.send(e)
    }
}