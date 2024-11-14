#!/bin/sh
# Symlink dunst config
rm ~/.config/dunst/dunstrc
ln -sf ~/.cache/wal/dunstrc ~/.config/dunst/dunstrc
# Restart dunst with the new color scheme
pkill dunst
dunst &
