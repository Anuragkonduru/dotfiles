#!/bin/sh
xrandr --output HDMI-1-1 --rate 75 --right-of eDP-1 --rate 60 --auto &
#nitrogen --restore &
#variety &
#wal -q -i ~/Pictures/Wallpapers/
wal -R &
copyq &
dunst &
flameshot &
/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1 &
picom --config ~/.config/picom/picom.conf &
#picom --config ~/.config/picom/picom.conf &
#picom --animations --animation-for-open-window fly-in -b --experimental-backends
#picom --animations --animation-for-open-window fly-in -b --experimental-backends --config ~/.config/picom/picom.conf & 
nm-applet &
kdeconnect-indicator &
#kdeconnect-app &
sleep 10 && mpd &
volumeicon &
kitty
#cbatticon -u 5 &
# xfce4-power-manager &
xset -dpms &



