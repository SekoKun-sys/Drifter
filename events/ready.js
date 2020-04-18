const Discord = require("discord.js");

module.exports = (client) => {
    console.log(`${client.user.username} Успешно запустился!`)

    let statuses = [
        `${client.users.cache.size} участников!`,
        `${client.guilds.cache.size} серверов!`,
        "d!help"
    ]


    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, {type: "WATCHING"})
        
    }, 5000);
}