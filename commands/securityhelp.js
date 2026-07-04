module.exports = {
  name: 'securityhelp',
  description: 'Show help for security commands.',
  execute: async (bot, ctx) => {
    await ctx.reply('Use /securitymenu to view all available security commands. Many commands are placeholders and require persistent storage, owner checks, or admin rights.');
  }
};
