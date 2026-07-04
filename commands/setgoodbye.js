module.exports = {
  name: 'setgoodbye',
  description: 'Configure goodbye messages.',
  execute: async (bot, ctx) => {
    const text = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!text) return ctx.reply('Usage: /setgoodbye <goodbye message>');
    await ctx.reply('Goodbye message saved (placeholder).');
  }
};
