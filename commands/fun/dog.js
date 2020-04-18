const superagent = require("superagent")
const {MessageEmbed} = require("discord.js");
 
module.exports = {
    name: "dog",
    category: "fun",
    run: async (client, message, args) => {
        let {body} = await superagent
        .get(`https://random.dog/woof.json`);

        let embed = new MessageEmbed()
        .setTitle("Пёсик:dog:")
        .setImage(body.url)
        .setTimestamp()
        .setColor("PURPLE")
        console.log(`Выполнено: dog пользователем ${message.author.tag}`)
        message.channel.send(embed)
    }

}