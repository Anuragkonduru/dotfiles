from libqtile import bar, layout, widget,qtile
from libqtile.config import Click, Drag, Group, Key, Match, Screen,ScratchPad, DropDown
from libqtile.lazy import lazy
from libqtile.utils import guess_terminal
import os
import subprocess
from libqtile import hook
from qtile_extras.widget.decorations import BorderDecoration
import colors

mod = "mod4"
#terminal = guess_terminal()
terminal = 'kitty'
colors, backgroundColor, foregroundColor, workspaceColor, chordColor = colors.catppuccin()

@lazy.function
def minimize_all(qtile):
    for win in qtile.current_group.windows:
        if hasattr(win, "toggle_minimize"):
            win.toggle_minimize()

keys = [
    Key([mod], "h", lazy.layout.left(), desc="Move focus to left"),
    Key([mod], "l", lazy.layout.right(), desc="Move focus to right"),
    Key([mod], "j", lazy.layout.down(), desc="Move focus down"),
    Key([mod], "k", lazy.layout.up(), desc="Move focus up"),
    Key([mod], "space", lazy.layout.next(), desc="Move window focus to other window"),
    Key([mod, "shift"], "h", lazy.layout.shuffle_left(), desc="Move window to the left"),
    Key([mod, "shift"], "l", lazy.layout.shuffle_right(), desc="Move window to the right"),
    Key([mod, "shift"], "j", lazy.layout.shuffle_down(), desc="Move window down"),
    Key([mod, "shift"], "k", lazy.layout.shuffle_up(), desc="Move window up"),
    Key([mod, "control"], "h", lazy.layout.grow_left(), desc="Grow window to the left"),
    Key([mod, "control"], "l", lazy.layout.grow_right(), desc="Grow window to the right"),
    Key([mod, "control"], "j", lazy.layout.grow_down(), desc="Grow window down"),
    Key([mod, "control"], "k", lazy.layout.grow_up(), desc="Grow window up"),
    Key([mod], "n", lazy.layout.normalize(), desc="Reset all window sizes"),
    Key(
        [mod, "shift"],
        "Return",
        lazy.layout.toggle_split(),
        desc="Toggle between split and unsplit sides of stack",
    ),
    Key([mod], "Return", lazy.spawn(terminal), desc="Launch terminal"),
    Key([mod], "Tab", lazy.next_layout(), desc="Toggle between layouts"),
    Key([mod], "q", lazy.window.kill(), desc="Kill focused window"),
    Key([mod, "control"], "r", lazy.reload_config(), desc="Reload the config"),
   # Key([mod], "x", lazy.shutdown(), desc="Shutdown Qtile"),
    Key([mod], "r", lazy.spawncmd(), desc="Spawn a command using a prompt widget"),
    Key([mod], "x", lazy.spawn("archlinux-logout"), desc="Shutdown Qtile"),
    Key([mod],"d", lazy.spawn('/home/anu/.config/rofi/launchers/type-1/launcher.sh'), desc="Spawn Rofi"),
    #Key([mod], "p", lazy.spawn("firefox"), desc="Spawn browser"),
    Key([mod], "p", lazy.spawn("librewolf"), desc="Spawn browser"),
    Key([mod], "e", lazy.spawn("thunar"), desc="Spawn file manager"),
    Key([mod], "v", lazy.spawn("code"), desc="Spawn Visual Studio code"),
   # Key([mod,"control"], "s", lazy.spawn("spotify"), desc="Spawn spotify"),
    Key([mod], "c", lazy.spawn("copyq menu"), desc="Spawn clipboard"),
    Key([mod], "o", lazy.spawn("md.obsidian.Obsidian"), desc="Spawn clipboard"),
    Key([mod,"shift"], "z", lazy.spawn("rofi -show emoji -theme /home/anu/.config/rofi/launchers/type-1/style-5.rasi"), desc="Spawn rofi with emojis"),
    Key([mod,"shift"], "a", lazy.spawn("rofi -show calc -no-show-match -no-sort -theme /home/anu/.config/rofi/launchers/type-1/style-5.rasi"), desc="Spawn rofi with calc"),
    Key([],"Print", lazy.spawn("flameshot gui"), desc="screenshot"),
    Key([mod],"Print", lazy.spawn("flameshot screen -n 0 -p /home/anu/Pictures/Screenshots"), desc="screenshot"),
    Key([mod,"shift"],"Print", lazy.spawn("flameshot full -p /home/anu/Pictures/Screenshots"), desc="screenshot"),
    Key([],"XF86AudioRaiseVolume", lazy.spawn("pactl set-sink-volume @DEFAULT_SINK@ +5%"), desc="screenshot"),
    Key([],"XF86AudioLowerVolume", lazy.spawn("pactl set-sink-volume @DEFAULT_SINK@ -5%"), desc="screenshot"),
    Key([],"XF86AudioMute", lazy.spawn("pactl set-sink-mute @DEFAULT_SINK@ toggle"), desc="screenshot"),
    Key([],"XF86AudioNext", lazy.spawn("playerctl next"), desc="screenshot"),
    Key([],"XF86AudioPrev", lazy.spawn("playerctl previous"), desc="screenshot"),
    Key([],"XF86AudioPlay", lazy.spawn("playerctl play-pause"), desc="screenshot"),
    Key([],"XF86AudioStop", lazy.spawn("playerctl stop"), desc="screenshot"),
    Key([],"XF86MonBrightnessUp", lazy.spawn("brightnessctl set +20%"), desc="screenshot"),
    Key([],"XF86MonBrightnessDown", lazy.spawn("brightnessctl set 20%-"), desc="screenshot"),
    Key([mod], "f",lazy.window.toggle_fullscreen(),desc='toggle fullscreen'),
    Key([mod], "period",lazy.next_screen(),desc='Move focus to next monitor'),
    Key([mod], "comma",lazy.prev_screen(),desc='Move focus to prev monitor'),
    Key([mod, "control"], "right",lazy.spawn("variety -n"),desc='Next Wallpaper for Variety'),
    Key([mod, "control"], "left",lazy.spawn("variety -p"),desc='Prev Wallpaper for Variety'),
    Key([mod], "m",lazy.window.toggle_minimize(),desc='Toggle minimization on focused window'),
    Key([mod, "control"], "m",minimize_all(),desc='Toggle minimise for all Windows'),
    Key([mod,"shift"],"1", lazy.spawn("xrandr --output HDMI-A-1-0 --rate 75 --right-of eDP --rate 60 --auto"), desc="Extended Monitors"),
    Key([mod,"shift"],"2", lazy.spawn("xrandr --output eDP --off --output DisplayPort-0 --off --output HDMI-A-1-0 --primary --mode 1920x1080 --pos 1920x0 --rotate normal"), desc="Monitor Only"),
    Key([mod,"shift"],"3", lazy.spawn("xrandr --output eDP --primary --mode 1920x1080 --pos 0x0 --rotate normal --output DisplayPort-0 --off --output HDMI-A-1-0 --off"), desc="Laptop only"),

]
groups = []

