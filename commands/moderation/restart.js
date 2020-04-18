const { MessageEmbed } = require("discord.js");


module.exports = {
    name: "restart",
    aliases: ["r", "рестарт", "р"],
    category: "moderation",
    run: async (client, message, args) => {
        var resembed = new MessageEmbed()
        .setColor("66FFFF")
        .setAuthor("Перезагрузка...")
        .setDescription(":arrows_counterclockwise: Бот перезагружается... ");
        var resembed1 = new MessageEmbed()
        .setColor("66FFFF")
        .setAuthor("Перезагрузка")
        .setDescription(":white_check_mark: Бот запущен. ")
        .setTimestamp()
        message.delete().catch()
        message.channel.send(resembed)
        .then(msg => client.destroy())
        .then(() => сlient.login(token));
        message.delete().catch()
        message.channel.send(resembed1)
        console.log(`Выполнено: restart пользователем ${message.author.tag}`)
    }
}