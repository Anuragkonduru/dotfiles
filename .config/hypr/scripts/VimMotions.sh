#!/bin/bash
# GDK BACKEND. Change to either wayland or x11 if having issues
BACKEND=wayland

# Check if rofi is running and kill it if it is
if pgrep -x "rofi" > /dev/null; then
    pkill rofi
fi

# Detect monitor resolution and scale
x_mon=$(hyprctl -j monitors | jq '.[] | select(.focused==true) | .width')
y_mon=$(hyprctl -j monitors | jq '.[] | select(.focused==true) | .height')
hypr_scale=$(hyprctl -j monitors | jq '.[] | select (.focused == true) | .scale' | sed 's/\.//')

# Calculate width and height based on percentages and monitor resolution
width=$((x_mon * hypr_scale / 100))
height=$((y_mon * hypr_scale / 100))

# Set maximum width and height
max_width=1200
max_height=1000

# Set percentage of screen size for dynamic adjustment
percentage_width=90
percentage_height=100

# Calculate dynamic width and height
dynamic_width=$((width * percentage_width / 100))
dynamic_height=$((height * percentage_height / 100))

# Limit width and height to maximum values
dynamic_width=$(($dynamic_width > $max_width ? $max_width : $dynamic_width))
dynamic_height=$(($dynamic_height > $max_height ? $max_height : $dynamic_height))

# Launch yad with calculated width and height
GDK_BACKEND=$BACKEND yad --width=$dynamic_width --height=$dynamic_height \
    --center \
    --title="Keybindings" \
    --no-buttons \
    --list \
    --column=Key: \
    --column=Description: \
    --column=Mode: \
    --column=Command: \
    --timeout-indicator=bottom \
"ESC" "close this app" "" "" \
"ESC" "close this app" "" "" \
"%" "Create FIle" "Explorer" "Default" \
"d" "Create Directory" "Explorer" "Default" \
"␣ pv" "Open / Go To file Explorer" "Normal" "Custom" \
"␣t" "Create New Tab" "Normal" "" \
"␣c" "Close Current Tab" "Normal" "" \
"␣1" "Go to Tab 1" "Normal" "" \
"␣2" "Go to Tab 2" "Normal" "" \
"␣3" "Go to Tab 3" "Normal" "" \
"␣4" "Go to Tab 4" "Normal" "" \
"␣5" "Go to Tab 5" "Normal" "" \
"F5" "Undo Tree Toggle" "Normal" "" \
"␣a" "Go to Alpha" "Normal" "" \
"␣/" "view Current Buffer for search" "Normal" "" \
"CTRL + /" "Comment Current Line" "Normal" "" \
"" "" "" ""
