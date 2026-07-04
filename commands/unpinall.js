module.exports = {
  name: 'unpinall',
  description: 'Remove all pinned messages.',
  execute: async (bot, ctx) => {
    try {
      const chatId = ctx.chat && ctx.chat.id;
      await ctx.telegram.unpinAllChatMessages(chatId);
      await ctx.reply('All pinned messages removed.');
    } catch (err) {
      await ctx.reply(`Failed to unpin all: ${err.message}`);
    }
  }
};
