module.exports = {
  name: 'joke',
  description: 'Get a random joke.',
  execute: async (bot, ctx) => {
    const jokes = [
      'Why don\'t scientists trust atoms? Because they make up everything!',
      'I told my computer I needed a break, and now it won\'t stop sending me Kit-Kat ads.',
      'Why did the scarecrow win an award? He was outstanding in his field!'
    ];
    await ctx.reply('😂 ' + jokes[Math.floor(Math.random() * jokes.length)]);
  }
};
