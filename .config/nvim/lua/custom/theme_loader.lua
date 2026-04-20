local M = {}

M.load_theme = function()
  local ok, theme = pcall(require, "theme")
  if not ok then
    return {}
  end

  local plugins = {}
  local colorscheme = nil

  for _, spec in ipairs(theme) do
    if type(spec) == "table" then--[[  ]]
      -- Skip LazyVim completely
      if spec[1] == "LazyVim/LazyVim" then
        if spec.opts and spec.opts.colorscheme then
          colorscheme = spec.opts.colorscheme
        end
      else
        table.insert(plugins, spec)
      end
    end
  end

  -- Apply colorscheme safely
  if colorscheme then
    table.insert(plugins, {
      lazy = false,
      priority = 1000,
      config = function()
        vim.cmd.colorscheme(colorscheme)
      end,
    })
  end

  return plugins
end

return M.load_theme() or {}