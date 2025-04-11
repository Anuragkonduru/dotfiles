--local builtin = require('telescope.builtin')
local keymap = vim.keymap.set
local opts = { silent = true }

vim.g.mapleader = ' '
vim.keymap.set('n', '<leader>pv', vim.cmd.Ex)

keymap('n', '<F5>', '<cmd> UndotreeToggle <CR> <cmd> UndotreeFocus <CR>', opts)

--tabs
keymap('n', '<leader>1', '1gt<CR>', opts)
keymap('n', '<leader>2', '2gt<CR>', opts)
keymap('n', '<leader>3', '3gt<CR>', opts)
keymap('n', '<leader>4', '4gt<CR>', opts)
keymap('n', '<leader>5', '5gt<CR>', opts)
keymap('n', '<leader>t', '<cmd> tabnew<CR>', opts)
keymap('n', '<leader>c', '<cmd> tabclose<CR>', opts)

keymap('n', '<leader>a', ':Alpha<CR>', opts)

keymap('v', 'p', '"_dP', opts)
keymap('i', 'jj', '<ESC>', opts)

keymap('v', '<', '<gv', opts)
keymap('v', '>', '>gv', opts)

-- keymap('n', '<leader>/', "<cmd>lua require('Comment.api').toggle.linewise.current()<CR>", opts)
-- keymap('x', '<leader>/', '<ESC><CMD>lua require("Comment.api").toggle.linewise(vim.fn.visualmode())<CR>')

keymap('n', '<C-/>', "<cmd>lua require('Comment.api').toggle.linewise.current()<CR>", opts)
keymap('x', '<C-/>/', '<ESC><CMD>lua require("Comment.api").toggle.linewise(vim.fn.visualmode())<CR>')

--custom
keymap('v', 'J', ":m '>+1<CR>gv=gv")
keymap('v', 'K', ":m '<-2<CR>gv=gv")

keymap('n', 'J', 'mzJ`z')
keymap('n', '<C-d>', '<C-d>zz')
keymap('n', '<C-u>', '<C-u>zz')

keymap('n', 'n', 'nzzzv')
keymap('n', 'N', 'Nzzzv')
keymap('n', '<leader>y', '"+y')
keymap('v', '<leader>y', '"+y')
keymap('n', '<leader>Y', '"+Y')
keymap('n', '<leader>x', '<cmd>!chmod +x %<CR>')
