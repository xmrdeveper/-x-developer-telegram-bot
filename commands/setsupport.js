module.exports = {
  name: 'setsupport',
  description: 'Set the support contact.',
  execute: async (bot, ctx) => {
    const contact = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!contact) return ctx.reply('Usage: /setsupport <contact>');
    await ctx.reply(`Support contact set to: ${contact} (placeholder)`);
  }
};
