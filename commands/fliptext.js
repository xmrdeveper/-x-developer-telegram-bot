module.exports = {
  name: 'fliptext',
  description: 'Flip text upside down.',
  execute: async (bot, ctx) => {
    const text = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!text) return ctx.reply('Usage: /fliptext <text>');
    const flipped = text.split('').reverse().join('').toUpperCase();
    await ctx.reply(flipped);
  }
};
