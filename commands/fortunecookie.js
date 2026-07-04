module.exports = {
  name: 'fortunecookie',
  description: 'Open a virtual fortune cookie.',
  execute: async (bot, ctx) => {
    const fortunes = [
      'Good things are coming your way.',
      'Your hard work will pay off.',
      'Enjoy the moment.'
    ];
    await ctx.reply('🥠 ' + fortunes[Math.floor(Math.random() * fortunes.length)]);
  }
};
