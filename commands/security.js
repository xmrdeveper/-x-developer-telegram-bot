module.exports = {
  name: 'security',
  description: 'Open the security dashboard.',
  execute: async (bot, ctx) => {
    await ctx.reply('Security dashboard (placeholder). Use /securitymenu to view available security commands.');
  }
};
