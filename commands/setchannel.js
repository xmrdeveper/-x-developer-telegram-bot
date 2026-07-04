module.exports = {
  name: 'setchannel',
  description: 'Configure the official channel.',
  execute: async (bot, ctx) => {
    const channel = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!channel) return ctx.reply('Usage: /setchannel <@channel>');
    await ctx.reply(`Channel set to: ${channel} (placeholder)`);
  }
};
