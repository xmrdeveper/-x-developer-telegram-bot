module.exports = {
  name: 'ship',
  description: 'Calculate compatibility between two users.',
  execute: async (bot, ctx) => {
    const score = Math.floor(Math.random() * 100);
    await ctx.reply(`💕 Compatibility: ${score}%`);
  }
};
