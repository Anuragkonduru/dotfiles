At Start

```lua
require("keymaps")
```

Change Autoformat to

```lua
lazy = false,
```

autoformate setup

```lua
svelte = { { "prettierd", "prettier", stop_after_first = true } },
          astro = { { "prettierd", "prettier", stop_after_first = true } },
          javascript = { { "prettierd", "prettier", stop_after_first = true } },
          typescript = { { "prettierd", "prettier", stop_after_first = true } },
          javascriptreact = { { "prettierd", "prettier", stop_after_first = true } },
          typescriptreact = { { "prettierd", "prettier", stop_after_first = true } },
          json = { { "prettierd", "prettier", stop_after_first = true } },
          graphql = { { "prettierd", "prettier", stop_after_first = true } },
          java = { "google-java-format" },
          kotlin = { "ktlint" },
          ruby = { "standardrb" },
          markdown = { { "prettierd", "prettier", stop_after_first = true } },
          erb = { "htmlbeautifier" },
          html = { "htmlbeautifier" },
          bash = { "beautysh" },
          proto = { "buf" },
          rust = { "rustfmt" },
          yaml = { "yamlfix" },
          toml = { "taplo" },
          css = { { "prettierd", "prettier", stop_after_first = true } },
          scss = { { "prettierd", "prettier", stop_after_first = true } },
          sh = { "shellcheck" },
          go = { "gofmt" },
```


Uncomment for custiom packages

```lua
   { import = 'custom.plugins' },
```

At END

```lua
vim.o.background = "dark" -- or "light" for light mode
--vim.cmd([[colorscheme gruvbox]])
vim.cmd([[colorscheme catppuccin-mocha]])
--vim.cmd([[colorscheme dracula]])
```
