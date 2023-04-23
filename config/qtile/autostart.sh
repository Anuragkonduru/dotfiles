#!/bin/sh
xrandr --output HDMI-A-1-0 --rate 75 --right-of eDP --rate 60 --auto &
nitrogen --restore &
copyq &
dunst &
flameshot &
/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1 &
picom --config ~/.config/picom/picom.conf &
nm-applet &
&kdeconnect-app &
sleep 10 && mpd &
#cbatticon -u 5 &
#volumeicon &
