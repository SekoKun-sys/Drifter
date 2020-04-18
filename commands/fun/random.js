const {MessageEmbed} = require("discord.js");
  module.exports = {
    name: "random",
    aliases: ["randnum", "rannum", "randomnumber"],
    category: "fun",
    run: async (client, message, args) => {
        let embed = new MessageEmbed()
        console.log(`Выполнено: random пользователем ${message.author.tag}`)
        .setTitle("Случайное число")
        .setDescription("Выпало: " + getRandomInt(args[0], args[1]))
        .setColor("66FFFF")
        .setTimestamp()
        if(!args[0]) {
            return message.channel.send("Укажите первое число!")
        }
        if(!args[1]) {
            return message.channel.send("Укажите второе число!")
        }
        if(isNaN(args[1])) return message.channel.send("Вы указали не число!")
        if(isNaN(args[0])) return message.channel.send("Вы указали не число!")
        console.log("Выполнено: random")
        message.channel.send(embed);
    }
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }