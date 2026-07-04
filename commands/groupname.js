module.exports = {
  name: 'groupname',
  description: 'Change the group name (admin only).',
  execute: async (bot, ctx) => {
    const chatId = ctx.chat && ctx.chat.id;
    const args = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!args) return ctx.reply('Usage: /groupname New Group Name');
    try {
      await ctx.telegram.setChatTitle(chatId, args);
      await ctx.reply('Group name updated.');
    } catch (err) {
      await ctx.reply(`Failed to change group name: ${err.message}`);
    }
  }
};
