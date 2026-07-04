module.exports = {
  name: 'setowner',
  description: 'Configure the owner information.',
  execute: async (bot, ctx) => {
    const info = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!info) return ctx.reply('Usage: /setowner <@username or name>');
    await ctx.reply(`Owner info set to: ${info} (placeholder)`);
  }
};
