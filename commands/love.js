module.exports = {
  name: 'love',
  description: 'Love percentage calculator.',
  execute: async (bot, ctx) => {
    const percentage = Math.floor(Math.random() * 100);
    await ctx.reply(`❤️ Love: ${percentage}%`);
  }
};
