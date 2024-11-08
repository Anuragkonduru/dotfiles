#!/bin/bash

selected=$(echo "Catpuccin Mocha
GruvBox
Dracula
RosePine
OneDark
TokyoNight
EverForest
Sonokai" | rofi -show drun -theme gruvbox-dark-hard -dmenu -p "Slect Color Scheme: ")

echo you Picked: "$selected"

cd ~

if [ "$selected" == "Catpuccin Mocha" ]; then
   theme="mocha"
fi
if [ "$selected" == "GruvBox" ]; then
   theme="gruvbox"
fi
if [ "$selected" == "Dracula" ]; then
   theme="dracula"
fi
if [ "$selected" == "RosePine" ]; then
   theme="rosepine"
fi
if [ "$selected" == "OneDark" ]; then
   theme="onedark"
fi
if [ "$selected" == "TokyoNight" ]; then
   theme="tokyonight"
fi
if [ "$selected" == "EverForest" ]; then
   theme="everforest"
fi
if [ "$selected" == "Sonokai" ]; then
   theme="sonokai"
fi

echo "y" | cp -f $HOME/.config/hypr/themes/$theme.conf $HOME/.config/hypr/conf/color.conf
echo "y" | cp -f $HOME/.config/kitty/themes/$theme.conf $HOME/.config/kitty/colors.conf
echo "y" | cp -f $HOME/.config/waybar/themes/$theme/$theme.css $HOME/.config/waybar/default.css
echo "y" | cp -f $HOME/.config/dunst/themes/$theme.conf $HOME/.config/dunst/dunstrc

killall waybar
killall dunst

waybar & disowm
dunst & disowm

notify-send "Theme Changed to $selected"
exit
