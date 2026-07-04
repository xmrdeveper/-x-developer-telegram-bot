module.exports = {
  name: 'setupdates',
  description: 'Configure automatic updates.',
  execute: async (bot, ctx) => {
    await ctx.reply('Auto-updates configured (placeholder). Use CI/CD for production updates.');
  }
};
