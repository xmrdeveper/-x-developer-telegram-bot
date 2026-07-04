module.exports = {
  name: 'fact',
  description: 'Display a random fact.',
  execute: async (bot, ctx) => {
    const facts = [
      'Honey never spoils. Archaeologists have found 3000-year-old honey in Egyptian tombs that was still edible.',
      'A group of flamingos is called a "flamboyance."',
      'Octopuses have three hearts.'
    ];
    await ctx.reply('📚 ' + facts[Math.floor(Math.random() * facts.length)]);
  }
};
