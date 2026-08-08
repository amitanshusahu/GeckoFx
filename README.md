<div align="center">
  <img width="1280" height="640" alt="geckofx-github-thumb" src="https://github.com/user-attachments/assets/bbc38026-9bdb-4bd6-8063-73407b7bdbb5" />
  
</div>

> library of premium animated SVG components for modern websites. [live link](https://geckofx.geckostack.store/)

The modern web has become increasingly generic.

GeckoFX exists to bring back personality, engineering aesthetics, and visual identity through high-quality animated technical illustrations.

**Making the internet less slope.**

## CLI Usage

GeckoFX ships with a developer-first CLI that lets you install components, search the registry, and scaffold AI agent skills — all from your terminal.

### Installation

Install the `geckofx` package in your project to use the CLI:

```bash
npm install geckofx
# or
bun add geckofx
# or
yarn add geckofx
```

You can also run it without installing via `npx`.

### Commands

#### `npx geckofx`

Launch an interactive multiselect with a live searchable list of every component in the registry. Pick any number of components and they get added to your project.

```bash
npx geckofx
```

#### `npx geckofx add <name...>`

Add one or more components by name directly. Already have the component? The CLI will prompt you before overwriting.

```bash
# add a single component
npx geckofx add ConnectCube

# add multiple components at once
npx geckofx add ConnectCube ServerRack AI-Chip
```

Components are written to `src/components/fx/<Name>.tsx`.

#### `npx geckofx search <query>`

Query the component registry like a search engine. The query can be a component name, a keyword, a category, or even a description (e.g. `fan rotating`). Results are printed with the component name, description, recommendation status, and similar components.

```bash
npx geckofx search web3
npx geckofx search satellite
```

#### `npx geckofx find`

Loop-based search-and-add. Enter a query, get a filtered list of matching components, select the ones you want — then repeat with a new query until you're done. Perfect for exploring the registry.

```bash
npx geckofx find
```

#### `npx geckofx skill`

Scaffold the GeckoFX skill into your project as an AI agent skill for building SaaS landing pages with GeckoFX components.

```bash
npx geckofx skill
```

The skill is installed to `.agents/skills/geckofx-saas-landing-page-skill` in your project root.