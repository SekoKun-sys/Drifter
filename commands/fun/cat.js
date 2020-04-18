const superagent = require("superagent")
const {MessageEmbed} = require("discord.js");
 
module.exports = {
    name: "cat",
    category: "fun",
    run: async (client, message, args) => {
        let {body} = await superagent
        .get(`http://aws.random.cat//meow`);

        let embed = new MessageEmbed()
        .setTitle("Котик:cat:")
        .setImage(body.file)
        .setColor("66FFFF")
        .setTimestamp()
        console.log(`Выполнено: cat пользователем ${message.author.tag}`)
        message.channel.send(embed)
    }

}