module.exports = {
  name: 'uptime',
  description: 'Server Uptime',
  execute: async (bot, ctx) => ctx.reply(`Server uptime: ${process.uptime().toFixed(2)}s`) }
