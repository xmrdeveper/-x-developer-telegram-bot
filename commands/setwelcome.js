module.exports = {
  name: 'setwelcome',
  description: 'Configure the welcome message.',
  execute: async (bot, ctx) => {
    const text = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!text) return ctx.reply('Usage: /setwelcome Welcome message here');
    // Placeholder: store welcome in memory/file/db. For now, acknowledge.
    await ctx.reply('Welcome message saved (placeholder).');
  }
};
