module.exports = {
  name: 'userinfo',
  description: 'Account Details',
  execute: async (bot, ctx) => ctx.reply(JSON.stringify(ctx.from, null, 2))
};
