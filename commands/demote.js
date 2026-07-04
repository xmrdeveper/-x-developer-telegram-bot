module.exports = {
  name: 'demote',
  description: 'Remove administrator privileges (admin only).',
  execute: async (bot, ctx) => {
    const args = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1) : [];
    if (!args.length) return ctx.reply('Usage: /demote <user_id>');
    const userId = parseInt(args[0], 10);
    const chatId = ctx.chat && ctx.chat.id;
    try {
      await ctx.telegram.promoteChatMember(chatId, userId, {can_change_info:false, can_delete_messages:false, can_invite_users:false, can_pin_messages:false, can_promote_members:false, is_anonymous:false});
      await ctx.reply('Member demoted.');
    } catch (err) {
      await ctx.reply(`Failed to demote member: ${err.message}`);
    }
  }
};
