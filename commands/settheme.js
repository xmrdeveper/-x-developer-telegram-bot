module.exports = {
  name: 'settheme',
  description: 'Change the bot theme.',
  execute: async (bot, ctx) => {
    const theme = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!theme) return ctx.reply('Usage: /settheme <theme_name>');
    await ctx.reply(`Theme would be set to: ${theme} (placeholder)`);
  }
};
