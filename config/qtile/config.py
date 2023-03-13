from libqtile import bar, layout, widget
from libqtile.config import Click, Drag, Group, Key, Match, Screen
from libqtile.lazy import lazy
from libqtile.utils import guess_terminal
import os
import subprocess
from libqtile import hook
from qtile_extras.widget.decorations import BorderDecoration


mod = "mod4"
terminal = guess_terminal()

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
    Key([mod], "x", lazy.shutdown(), desc="Shutdown Qtile"),
    Key([mod], "r", lazy.spawncmd(), desc="Spawn a command using a prompt widget"),
    Key([mod], "d", lazy.spawn("rofi -show drun -show-icons"), desc="Spawn Rofi"),
    Key([mod], "p", lazy.spawn("firefox"), desc="Spawn browser"),
    Key([mod], "e", lazy.spawn("thunar"), desc="Spawn file manager"),
    Key([mod], "v", lazy.spawn("code"), desc="Spawn Visual Studio code"),
    Key([mod,"control"], "s", lazy.spawn("spotify"), desc="Spawn spotify"),
    Key([mod], "c", lazy.spawn("copyq menu"), desc="Spawn clipboard"),
    Key([mod], "o", lazy.spawn("md.obsidian.Obsidian"), desc="Spawn clipboard"),
    Key([mod,"shift"], "e", lazy.spawn("rofi -show emoji"), desc="Spawn rofi with emojis"),
    Key([mod,"shift"], "a", lazy.spawn("rofi -show calc -no-show-match -no-sort"), desc="Spawn rofi with calc"),
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

]
groups = [Group(i) for i in "1234567890"]

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
                [mod, "shift"],
                i.name,
                lazy.window.togroup(i.name, switch_group=True),
                desc="Switch to & move focused window to group {}".format(i.name),
            ),
        ]
    )

@hook.subscribe.startup_once
def autostart():
    home = os.path.expanduser('~/.config/qtile/autostart.sh')
    subprocess.Popen([home])


from libqtile.dgroups import simple_key_binder
dgroups_key_binder = simple_key_binder("mod4")


layout_theme = {"border_width": 2,
                "margin": 8,
                "border_focus": "#bd93f9",
                "border_normal": "1D2330"
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
    #layout.Bsp(border_focus_stack=["#d75f5f", "#8f3d3d"], border_width=4),
    #layout.RatioTile(border_focus_stack=["#d75f5f", "#8f3d3d"], border_width=4),
    #layout.Tile(border_focus_stack=["#d75f5f", "#8f3d3d"], border_width=4),
    #layout.TreeTab(border_focus_stack=["#d75f5f", "#8f3d3d"], border_width=4),
    #layout.Zoomy(border_focus_stack=["#d75f5f", "#8f3d3d"], border_width=4), 
]

widget_defaults = dict(
    font="Finger Paint",
    fontsize=12,
    padding=3,
)
extension_defaults = widget_defaults.copy()


colors =  [["#44475a", "#44475a"],
          ["#282a36", "#282a36"],
          ["#f8f8f2", "#f8f8f2"],
          ["#ff6c6b", "#ff6c6b"],
          ["#50fa7b", "#50fa7b"],
          ["#ff5555", "##ff5555"],
          ["#8be9fd", "#8be9fd"],
          ["#bd93f9", "#bd93f9"],
          ["#8be9fd", "#8be9fd"],
          ["#ff79c6", "#ff79c6"]]




