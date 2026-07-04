module.exports = {
  name: 'challenge',
  description: 'Random fun challenge.',
  execute: async (bot, ctx) => {
    const challenges = [
      'Dance for 10 seconds.',
      'Sing a song.',
      'Tell a joke.'
    ];
    await ctx.reply('💪 Challenge: ' + challenges[Math.floor(Math.random() * challenges.length)]);
  }
};
