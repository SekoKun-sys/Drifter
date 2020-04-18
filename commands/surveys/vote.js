const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "vote",
    category: "surveys",
    aliases: ["v", "голос", "г"],
    run: async (client, message, args) => {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("У Вас недостаточно прав!")
        let text = args.slice(0).join(" ")
        if(args[0]) {
        let vot = new MessageEmbed()
            .setTitle("Голосование!")
            .setImage(`https://i.gifer.com/ULAK.gif`)
            .setDescription(text)
            .setColor("66FFFF")
        message.channel.send(vot).then(sentEmbed => {
            sentEmbed.react("👍")
            sentEmbed.react("👎")
        })
        message.delete().catch()
        } else {
            return message.channel.send("Укажите текст чтобы провести голосование")
        }
    }
}