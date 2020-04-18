const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "invite",
    aliases: ["link", "приглашение", "l", "п"],
    category: "info",
    run: async (client, message, args) => {
        let embed = new MessageEmbed()
        .setAuthor("Моё приглашение")
        .setDescription("[Нажми](https://bit-ly.ru/YCFVZat)")
        .setColor("66FFFF")

        let embed1 = new MessageEmbed()
        .setAuthor("Ссылка выслана!")
        .setColor("66FFFF")

        if(message.channel.type == "dm") {
            message.channel.send("...")
        }
        if(message.channel.type == "text") {
            message.delete().catch()
            message.channel.send(embed1)
            message.author.send(embed)
            console.log(`Выполнено: invite пользователем ${message.author.tag}`)
        }
    }
}