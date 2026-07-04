module.exports = {
  name: 'truth',
  description: 'Get a Truth question.',
  execute: async (bot, ctx) => {
    const truths = [
      'What\'s your biggest fear?',
      'What\'s your most embarrassing moment?',
      'If you could change one thing about yourself, what would it be?'
    ];
    await ctx.reply('🤔 Truth: ' + truths[Math.floor(Math.random() * truths.length)]);
  }
};
