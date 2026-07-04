module.exports = {
  name: 'mock',
  description: 'Convert text to mocking style.',
  execute: async (bot, ctx) => {
    const text = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!text) return ctx.reply('Usage: /mock <text>');
    let toggle = false;
    const mocked = text.split('').map(c => {
      if (/[a-z]/i.test(c)) {
        toggle = !toggle;
        return toggle ? c.toUpperCase() : c.toLowerCase();
      }
      return c;
    }).join('');
    await ctx.reply(mocked);
  }
};
