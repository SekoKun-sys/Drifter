const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "bug",
    aliases: ["b", "bu", "б", "баг", "ба"],
    category: "moderation",
    description: "Clears the chat",
    run: async (client, message, args) => {
        var text = message.content.split(' ').slice(1).join(' ');
        if(!text) return message.channel.send("Укажите текст сообщения."); message.delete().catch();
        let embed1 = new MessageEmbed()
        .setTitle("Сообщение о баге.")
        .addField("Сообщение отправлено.", "Спасибо за найденный баг!")
        .setTimestamp()
        let embed2 = new MessageEmbed()
        .setTitle("Сообщение о баге.")
        .addField("Найденный баг:", text)
        .addFields(		
            { name: 'Сервер:', value: `*${message.guild.name}*`, inline: true },
            { name: 'Канал:', value: `*${message.channel.name}*`, inline: true },
            { name: 'Автор:', value: ` *${message.author.tag}*`, inline: true },
            { name: 'Айди автора:', value: `*${message.author.id}*`, inline: true },
            )
        .setColor("66FFFF")
        .setThumbnail(message.author.avatarURL)
        .setTimestamp()
        message.channel.send(embed1)
        if(message.author.id === "380429291722113025") return send("Вы в черном списке!")
        client.channels.cache.get("700002508344393829") .send(embed2)
        console.log(`выполнено: bug пользователем ${message.author.tag}`)
    }
}