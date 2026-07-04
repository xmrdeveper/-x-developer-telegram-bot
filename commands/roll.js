module.exports = {
  name: 'roll',
  description: 'Roll a die.',
  execute: async (bot, ctx) => {
    const roll = Math.floor(Math.random() * 6) + 1;
    await ctx.reply('🎲 You rolled: ' + roll);
  }
};
