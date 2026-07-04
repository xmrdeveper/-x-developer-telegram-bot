module.exports = {
  name: 'groupid',
  description: "Display the group's unique ID.",
  execute: async (bot, ctx) => {
    const chat = ctx.chat || {};
    await ctx.reply(`Group ID: ${chat.id || 'N/A'}`);
  }
};
