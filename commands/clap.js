module.exports = {
  name: 'clap',
  description: 'Add 👏 between words.',
  execute: async (bot, ctx) => {
    const text = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!text) return ctx.reply('Usage: /clap <text>');
    const clapped = text.split(' ').join(' 👏 ');
    await ctx.reply(clapped);
  }
};
