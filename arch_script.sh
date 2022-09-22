!#/bin/bash
sudo pacman -Syyu && sudo pacman -S base-devel vim rofi firefox starship neofetch copyq chromium  gimp mpv notepadqq thunar peazip-gtk2-bin alacritty  git  archlinux-keyring  &&

sudo pacman -S i3-gaps i3lock i3status polybar lxappearance qt5ct xorg picom nitrogen xf86-video-fdev sddm &&
sudo systemctl enable sddm


##remember to setup mpv volume configs

cd /Downloads
git clone https://aur.archlinux.org/yay-git
cd yay-git
makepkg -si
cd ..
yay -S visual-studio-code-bin nsxiv autotilling archlinux-tweak-tool-git pamac-aur  sddm-sugar-candy-git 
##set current theme as sugar-candy in /usr/lib/sddm/sddm.conf.d/default.conf

git clone https://github.com/Shadow-Monarch98/Linux.git
##replace  ~/.config/i3/config with the one in git
##move the polybar files
##picom file

cd Linux/config
cp picom.conf ~/.config/i3/
cp -r polybar	~/.config/i3/
cp config ~/.config/i3/
cd i3
