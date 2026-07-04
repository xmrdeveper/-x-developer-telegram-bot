module.exports = {
  name: 'setreply',
  description: 'Configure auto replies.',
  execute: async (bot, ctx) => {
    await ctx.reply('Auto-reply configuration saved (placeholder). Implement DB to store replies.');
  }
};
