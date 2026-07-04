module.exports = {
  name: 'roast',
  description: 'Generate a playful roast.',
  execute: async (bot, ctx) => {
    const roasts = [
      'You\'re not lazy, you\'re just on energy-saving mode.',
      'I\'d roast you, but my mom said I shouldn\'t burn trash.',
      'You\'re like a software update — whenever I see you, I think "not now."'
    ];
    await ctx.reply('🔥 ' + roasts[Math.floor(Math.random() * roasts.length)]);
  }
};
