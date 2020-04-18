const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "ping",
    category: "info",
    run: async (client, message, args) => {
        let emb2 = new MessageEmbed()
        .setDescription(`🏓Обработка...`)
        message.channel.send(emb2).then(m => {
        let emb = new MessageEmbed()
        .setDescription(`\n**⚙️Пинг**: \`${Math.round(client.ws.ping)}\` \n
        ⚙️**Задержка чтения сообщений**: \`${m.createdTimestamp - message.createdTimestamp}\``)
        m.edit(emb)
        console.log(`Выполнено: ping пользователем ${message.author.tag}`)
        })
    }
}