group_names = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "minus", "equal"]

#group_labels = ["", "", "", "", "", "", "", "", "ﭮ", "", "", "﨣"]
group_labels = ["", "", "", "󰨞", "", "", "󱑤", "󱄢", "", "", "󰺵", "󱧣"]
#group_labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

group_layouts = ["monadtall", "monadtall", "monadtall", "monadtall", "monadtall", "monadtall", "monadtall", "monadtall", "monadtall", "monadtall", "monadtall", "monadtall", "monadtall", "monadtall"]

# Add group names, labels, and default layouts to the groups object.
for i in range(len(group_names)):
    groups.append(
        Group(
            name=group_names[i],
            layout=group_layouts[i].lower(),
            label=group_labels[i],
        ))

for i in groups:
    keys.extend(
        [
            # mod1 + letter of group = switch to group
            Key(
                [mod],
                i.name,
                lazy.group[i.name].toscreen(),
                desc="Switch to group {}".format(i.name),
            ),
            Key(
                ["mod1"],
                i.name,
                lazy.window.togroup(i.name, switch_group=True),
                desc="Switch to & move focused window to group {}".format(i.name),
            ),
        ]
    )
from libqtile.dgroups import simple_key_binder
dgroups_key_binder = simple_key_binder("mod4")


# Define scratchpads
groups.append(ScratchPad("scratchpad", [
    DropDown("term", "kitty --class=scratch", width=0.5, height=0.5, x=0.25, y=0.22, opacity=1),
    DropDown("ranger", "kitty --class=ranger -e ranger", width=0.5, height=0.5, x=0.25, y=0.22, opacity=0.9),
    DropDown("music", "kitty --class=ncmpcpp -e ncmpcpp", width=0.5, height=0.5, x=0.25, y=0.22, opacity=0.9),
    DropDown("volume", "pavucontrol", width=0.5, height=0.5, x=0.25, y=0.22, opacity=0.9),
    DropDown("bluetooth", "blueman-manager", width=0.5, height=0.5, x=0.25, y=0.22, opacity=0.9),
    DropDown("spotify", "spotify", width=0.5, height=0.5, x=0.25, y=0.22, opacity=0.9),
]))
# Scratchpad keybindings
keys.extend([
    Key([mod, "shift"], "Return", lazy.group['scratchpad'].dropdown_toggle('term')),
    Key([mod, "shift"], "e", lazy.group['scratchpad'].dropdown_toggle('ranger')),
    Key([mod, "shift"], "m", lazy.group['scratchpad'].dropdown_toggle('music')),
    Key([mod, "shift"], "v", lazy.group['scratchpad'].dropdown_toggle('volume')),
    Key([mod, "shift"], "b", lazy.group['scratchpad'].dropdown_toggle('bluetooth')),
    Key([mod, "shift"], "s", lazy.group['scratchpad'].dropdown_toggle('spotify')),
])

