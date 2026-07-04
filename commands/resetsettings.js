module.exports = {
  name: 'resetsettings',
  description: 'Restore default settings.',
  execute: async (bot, ctx) => {
    await ctx.reply('Settings reset to defaults (placeholder). Implement backup/restore to persist changes.');
  }
};
