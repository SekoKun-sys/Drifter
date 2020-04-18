module.exports = {
    name: "reload",
    category: "owner",
    run: async (client, message, args) => {
if(message.author.id != "579178972106194952") return

        let cat = args[0].toLowerCase()
        let cmdName = args[1].toLowerCase()

        if(!cat || !cmdName) return

        delete require.cache[require.resolve(`../${cat}/${cmdName}.js`)]
        client.commands.delete(cmdName)
        const pull = require(`../${cat}/${cmdName}.js`)
        client.commands.set(cmdName, pull)

        message.channel.send(`Команда ${args[0].toUpperCase()} перезагружена!`)
        console.log(`Выполнено: reload пользователем ${message.author.tag}`)
    }
}