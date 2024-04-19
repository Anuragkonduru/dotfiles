-- You can add your own plugins here or in other files in this directory!
--  I promise not to create any merge conflicts in this directory :)
--
-- See the kickstart.nvim README for more information
return {
	-- { "nvim-tree/nvim-web-devicons" },
	"mbbill/undotree",
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
		"goolord/alpha-nvim",
		dependencies = { "nvim-tree/nvim-web-devicons" },
		config = function()
			require("alpha").setup(require("alpha.themes.startify").config)
		end,
	},
	"lambdalisue/suda.vim",
	"lambdalisue/suda.vim",
	"jvgrootveld/telescope-zoxide",
	{
		"nvim-telescope/telescope-file-browser.nvim",
		dependencies = { "nvim-telescope/telescope.nvim", "nvim-lua/plenary.nvim" },
	},
	{ "ellisonleao/gruvbox.nvim", priority = 1000 , config = true, opts = ...},
	"Mofiqul/dracula.nvim",
	{ "catppuccin/nvim", name = "catppuccin", priority = 1000 }
}
