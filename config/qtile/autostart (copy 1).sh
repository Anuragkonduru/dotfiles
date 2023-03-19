#!/bin/sh
xrandr --output HDMI-A-1-0 --right-of eDP --auto &
nitrogen --restore &
copyq &
dunst &
flameshot &
/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1 &
#cbatticon -u 5 &
#volumeicon &