layout_theme = {"border_width": 2,
            "margin_y" : 6,
            "margin_x" : 6,
            "margin": 6,
                "border_focus": colors[2],
                "border_normal": backgroundColor
                }



layouts = [
    layout.MonadTall(**layout_theme),
    layout.MonadWide(**layout_theme),
    layout.VerticalTile(**layout_theme),
    layout.Matrix(**layout_theme),
    layout.Columns(**layout_theme),
    #layout.Max(),
    # Try more layouts by unleashing below layouts.
    #layout.Stack(num_stacks=2),
    layout.Bsp(**layout_theme),
    #layout.RatioTile(border_focus_stack=["#d75f5f", "#8f3d3d"], border_width=4),
    #layout.Tile(border_focus_stack=["#d75f5f", "#8f3d3d"], border_width=4),
    #layout.TreeTab(border_focus_stack=["#d75f5f", "#8f3d3d"], border_width=4),
    #layout.Zoomy(border_focus_stack=["#d75f5f", "#8f3d3d"], border_width=4), 
]

widget_defaults = dict(
    font="Finger Paint",
    fontsize=13,
    padding=3,
    background=backgroundColor,
)
extension_defaults = widget_defaults.copy()


def init_widgets_list(monitor_num):
    widgets_list = [
        widget.GroupBox(
            font="Finger Paint",
            fontsize = 20,
            margin_y = 2,
            margin_x = 4,
            padding_y = 0,
            padding_x = 4,
            borderwidth = 2,
            disable_drag = True,
            active = colors[4],
            inactive = foregroundColor,
            hide_unused = False,
            rounded = True,
            highlight_method = "default",
            highlight_color = [backgroundColor, backgroundColor],
            this_current_screen_border = colors[5],
            this_screen_border = colors[7],
            other_screen_border = colors[6],
            other_current_screen_border = colors[6],
            urgent_alert_method = "line",
            urgent_border = colors[9],
            urgent_text = colors[1],
            foreground = foregroundColor,
            background = backgroundColor,
            use_mouse_wheel = False
        ),
        widget.TaskList(
            icon_size = 0,
            font = "Finger Paint",
            foreground = colors[5],
            background = colors[0],
            borderwidth = 0,
            border = colors[1],
            margin = 0,
            padding = 6,
            highlight_method = "block",
            title_width_method = "uniform",
            urgent_alert_method = "border",
            urgent_border = colors[1],
            rounded = True,
            txt_floating = "🗗 ",
            txt_maximized = "🗖 ",
            txt_minimized = "🗕 ",
        ),
        widget.Sep(
            linewidth = 1,
            padding = 8,
            foreground = colors[5],
            background = backgroundColor,
            rounded = True,
        ),
        # widget.Sep(
        # linewidth = 0,
       #     padding = 8
       #),
       # widget.TextBox(
       #     text = "",
       #     fontsize = 26,
       #     font = "Finger Paint",
       #     foreground = colors[5],
       # ),
       # widget.Battery(
       #    format = '{percent:2.0%}',
       #     font = "Finger Paint",
       #     padding = 8,
       #     foreground = foregroundColor,
       #     background = backgroundColor
       # ),
       # widget.TextBox(
       #     text = "󰕾.",
       #    fontsize = 20,
       #     font = "Finger Paint",
       #     foreground = colors[8],
       #     linewidth = 0,
       #     padding = 0
       # ),
       # widget.Volume(
       #                foreground = foregroundColor,
       #                background = backgroundColor,
       #                fmt = '{}',
       #                padding = 5,
       #                rounded = True,
       #                decorations=[
       #                    BorderDecoration(
       #                        colour = colors[8],
       #                        border_width = [0, 0, 2, 0],
       #                        padding_x = 5,
       #                        padding_y = None,
       #                    )
       #                ],
       #     
       #),
        widget.Sep(
            linewidth = 0,
            padding = 10
        ),
        widget.TextBox(
            text = "↓",
            fontsize = 15,
            font = "Finger Paint",
            foreground = colors[9],
            linewidth = 0,
            padding = 0
        ),
        widget.Net(
                       interface = "wlan0",
                       format = '{down}',
                       foreground = foregroundColor,
                       background = backgroundColor,
                       padding = 5,
                       decorations=[
                           BorderDecoration(
                               colour = colors[8],
                               border_width = [0, 0, 2, 0],
                               padding_x = 5,
                               padding_y = None,
                           )
                       ],
                       ),
        widget.Sep(
            linewidth = 0,
            padding = 8
        ),
        widget.TextBox(
            text = "󱑋",
            fontsize = 20,
            font = "Finger Paint",
            foreground = colors[10],
        ),
        widget.Clock(
            format='%I:%M %p',
            font = "Finger Paint",
            padding = 8,
            foreground = foregroundColor
        ),
        widget.Systray(
            background = backgroundColor,
            icon_size = 20,
            padding = 4,
        ),
        widget.Sep(
            linewidth = 1,
            padding = 6,
            foreground = colors[5],
            background = backgroundColor
        ),
        widget.CurrentLayoutIcon(
            scale = 0.5,
            foreground = foregroundColor,
            background = backgroundColor
        ),
    ]

    return widgets_list

