<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class McpPrivacyPageTest extends TestCase
{
    use RefreshDatabase;

    /**
     * The plugin listing links here, so the page must cover the plugin and
     * disclose the one value that leaves the computer unencrypted.
     */
    public function test_privacy_policy_covers_the_plugin_and_the_unencrypted_link_name(): void
    {
        $response = $this->get('/mcp-privacy');

        $response->assertOk();
        $response->assertSee('The html.cloud plugin for Claude', false);
        $response->assertSee('<code>html-cloud</code> command-line tool', false);
        $response->assertSee('this name is not encrypted', false);
    }
}
