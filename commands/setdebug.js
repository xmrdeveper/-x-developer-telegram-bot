module.exports = {
  name: 'setdebug',
  description: 'Enable debug mode.',
  execute: async (bot, ctx) => {
    const arg = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    await ctx.reply(`Debug mode: ${arg || 'toggle'} (placeholder).`);
  }
};
