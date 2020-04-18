const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "stats",
    category: "info",
    description: "Показывает задержку команд(пинг)",
    aliases: ["s", "статы", "с"],
    run: async (client, message, args) => {   
        let embed = new MessageEmbed()
        .setTitle("Статы бота")
        .setThumbnail(client.user.avatarURL())
        .addField("⚙️Сервера", `${client.guilds.cache.size}`)
        .addField("⚙️Участники", `${client.users.cache.size}`)
        .addField(`**⚙️Пинг**:`, `${Math.round(client.ws.ping)}`)
        .addField("⚙️Каналы", `${client.channels.cache.size}`)
        .addField("⚙️Количество команд", `${client.commands.size}`)
        .setColor("66FFFF")
        message.channel.send(embed)
        message.delete().catch()
        console.log(`Выполнено: stats пользователем ${message.author.tag}`)
    }
}