module.exports = {
  name: 'setlanguage',
  description: 'Change the bot language.',
  execute: async (bot, ctx) => {
    const lang = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!lang) return ctx.reply('Usage: /setlanguage <language_code>');
    await ctx.reply(`Language would be set to: ${lang} (placeholder)`);
  }
};
