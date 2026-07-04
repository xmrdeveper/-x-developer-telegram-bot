module.exports = {
  name: 'report',
  description: 'Report a member to administrators.',
  execute: async (bot, ctx) => {
    const args = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    await ctx.reply(`Report received: ${args || 'No details provided'}`);
  }
};
