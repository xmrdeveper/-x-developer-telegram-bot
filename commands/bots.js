module.exports = {
  name: 'bots',
  description: 'List all bots in the group (placeholder).',
  execute: async (bot, ctx) => {
    await ctx.reply('Listing bots requires fetching members (not available via Bot API). Implement with stored member list.');
  }
};
