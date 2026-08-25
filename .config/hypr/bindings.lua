-- Keep only your personal keybinding overrides here. Add new bindings or
-- unbind defaults before replacing them.

-- See current bindings and descriptions:
--   omarchy menu keybindings --print

-- To disable every Omarchy default binding, set this in
-- ~/.config/hypr/hyprland.lua before require("default.hypr.omarchy"), then add
-- only the bindings you want below:
--   omarchy_default_bindings = false

-- To disable all preinstalled app/webapp bindings, set:
--   omarchy_preinstalled_bindings = false

-- Add a new binding.
-- o.bind("SUPER + SHIFT + R", "SSH", "alacritty -e ssh your-server")

-- Change an existing binding by unbinding it first, then binding the key again.
-- This example changes SUPER+SPACE from the launcher to the Omarchy root menu.
-- hl.unbind("SUPER + SPACE")
-- o.bind("SUPER + SPACE", "Omarchy menu", "omarchy-menu toggle root")

-- Disable a default binding without replacing it.
-- hl.unbind("SUPER + SHIFT + B")

-- Logitech MX Keys examples:
-- o.bind("SUPER + SHIFT + S", nil, "omarchy-capture-screenshot")
-- o.bind("SUPER + H", nil, "voxtype record toggle")
-- o.bind("SUPER + PERIOD", nil, "omarchy-shell shell toggle omarchy.emojis")
-- Environemt Bindings
hl.env("XCURSOR_THEME", "Bibata-Modern-Ice")
hl.env("HYPRCURSOR_THEME", "Bibata-Modern-Ice")

-- My Custom Bindings
hl.unbind("SUPER + P")
hl.unbind("SUPER + W")
hl.unbind("SUPER + SHIFT + RETURN")
hl.unbind("SUPER + SHIFT + C")

o.bind("SUPER + D", "Apps Menu", "omarchy-menu toggle apps")
o.bind("SUPER + Q", "Close window", hl.dsp.window.close())
o.bind("SUPER + ALT + P", "Pseudo window", hl.dsp.window.pseudo())
o.bind("SUPER + B", "Browser", { omarchy = "browser" })
o.bind("SUPER + Z", "Zed Editor", "zed")
o.bind("SUPER + CTRL + C", "Clipboard manager", "omarchy-shell shell toggle omarchy.clipboard")
o.bind("SUPER + X", "Logout Menu", "omarchy-menu toggle system")
o.bind("SUPER + E", "Files", "Thunar")
o.bind("SUPER + M", "Files", "foot -e rmpc")


for workspace = 1, 10 do
  local key = "code:" .. tostring(workspace + 9)
  hl.unbind("SUPER + SHIFT + " .. key)
  hl.unbind("SUPER + SHIFT + ALT + " .. key)
  o.bind("ALT + " .. key, "Move window to workspace " .. workspace, hl.dsp.window.move({ workspace = tostring(workspace) }))
  o.bind("SUPER + SHIFT + " .. key, "Move window silently to workspace " .. workspace, hl.dsp.window.move({ workspace = tostring(workspace), follow = false }))
end
