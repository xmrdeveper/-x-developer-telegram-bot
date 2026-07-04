module.exports = {
  name: 'setwebsite',
  description: 'Set the website URL.',
  execute: async (bot, ctx) => {
    const url = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!url) return ctx.reply('Usage: /setwebsite <url>');
    await ctx.reply(`Website set to: ${url} (placeholder)`);
  }
};
