const fs = require('fs')
const active = new Map;
var servers = {};

module.exports = (client, message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(client.config.prefix) !== 0) return;

  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd) return;
  let ops ={
    active: active
        }
  
  cmd.run(client, message, args, ops, servers);
};
  fs.readdir("./commands", function(err, files) {
    console.log(files.length)
})