module.exports = {
  name: 'setlimit',
  description: 'Set user limits.',
  execute: async (bot, ctx) => {
    const value = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!value) return ctx.reply('Usage: /setlimit <number>');
    await ctx.reply(`User limit set to: ${value} (placeholder).`);
  }
};
