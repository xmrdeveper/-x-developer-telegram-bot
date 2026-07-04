module.exports = {
  name: 'gay',
  description: 'Random percentage generator.',
  execute: async (bot, ctx) => {
    const percentage = Math.floor(Math.random() * 100);
    await ctx.reply(`🌈 Percentage: ${percentage}%`);
  }
};
