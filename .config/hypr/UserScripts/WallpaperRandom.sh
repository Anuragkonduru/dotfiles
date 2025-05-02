#!/bin/bash
# /* ---- 💫 https://github.com/JaKooLit 💫 ---- */  ##
# Script for Random Wallpaper ( CTRL ALT W)

wallDIR="$HOME/Pictures/wallpapers"
SCRIPTSDIR="$HOME/.config/hypr/scripts"

#focused_monitor=$(hyprctl monitors | awk '/^Monitor/{name=$2} /focused: yes/{print name}')

# Get a list of all monitors
monitor_outputs=($(hyprctl monitors | awk '/^Monitor/ {print $2}'))

PICS=($(find ${wallDIR} -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.pnm" -o -name "*.tga" -o -name "*.tiff" -o -name "*.webp" -o -name "*.bmp" -o -name "*.farbfeld" -o -name "*.gif" \)))
RANDOMPICS=${PICS[ $RANDOM % ${#PICS[@]} ]}


# Transition config
FPS=30
TYPE="random"
DURATION=1
BEZIER=".43,1.19,1,.4"
SWWW_PARAMS="--transition-fps $FPS --transition-type $TYPE --transition-duration $DURATION --transition-bezier $BEZIER"


#swww query || swww-daemon --format xrgb && swww img -o $focused_monitor ${RANDOMPICS} $SWWW_PARAMS

# Apply the random wallpaper to all monitors
swww query || swww-daemon --format xrgb
for monitor in "${monitor_outputs[@]}"; do
    swww img -o "$monitor" "$RANDOMPICS" $SWWW_PARAMS
done

wait $!
"$SCRIPTSDIR/WallustSwww.sh" &&

wait $!
sleep 2
"$SCRIPTSDIR/Refresh.sh"

