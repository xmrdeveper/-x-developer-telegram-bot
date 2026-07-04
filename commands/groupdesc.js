module.exports = {
  name: 'groupdesc',
  description: 'Update the group description (admin only).',
  execute: async (bot, ctx) => {
    const chatId = ctx.chat && ctx.chat.id;
    const args = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!args) return ctx.reply('Usage: /groupdesc New description here');
    try {
      await ctx.telegram.setChatDescription(chatId, args);
      await ctx.reply('Group description updated.');
    } catch (err) {
      await ctx.reply(`Failed to update description: ${err.message}`);
    }
  }
};
