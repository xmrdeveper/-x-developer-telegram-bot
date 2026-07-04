module.exports = {
  name: 'hidetag',
  description: 'Mention all members without displaying the mentions (placeholder).',
  execute: async (bot, ctx) => {
    await ctx.reply('Hidetag: feature requires building a member list and sending a message with invisible mentions. Placeholder implemented.');
  }
};
