const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "coin",
    category: "fun",
    aliases: ["м", "мон"],
    run: async (client, message, args) => {
        let rand = ["Решка!", "Орёл!"]
        let temp = rand[Math.floor(Math.random() * rand.length)]
        let embed12 = new MessageEmbed()
        .setAuthor("Подбросить монетку")
        .setDescription(temp)
        .setColor("66FFFF")
        .setTimestamp()
        message.channel.send(embed12)
        message.delete().catch()
        console.log(`Выполнено: coin пользователем ${message.author.tag}`)
    }
}