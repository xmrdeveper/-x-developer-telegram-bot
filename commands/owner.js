module.exports = {
  name: 'owner',
  description: 'Show the group owner.',
  execute: async (bot, ctx) => {
    try {
      const chatId = ctx.chat && ctx.chat.id;
      const admins = await ctx.telegram.getChatAdministrators(chatId);
      const owner = admins.find(a => a.status === 'creator');
      if (owner) {
        await ctx.reply(`Owner: ${owner.user.first_name || ''}${owner.user.username ? ` (@${owner.user.username})` : ''}`);
      } else {
        await ctx.reply('Owner not found.');
      }
    } catch (err) {
      await ctx.reply(`Failed to get owner: ${err.message}`);
    }
  }
};
