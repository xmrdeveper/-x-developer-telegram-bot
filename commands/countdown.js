module.exports = {
  name: 'countdown',
  description: 'Start a countdown.',
  execute: async (bot, ctx) => {
    const args = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1) : [];
    const seconds = args.length > 0 ? parseInt(args[0]) : 5;
    await ctx.reply('⏱️ Countdown from ' + seconds + ' starting now!\n' + seconds + '...\n' + (seconds - 1) + '...\n' + (seconds - 2) + '...\n🎉 Done!');
  }
};
