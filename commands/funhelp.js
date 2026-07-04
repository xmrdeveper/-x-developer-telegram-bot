module.exports = {
  name: 'funhelp',
  description: 'Show help for all fun commands.',
  execute: async (bot, ctx) => {
    await ctx.reply('🎲 Fun commands are designed for entertainment! Use /funmenu to view all available commands. Most commands work in groups and private chats.');
  }
};
