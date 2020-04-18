const { chat } = require("D:/Хлам/bot/config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "isize",
    category: "info",
    description: "Показывает задержку команд(пинг)",
    aliases: ["is"],
    run: async (client, message, args) => {   
        let embed = new MessageEmbed()
        .setThumbnail(client.user.avatarURL())
        .addField("Сервера в межсерверном чате", chat)
        .setColor("66FFFF")
        .setTimestamp()
        message.channel.send(embed)
        message.delete().catch()
        console.log(`Выполнено: isize пользователем ${message.author.tag}`)
    }
}