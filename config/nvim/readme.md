**At Start**

```lua
require("keymaps")
```
**Change tan from >> to space**

**Add this at the start of lazy setup for Comment Funtionality**
```lua
  --  This is equivalent to:
  --    require("Comment").setup({})

  -- "gc" to comment visual regions/lines
  { "numToStr/Comment.nvim", opts = {} },
```
**Change Autoformat to**

```lua
lazy = false,
```

**Uncomment for custiom packages**

```lua
   { import = 'custom.plugins' },
```

**At END**

```lua
vim.o.background = "dark" -- or "light" for light mode
--vim.cmd([[colorscheme gruvbox]])
vim.cmd([[colorscheme catppuccin-mocha]])
--vim.cmd([[colorscheme dracula]])
```
