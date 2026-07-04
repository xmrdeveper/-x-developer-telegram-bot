module.exports = {
  name: 'unpin',
  description: 'Unpin a pinned message.',
  execute: async (bot, ctx) => {
    try {
      const chatId = ctx.chat && ctx.chat.id;
      const args = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1) : [];
      if (args.length) {
        const messageId = parseInt(args[0], 10);
        await ctx.telegram.unpinChatMessage(chatId, messageId);
        return ctx.reply('Message unpinned.');
      }
      // fallback: unpin all
      await ctx.telegram.unpinAllChatMessages(chatId);
      await ctx.reply('All pinned messages removed.');
    } catch (err) {
      await ctx.reply(`Failed to unpin: ${err.message}`);
    }
  }
};
