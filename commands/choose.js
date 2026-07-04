module.exports = {
  name: 'choose',
  description: 'Pick one option from a list.',
  execute: async (bot, ctx) => {
    const args = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1) : [];
    if (args.length < 2) return ctx.reply('Usage: /choose option1 option2 option3...');
    const choice = args[Math.floor(Math.random() * args.length)];
    await ctx.reply('🎯 I choose: ' + choice);
  }
};
