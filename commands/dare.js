module.exports = {
  name: 'dare',
  description: 'Get a Dare challenge.',
  execute: async (bot, ctx) => {
    const dares = [
      'Send a funny video to someone.',
      'Compliment the next person you see.',
      'Do 10 push-ups right now.'
    ];
    await ctx.reply('😈 Dare: ' + dares[Math.floor(Math.random() * dares.length)]);
  }
};
