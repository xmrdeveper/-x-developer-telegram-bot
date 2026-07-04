module.exports = {
  name: 'setstatus',
  description: 'Update the bot status.',
  execute: async (bot, ctx) => {
    const status = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!status) return ctx.reply('Usage: /setstatus <status_text>');
    await ctx.reply(`Status set to: ${status} (placeholder)`);
  }
};
