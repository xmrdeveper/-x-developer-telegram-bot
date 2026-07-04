module.exports = {
  name: 'tagall',
  description: 'Mention all group members (best-effort placeholder).',
  execute: async (bot, ctx) => {
    await ctx.reply('Tagging all members is not supported directly via Bot API without a member list. Implement with stored members in database.');
  }
};
