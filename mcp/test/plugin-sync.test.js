import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const SCRIPT = fileURLToPath(new URL('../scripts/sync-plugin.js', import.meta.url));
const PLUGIN_SERVER = fileURLToPath(new URL('../../plugin/server/', import.meta.url));

test('the copy of the server inside the Claude plugin matches mcp/ and cli/', () => {
  const { status, stderr } = spawnSync(process.execPath, [SCRIPT, '--check'], { encoding: 'utf8' });

  assert.equal(status, 0, stderr);
});

test('the plugin copy never reads the user environment', () => {
  const sources = readdirSync(PLUGIN_SERVER, { recursive: true }).filter((file) => file.endsWith('.js'));

  assert.ok(sources.length > 0);
  for (const file of sources) {
    assert.doesNotMatch(readFileSync(PLUGIN_SERVER + file, 'utf8'), /process\.env/, file);
  }
});
