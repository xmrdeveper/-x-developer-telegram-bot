module.exports = {
  name: 'profile',
  description: 'User Profile',
  execute: async (bot, ctx) => {
    const u = ctx.from;
    await ctx.reply(`Profile:\nName: ${u.first_name || ''} ${u.last_name || ''}\nUsername: @${u.username || 'N/A'}\nID: ${u.id}`);
  }
};
