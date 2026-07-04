module.exports = {
  name: 'resetlink',
  description: 'Revoke the old invite link and create a new one (admin only).',
  execute: async (bot, ctx) => {
    try {
      const chatId = ctx.chat && ctx.chat.id;
      // In Telegram Bot API, exportChatInviteLink creates a new primary invite link and invalidates previous primary link
      const link = await ctx.telegram.exportChatInviteLink(chatId);
      await ctx.reply(`New invite link:\n${link}`);
    } catch (err) {
      await ctx.reply(`Failed to reset invite link: ${err.message}`);
    }
  }
};
