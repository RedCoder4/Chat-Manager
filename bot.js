const Discord = require("discord.js");

const bot = new Discord.Client();

const prefix = "/";
bot.on("message",  message => {
    let user = message.mentions.users.first();
    if (!message.author.bot) {
        let msg = message.content.split(" ");
        let cont = message.content.slice(prefix.lenght).split(" ");
        let args = cont.slice(1);
        let command = msg[0];
        if (command === `${prefix}fuck`) {
            channel.cleanContent();
            message.channel.sendMessage("off");
        } else if (command === `${prefix}clear`) {
            if (message.member.hasPermission("MANAGE_MESSAGES")) {
                message.channel.bulkDelete(args);
            } else {
                message.channel.sendMessage("you dont ve permission to use the command");
            }

        } else if (message == "fuck") {
            message.delete(10);
        } else if (command === `${prefix}ban`) {
            if (message.member.hasPermission("BAN_MEMBERS")) {
                message.guild.ban(user, 2);
            }
        } else if (command === `${prefix}unban`) {
            if (message.member.hasPermission("BAN_MEMBERS")) {
                message.guild.unban(user);
            }
        } else if (command === `${prefix}code`) {
            message.channel.sendCode("java", "public class Math{ public static void main(String[] args){System.out.println('Hi')}}");
        }
    }


bot.login('MzI3ODkzNzY2MjcyOTc0ODQ4.DM_bnw.yhKCJAKReFxoO1pbWYxgbJutbKg');