def init_secondary_widgets_list(monitor_num):
    secondary_widgets_list = init_widgets_list(monitor_num)
    del secondary_widgets_list[9:10]
    return secondary_widgets_list

widgets_list = init_widgets_list("1")
secondary_widgets_list = init_secondary_widgets_list("2")

window_name = widget.WindowName()
screens = [
    Screen(
        top=bar.Bar(
            widgets=widgets_list,
            size=30,
            background=backgroundColor,
            margin=6, 
            opacity=1,
            # border_width=[2, 0, 2, 0],  # Draw top and bottom borders
            # border_color=["ff00ff", "000000", "ff00ff", "000000"]  # Borders are magenta
        ),
    ),
    Screen(
         top=bar.Bar(
            widgets=secondary_widgets_list,
            size=30,
            background=backgroundColor,
            margin=6, 
            opacity=0.8
                      
            # border_width=[2, 0, 2, 0],  # Draw top and bottom borders
            # border_color=["ff00ff", "000000", "ff00ff", "000000"]  # Borders are magenta
        ),
    )
]

# Mouse callback functions
def launch_menu():
    qtile.cmd_spawn("rofi -show drun -show-icons")


# Drag floating layouts.
mouse = [
    Drag([mod], "Button1", lazy.window.set_position_floating(), start=lazy.window.get_position()),
    Drag([mod], "Button3", lazy.window.set_size_floating(), start=lazy.window.get_size()),
    Click([mod], "Button2", lazy.window.bring_to_front()),
]


@hook.subscribe.startup_once
def autostart():
    home = os.path.expanduser('~/.config/qtile/autostart.sh')
    subprocess.Popen([home])


dgroups_key_binder = None
dgroups_app_rules = []  # type: list
follow_mouse_focus = True
bring_front_click = False
cursor_warp = False
floating_layout = layout.Floating(
        float_rules=[
        # Run the utility of `xprop` to see the wm class and name of an X client.
        *layout.Floating.default_float_rules,
        Match(wm_class="confirmreset"),  # gitk
        Match(wm_class="makebranch"),  # gitk
        Match(wm_class="maketag"),  # gitk
        Match(wm_class="ssh-askpass"),  # ssh-askpass
        Match(title="branchdialog"),  # gitk
        Match(title="pinentry"),  # GPG key password entry
    ], fullscreen_border_width = 0, border_width = 0
)
auto_fullscreen = True
focus_on_window_activation = "smart"
reconfigure_screens = True

# If things like steam games want to auto-minimize themselves when losing
# focus, should we respect this or not?
auto_minimize = True

# When using the Wayland backend, this can be used to configure input devices.
wl_input_rules = None

# XXX: Gasp! We're lying here. In fact, nobody really uses or cares about this
# string besides java UI toolkits; you can see several discussions on the
# mailing lists, GitHub issues, and other WM documentation that suggest setting
# this string if your java app doesn't work correctly. We may as well just lie
# and say that we're a working one by default.
#
# We choose LG3D to maximize irony: it is a 3D non-reparenting WM written in
# java that happens to be on java's whitelist.
wmname = "Qtile"
