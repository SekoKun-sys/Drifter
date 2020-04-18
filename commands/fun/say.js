const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "say",
    category: "fun",
    aliases: ["s", "с"],
    run: async (client, message, args) => {
        var text = message.content.split(' ').slice(1).join(' ');
        message.delete().catch()
        if(!text) return message.channel.send("Укажите текст сообщения."); message.delete().catch();
         message.channel.send(text);
        message.delete().catch()
        message.channel.stopTyping()
        console.log(`Выполнено: say пользователем ${message.author.tag}`)
    } 
 }
