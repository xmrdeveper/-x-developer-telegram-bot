module.exports = {
  name: 'groupinfo',
  description: 'View complete information about the current group.',
  execute: async (bot, ctx) => {
    try {
      const chat = ctx.chat || {};
      await ctx.reply(`Title: ${chat.title || 'N/A'}\nType: ${chat.type || 'N/A'}\nID: ${chat.id || 'N/A'}\nDescription: ${chat.description || 'N/A'}`);
    } catch (err) {
      await ctx.reply(`Failed to get group info: ${err.message}`);
    }
  }
};
