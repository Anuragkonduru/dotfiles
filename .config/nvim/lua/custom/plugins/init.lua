-- You can add your own plugins here or in other files in this directory!ini
--  I promise not to create any merge conflicts in this directory :)
--
-- See the kickstart.nvim README for more information
return {
  -- { "nvim-tree/nvim-web-devicons" },
  'mbbill/undotree',
  --[[{
		"nvim-tree/nvim-tree.lua",
		version = "*",
		lazy = false,
		dependencies = {
			"nvim-tree/nvim-web-devicons",
		},
		config = function()
			require("nvim-tree").setup({})
		end,
	},]]
  {
    'goolord/alpha-nvim',
    dependencies = { 'nvim-tree/nvim-web-devicons' },
    config = function()
      require('alpha').setup(require('alpha.themes.startify').config)
    end,
  },
  'lambdalisue/suda.vim',
  'lambdalisue/suda.vim',
  'jvgrootveld/telescope-zoxide',
  {
    'nvim-telescope/telescope-file-browser.nvim',
    dependencies = { 'nvim-telescope/telescope.nvim', 'nvim-lua/plenary.nvim' },
  },
  { 'ellisonleao/gruvbox.nvim', priority = 1000, config = true, opts = ... },
  'Mofiqul/dracula.nvim',
  {
    'catppuccin/nvim',
    name = 'catppuccin',
    priority = 1000,
    config = function()
      require('catppuccin').setup {
        transparent_background = false, -- Disable transparency
      }
      vim.cmd 'colorscheme catppuccin-mocha' -- Apply the theme
    end,
  },
  {
    'ThePrimeagen/harpoon',
    branch = 'harpoon2',
    config = function()
      local harpoon = require 'harpoon'
      ---@diagnostic disable-next-line: missing-parameter
      harpoon:setup()
      local function map(lhs, rhs, opts)
        vim.keymap.set('n', lhs, rhs, opts or {})
      end
      map('<leader>ha', function()
        harpoon:list():add()
      end)
      map('<leader>hl', function()
        harpoon.ui:toggle_quick_menu(harpoon:list())
      end)
      -- map("<c-h><c-h>", function() harpoon:list():select(3) end)
      -- map("<c-h><c-j>", function() harpoon:list():select(2) end)
      -- map("<c-h><c-k>", function() harpoon:list():select(3) end)
      -- map("<c-h><c-l>", function() harpoon:list():select(4) end)
    end,
  },
  {
    'MeanderingProgrammer/render-markdown.nvim',
    opts = {},
    dependencies = { 'nvim-treesitter/nvim-treesitter', 'echasnovski/mini.nvim' }, -- if you use the mini.nvim suite
    -- dependencies = { 'nvim-treesitter/nvim-treesitter', 'echasnovski/mini.icons' }, -- if you use standalone mini plugins
    -- dependencies = { 'nvim-treesitter/nvim-treesitter', 'nvim-tree/nvim-web-devicons' }, -- if you prefer nvim-web-devicons
  },
  {
    'iamcco/markdown-preview.nvim',
    cmd = { 'MarkdownPreviewToggle', 'MarkdownPreview', 'MarkdownPreviewStop' },
    build = 'cd app && npm install',
    init = function()
      vim.g.mkdp_filetypes = { 'markdown' }
    end,
    ft = { 'markdown' },
  },
  {
    'tpope/vim-fugitive',
  },
  { 'rose-pine/neovim', name = 'rose-pine' },
  {
    'maxmx03/solarized.nvim',
    lazy = false,
    priority = 1000,
    ---@type solarized.config
    opts = {},
    config = function(_, opts)
      vim.o.termguicolors = true
      vim.o.background = 'light'
      require('solarized').setup(opts)
      vim.cmd.colorscheme 'solarized'
    end,
  },
  {
    'kevinhwang91/nvim-ufo',
    dependencies = { 'kevinhwang91/promise-async' },
  },
  -- add this to your lua/plugins.lua, lua/plugins/init.lua,  or the file you keep your other plugins:
  {
    'numToStr/Comment.nvim',
    opts = {
      -- add any options here
    },
  },
  {
    'szw/vim-maximizer',
    keys = {
      { '<leader>sm', '<cmd>MaximizerToggle<CR>', desc = 'Maximize/minimize a split' },
    },
  },
  -- lazy.nvim
  {
    'folke/noice.nvim',
    event = 'VeryLazy',
    opts = {
      -- add any options here
    },
    dependencies = {
      -- if you lazy-load any plugin below, make sure to add proper `module="..."` entries
      'MunifTanjim/nui.nvim',
      -- OPTIONAL:
      --   `nvim-notify` is only needed, if you want to use the notification view.
      --   If not available, we use `mini` as the fallback
      'rcarriga/nvim-notify',
    },
    keys = {
      { '<leader>nd', '<cmd>NoiceDismiss<CR>', desc = 'Dismiss Noice Messages' },
    },
  },
  {
    'kevinhwang91/nvim-ufo',
    dependencies = 'kevinhwang91/promise-async',
    event = 'VimEnter', -- needed for folds to load in time and comments closed
    keys = {
			-- stylua: ignore start
			{ "zm", function() require("ufo").closeAllFolds() end, desc = " 󱃄 Close All Folds" },
			{ "zr", function() require("ufo").openFoldsExceptKinds { "comment", "imports" } end, desc = " 󱃄 Open All Regular Folds" },
			{ "zR", function() require("ufo").openFoldsExceptKinds {} end, desc = " 󱃄 Open All Folds" },
			{ "z1", function() require("ufo").closeFoldsWith(1) end, desc = " 󱃄 Close L1 Folds" },
			{ "z2", function() require("ufo").closeFoldsWith(2) end, desc = " 󱃄 Close L2 Folds" },
			{ "z3", function() require("ufo").closeFoldsWith(3) end, desc = " 󱃄 Close L3 Folds" },
			{ "z4", function() require("ufo").closeFoldsWith(4) end, desc = " 󱃄 Close L4 Folds" },
      -- stylua: ignore end
    },
    opts = {
      -- New config replacing deprecated option
      close_fold_kinds_for_ft = {
        lua = { 'imports', 'comment' },
        python = { 'imports', 'comment' },
        typescript = { 'imports', 'comment' },
        javascript = { 'imports', 'comment' },
        -- Add other filetypes as needed
      },
    },
  },
  {
    'NvChad/nvim-colorizer.lua',
    opts = {
      user_default_options = {
        tailwind = true,
      },
    },
  },
  {
    'akinsho/bufferline.nvim',
    enabled = true,
  },
}
