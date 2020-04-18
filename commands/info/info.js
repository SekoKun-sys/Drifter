const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "info",
    category: "info",
    aliases: ["inf", "и", "i"],
    run: async (client, message) => {
        let member = "579178972106194952"
        let embed = new MessageEmbed()
        .setTitle(`Бот Drifter`)
        .setThumbnail(client.user.avatarURL())
        .setDescription("**Drifter** - самописный и немного кривоватый бот. \n  \n Префикс бота - `d!` \n  \n    Бот написан на библиотеке [Discord.js](https://discord.js.org/#/). \n  \n  На данный момент бот имеет рп команды, фан команды, команды для модерации, свой Межсерверный чат. \n   Чтобы отобразить список команд пропишите `d!help`.    \n  Бот есть на мониторингах: [Top.gg](https://top.gg)")
        .setColor("66FFFF")
        .addFields(
            {name:`Владелец и разработчик бота:`,value: `<@${member}>`, inline:true },
            {name:`Если вы нашли баг или ошибку:`,value: `Сообщите разработчику:<@${member}> / Отправьте баг через d!bug <ваше сообщение> / Напишите на [сервер поддержки](https://discord.gg/3UXWAmb)`, inline:false }  )
        .setTimestamp()
        message.channel.send(embed)
        message.delete().catch()
        console.log(`Выполнено: info пользователем ${message.author.tag}`)
    }
}