--local builtin = require('telescope.builtin')
local keymap = vim.keymap.set
local opts = { silent = true }

vim.g.mapleader = " "
vim.keymap.set("n", "<leader>pv", vim.cmd.Ex)

--Telescope find files
keymap("n", "<C-p>", ":Telescope find_files<CR>", opts)
keymap("n", "<leader>ff", ":Telescope git_files<CR>", opts)
keymap("n", "<leader>fs", ":Telescope live_grep<CR>", opts)
keymap("n", "<leader>fp", ":Telescope zoxide list<CR>", opts)
keymap("n", "<leader>fb", ":Telescope buffers<CR>", opts)
keymap("n", "<space>fe", ":Telescope file_browser<CR>", opts)

keymap("n", "<leader>n", ":NvimTreeToggle<CR>", { noremap = true, silent = true })

keymap("n", "<F5>", "<cmd> UndotreeToggle <CR> <cmd> UndotreeFocus <CR>", opts)

--tabs
keymap("n", "<Leader>1", "1gt<CR>", opts)
keymap("n", "<Leader>2", "2gt<CR>", opts)
keymap("n", "<Leader>3", "3gt<CR>", opts)
keymap("n", "<Leader>4", "4gt<CR>", opts)
keymap("n", "<Leader>5", "5gt<CR>", opts)
keymap("n", "<Leader>t", "<cmd> tabnew<CR>", opts)
keymap("n", "<Leader>c", "<cmd> tabclose<CR>", opts)


keymap("n", "<leader>a", ":Alpha<CR>", opts)

keymap("v", "p", '"_dP', opts)
keymap("i", "jj", "<ESC>", opts)

keymap("v", "<", "<gv", opts)
keymap("v", ">", ">gv", opts)

keymap("n", "<leader>/", "<cmd>lua require('Comment.api').toggle.linewise.current()<CR>", opts)
keymap("x", "<leader>/", '<ESC><CMD>lua require("Comment.api").toggle.linewise(vim.fn.visualmode())<CR>')

keymap("n", "<C-/>", "<cmd>lua require('Comment.api').toggle.linewise.current()<CR>", opts)
keymap("x", "<C-/>/", '<ESC><CMD>lua require("Comment.api").toggle.linewise(vim.fn.visualmode())<CR>')

--custom
keymap("v", "J", ":m '>+1<CR>gv=gv")
keymap("v", "K", ":m '<-2<CR>gv=gv")

keymap("n", "J", "mzJ`z")
keymap("n", "<C-d>", "<C-d>zz")
keymap("n", "<C-u>", "<C-u>zz")

keymap("n", "n", "nzzzv")
keymap("n", "N", "Nzzzv")
keymap("n", "<leader>y", '"+y')
keymap("v", "<leader>y", '"+y')
keymap("n", "<leader>Y", '"+Y')
keymap("n", "<leader>x", "<cmd>!chmod +x %<CR>")


keymap()



 { "<leader>A", function() require("harpoon"):list():append() end, desc = "harpoon file", },
    	  { "<leader>a", function() local harpoon = require("harpoon") harpoon.ui:toggle_quick_menu(harpoon:list()) end, desc = "harpoon quick menu", },
    	  { "<leader>1", function() require("harpoon"):list():select(1) end, desc = "harpoon to file 1", },
    	  { "<leader>2", function() require("harpoon"):list():select(2) end, desc = "harpoon to file 2", },
    	  { "<leader>3", function() require("harpoon"):list():select(3) end, desc = "harpoon to file 3", },
    	  { "<leader>4", function() require("harpoon"):list():select(4) end, desc = "harpoon to file 4", },
    	  { "<leader>5", function() require("harpoon"):list():select(5) end, desc = "harpoon to file 5", },

