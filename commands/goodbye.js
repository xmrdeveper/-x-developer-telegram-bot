module.exports = {
  name: 'goodbye',
  description: 'Enable or disable goodbye messages.',
  execute: async (bot, ctx) => {
    await ctx.reply('Goodbye messages toggled (placeholder). Use /setgoodbye to configure.');
  }
};
