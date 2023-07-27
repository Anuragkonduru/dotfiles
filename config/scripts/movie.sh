#!/usr/bin/env bash
# if you want to get the movies feom some other path you can change the path or you can add a doft link in the main directory
sleep .15
movies="/home/anu/Downloads/torentz"

selected_file=$( find -L "$movies" -type f -not -path '*/.*' -exec sh -c 'file -b --mime-type "$0" | grep -q "^video/"' {} \; -exec basename {} \; | uniq -u | sort| fzf --prompt="Which Movie Would You Like To See : " --border=rounded --margin=5% --color='fg:104,fg+:255,pointer:12,hl:255,hl+:12,header:12,prompt:255' --height 100% --reverse --header="                    MOVIES " --info=hidden --header-first --expect=ctrl-c,esc)

# echo "$selected_file"

if [[  "$selected_file" =~ "esc" ]]; then
   echo "$selected_file"
   exit 0
fi

if [[  "$selected_file" =~ "ctrl-c" ]]; then
   echo "$selected_file"
   exit 0
fi

if [ -n "$selected_file" ]; then
  full_path=$(find -L "$movies" -type f -not -path '*/.*' -exec sh -c 'file -b --mime-type "$0" | grep -q "^video/"' {} \; -printf "%P\n" | grep "/$selected_file$")
  exec nohup mpv --fs "$movies"/"$full_path">/dev/null 2>&1 
fi

