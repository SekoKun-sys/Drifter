const rh = require("random-hex")
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "rhex",
    public: true,
    run: async (client, message, args) => {
        let color = rh.generate()
        let embed = new MessageEmbed()
        .setDescription(`Случайный цвет и его код: - \`${color}\` \n
        👈Предпросмотр`)
        .setColor(`${color}`)
        .setTimestamp()
        message.channel.send(embed)
        console.log(`Выполнено: rhex пользователем ${message.author.tag}`)
    }
}