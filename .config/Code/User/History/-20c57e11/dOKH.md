At Start
```lua
require("keymaps")
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