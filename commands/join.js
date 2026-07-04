module.exports = {
  name: 'join',
  description: 'Join a group using an invite link. (Users should open the link; bot cannot join on their behalf)',
  execute: async (bot, ctx) => {
    await ctx.reply('To join a group, open the invite link in Telegram. Bots cannot join groups on behalf of users.');
  }
};
