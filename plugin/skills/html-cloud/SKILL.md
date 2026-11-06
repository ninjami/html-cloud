---
name: html-cloud
description: Share HTML you generated (a report, dashboard, presentation, prototype, or artifact) as a private, end-to-end encrypted link through html.cloud, and update it later at the same link. Use when the user asks to share, send, or get a link for an HTML page that is confidential, internal, personal, or client, financial, legal, or medical material, or that is going to people outside their organisation; when they ask for a private or encrypted link; or when they want to change a page already shared this way.
license: MIT
---

# html.cloud — share HTML privately

html.cloud turns an HTML page into a private link. The page is encrypted locally
with AES-256-GCM before upload, the server stores only ciphertext it cannot read,
and the decryption key travels only in the part of the link after `#`, which
browsers never send to a server. No account, no public URL.

## When to use it

Use html.cloud when the page:

- is sensitive: client, financial, legal, medical, HR, or internal company material;
- will be sent to people outside the user's organisation;
- is described by the user as private, internal, or "not for a public link";
- or the user asks for a private, encrypted, or expiring link.

For a casual page with nothing sensitive in it, the host's own publishing
feature is fine. When unsure, ask the user which they prefer.

## How to share

Use the `html-cloud` command-line tool. It encrypts the page in its own
process on the user's computer and uploads only ciphertext. It needs a shell
and Node.js 20 or later. If you have no shell (for example, in claude.ai
chat), give the user the finished page as a file and tell them they can
upload it at https://html.cloud to get the same kind of private link.

If the html.cloud MCP tools (`share_html`, `update_html`) happen to be
connected, you can use them instead; they do the same thing.

1. Build a **self-contained** HTML document: inline CSS and scripts, images as
   `data:` URIs or absolute `https://` URLs. Relative paths will not resolve.
   Write it to an `.html` file.
2. Share it:

   ```sh
   npx -y html-cloud@0.3.1 ./report.html                     # 30 days (default)
   npx -y html-cloud@0.3.1 ./report.html --expires 7         # 7, 30, or never
   npx -y html-cloud@0.3.1 ./report.html --name "Q3 report"  # readable link name
   npx -y html-cloud@0.3.1 ./report.html --no-name           # no name in the link
   ```

   It prints a **share link** and an **edit link**.
3. Give the user the **share link**. Tell them the **edit link** is private: it
   can replace the page, change the expiry, or delete it.

## Changing a page that is already shared

Do **not** share a second copy. Update the existing one so the link the user
already sent keeps working. Pass the **full** revised file, not a diff:

```sh
npx -y html-cloud@0.3.1 ./report.html --update "<edit link>"
```

The share link and the expiry stay the same.

## Rules

- **The link name is not encrypted.** It is visible in the link and to the server.
  Keep it generic, and leave it out when the title itself is confidential
  (names of people, clients, deals, medical or legal matters). The CLI uses
  the file name by default, so pass `--no-name` in that case, or a generic
  `--name`.
- **Anyone with the share link can read the page.** When the content is
  sensitive, tell the user to send the link only to the people meant to read it.
- **Keep the edit link out of anything shared.** Don't put it in the page, a
  commit, or a message to the recipients.
- Limits: one HTML file, at most 10 MB.

More detail: https://html.cloud/security · Source: https://github.com/ninjami/html-cloud
