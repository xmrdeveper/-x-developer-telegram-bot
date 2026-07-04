module.exports = {
  name: 'fortune',
  description: 'Receive a random fortune.',
  execute: async (bot, ctx) => {
    const fortunes = [
      'Good things come to those who wait.',
      'Your future is bright.',
      'An adventure awaits you.'
    ];
    await ctx.reply('🔮 ' + fortunes[Math.floor(Math.random() * fortunes.length)]);
  }
};
