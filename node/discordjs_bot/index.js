const { Client, MessageEmbed, Collection } = require('discord.js');
const { config } = require('dotenv');
const prefix = '_';

const client = new Client({
  disableEveryone: true,
});


client.commands =  new Collection();
client.aliases  =  new Collection();

config({
  path: __dirname + '/.env'
})

const handlers = ['command']
handlers.forEach( (handler) => {
  require(`./handler/${handler}`)(client);
});


client.on('ready',() => {
  console.log(`i'm online, my name is ${client.user.username}`);

  client.user.setPresence({
    status :  'online',
    game   :  {
      name: 'me getting developed',
      type: ' WATCHING'
    }
  });

})

client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member) message.member = await message.guild.fetchMember(message);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  console.log('args:' , args)
  console.log('cmd:' , cmd)
  /* example
    "_say hello my name is Stan"
    cmd  =  say
    args =  ['hello', 'my', 'name', 'is', 'Stan']
  */

  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd))

  if (command) {
    command.run(client, message, args);
  }


})


client.login(process.env.TOKEN);

