module.exports = {
  name: 'setautodelete',
  description: 'Set automatic message deletion.',
  execute: async (bot, ctx) => {
    const args = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!args) return ctx.reply('Usage: /setautodelete <seconds|off>');
    await ctx.reply(`Auto-delete set to: ${args} (placeholder)`);
  }
};
