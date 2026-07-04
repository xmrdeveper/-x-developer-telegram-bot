module.exports = {
  name: 'fancy',
  description: 'Convert text to fancy fonts.',
  execute: async (bot, ctx) => {
    const text = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!text) return ctx.reply('Usage: /fancy <text>');
    const fancy = text.split('').map(c => /[a-z]/i.test(c) ? String.fromCharCode(c.charCodeAt(0) + 0x1D400) : c).join('');
    await ctx.reply(fancy);
  }
};
