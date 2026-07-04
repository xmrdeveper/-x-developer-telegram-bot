module.exports = {
  name: 'simp',
  description: 'Simp percentage.',
  execute: async (bot, ctx) => {
    const percentage = Math.floor(Math.random() * 100);
    await ctx.reply(`🤑 Simp level: ${percentage}%`);
  }
};
