#if status is-interactive
set -U fish_greeting ""
starship init fish | source
#end
alias ls="exa -al --color=always --group-directories-first"
alias ll="lsd -la"
alias vi="nvim"
alias cd..="cd .."
alias xcli="xclip -selection clipboard"
alias icat="kitty +kitten icat"
alias sysupdatey="sudo pacman -Syyu --noconfirm && flatpak update -y"
alias sysupdate="sudo pacman -Syyu && flatpak update"
alias trash="trash --verbose"

alias do="todo.sh add "
alias done="todo.sh do"
alias del="todo.sh del"
alias todo="todo.sh ls"
alias todoa="todo.sh lsa"
alias cl="clear && todo.sh lsa"
alias donedel="rm ~/.todo/done.txt && touch ~/.todo/done.txt"
alias speed="speedtest-cli --simple"

set -gx pomo_options_work 25
set -gx pomo_options_break 5

function pomodoro
  switch "$argv[1]"
    case "work"
      set val $pomo_options_work
    case "break"
      set val $pomo_options_break
    case '*'
      echo "Invalid option"
      return
  end
  echo $argv[1] | lolcat
  timer {$val}m
  notify-send "'$argv[1]' session done"
end

abbr wo "pomodoro work"
abbr br "pomodoro break"

abbr le "exa -al --color=always --group-directories-first"
abbr ls "lsd -a"
abbr ll "lsd -la"
abbr vi "nvim"
abbr cd.. "cd .."
abbr xcli "xclip -selection clipboard"
abbr icat "kitty +kitten icat"
abbr sysupdatey "sudo pacman -Syyu --noconfirm && flatpak update -y"
abbr sysupdate "sudo pacman -Syyu && flatpak update"
abbr trash "trash --verbose"
abbr do "todo.sh add \""
abbr done "todo.sh do"
abbr del "todo.sh del"
abbr todo "todo.sh ls"
abbr todoa "todo.sh lsa"
abbr cl "clear && todo.sh lsa"
abbr donedel "rm ~/.todo/done.txt && touch ~/.todo/done.txt"
abbr speed "speedtest-cli --simple"

todo.sh lsa
