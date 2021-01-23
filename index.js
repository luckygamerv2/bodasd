const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`ALL Copyright's Go's To ASTA ._. And NIRO :>`)
});

app.listen(3000, () => {
  console.log('server started');
});

const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require("fs");
const welcome = JSON.parse(fs.readFileSync('./niro_data/welcomer.json' , 'utf8'));
const image = JSON.parse(fs.readFileSync('./niro_data/image.json' , 'utf8'));
const msg = JSON.parse(fs.readFileSync('./niro_data/messager.json' , 'utf8'));
const { niro_asta_token, niro_asta_prefix } = require("./BotConfig.json");

client.on('message', message => {
  if (!message.channel.guild) return;

  let room = message.content.split(" ").slice(1);
  let channel = message.mentions.channels.first();
  let em1 = new Discord.MessageEmbed()  
.setDescription('*You Dont Have Permission*')  
.setColor("RED")
.setFooter(""); 
  let em2 = new Discord.MessageEmbed()  
.setDescription('**Please MENTION Channel**')  
.setColor("RED") 
.setFooter(""); 
let em3 = new Discord.MessageEmbed()
.setDescription('**I can\'t find this channel**')  
.setColor("RED") 
.setFooter("")

if(message.content.startsWith(niro_asta_prefix + "setWelcomer")) {

if(!message.channel.guild) return message.reply('**Only Servers**');
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(em1);
if(!room) return message.channel.send(em2)
if(!channel) return message.channel.send(em3)
const niro_asta_embed_2 = new Discord.MessageEmbed()
.setTitle('**Done The Welcome Code Has Been Setup**')
.addField('Channel:', `${room}`)
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.send(niro_asta_embed_2);
welcome[message.guild.id] = {
channel: channel.id
}
fs.writeFile("./niro_data/welcomer.json", JSON.stringify(welcome), (err) => {
if (err) console.error(err)
})
}}).on('message', message => {
  if (!message.channel.guild) return;
let args = message.content.split(" ");
let em1 = new Discord.MessageEmbed()  
.setDescription('*You Dont Have Permission*')  
.setColor("RED")
.setFooter("COPY RIGHT FOR ASTA && NIRO القمر :>"); 
let em2 = new Discord.MessageEmbed()  
.setDescription('**PLS SEND LINK OF YOUR PICTURE**')  
.setColor("RED") 
.setFooter("COPY RIGHT FOR ASTA && NIRO القمر :>"); 
let em3 = new Discord.MessageEmbed()
.setDescription('**ONLY SERVERS COMMAND**')  
.setColor("RED") 
.setFooter("COPY RIGHT FOR ASTA && NIRO القمر :>")

if(message.content.startsWith(niro_asta_prefix + "setImage")) {
if(!message.channel.guild) return message.reply(em3);
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(em1);
if (!args[1]) return message.channel.send(em2);
let niro_asta_embed_3 = new Discord.MessageEmbed()
.setTitle('**Done The Welcome IMAGE Has Been Setup**')
.setDescription(`THIS IS NEW PIC`)
.setImage(args[1])
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username} `)
message.channel.send(niro_asta_embed_3)
image[message.guild.id] = {
image: args[1]
}
fs.writeFile("./niro_data/image.json", JSON.stringify(image), (err) => {
if (err) console.error(err)
})
}}).on('message', message => {
  if (!message.channel.guild) return;
let args = message.content.split("");
let em1 = new Discord.MessageEmbed()  
.setDescription('*You Dont Have Permission*')  
.setColor("RED")
.setFooter("COPY RIGHT FOR ASTA && NIRO القمر :>"); 
let em2 = new Discord.MessageEmbed()  
.setDescription('**PLS TYPE WLC MESSAGE**')  
.setColor("RED") 
.setFooter("COPY RIGHT FOR ASTA && NIRO القمر :>"); 
let em3 = new Discord.MessageEmbed()
.setDescription('**ONLY SERVERS COMMAND**')  
.setColor("RED") 
.setFooter("COPY RIGHT FOR ASTA && NIRO القمر :>")
let jmessage = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(niro_asta_prefix + "setMessage")) {
if(!message.channel.guild) return message.reply(em3);
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(em1);
if(!jmessage) return message.channel.send(em2);
let niro_asta_embed_4 = new Discord.MessageEmbed()
.setTitle('**Done The Welcome Message Has Been Setup**')
.setDescription(`THIS IS NEW MESSAGE`,`\n${msg[message.guild.id].jmessage}`)
.setImage(``)
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL())
.setFooter(`${client.user.username} `)
message.channel.send(niro_asta_embed_4)
msg[message.guild.id] = {
jmessage: jmessage
}
fs.writeFile("./niro_data/messager.json", JSON.stringify(msg), (err) => {
if (err) console.error(err)
})
}}).on('guildMemberAdd', async member => {

  const inviteChannel = member.guild.channels.cache.find(channel => channel.id === welcome[member.guild.id].channel);
let niro_asta_embed_1 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail(member.user.displayAvatarURL({format: "gif", format: "png", dynamic: true, size: 1024}))
.setDescription(`${msg[member.guild.id].jmessage}`)
.setImage(`${image[member.guild.id].image}`)
.addField(`\`User Name\` `,` <@${member.user.id}>`, true)
.addField(`\`User id\` `,` ${member.user.id}`, true)
inviteChannel.send(niro_asta_embed_1);
}).on("ready", () => {
  console.log(`
╭━╮╱╭┳━━┳━━━┳━━━╮
┃┃╰╮┃┣┫┣┫╭━╮┃╭━╮┃
┃╭╮╰╯┃┃┃┃╰━╯┃┃╱┃┃
┃┃╰╮┃┃┃┃┃╭╮╭┫┃╱┃┃
┃┃╱┃┃┣┫┣┫┃┃╰┫╰━╯┃
╰╯╱╰━┻━━┻╯╰━┻━━━╯
╭╮╭╮╭┳━━━┳╮╱╱╭━━━┳━━━┳━╮╭━┳━━━╮
┃┃┃┃┃┃╭━━┫┃╱╱┃╭━╮┃╭━╮┃┃╰╯┃┃╭━━╯
┃┃┃┃┃┃╰━━┫┃╱╱┃┃╱┃┃┃╱╰┫╭╮╭╮┃╰━━╮
┃╰╯╰╯┃╭━━┫┃╱╭┫┃╱┃┃┃╱╭┫┃┃┃┃┃╭━━╯
╰╮╭╮╭┫╰━━┫╰━╯┃╰━╯┃╰━╯┃┃┃┃┃┃╰━━╮
╱╰╯╰╯╰━━━┻━━━┻━━━┻━━━┻╯╰╯╰┻━━━╯
╭━━━┳━━┳━━━┳━━━┳━━━┳━━━┳━━━╮   ╭━━╮╭━━━┳━━━━╮
╰╮╭╮┣┫┣┫╭━╮┃╭━╮┃╭━╮┃╭━╮┣╮╭╮┃   ┃╭╮┃┃╭━╮┃╭╮╭╮┃
╱┃┃┃┃┃┃┃╰━━┫┃╱╰┫┃╱┃┃╰━╯┃┃┃┃┃   ┃╰╯╰┫┃╱┃┣╯┃┃╰╯
╱┃┃┃┃┃┃╰━━╮┃┃╱╭┫┃╱┃┃╭╮╭╯┃┃┃┃   ┃╭━╮┃┃╱┃┃╱┃┃
╭╯╰╯┣┫┣┫╰━╯┃╰━╯┃╰━╯┃┃┃╰┳╯╰╯┃   ┃╰━╯┃╰━╯┃╱┃┃
╰━━━┻━━┻━━━┻━━━┻━━━┻╯╰━┻━━━╯   ╰━━━┻━━━╯╱╰╯`)
 console.log(`
::::::::::::::::::::::::::::::::::::::::::::::::::
:                                                :
: - bot name : ${client.user.username}                            :
:                                                :
::::::::::::::::::::::::::::::::::::::::::::::::::
:                                                :
: - server : ${client.guilds.cache.size}                                   :
:                                                :
::::::::::::::::::::::::::::::::::::::::::::::::::
:                                                :
: - bot id : ${client.user.id}                  :
:                                                :
::::::::::::::::::::::::::::::::::::::::::::::::::
:                                                :
: - bot developer : @ニロ#3892                   :
:                                                :
::::::::::::::::::::::::::::::::::::::::::::::::::
 `)
 client.user.setActivity(`${niro_asta_prefix}help || NA WELCOME BOT`)
}).on("message", message => {
  if(message.content.startsWith(niro_asta_prefix + "help")) {
    message.channel.send(new Discord.MessageEmbed().setTitle(`**DISCORD NA WELCOME BOT**`).setDescription(`**
    - ${niro_asta_prefix}setWelcomer 
Ex: ${niro_asta_prefix}setWelcomer (#channel name)
    - ${niro_asta_prefix}setMessage 
Ex: ${niro_asta_prefix}setMessage (Welcome Massage)
    - ${niro_asta_prefix}setImage 
Ex: ${niro_asta_prefix}setIamge (Image Link)
    **`))
  }
})

function formatBytes (a, b) {
  if (0 == a) return "0 Bytes";
  let c = 1024,
      d = b || 2,
      e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      f = Math.floor(Math.log(a) / Math.log(c));
  
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
}

function parseDur(ms) {
  let seconds = ms / 1000,
      days = parseInt(seconds / 86400);
  seconds = seconds % 86400
  
  let hours = parseInt(seconds / 3600);
  seconds = seconds % 3600
  
  let minutes = parseInt(seconds / 60);
  seconds = parseInt(seconds % 60)
  
  if (days) {
    return `${days} day, ${hours} hours, ${minutes} minutes`
  } else if (hours) {
    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`
  } else if (minutes) {
    return `${minutes} minutes, ${seconds} seconds`
  }
  
  return `${seconds} second(s)`
}

client.login(niro_asta_token)
