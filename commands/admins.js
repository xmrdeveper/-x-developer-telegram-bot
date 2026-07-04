module.exports = {
  name: 'admins',
  description: 'List all group administrators.',
  execute: async (bot, ctx) => {
    try {
      const chatId = ctx.chat && ctx.chat.id;
      const admins = await ctx.telegram.getChatAdministrators(chatId);
      const list = admins.map(a => `${a.user.first_name || ''}${a.user.username ? ` (@${a.user.username})` : ''} - ${a.status}`).join('\n');
      await ctx.reply(`Administrators:\n${list}`);
    } catch (err) {
      await ctx.reply(`Failed to list admins: ${err.message}`);
    }
  }
};
