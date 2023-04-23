if status is-interactive
starship init fish | source
end
alias ls="exa -al --color=always --group-directories-first"
alias ll="ls -la"
alias vi="nvim"
alias cd..="cd .."
