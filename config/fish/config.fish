#if status is-interactive
set -U fish_greeting ""
starship init fish | source
#end
alias ls="exa -al --color=always --group-directories-first"
alias ll="ls -la"
alias vi="nvim"
alias cd..="cd .."
alias xcli="xclip -selection clipboard"
alias icat="kitty +kitten icat"
alias sysupdatey="sudo pacman -Syyu --noconfirm && flatpak update -y"
alias sysupdate="sudo pacman -Syyu && flatpak update"
