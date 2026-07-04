module.exports = {
  name: 'automationhelp',
  description: 'Show help for all automation commands.',
  execute: async (bot, ctx) => {
    await ctx.reply('Use /automenu to view the Automation commands. Most automation features are placeholders and require scheduling, DB and owner checks to be enabled in production.');
  }
};
