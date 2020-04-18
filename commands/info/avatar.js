const { MessageEmbed } = require("discord.js");
const { getMember } = require("../../functions");

module.exports = {
    name: "avatar",
    aliases: ["ava", "а"],
    category: "images",
    run: async (client, message, args) => {
        let member = getMember(message, args.join(" "));
        let embed = new MessageEmbed()
        .setTitle(`Аватар ${member.displayName}`)
        .setTimestamp()
        .setImage(member.user.displayAvatarURL())
        .setColor("66FFFF")
        message.channel.send(embed)
        message.delete().catch()
        console.log(`Выполнено: avatar пользователем ${message.author.tag}`)
    }
}