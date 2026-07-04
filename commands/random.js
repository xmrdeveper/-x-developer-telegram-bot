module.exports = {
  name: 'random',
  description: 'Generate a random number.',
  execute: async (bot, ctx) => {
    const args = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1) : [];
    const max = args.length > 0 ? parseInt(args[0]) : 100;
    const num = Math.floor(Math.random() * max) + 1;
    await ctx.reply('🎲 Random number (1-' + max + '): ' + num);
  }
};
