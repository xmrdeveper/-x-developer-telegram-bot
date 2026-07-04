module.exports = {
  name: 'quote',
  description: 'Random inspirational quote.',
  execute: async (bot, ctx) => {
    const quotes = [
      '"The only way to do great work is to love what you do." - Steve Jobs',
      '"Innovation distinguishes between a leader and a follower." - Steve Jobs',
      '"Life is what happens when you\'re busy making other plans." - John Lennon'
    ];
    await ctx.reply('💭 ' + quotes[Math.floor(Math.random() * quotes.length)]);
  }
};
