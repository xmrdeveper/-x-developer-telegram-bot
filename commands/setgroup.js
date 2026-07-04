module.exports = {
  name: 'setgroup',
  description: 'Configure the official group.',
  execute: async (bot, ctx) => {
    const group = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!group) return ctx.reply('Usage: /setgroup <group_link_or_id>');
    await ctx.reply(`Group set to: ${group} (placeholder)`);
  }
};
