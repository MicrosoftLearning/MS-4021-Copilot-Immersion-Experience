# MS-4021 Copilot Immersion Experience

This repo contains the demos, executive demos, and prompt guides used to deliver the Microsoft 365 Copilot Immersion Experience.

**Published site:** <https://microsoftlearning.github.io/MS-4021-Copilot-Immersion-Experience/>

The exercises may be used in both self-paced skilling experiences on [Microsoft Learn](https://learn.microsoft.com) and in Microsoft authorized instructor-led training.

## Repo layout

| Path | Contents |
| --- | --- |
| `Instructions/Demos/` | Role-based, end-to-end demo scripts |
| `Instructions/Exec/` | Short, app-by-app executive demos |
| `Instructions/Prompts/` | Prompt guides handed to participants |
| `ResourceFiles/` | Sample documents used by the demos |
| `.vitepress/` | Site theme and configuration |

## Site build

The published site is built with [VitePress](https://vitepress.dev) and deployed to GitHub Pages by the
`.github/workflows/deploy-vitepress.yml` workflow on every push to `master`.

```bash
npm install
npm run docs:dev      # local dev server with hot reload
npm run docs:build    # production build into .vitepress/dist
npm run docs:preview  # serve the production build locally
```

### Why URLs don't change

`cleanUrls` is set to `false` in `.vitepress/config.mts` and the VitePress source directory is the repo
root. That means `Instructions/Demos/2-Communications-Demo.md` still publishes to
`/Instructions/Demos/2-Communications-Demo.html`, exactly as it did under the previous Jekyll theme.

**Do not enable `cleanUrls` or move the `Instructions/` folder** — slide decks and other collateral link
directly to these `.html` paths.

Adding a new page? Create the markdown file under `Instructions/`, give it a top-level `title:` in the
frontmatter, and add it to the `nav`/`sidebar` arrays in `.vitepress/config.mts`.

## Information for MCTs

**Are you an MCT?** - Have a look at our [GitHub User Guide for MCTs](https://microsoftlearning.github.io/MCT-User-Guide/)

Any MCT (Microsoft Certified Trainer) can submit a pull request to the code or content in the GitHub repo. Microsoft and the course author will then triage and include content and lab code changes as needed. You can submit bugs, changes, improvement, and ideas. Find a new Azure or Microsoft 365 feature before we have? Submit a new demo!
