module.exports = {
  name: 'emoji',
  description: 'Random emoji.',
  execute: async (bot, ctx) => {
    const emojis = ['😂', '🤣', '😍', '🔥', '💯', '✨', '🎉', '🚀'];
    await ctx.reply(emojis[Math.floor(Math.random() * emojis.length)]);
  }
};
