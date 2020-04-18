module.exports = {
    name: "ban",
    aliases: ["b", "ba", "бан", "б", "ба"],
    category: "moderation",
    description: "Стукает банхаммером",
    run: async (client, message, args) => {
        const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      console.log(`Выполнено: ban пользователем ${message.author.tag}`)
      // Now we get the member from the user
      const member = message.guild.member(user);
      message.delete().catch()
      // If the member is in the guild
      if (member) {
        member
        
          .ban({
            reason: 'undefined',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`**Был стукнут банхаммером человек под ником ${user.tag}**`);
            member.send(`Вы были забанены на сервере ${message.guild.name}. С уважением, Администрация сервера.`)
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply(`${user.tag} не был стукнут баннхаммером`);
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("**Вы не можете стукнуть его банхаммером, потому что Вы - не админ!!!**");
    }
  }
}