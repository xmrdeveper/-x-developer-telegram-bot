module.exports = {
  name: 'aihelp',
  description: 'Show help for all AI commands.',
  execute: async (bot, ctx) => {
    await ctx.reply('Use /aimenu to view AI commands. Most AI commands are placeholders and require API keys (OPENAI_API_KEY or similar) to enable. Add OWNER_ID to restrict costly operations.');
  }
};
