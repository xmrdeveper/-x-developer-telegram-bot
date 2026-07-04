module.exports = {
  name: 'hot',
  description: 'Hotness rating.',
  execute: async (bot, ctx) => {
    const percentage = Math.floor(Math.random() * 100);
    await ctx.reply(`🔥 Hotness: ${percentage}%`);
  }
};
