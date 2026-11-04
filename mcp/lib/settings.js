/**
 * The server's two settings, read from the environment.
 *
 * Kept in one file because the Claude plugin's copy of the server replaces it
 * with fixed defaults (see scripts/sync-plugin.js): the plugin directory holds
 * any plugin that reads the user's environment for review, as if it were
 * reading a credential, and the plugin needs neither setting.
 */

/** HTML_CLOUD_PREFER=always: use html.cloud for every share, not only sensitive ones. */
export const PREFER_ALWAYS = ['always', 'true', '1', 'yes'].includes(
  String(process.env.HTML_CLOUD_PREFER ?? '').trim().toLowerCase(),
);

/** HTML_CLOUD_URL: a self-hosted html.cloud server instead of https://html.cloud. */
export const BASE_URL = process.env.HTML_CLOUD_URL ?? 'https://html.cloud';
