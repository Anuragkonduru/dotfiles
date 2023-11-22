# ~/.bashrc
export EDITOR='nvim'
export VISUAL='nvim'
export HISTCONTROL=ignoreboth:erasedups
export PAGER='most'
export QT_QPA_PLATFORMTHEME=qt5ct
export LANG=en_US.UTF-8
export LC_MESSAGES=en_US.UTF-8
export LC_ALL=en_US.UTF-8
HISTSIZE= HISTFILESIZE= #infinite
shopt -s autocd 
# If not running interactively, don't do anything
[[ $- != *i* ]] && return
if [ -d "$HOME/.bin" ] ;
  then PATH="$HOME/.bin:$PATH"
fi
if [ -d "$HOME/.local/bin" ] ;
  then PATH="$HOME/.local/bin:$PATH"
fi
# Alias
alias setlocale="sudo localectl set-locale LANG=en_US.UTF-8"
alias setlocales="sudo localectl set-x11-keymap us && sudo localectl set-locale LANG=en_US.UTF-8"
alias unlock="sudo rm /var/lib/pacman/db.lck"
alias grep='grep --color=auto'
alias le="exa -al --color=always --group-directories-first"
alias ls="lsd -a"
alias ll="lsd -la"
alias vi="nvim"
alias v="nvim"
alias cd..="cd .."
alias xcli="xclip -selection clipboard"
alias icat="kitty +kitten icat"
alias sysupdatey="sudo pacman -Syyu --noconfirm && flatpak update -y"
alias sysupdate="sudo pacman -Syyu && flatpak update"
alias cl="clear" # && todo.sh lsa"
alias speed="speedtest-cli --simple"
alias mounta="sudo mount /dev/sda1 /media/Anurag"
alias umounta="sudo umount -R /media/Anurag"
alias trash="trash --verbose"

PS1='[\u@\h \W]\$ '
eval "$(starship init bash)"
export PATH=$PATH:/usr/local/go/bin
[[ -s /home/anu/.autojump/etc/profile.d/autojump.sh ]] && source /home/anu/.autojump/etc/profile.d/autojump.sh
#exec fish
