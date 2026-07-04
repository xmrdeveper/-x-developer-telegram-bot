module.exports = {
  name: 'crash',
  description: 'Fake system crash animation.',
  execute: async (bot, ctx) => {
    await ctx.reply('💥 SYSTEM CRASH!\nError: 0xDEADBEEF\nRebooting...\n🔄 System back online!');
  }
};
