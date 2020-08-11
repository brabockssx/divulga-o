module.exports = async client => {
  console.log(
    "Bot iniciado com " +
      client.users.size +
      " usuários, em " +
      client.channels.size +
      " canais de " +
      client.guilds.size +
      " servidores."
  );

  const activity = [
    
   {
      name: ` Estamos atualmente com ${client.users.size} usuários.`,
      type: 1,
      url: "https://www.twitch.tv/3puma3"
    },
    {
      name: ` f! `,
      type: 1,
      url: "https://www.twitch.tv/3puma3"
    }
  ];

  setInterval(function() {
    let random = Math.floor(Math.random() * activity.length);
    client.user.setPresence({ game: activity[random] });
  }, 10000);
};
