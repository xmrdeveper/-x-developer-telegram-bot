module.exports = {
  name: 'nickname',
  description: 'Generate a cool nickname.',
  execute: async (bot, ctx) => {
    const prefixes = ['Shadow', 'Cyber', 'Night', 'Thunder'];
    const suffixes = ['Wolf', 'Knight', 'Master', 'Pro'];
    const nick = prefixes[Math.floor(Math.random() * prefixes.length)] + suffixes[Math.floor(Math.random() * suffixes.length)];
    await ctx.reply('🎭 Your nickname: ' + nick);
  }
};
