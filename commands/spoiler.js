module.exports = {
  name: 'spoiler',
  description: 'Create spoiler text.',
  execute: async (bot, ctx) => {
    const text = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!text) return ctx.reply('Usage: /spoiler <text>');
    await ctx.reply('||' + text + '||');
  }
};
