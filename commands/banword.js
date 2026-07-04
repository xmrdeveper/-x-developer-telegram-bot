module.exports = {
  name: 'banword',
  description: "Placeholder: Ban users who send a blocked word.",
  execute: async (bot, ctx) => {
    const word = ctx.message && ctx.message.text ? ctx.message.text.split(' ').slice(1).join(' ') : '';
    if (!word) return ctx.reply('Usage: /banword <word>');
    await ctx.reply(`Placeholder: /banword ${word} received. No action taken.`);
  }
};
