module.exports = {
  name: '8ball',
  description: 'Ask the Magic 8 Ball.',
  execute: async (bot, ctx) => {
    const responses = [
      'Yes',
      'No',
      'Maybe',
      'Ask again later',
      'Definitely',
      'Don\'t count on it'
    ];
    await ctx.reply('🎱 Magic 8 Ball says: ' + responses[Math.floor(Math.random() * responses.length)]);
  }
};
