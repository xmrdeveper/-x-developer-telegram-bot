module.exports = {
  name: 'virus',
  description: 'Fake virus scan.',
  execute: async (bot, ctx) => {
    await ctx.reply('🦠 Scanning...\n████░░░░░░ 40%\nVirus found: none\nSystem clean! ✅');
  }
};
