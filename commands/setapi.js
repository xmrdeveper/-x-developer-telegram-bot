module.exports = {
  name: 'setapi',
  description: 'Configure API settings.',
  execute: async (bot, ctx) => {
    await ctx.reply('API settings saved (placeholder). Add API keys to .env for real configuration.');
  }
};
