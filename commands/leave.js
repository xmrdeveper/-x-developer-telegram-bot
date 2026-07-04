module.exports = {
  name: 'leave',
  description: 'Leave the current group (bot will leave).',
  execute: async (bot, ctx) => {
    try {
      const chatId = ctx.chat && ctx.chat.id;
      await ctx.reply('Goodbye!');
      await ctx.telegram.leaveChat(chatId);
    } catch (err) {
      await ctx.reply(`Failed to leave chat: ${err.message}`);
    }
  }
};
