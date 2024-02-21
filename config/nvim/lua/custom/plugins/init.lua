return {
  {
    "nvim-telescope/telescope.nvim", branch = '0.1.x',
    dependencies = { "nvim-lua/plenary.nvim" }
  },
  "lunarvim/synthwave84.nvim",
  {
    'nvim-treesitter/nvim-treesitter',
    dependencies = {
      'nvim-treesitter/nvim-treesitter-textobjects',
    },
    build = ':TSUpdate'
  },
  "mbbill/undotree",
  'tpope/vim-fugitive',--need to learn this is for git
  {
    "nvim-tree/nvim-tree.lua",
    version = "*",
    lazy = false,
    dependencies = {
      "nvim-tree/nvim-web-devicons",
    },
    config = function()
      require("nvim-tree").setup {}
    end,
  },
  {
    'nvim-lualine/lualine.nvim',
    opts = {
      options = {
        icons_enabled = false,
        theme = 'synthwave84',
        component_separators = '|',
        section_separators = '',
      },
    },
  },
  { 'numToStr/Comment.nvim', opts = {} },
  {
    'goolord/alpha-nvim',
    dependencies = { 'nvim-tree/nvim-web-devicons' },
    config = function ()
      require'alpha'.setup(require'alpha.themes.startify'.config)
    end
  },
  "lambdalisue/suda.vim",
  "jvgrootveld/telescope-zoxide",
  {
    "nvim-telescope/telescope-file-browser.nvim",
    dependencies = { "nvim-telescope/telescope.nvim", "nvim-lua/plenary.nvim" }
  },
  --Lsp from Here on
  {
    'williamboman/mason.nvim',
    'williamboman/mason-lspconfig.nvim',
    {
      'VonHeikemen/lsp-zero.nvim', 
      branch = 'v3.x'
    },
    'neovim/nvim-lspconfig',
    'hrsh7th/cmp-nvim-lsp',
    'hrsh7th/nvim-cmp',
    'L3MON4D3/LuaSnip',

  }
}
