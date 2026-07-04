module.exports = {
  name: 'promote',
  description: 'Promote a member to administrator (admin only).',
  execute: async (bot, ctx) => {
    const args = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1) : [];
    if (!args.length) return ctx.reply('Usage: /promote <user_id>');
    const userId = parseInt(args[0], 10);
    const chatId = ctx.chat && ctx.chat.id;
    try {
      await ctx.telegram.promoteChatMember(chatId, userId, {can_change_info:true, can_delete_messages:true, can_invite_users:true, can_pin_messages:true, can_promote_members:false});
      await ctx.reply('Member promoted.');
    } catch (err) {
      await ctx.reply(`Failed to promote member: ${err.message}`);
    }
  }
};
