module.exports = {
  name: 'fakecall',
  description: 'Simulate a fake incoming call.',
  execute: async (bot, ctx) => {
    const names = ['Mom', 'Dad', 'Boss', 'Unknown'];
    const name = names[Math.floor(Math.random() * names.length)];
    await ctx.reply(`📞 Incoming call from: ${name}\n\n[Answer] [Reject]`);
  }
};
