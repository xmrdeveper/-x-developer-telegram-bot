module.exports = {
  name: 'settings',
  description: 'Open the bot settings panel.',
  execute: async (bot, ctx) => {
    await ctx.reply('Settings panel (placeholder). Use /settingsmenu to view available settings commands.');
  }
};
