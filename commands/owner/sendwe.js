const {MessageEmbed} = require("discord.js")

module.exports = {
    name: "sendwe",
    category: "owner",
    run: async (client, message, args) => {

        if(message.author.id == "579178972106194952") {
            if(!args[0]) return message.channel.send(`Укажите айди.`)
            if(!args.slice(1).join(" ")) return message.channel.send(`Укажите сообщение.`)
            message.delete().catch()
        let context = args.slice(1).join(" ")
        client.users.cache.get(args[0]).send(context)
    } else {
        return message.reply("Ты не создатель бота!").then(message.delete().catch())
        }
    }
}