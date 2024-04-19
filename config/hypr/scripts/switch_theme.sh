#!/bin/bash

selected=$(echo "Catpuccin Mocha
GruvBox
Dracula" | rofi -show drun -theme gruvbox-dark-hard -dmenu -p "Slect Color Scheme: ")

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

echo "y" | cp -f $HOME/.config/hypr/themes/$theme.conf $HOME/.config/hypr/conf/color.conf
echo "y" | cp -f $HOME/.config/kitty/themes/$theme.conf $HOME/.config/kitty/colors.conf
echo "y" | cp -f $HOME/.config/waybar/themes/$theme/config.jsonc $HOME/.config/waybar/config.jsonc
echo "y" | cp -f $HOME/.config/waybar/themes/$theme/style.css $HOME/.config/waybar/style.css

killall waybar
waybar & disowm
exit
