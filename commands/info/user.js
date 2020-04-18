const { MessageEmbed } = require("discord.js");
const { getMember, formatDate } = require("../../functions");

module.exports = {
    name: "user",
    aliases: ["whois"],
    category: "info",
    aliases: ["u", "юзер", "ю"],
    run: async (client, message, args) => {
        let member = getMember(message, args.join(" "))

        let joined = formatDate(member.user.joinedAt)
        let created = formatDate(member.user.createdAt)

        let embed = new MessageEmbed()
            .setTitle(`Информация ${member.user.tag}`)
            .addField("ID", member.user.id)
            .addField("Ник", member.user.username)
            .addField("Ник на сервере", member.displayName)
            .addField("Дискрим", member.user.discriminator)
            .addField("Тэг ", member.user.tag)
            .addField("Создан аккаунт", created)
            .addField("Присоединился", joined)
            .setColor("66FFFF")
            .setThumbnail(member.user.displayAvatarURL)
            .setTimestamp()
        message.channel.send(embed)
        message.delete().catch()
        console.log(`Выполнено: user пользователем ${message.author.tag}`)
    }
}