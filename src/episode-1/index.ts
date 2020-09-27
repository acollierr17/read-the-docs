import { Client, TextChannel, MessageEmbed } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();


export const main = async (): Promise<void> => {
  const client = new Client();

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('message', message => {
    const NOTIFY_ROLE = '759524331574394931';
    const NOTIFY_CHANNEL = message.guild.channels.cache.get('759525014994157598') as TextChannel;

    if (message.mentions.roles.has(NOTIFY_ROLE) && message.channel.type === 'text') {
      const embed = new MessageEmbed()
        .addField('Content', message.content)
        .addField('Channel', message.channel)
        .addField('Time', message.createdAt)
        .setColor('BLURPLE');

      return NOTIFY_CHANNEL.send(embed);
    }
  });

  try {
    await client.login();
  } catch (e) {
    console.error(e);
  }
};
