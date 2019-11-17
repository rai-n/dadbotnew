/* 
*process.env.BOT_TOKEN, 
 */

const Discord = require('discord.js');
const client = new Discord.Client({
	token: process.env.BOT_TOKEN,
	autorun: true
});

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content.toLowerCase().includes('im ')) {
    if (msg.content.toLowerCase().includes('im dad')){
      msg.reply("NO! i'm dad");
    } else {
    let x = msg.content.toLowerCase().replace('im', "");
    msg.channel.send('Hi'+x+ ", i'm dad!");
  }
 } else if (msg.content === 'dadjoke'){
  msg.channel.send('A ham sandwich walks into a bar and orders a beer. Bartender says...');
  msg.reply("Sorry we don't serve food here.");
 }
 });

let days = 0;
client.on('message', msg => {
    if (msg.content.toLowerCase().includes('do nofap')){
        setInterval(function () {
            msg.reply("No fap - Day:  "+days);
            days++;
        },86400000)
    }

});
//


 
 