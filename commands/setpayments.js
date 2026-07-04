module.exports = {
  name: 'setpayments',
  description: 'Configure payment methods.',
  execute: async (bot, ctx) => {
    await ctx.reply('Payment methods configured (placeholder). Use secure payment gateways in production.');
  }
};
