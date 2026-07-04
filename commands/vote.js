module.exports = {
  name: 'vote',
  description: 'Start a voting session (placeholder).',
  execute: async (bot, ctx) => {
    await ctx.reply('Vote: use /poll to create a poll or implement a custom vote command.');
  }
};
