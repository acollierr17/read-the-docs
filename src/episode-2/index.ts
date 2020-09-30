import { Client } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

export const main = async (): Promise<void> => {
  const client = new Client();

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('message', async message => {
    const reactionMessage = await message.channel.messages.fetch('760399708890988544');
    const emoji = '🤓';

    if (message.content === 'random') {
      const messageReaction = reactionMessage.reactions.cache.get(emoji);
      const users = await messageReaction.users.fetch();
      const user = users.random();
      await user.send('If you\'re reading this, it\'s too late');
    }
  });

  try {
    await client.login();
  } catch (e) {
    console.error(e);
  }
};
