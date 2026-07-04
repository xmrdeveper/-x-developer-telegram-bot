module.exports = {
  name: 'setwelcome',
  description: 'Configure welcome messages.',
  execute: async (bot, ctx) => {
    const text = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!text) return ctx.reply('Usage: /setwelcome <welcome message>');
    await ctx.reply('Welcome message saved (placeholder). Implement persistent storage to retain changes.');
  }
};
