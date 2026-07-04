const { requireOwner } = require('../utils/permissions');

module.exports = {
  name: 'stats',
  description: 'View bot statistics (owner-only).',
  execute: async (bot, ctx) => {
    if (!(await requireOwner(ctx))) return;
    const uptime = process.uptime();
    const hours = Math.floor(uptime / 3600);
    const mins = Math.floor((uptime % 3600) / 60);
    await ctx.reply(`📊 Bot Stats:\nUptime: ${hours}h ${mins}m\nMemory: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\nPlatform: Node.js`);
  }
};
