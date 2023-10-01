const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, './.env') });
const { Client, GatewayIntentBits, EmbedBuilder, ActivityType } = require('discord.js');
const { DisTube } = require('distube');

const PREFIX = "!"; //Sets the Command Prefix

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates
  ]
});
const distube = new DisTube(client, {
  leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  nsfw: true,
});


client.on('ready', () => {
  client.user.setActivity(`${PREFIX}help`, { type: ActivityType.Listening });
  console.log('Bot is online');
});

client.on('messageCreate', async (message) => {
  const msg = message.content.trim();
  if (msg.startsWith(PREFIX)) {
    const command = msg.substring(PREFIX.length).split(" ");

    //Commands...
    if (command[0].toLowerCase() === 'play' && command.length > 1) {
      if (!message.member.voice.channel)
        message.reply("You must be connected to a voice channel to play music");
      else {
        message.reply("Searching for the song...");
        command.shift();
        const RequestedSong = command.join(" ");
        distube.play(message.member.voice.channel, RequestedSong, {
          member: message.member,
          textChannel: message.channel,
          message
        })
          .catch(err => {
            if (err)
              message.reply(":exclamation:Could not find the video url or something went wrong:exclamation:");
          });
      }
    }

    else if (command[0].toLowerCase() === 'stop') {
      if (!message.member.voice.channel)
        message.reply("You cannot stop a song if you are not in a voice channel");
      else if (!distube.getQueue(message))
        message.reply("Nothing to stop, the queue is empty");
      else {
        message.reply("Song Stopped :stop_sign:");
        distube.stop(message);
      }
    }

    if (command[0].toLowerCase() === "queue") {
      const queue = distube.getQueue(message);
      if (!queue)
        message.reply("Queue is empty");
      else {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const embed = new EmbedBuilder()
          .setColor(randomColor)
          .setTitle("Current queue:")
          .setDescription(queue.songs.map((song, id) =>
            `**${id + 1}**. [${song.name}] - \`${song.formattedDuration}\``
          ).join("\n"))
        message.channel.send({ embeds: [embed] });
      }
    }

    else if (command[0].toLowerCase() === 'help') {
      message.channel.send(`
        Hello! I am Joe :musical_note:\nHere are some of my commands\n\n**${PREFIX}play** - Plays a song\n**${PREFIX}stop** - Stops the current song\n**${PREFIX}queue** - Show the current queue
        `)
    }
  }
});

//Distube events
distube.on('playSong', (queue, song) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const embed = new EmbedBuilder()
    .setColor(randomColor)
    .setTitle("Now Playing...")
    .setDescription(song.name)
    .setThumbnail(song.thumbnail)
  queue.textChannel.send({ embeds: [embed] });
});
distube.on('addSong', (queue, song) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const embed = new EmbedBuilder()
    .setColor(randomColor)
    .setTitle("New song added to the queue 👍")
  queue.textChannel.send({ embeds: [embed] });
});
client.login(process.env.TOKEN);
