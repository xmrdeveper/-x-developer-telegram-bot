const fs = require('fs');
const path = require('path');

// Permissions utility for group-only and owner-only checks

const OWNER_ID = parseInt(process.env.OWNER_ID || '0');

/**
 * Check if the context is a group or supergroup (not private chat).
 * @param {Context} ctx - Telegram context
 * @returns {boolean} true if group/supergroup, false if private
 */
function isGroup(ctx) {
  return ctx.chat && (ctx.chat.type === 'group' || ctx.chat.type === 'supergroup');
}

/**
 * Check if the user is the bot owner.
 * @param {Context} ctx - Telegram context
 * @returns {boolean} true if user ID matches OWNER_ID
 */
function isOwner(ctx) {
  return ctx.from && ctx.from.id === OWNER_ID;
}

/**
 * Middleware-style: reply if not in a group.
 * @param {Context} ctx - Telegram context
 * @returns {boolean} true if group, false otherwise (and sends reply)
 */
async function requireGroup(ctx) {
  if (!isGroup(ctx)) {
    await ctx.reply('⛔ This command only works in groups or supergroups.');
    return false;
  }
  return true;
}

/**
 * Middleware-style: reply if not owner.
 * @param {Context} ctx - Telegram context
 * @returns {boolean} true if owner, false otherwise (and sends reply)
 */
async function requireOwner(ctx) {
  if (!isOwner(ctx)) {
    await ctx.reply('🔐 You do not have permission to use this command. Owner only.');
    return false;
  }
  return true;
}

module.exports = {
  isGroup,
  isOwner,
  requireGroup,
  requireOwner,
  OWNER_ID
};
