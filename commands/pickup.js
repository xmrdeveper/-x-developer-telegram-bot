module.exports = {
  name: 'pickup',
  description: 'Pickup line generator.',
  execute: async (bot, ctx) => {
    const lines = [
      'Are you a parking ticket? You\'ve got FINE written all over you.',
      'Do you believe in love at first sight, or should I walk by again?',
      'If you were a vegetable, you\'d be a cute-cumber.'
    ];
    await ctx.reply('😉 ' + lines[Math.floor(Math.random() * lines.length)]);
  }
};
