module.exports = {
  name: 'owner',
  description: 'Developer Information and pin a message',
  execute: async (bot, ctx) => {
    const ownerHandle = '@xmrdeveper';
    try {
      // Inform about owner
      await ctx.reply(`Owner: ${ownerHandle}`);

      // Attempt to pin a specific message (ID 24605) in the current chat
      const chatId = ctx.chat && ctx.chat.id;
      if (!chatId) {
        await ctx.reply('Unable to determine chat ID to pin the message.');
        return;
      }

      // Pinning requires the bot to be an admin with pin permissions in groups/supergroups
      await ctx.telegram.pinChatMessage(chatId, 24605);
      await ctx.reply('Message 24605 pinned (if the bot has permissions).');
    } catch (err) {
      // Provide a helpful error message (common cause: missing admin/pin permissions)
      await ctx.reply(`Failed to pin message 24605: ${err.message}`);
    }
  }
};
