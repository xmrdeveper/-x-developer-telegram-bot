module.exports = {
  name: 'say',
  description: 'Make the bot repeat your message.',
  execute: async (bot, ctx) => {
    const text = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!text) return ctx.reply('Usage: /say <text>');
    await ctx.reply(text);
  }
};
