module.exports = {
  name: 'settingshelp',
  description: 'Show help for settings commands.',
  execute: async (bot, ctx) => {
    await ctx.reply('Use /settingsmenu to view all available settings commands. Many commands are placeholders and require persistent storage or admin rights to take effect.');
  }
};
