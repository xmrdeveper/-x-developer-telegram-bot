module.exports = {
  name: 'remove',
  description: 'Remove a member from the group (admin only).',
  execute: async (bot, ctx) => {
    const args = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1) : [];
    if (!args.length) return ctx.reply('Usage: /remove <user_id>');
    const userId = parseInt(args[0], 10);
    const chatId = ctx.chat && ctx.chat.id;
    try {
      await ctx.telegram.kickChatMember(chatId, userId);
      await ctx.reply('Member removed.');
    } catch (err) {
      await ctx.reply(`Failed to remove member: ${err.message}`);
    }
  }
};
