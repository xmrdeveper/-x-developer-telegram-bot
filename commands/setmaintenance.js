module.exports = {
  name: 'setmaintenance',
  description: 'Enable or disable maintenance mode.',
  execute: async (bot, ctx) => {
    const arg = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!arg) return ctx.reply('Usage: /setmaintenance on|off');
    await ctx.reply(`Maintenance mode: ${arg} (placeholder).`);
  }
};
