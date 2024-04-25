# Slick Portfolio With Svelte.

Vercel-like style portfolio template for developers.

If you want to use the template as it is, you can :

- update files in `src/lib/data` with your data.
- update `src/lib/index.scss` for custom styling.
- update `static/favicon.ico` to customize the tab's icon.

Feel free to explore and hack the template to your needs if you feel like it.

Before deploying to `GitHub Pages`:

- make sure to change the `base` parameter in `svelte.config.js`.
- make sure to update the target branch of the `deploy.yml` file, it is set to build from `master` branch by default.
- Allow `GitHub Pages` in your repo settings with correct permissions:
  - Permissions:
    - go to your repo `Settings` > `Actions` > `General`
    - in `Actions permissions` : check `Allow all actions and reusable workflows`
  - Pages:
    - go to your repo's `Settings` > `Pages`
    - in Source section, select `Deploy from a branch`.
    - in Branch section, select `gh-pages` and `/ (root)` and click on save

if you did all the above `CORRECTLY`, and no workflow was launched, try to push another commit (maybe an empty one), otherwise you can create an issue and link your repo.

## Known issues:

- Svelte no longer support `node 14`, use a newer version instead.
