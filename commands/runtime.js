module.exports = {
  name: 'runtime',
  description: 'Bot Runtime',
  execute: async (bot, ctx) => ctx.reply(`Uptime: ${process.uptime().toFixed(2)}s`) }
