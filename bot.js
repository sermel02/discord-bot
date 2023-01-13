require('dotenv').config();
const {ask} = require('./ai.js');

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on("messageCreate", async (message) => {
  if (message.content.substring(0, 1) === "/") {
    const prompt = message.content.substring(1); //Удаление восклицательного знака из сообщения
    const answer = await ask(prompt); //Ответ GPT-3
    message.reply(answer); //Ответное сообщение в Discord с ответом  от GPT-3
  }
});

client.login(process.env.BOT_TOKEN);