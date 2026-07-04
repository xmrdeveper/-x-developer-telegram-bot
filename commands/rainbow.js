module.exports = {
  name: 'rainbow',
  description: 'Convert text to rainbow style.',
  execute: async (bot, ctx) => {
    const text = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!text) return ctx.reply('Usage: /rainbow <text>');
    const colors = ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣'];
    const rainbow = text.split('').map((c, i) => colors[i % colors.length] + c).join('');
    await ctx.reply(rainbow);
  }
};
