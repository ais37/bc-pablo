const Discord = require('discord.js')
, shadow = new Discord.Client()
, config = require('./config.json')
, devs = config.owner
, prefix = config.prefixs;
shadow.on('ready', () => {
  console.log(`by shadow Logged in as ${shadow.user.tag}!`);
})
shadow.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;   
if (message.content.startsWith(prefix + 'setgame')) {
  shadow.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(prefix + 'setname')) {
shadow.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
} else
  if (message.content.startsWith(prefix + 'setavatar')) {
shadow.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
} else     
if (message.content.startsWith(prefix + 'setstream')) {
  shadow.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`) 
	}
});
			shadow.on('message',async message => {
  if(message.channel.type === 'dm') return;
  if(message.author.bot) return;    
  if(!message.member.hasPermission("ADMINISTRATOR")) return;
  let args = message.content.split(' ').slice(1).join(' ');
  if(message.content.split(' ')[0] == prefix + 'bcall') {
  if(!args[1]) return message.channel.send('**يجب عليك كتابة الرسالة بعد الأمر**');
   message.channel.send(`**جاري ارسال الرسالة**`).then(msg => {
    message.guild.members.forEach(g => {
      g.send(args)
      if(!msg) return;
	  msg.edit(`  تم ارسال الرسالة الي  ${message.guild.memberCount} عضو`);
      }); 
	  }); 
	  };
  if(message.content.split(' ')[0] == prefix + 'bc') {
  if(!args[1]) return message.channel.send('**يجب عليك كتابة الرسالة بعد الأمر**');
   message.channel.send(`**جاري ارسال الرسالة**`).then(msg => {
   message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(args)
   if(!msg) return;
   msg.edit(`**  تم ارسال هذة الرسالة الى ${message.guild.members.filter(m => m.presence.status !== 'online').size} عضو**`);
        });
    }) ;
   };
  if(message.content.split(' ')[0] == prefix + 'bcrole') {
     if(!args[0]) {
      message.channel.send("قم بمنشنة الرتبة ");
        return;    
		}
    if(!args[1]) {
      message.channel.send("قم بمنشنة الرتبة");
        return;  
		}
      if(args[0] == "@everyone") {
        message.channel.send(`**تم ارساله الرسالة الى ${message.guild.memberCount} عضو**`);
        message.guild.members.forEach(mi => {
          mi.send(`${args}`);   });
        return; }
          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("لا توجد رتبة بهذا الاسم");
                return;    
				}
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(`${args}`);
        });
      message.channel.send(`** تم ارساله الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عظو**`);
    }
	});
  shadow.on('message',async message => {
if(message.author.bot || message.channel.type === 'dm') return;
if(!message.member.hasPermission("ADMINISTRATOR")) return;
  if (message.content.startsWith(prefix + 'ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(shadow.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});       
		 }
         if (message.content === (prefix + "help")) {
       const embed = new Discord.RichEmbed() 
           .setThumbnail(message.author.avatarURL)
           .setColor("#FF0000")
           .setDescription(`:small_orange_diamond: اوامر الاونر  
:black_small_square: ${prefix}setname <الاسم> 
تغيير اسم البوت
:black_small_square: ${prefix}setavatar <رابط صورة>
تغيير صورة البوت
:black_small_square: ${prefix}setgame 
تغيير بلاينق البوت
:black_small_square: ${prefix}setstream
تغيير ساريم البوت
:black_small_square: ${prefix}ping
سرعة استجابة البوت
:small_blue_diamond: اوامر الاداره {adminstrator}
:black_small_square: ${prefix}bc     : برودوكاست للاونلاين فقط
:black_small_square: ${prefix}bcall  : برودوكاست للكل
:black_small_square: ${prefix}bcrole : برودوكاست لرول معين 
©shadow.`)
     message.author.sendEmbed(embed)   
     }		 
		 });
var config = {
  events: [
    {type: "CHANNEL_CREATE", logType: "CHANNEL_CREATE", limit: 2 , delay: 10000},
    {type: "CHANNEL_DELETE", logType: "CHANNEL_DELETE", limit: 2, delay: 10000},
    {type: "GUILD_MEMBER_REMOVE", logType: "MEMBER_KICK", limit: 4, delay: 10000},
    {type: "GUILD_BAN_ADD", logType: "MEMBER_BAN_ADD", limit: 4, delay: 10000},
    {type: "GUILD_ROLE_CREATE", logType: "ROLE_CREATE", limit: 3, delay: 10000},
    {type: "GUILD_ROLE_DELETE", logType: "ROLE_DELETE", limit: 3, delay: 10000},
  ]
}
client.on("error", (e) => console.error(e));
client.on("raw", (packet)=> {
  let {t, d} = packet, type = t, {guild_id} = data = d || {};
  if (type === "READY") {
    client.startedTimestamp = new Date().getTime();
    client.captures = [];
  }
  let event = config.events.find(anEvent => anEvent.type === type);
  if (!event) return;
  let guild = client.guilds.get(guild_id);
  if (!guild) return;
  guild.fetchAuditLogs({limit : 1, type: event.logType})
    .then(eventAudit => {
      let eventLog = eventAudit.entries.first();
      if (!eventLog) return;
      let executor = eventLog.executor;
      guild.fetchAuditLogs({type: event.logType, user: executor})
        .then((userAudit, index) => {
          let uses = 0;
          userAudit.entries.map(entry => {
            if (entry.createdTimestamp > client.startedTimestamp && !client.captures.includes(index)) uses += 1;
          });
          setTimeout(() => {
            client.captures[index] = index
          }, event.delay || 2000)
          if (uses >= event.limit) {
            client.emit("reachLimit", {
              user: userAudit.entries.first().executor,
              member: guild.members.get(executor.id),
              guild: guild,
              type: event.type,
            })
          }
        }).catch(console.error)
    }).catch(console.error)
});
client.on("reachLimit", (limit)=> {
  let log = limit.guild.channels.find( channel => channel.name === "log-hack");
  log.send(limit.user.username+"\n استخدم الصلاحيات بكثرة");
  limit.guild.owner.send(limit.user.username+"\nاستخدم الصلاحيات بكثرة")
  limit.member.roles.map(role => {
    limit.member.removeRole(role.id)
    .catch(log.send)
  });
});
shadow.login(process.env.BOT_TOKEN);