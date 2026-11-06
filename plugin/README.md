# html.cloud

Share the HTML that Claude makes for you (a report, dashboard, presentation,
prototype or invitation) as a private link, and update it later at the same
link. The page is encrypted on your computer before anything is uploaded, so
html.cloud stores only ciphertext it cannot read. No account, no public URL.

## What's inside

- **Skill** (`html-cloud`). It tells Claude when a private link fits (client,
  financial, legal, medical or internal material, or pages going outside your
  organisation), how to build a self-contained page, and how to share it with
  the open-source [`html-cloud`](https://www.npmjs.com/package/html-cloud)
  command-line tool ([source](https://github.com/ninjami/html-cloud/tree/main/cli)).
  It also tells Claude to update a page instead of sharing a second copy.

## Use it

Ask Claude to make a page and share it privately, for example: "Turn these
notes into a one-page report and give me a private link." Claude returns the
share link to send and an edit link to keep. Later, ask for a change ("add the
Q3 numbers") and Claude updates the same page.

## Where it works

The skill runs `npx html-cloud`, which needs a shell and Node.js 20 or later,
so sharing works in **Claude Code** and in **Cowork** sessions on your
computer. In chat on claude.ai, Claude gives you the page as a file instead,
and you can upload it yourself at [html.cloud](https://html.cloud).

## What it runs, sends and stores

- **Runs:** `npx -y html-cloud@0.3.1`, a pinned version of the html-cloud CLI
  from npm, with no dependencies. The plugin itself contains no program.
- **Reads:** only the one `.html` file Claude passes to the command.
  Nothing else from your computer or the conversation.
- **Sends:** to one host, `https://html.cloud`, only when you share or update
  a page: the AES-256-GCM ciphertext, the expiry you chose, an encrypted copy
  of the page key, a hash of the edit key, and, unless Claude passes
  `--no-name`, a short readable name for the link. That name is not encrypted.
- **Stores:** nothing on your computer. The keys exist only in the links
  returned to you, after the `#`, which browsers never send to a server.

## Privacy Policy

Full policy: [html.cloud/mcp-privacy](https://html.cloud/mcp-privacy).

- **Collection:** the HTML file you share, encrypted before it leaves your
  computer. No account, email, name or other personal data.
- **Use and storage:** html.cloud stores the ciphertext so the link works, and
  daily totals (for example, pages shared that day).
  Nothing per page or per person.
- **Third parties:** none. No analytics, no tracking, no crash reporting.
- **Retention:** a page stops working when its link expires (7 or 30 days, or
  never if you chose that), and its ciphertext is deleted by a daily clean-up.
  Deleting it with the edit link removes it at once.
- **Contact:** [viljami@ninjami.com](mailto:viljami@ninjami.com) or
  [GitHub issues](https://github.com/ninjami/html-cloud/issues).

Anyone with the share link can read the page, so send it only to the people meant to read it.
Keep the edit link private. More on the design: [html.cloud/security](https://html.cloud/security).

## License

MIT
