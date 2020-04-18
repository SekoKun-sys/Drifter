const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "test",
    category: "fun",
    aliases: ["т", "t"],
    run: async (client, message, args) => {
        message.react("🇷")
        message.react("🇪")
        message.react("🇦")
        message.react("🇩")
        message.react("🇾")
        message.react("✅")
        console.log(`Выполнено: test пользователем ${message.author.tag}`)
    }
}