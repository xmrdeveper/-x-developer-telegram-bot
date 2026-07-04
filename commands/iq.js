module.exports = {
  name: 'iq',
  description: 'Generate a fun IQ score.',
  execute: async (bot, ctx) => {
    const iq = Math.floor(Math.random() * 200) + 1;
    await ctx.reply(`🧠 IQ: ${iq}`);
  }
};
