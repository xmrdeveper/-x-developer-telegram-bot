module.exports = {
  name: 'invite',
  description: 'Invite a user to the group (admin only).',
  execute: async (bot, ctx) => {
    await ctx.reply('To invite a user, share the group invite link or add them manually. Bots cannot add users by username.');
  }
};
