require('dotenv').config();
const { Telegraf } = require('telegraf');
const path = require('path');
const fs = require('fs');

const token = process.env.BOT_TOKEN;
if (!token) {
  console.error('BOT_TOKEN is not set in environment. See .env.example');
  process.exit(1);
}

const bot = new Telegraf(token);

// Load command modules from commands/ directory
const commandsDir = path.join(__dirname, 'commands');
if (fs.existsSync(commandsDir)) {
  const files = fs.readdirSync(commandsDir).filter(f => f.endsWith('.js') && f !== 'index.js');
  for (const file of files) {
    try {
      const mod = require(path.join(commandsDir, file));
      if (mod && mod.name && typeof mod.execute === 'function') {
        bot.command(mod.name, mod.execute.bind(null, bot));
        // register description for /help listing if provided
      }
    } catch (err) {
      console.error('Failed to load command', file, err);
    }
  }
}

// Basic /help command
bot.command('help', async (ctx) => {
  const files = fs.readdirSync(commandsDir).filter(f => f.endsWith('.js') && f !== 'index.js');
  const names = files.map(f => require(path.join(commandsDir, f)).name).filter(Boolean);
  await ctx.reply(`Available commands:\n${names.map(n => `/${n}`).join('\n')}`);
});

// Launch
bot.launch().then(() => {
  console.log('Bot started');
}).catch(err => {
  console.error('Failed to launch bot', err);
});

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
