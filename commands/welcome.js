module.exports = {
  name: 'welcome',
  description: 'Enable or disable welcome messages.',
  execute: async (bot, ctx) => {
    await ctx.reply('Welcome messages toggled (placeholder). Use /setwelcome to configure.');
  }
};
