module.exports = {
  name: 'ascii',
  description: 'Convert text to ASCII art.',
  execute: async (bot, ctx) => {
    const text = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!text) return ctx.reply('Usage: /ascii <text>');
    const ascii = '```\n' + text.toUpperCase().split('').join(' ') + '\n```';
    await ctx.reply(ascii);
  }
};
