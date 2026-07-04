module.exports = {
  name: 'cute',
  description: 'Cute percentage calculator.',
  execute: async (bot, ctx) => {
    const percentage = Math.floor(Math.random() * 100);
    await ctx.reply(`🥰 Cuteness: ${percentage}%`);
  }
};
