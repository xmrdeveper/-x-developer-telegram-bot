module.exports = {
  name: 'members',
  description: 'Display the total member count.',
  execute: async (bot, ctx) => {
    try {
      const chatId = ctx.chat && ctx.chat.id;
      const chat = await ctx.telegram.getChat(chatId);
      await ctx.reply(`Members: ${chat && chat.all_members_are_administrators ? 'N/A' : (chat && chat.id ? 'Use getChatMembersCount via other API')}`);
    } catch (err) {
      await ctx.reply(`Failed to get members: ${err.message}`);
    }
  }
};
