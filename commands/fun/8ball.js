const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "8ball",
    category: "fun",
    aliases: ["8b", "шар", "ш"],
    run: async (client, message, args) => {
        let text = args.slice(0).join(" ")
        if(!text) return message.channel.send("Спроси меня о чём-нибудь")
        let rand = ["Да!", "Конечно!", "Нет!", "Маловероятно", "Вряд ли", "Сомневаюсь", "Спроси позже"]
        let temp = rand[Math.floor(Math.random() * rand.length)]
        let embed = new MessageEmbed()
        .setAuthor(`${message.author.username} спросил у шара:`, message.author.displayAvatarURL())
        .setDescription(`\`\`\`${text}\`\`\` \n**Шар предсказал:** \n \`\`\`${temp}\`\`\``)
        .setColor("66FFFF")
        .setTimestamp()
        message.channel.send(embed)
        message.delete().catch()
        console.log(`Выполнено: 8ball пользователем ${message.author.tag}`)
    }
}