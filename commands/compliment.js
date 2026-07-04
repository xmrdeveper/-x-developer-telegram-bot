module.exports = {
  name: 'compliment',
  description: 'Give someone a compliment.',
  execute: async (bot, ctx) => {
    const compliments = [
      'You\'re an awesome person!',
      'You light up the room!',
      'You\'re a great listener.'
    ];
    await ctx.reply('😊 ' + compliments[Math.floor(Math.random() * compliments.length)]);
  }
};
