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

echo "y" | cp -f $HOME/.config/qtile/themes/$theme.py  $HOME/.config/qtile/colors.py
echo "y" | cp -f $HOME/.config/kitty/themes/$theme.conf $HOME/.config/kitty/colors.conf
echo "y" | cp -f $HOME/.config/dunst/themes/$theme.conf $HOME/.config/dunst/dunstrc

killall dunst

dunst &

notify-send "Theme Changed to $selected"
exit
