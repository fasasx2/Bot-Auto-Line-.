///حقوق عمر .*omar#6277
const Discord = require("discord.js");
///حقوق عمر .*omar#6277
const client = new Discord.Client();
///حقوق عمر .*omar#6277
const prefix ="1";//البادئة:
///حقوق عمر .*omar#6277
client.on('ready',()=>{
   console.log(`Bot is On! ${client.user.tag}`);
});
///حقوق عمر .*omar#6277

///حقوق عمر .*omar#6277
client.on('message', msg => {
if(msg.content == 'auto') {
  ///حقوق عمر .*omar#6277
  ///حقوق عمر .*omar#6277
msg.channel.send("line")
}
})
///حقوق عمر .*omar#6277
let line99 = `https://media.discordapp.net/attachments/1086561589873881158/1086564789179920494/Era_ksa3_3.gif`
client.on("message", message => {
 
  if (message.guild.id != "1082826391629864960") return;//ايدي السيرفر
  if (message.channel.id != "1083023964399476857") return;//ايدي الروم
  if(message.author.id === client.user.id) return;
  ///حقوق عمر .*omar#6277
      if (message.author.send) {
    message.channel.send(line99);//
 
  }
 ///حقوق عمر .*omar#6277
})
///حقوق عمر .*omar#6277
client.on("message", message=>{
if(message.content.startsWith("خط")){
message.channel.send(line99)
message.delete()
}
})
///حقوق عمر .*omar#6277
client.on("message", message => {
if(message.content == ("embedline")){
let embed = new Discord.MessageEmbed()
.setTitle("line")
  ///حقوق عمر .*omar#6277
.setColor("RANDOM")//لون حروف كبيرة
.setImage(line99)
  ///حقوق عمر .*omar#6277
message.channel.send(embed)
  ///حقوق عمر .*omar#6277
message.delete()
}
}) 

///حقوق عمر .*omar#6277


///حقوق عمر .*omar#6277
client.login(process.env.token); 
