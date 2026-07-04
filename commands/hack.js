module.exports = {
  name: 'hack',
  description: 'Fake hacking animation.',
  execute: async (bot, ctx) => {
    await ctx.reply('🖥️ Initiating hack...\n█████████░ 90%\nHacking complete! 😎');
  }
};