window_name = widget.WindowName()
screens = [
    Screen(
        top=bar.Bar(
                [
                    widget.Sep(
                       linewidth = 0,
                       padding = 6,
                       foreground = colors[2],
                       background = colors[0]
                       ),
                widget.GroupBox(
                font = "Finger Paint",
                fontsize = 14,
                margin_y = 3,
                margin_x = 0,
                padding_y = 5,
                padding_x = 3,
                borderwidth = 3,
                active = colors[2],
                inactive = colors[9],
                rounded = False,
                highlight_color = colors[1],
                highlight_method = "line",
                this_current_screen_border = colors[6],
                this_screen_border = colors [4],
                other_current_screen_border = colors[6],
                other_screen_border = colors[4],
                foreground = colors[2],
                background = colors[0]
                ),
                widget.TextBox(
                       text = '|',
                       font = "Finger Paint",
                       background = colors[0],
                       foreground = '474747',
                       padding = 2,
                       fontsize = 14
                       ),
                       widget.Sep(
                       linewidth = 0,
                       padding = 6,
                       foreground = colors[2],
                       background = colors[0]
                       ),
                widget.WindowName(
                       foreground = colors[7],
                       background = colors[0],
                       padding = 0
                       ),
                 widget.Systray(
                       background = colors[0],
                       padding = 5
                       ),
                       widget.Sep(
                       linewidth = 0,
                       padding = 6,
                       foreground = colors[2],
                       background = colors[0]
                       ),
                widget.TextBox(
                       text = '|',
                       font = "Finger Paint",
                       background = colors[0],
                       foreground = '474747',
                       padding = 2,
                       fontsize = 14
                       ),
                widget.Prompt(),
                widget.Chord(
                    chords_colors={
                        "launch": ("#ff0000", "#ffffff"),
                    },
                    name_transform=lambda name: name.upper(),
                ),
                widget.Net(
                       interface = "wlo1",
                       format = '{down} ↓',
                       foreground = colors[3],
                       background = colors[0],
                       padding = 5,
                       decorations=[
                           BorderDecoration(
                               colour = colors[3],
                               border_width = [0, 0, 2, 0],
                               padding_x = 5,
                               padding_y = None,
                           )
                       ],
                       ),
                widget.TextBox(
                       text = '|',
                       font = "Finger Paint",
                       background = colors[0],
                       foreground = '474747',
                       padding = 2,
                       fontsize = 14
                       ),
                widget.Volume(
                       foreground = colors[7],
                       background = colors[0],
                       fmt = 'Vol: {}',
                       padding = 5,
                       decorations=[
                           BorderDecoration(
                               colour = colors[7],
                               border_width = [0, 0, 2, 0],
                               padding_x = 5,
                               padding_y = None,
                           )
                       ],
                       ),
                widget.TextBox(
                       text = '|',
                       font = "Finger Paint",
                       background = colors[0],
                       foreground = '474747',
                       padding = 2,
                       fontsize = 14
                       ),
                widget.Clock(
                       foreground = colors[6],
                       background = colors[0],
                       format = "%H:%M ",
                       decorations=[
                           BorderDecoration(
                               colour = colors[6],
                               border_width = [0, 0, 2, 0],
                               padding_x = 5,
                               padding_y = None,
                           )
                       ],

                       ),
                widget.TextBox(
                       text = '|',
                       font = "Finger Paint",
                       background = colors[0],
                       foreground = '474747',
                       padding = 2,
                       fontsize = 14
                       ),
                widget.CurrentLayoutIcon(
                       custom_icon_paths = [os.path.expanduser("~/.config/qtile/icons")],
                       foreground = colors[2],
                       background = colors[0],
                       padding = 0,
                       scale = 0.7
                       ),
            ],
            30,
            # border_width=[2, 0, 2, 0],  # Draw top and bottom borders
            # border_color=["ff00ff", "000000", "ff00ff", "000000"]  # Borders are magenta
        ),
    ),
    Screen(
         top=bar.Bar(
                [
                    widget.Sep(
                       linewidth = 0,
                       padding = 6,
                       foreground = colors[2],
                       background = colors[0]
                       ),
                widget.GroupBox(
                font = "Finger Paint",
                fontsize = 14,
                margin_y = 3,
                margin_x = 0,
                padding_y = 5,
                padding_x = 3,
                borderwidth = 3,
                active = colors[2],
                inactive = colors[7],
                rounded = False,
                highlight_color = colors[1],
                highlight_method = "line",
                this_current_screen_border = colors[6],
                this_screen_border = colors [4],
                other_current_screen_border = colors[6],
                other_screen_border = colors[4],
                foreground = colors[2],
                background = colors[0]
                ),
                widget.TextBox(
                       text = '|',
                       font = "Finger Paint",
                       background = colors[0],
                       foreground = '474747',
                       padding = 2,
                       fontsize = 14
                       ),
                       widget.Sep(
                       linewidth = 0,
                       padding = 6,
                       foreground = colors[2],
                       background = colors[0]
                       ),
                widget.WindowName(
                       foreground = colors[7],
                       background = colors[0],
                       padding = 0
                       ),
                       widget.Sep(
                       linewidth = 0,
                       padding = 6,
                       foreground = colors[2],
                       background = colors[0]
                       ),
                widget.TextBox(
                       text = '|',
                       font = "Finger Paint",
                       background = colors[0],
                       foreground = '474747',
                       padding = 2,
                       fontsize = 14
                       ),
                widget.Prompt(),
                widget.Chord(
                    chords_colors={
                        "launch": ("#ff0000", "#ffffff"),
                    },
                    name_transform=lambda name: name.upper(),
                ),
                widget.Net(
                       interface = "wlo1",
                       format = '{down} ↓',
                       foreground = colors[3],
                       background = colors[0],
                       padding = 5,
                       decorations=[
                           BorderDecoration(
                               colour = colors[3],
                               border_width = [0, 0, 2, 0],
                               padding_x = 5,
                               padding_y = None,
                           )
                       ],
                       ),
                widget.TextBox(
                       text = '|',
                       font = "Finger Paint",
                       background = colors[0],
                       foreground = '474747',
                       padding = 2,
                       fontsize = 14
                       ),
                widget.Volume(
                       foreground = colors[7],
                       background = colors[0],
                       fmt = 'Vol: {}',
                       padding = 5,
                       decorations=[
                           BorderDecoration(
                               colour = colors[7],
                               border_width = [0, 0, 2, 0],
                               padding_x = 5,
                               padding_y = None,
                           )
                       ],
                       ),
                widget.TextBox(
                       text = '|',
                       font = "Finger Paint",
                       background = colors[0],
                       foreground = '474747',
                       padding = 2,
                       fontsize = 14
                       ),
                widget.Clock(
                       foreground = colors[6],
                       background = colors[0],
                       format = "%H:%M ",
                       decorations=[
                           BorderDecoration(
                               colour = colors[6],
                               border_width = [0, 0, 2, 0],
                               padding_x = 5,
                               padding_y = None,
                           )
                       ],

                       ),
                widget.TextBox(
                       text = '|',
                       font = "Finger Paint",
                       background = colors[0],
                       foreground = '474747',
                       padding = 2,
                       fontsize = 14
                       ),
                widget.CurrentLayoutIcon(
                       custom_icon_paths = [os.path.expanduser("~/.config/qtile/icons")],
                       foreground = colors[2],
                       background = colors[0],
                       padding = 0,
                       scale = 0.7
                       ),
            ],
            30,
            # border_width=[2, 0, 2, 0],  # Draw top and bottom borders
            # border_color=["ff00ff", "000000", "ff00ff", "000000"]  # Borders are magenta
        ),
    )
]

# Drag floating layouts.
mouse = [
    Drag([mod], "Button1", lazy.window.set_position_floating(), start=lazy.window.get_position()),
    Drag([mod], "Button3", lazy.window.set_size_floating(), start=lazy.window.get_size()),
    Click([mod], "Button2", lazy.window.bring_to_front()),
]

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
    ]
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
wmname = "LG3D"


