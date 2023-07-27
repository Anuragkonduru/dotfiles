-- COLORSCHEMES
-------------------------------------------------

-- Uncomment just ONE of the following colorschemes!
--local ok, _ = pcall(vim.cmd, 'colorscheme wal')
-- local ok, _ = pcall(vim.cmd, 'colorscheme base16-nord')
--local ok, _ = pcall(vim.cmd, 'colorscheme base16-oceanicnext')
--local ok, _ = pcall(vim.cmd, "colorscheme base16-onedark")
-- local ok, _ = pcall(vim.cmd, 'colorscheme palenight')
--local ok, _ = pcall(vim.cmd, 'colorscheme base16-tomorrow-night')

-- Highlight the region on yank
vim.api.nvim_create_autocmd("TextYankPost", {
	group = num_au,
	callback = function()
		vim.highlight.on_yank({ higroup = "Visual", timeout = 120 })
	end,
})

