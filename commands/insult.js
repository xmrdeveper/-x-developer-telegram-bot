module.exports = {
  name: 'insult',
  description: 'Generate a lighthearted insult.',
  execute: async (bot, ctx) => {
    const insults = [
      'You\'re a limited edition.',
      'You\'re proof that evolution can go in reverse.',
      'You\'re a reminder of what I don\'t want to be.'
    ];
    await ctx.reply('😏 ' + insults[Math.floor(Math.random() * insults.length)]);
  }
};
