module.exports = {
  name: 'reverse',
  description: 'Reverse your text.',
  execute: async (bot, ctx) => {
    const text = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!text) return ctx.reply('Usage: /reverse <text>');
    const reversed = text.split('').reverse().join('');
    await ctx.reply(reversed);
  }
};
