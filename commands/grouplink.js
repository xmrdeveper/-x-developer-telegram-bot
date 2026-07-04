module.exports = {
  name: 'grouplink',
  description: 'Generate the group invite link (admin only).',
  execute: async (bot, ctx) => {
    try {
      const chatId = ctx.chat && ctx.chat.id;
      const link = await ctx.telegram.exportChatInviteLink(chatId);
      await ctx.reply(`Invite link:\n${link}`);
    } catch (err) {
      await ctx.reply(`Failed to get invite link: ${err.message}`);
    }
  }
};
