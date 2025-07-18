#!/bin/bash
iatest=$(expr index "$-" i)
export PATH="$PATH:/usr/sbin"/sbin"xport PATH="$PATH:/usr/sbin"/sbin"
export CHROME_BIN='/usr/bin/thorium-browser'
alias le="exa -al --color=always --group-directories-first"
alias sysupdatey="sudo pacman -Syyu --noconfirm"
alias sysupdate="sudo pacman -Syyu "
alias cl="clear"
alias speed="speedtest-cli --simple"
alias mounta="sudo mount /dev/sda1 /media/Anurag"
alias umounta="sudo umount -R /media/Anurag"
alias trash="trash --verbose"
alias cdg="cd ~/Documents/GitHub"
alias install="sudo pacman -S"
alias in="sudo pacman -S"
alias search="pacman -Ss"
alias remove="sudo pacman -Rns"
alias cdph="cd /run/user/1000/gvfs/mtp:host=realme_RMX2001_7HJRMZOV9DIZGQOR"
alias fixwaybar="ln -s $XDG_RUNTIME_DIR/hypr /tmp/hypr"
alias update-grub="sudo grub-mkconfig -o /boot/grub/grub.cfg"
alias mine=" java -jar $HOME/Downloads/stash/Minecrat/TLauncher.v10/TLauncher.jar"
alias cdph="cd /run/user/1000/gvfs/"
alias ltt="tree -a -C"
alias linutil="curl -fsSL https://christitus.com/linux | sh"
alias grubu="sudo grub-mkconfig -o /boot/grub/grub.cfg"
alias xopen="env -u WAYLAND_DISPLAY"
alias eartag="flatpak run app.drey.EarTag"


#alias note="nvim /home/anu/Documents/GitHub/Obsidian-Notes/dailynotes/$(date -u +%d_%m_%Y).md"


#######################################################
# SOURCED ALIAS'S AND SCRIPTS BY zachbrowne.me
#######################################################

# Source global definitions
if [ -f /etc/bashrc ]; then
	 . /etc/bashrc
fi

# Enable bash programmable completion features in interactive shells
if [ -f /usr/share/bash-completion/bash_completion ]; then
	. /usr/share/bash-completion/bash_completion
elif [ -f /etc/bash_completion ]; then
	. /etc/bash_completion
fi

#######################################################
# EXPORTS
#######################################################

# Disable the bell
if [[ $iatest -gt 0 ]]; then bind "set bell-style visible"; fi

# Expand the history size
export HISTFILESIZE=10000
export HISTSIZE=500

# Don't put duplicate lines in the history and do not add lines that start with a space
export HISTCONTROL=erasedups:ignoredups:ignorespace

# Check the window size after each command and, if necessary, update the values of LINES and COLUMNS
shopt -s checkwinsize

# Causes bash to append to history instead of overwriting it so if you start a new terminal, you have old session history
shopt -s histappend
PROMPT_COMMAND='history -a'

# Allow ctrl-S for history navigation (with ctrl-R)
[[ $- == *i* ]] && stty -ixon

# Ignore case on auto-completion
# Note: bind used instead of sticking these in .inputrc
if [[ $iatest -gt 0 ]]; then bind "set completion-ignore-case on"; fi

# Show auto-completion list automatically, without double tab
if [[ $iatest -gt 0 ]]; then bind "set show-all-if-ambiguous On"; fi

# Set the default editor
export EDITOR=nvim
export VISUAL=nvim
alias pico='edit'
alias spico='sedit'
alias nano='edit'
alias snano='sedit'
alias vim='nvim'
alias cat='bat'

# Replace batcat with cat on Fedora as batcat is not available as a RPM in any form
#if command -v lsb_release > /dev/null; then
#    DISTRIBUTION=$(lsb_release -si)
#
#    if [ "$DISTRIBUTION" = "Fedora" ]; then
#        alias cat='bat'
#    else
#        alias cat='batcat'
#    fi
#fi

# To have colors for ls and all grep commands such as grep, egrep and zgrep
export CLICOLOR=1
export LS_COLORS='no=00:fi=00:di=00;34:ln=01;36:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arj=01;31:*.taz=01;31:*.lzh=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.gz=01;31:*.bz2=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.avi=01;35:*.fli=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.ogg=01;35:*.mp3=01;35:*.wav=01;35:*.xml=00;31:'
#export GREP_OPTIONS='--color=auto' #deprecated
alias grep="/usr/bin/grep $GREP_OPTIONS"
unset GREP_OPTIONS

# Color for manpages in less makes manpages a little easier to read
export LESS_TERMCAP_mb=$'\E[01;31m'
export LESS_TERMCAP_md=$'\E[01;31m'
export LESS_TERMCAP_me=$'\E[0m'
export LESS_TERMCAP_se=$'\E[0m'
export LESS_TERMCAP_so=$'\E[01;44;33m'
export LESS_TERMCAP_ue=$'\E[0m'
export LESS_TERMCAP_us=$'\E[01;32m'

# Add an "alert" alias for long running commands.  Use like so:
#   sleep 10; alert
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# Edit this .bashrc file
alias ebrc='edit ~/.bashrc'

# Show help for this .bashrc file
alias hlp='less ~/.bashrc_help'

# alias to show the date
alias da='date "+%Y-%m-%d %A %T %Z"'

# Alias's to modified commands
alias cp='cp -i'
alias mv='mv -i'
alias rm='trash -v'
alias mkdir='mkdir -p'
alias ps='ps auxf'
alias ping='ping -c 10'
alias less='less -R'
alias cls='clear'
alias cl='clear'
alias apt-get='sudo apt-get'
alias multitail='multitail --no-repeat -c'
alias freshclam='sudo freshclam'
alias vi='nvim'
alias svi='sudo vi'
alias vis='nvim "+set si"'

# Change directory aliases
alias home='cd ~'
alias cd..='cd ..'
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'
alias .....='cd ../../../..'

# cd into the old directory
alias bd='cd "$OLDPWD"'

# Remove a directory and all files
alias rmd='/bin/rm  --recursive --force --verbose '

# Alias's for multiple directory listing commands
alias la='lsd -Alh' # show hidden files
alias ls='lsd -aFh --color=always' # add colors and file type extensions
alias lx='lsd -lXBh' # sort by extension
alias lk='lsd -lSrh' # sort by size
alias lc='lsd -lcrh' # sort by change time
alias lu='lsd -lurh' # sort by access time
alias lr='lsd -lRh' # recursive ls
alias lt='lsd -ltrh' # sort by date
alias lm='lsd -alh |more' # pipe through 'more'
alias lw='lsd -xAh' # wide listing format
alias ll='lsd -Fl' # long listing format
alias labc='lsd -lap' #alphabetical sort
alias lf="lsd -l | egrep -v '^d'" # files only
alias ldir="lsd -l | egrep '^d'" # directories only

# alias chmod commands
alias mx='chmod a+x'
alias 000='chmod -R 000'
alias 644='chmod -R 644'
alias 666='chmod -R 666'
alias 755='chmod -R 755'
alias 777='chmod -R 777'

# Search command line history
alias h="history | grep "

# Search running processes
alias p="ps aux | grep "
alias topcpu="/bin/ps -eo pcpu,pid,user,args | sort -k 1 -r | head -10"

# Search files in the current folder
alias f="find . | grep "

# Count all files (recursively) in the current folder
alias countfiles="for t in files links directories; do echo \`find . -type \${t:0:1} | wc -l\` \$t; done 2> /dev/null"

# To see if a command is aliased, a file, or a built-in command
alias checkcommand="type -t"

# Show open ports
alias openports='netstat -nape --inet'

# Alias's for safe and forced reboots
alias rebootsafe='sudo shutdown -r now'
alias rebootforce='sudo shutdown -r -n now'

# Alias's to show disk space and space used in a folder
alias diskspace="du -S | sort -n -r |more"
alias folders='du -h --max-depth=1'
alias folderssort='find . -maxdepth 1 -type d -print0 | xargs -0 du -sk | sort -rn'
alias tree='tree -CAhF --dirsfirst'
alias treed='tree -CAFd'
alias mountedinfo='df -hT'

# Alias's for archives
alias mktar='tar -cvf'
alias mkbz2='tar -cvjf'
alias mkgz='tar -cvzf'
alias untar='tar -xvf'
alias unbz2='tar -xvjf'
alias ungz='tar -xvzf'

# Show all logs in /var/log
alias logs="sudo find /var/log -type f -exec file {} \; | grep 'text' | cut -d' ' -f1 | sed -e's/:$//g' | grep -v '[0-9]$' | xargs tail -f"

# SHA1
alias sha1='openssl sha1'

alias clickpaste='sleep 3; xdotool type "$(xclip -o -selection clipboard)"'

# KITTY - alias to be able to use kitty features when connecting to remote servers(e.g use tmux on remote server)

alias kssh="kitty +kitten ssh"

#######################################################
# SPECIAL FUNCTIONS
#######################################################

# Use the best version of pico installed
edit ()
{
	if [ "$(type -t jpico)" = "file" ]; then
		# Use JOE text editor http://joe-editor.sourceforge.net/
		jpico -nonotice -linums -nobackups "$@"
	elif [ "$(type -t nano)" = "file" ]; then
		nano -c "$@"
	elif [ "$(type -t pico)" = "file" ]; then
		pico "$@"
	else
		nvim "$@"
	fi
}
sedit ()
{
	if [ "$(type -t jpico)" = "file" ]; then
		# Use JOE text editor http://joe-editor.sourceforge.net/
		sudo jpico -nonotice -linums -nobackups "$@"
	elif [ "$(type -t nano)" = "file" ]; then
		sudo nano -c "$@"
	elif [ "$(type -t pico)" = "file" ]; then
		sudo pico "$@"
	else
		sudo nvim "$@"
	fi
}

# Extracts any archive(s) (if unp isn't installed)
extract () {
	for archive in "$@"; do
		if [ -f "$archive" ] ; then
			case $archive in
				*.tar.bz2)   tar xvjf $archive    ;;
				*.tar.gz)    tar xvzf $archive    ;;
				*.bz2)       bunzip2 $archive     ;;
				*.rar)       rar x $archive       ;;
				*.gz)        gunzip $archive      ;;
				*.tar)       tar xvf $archive     ;;
				*.tbz2)      tar xvjf $archive    ;;
				*.tgz)       tar xvzf $archive    ;;
				*.zip)       unzip $archive       ;;
				*.Z)         uncompress $archive  ;;
				*.7z)        7z x $archive        ;;
				*)           echo "don't know how to extract '$archive'..." ;;
			esac
		else
			echo "'$archive' is not a valid file!"
		fi
	done
}

# Searches for text in all files in the current folder
ftext ()
{
	# -i case-insensitive
	# -I ignore binary files
	# -H causes filename to be printed
	# -r recursive search
	# -n causes line number to be printed
	# optional: -F treat search term as a literal, not a regular expression
	# optional: -l only print filenames and not the matching lines ex. grep -irl "$1" *
	grep -iIHrn --color=always "$1" . | less -r
}

# Copy file with a progress bar
cpp()
{
	set -e
	strace -q -ewrite cp -- "${1}" "${2}" 2>&1 \
	| awk '{
	count += $NF
	if (count % 10 == 0) {
		percent = count / total_size * 100
		printf "%3d%% [", percent
		for (i=0;i<=percent;i++)
			printf "="
			printf ">"
			for (i=percent;i<100;i++)
				printf " "
				printf "]\r"
			}
		}
	END { print "" }' total_size="$(stat -c '%s' "${1}")" count=0
}

# Copy and go to the directory
cpg ()
{
	if [ -d "$2" ];then
		cp "$1" "$2" && cd "$2"
	else
		cp "$1" "$2"
	fi
}

# Move and go to the directory
mvg ()
{
	if [ -d "$2" ];then
		mv "$1" "$2" && cd "$2"
	else
		mv "$1" "$2"
	fi
}

# Create and go to the directory
mkdirg ()
{
	mkdir -p "$1"
	cd "$1"
}

# Goes up a specified number of directories  (i.e. up 4)
up ()
{
	local d=""
	limit=$1
	for ((i=1 ; i <= limit ; i++))
		do
			d=$d/..
		done
	d=$(echo $d | sed 's/^\///')
	if [ -z "$d" ]; then
		d=..
	fi
	cd $d
}

#Automatically do an ls after each cd
# cd ()
# {
# 	if [ -n "$1" ]; then
# 		builtin cd "$@" && ls
# 	else
# 		builtin cd ~ && ls
# 	fi
# }

# Returns the last 2 fields of the working directory
pwdtail ()
{
	pwd|awk -F/ '{nlast = NF -1;print $nlast"/"$NF}'
}

# Show the current distribution
distribution ()
{
	local dtype
	# Assume unknown
	dtype="unknown"
	
	# First test against Fedora / RHEL / CentOS / generic Redhat derivative
	if [ -r /etc/rc.d/init.d/functions ]; then
		source /etc/rc.d/init.d/functions
		[ zz`type -t passed 2>/dev/null` == "zzfunction" ] && dtype="redhat"
	
	# Then test against SUSE (must be after Redhat,
	# I've seen rc.status on Ubuntu I think? TODO: Recheck that)
	elif [ -r /etc/rc.status ]; then
		source /etc/rc.status
		[ zz`type -t rc_reset 2>/dev/null` == "zzfunction" ] && dtype="suse"
	
	# Then test against Debian, Ubuntu and friends
	elif [ -r /lib/lsb/init-functions ]; then
		source /lib/lsb/init-functions
		[ zz`type -t log_begin_msg 2>/dev/null` == "zzfunction" ] && dtype="debian"
	
	# Then test against Gentoo
	elif [ -r /etc/init.d/functions.sh ]; then
		source /etc/init.d/functions.sh
		[ zz`type -t ebegin 2>/dev/null` == "zzfunction" ] && dtype="gentoo"
	
	# For Mandriva we currently just test if /etc/mandriva-release exists
	# and isn't empty (TODO: Find a better way :)
	elif [ -s /etc/mandriva-release ]; then
		dtype="mandriva"

	# For Slackware we currently just test if /etc/slackware-version exists
	elif [ -s /etc/slackware-version ]; then
		dtype="slackware"

	fi
	echo $dtype
}

# Show the current version of the operating system
ver ()
{
	local dtype
	dtype=$(distribution)

	if [ $dtype == "redhat" ]; then
		if [ -s /etc/redhat-release ]; then
			cat /etc/redhat-release && uname -a
		else
			cat /etc/issue && uname -a
		fi
	elif [ $dtype == "suse" ]; then
		cat /etc/SuSE-release
	elif [ $dtype == "debian" ]; then
		lsb_release -a
		# sudo cat /etc/issue && sudo cat /etc/issue.net && sudo cat /etc/lsb_release && sudo cat /etc/os-release # Linux Mint option 2
	elif [ $dtype == "gentoo" ]; then
		cat /etc/gentoo-release
	elif [ $dtype == "mandriva" ]; then
		cat /etc/mandriva-release
	elif [ $dtype == "slackware" ]; then
		cat /etc/slackware-version
	else
		if [ -s /etc/issue ]; then
			cat /etc/issue
		else
			echo "Error: Unknown distribution"
			exit 1
		fi
	fi
}

# Automatically install the needed support files for this .bashrc file
install_bashrc_support ()
{
	local dtype
	dtype=$(distribution)

	if [ $dtype == "redhat" ]; then
		sudo yum install multitail tree joe
	elif [ $dtype == "suse" ]; then
		sudo zypper install multitail
		sudo zypper install tree
		sudo zypper install joe
	elif [ $dtype == "debian" ]; then
		sudo apt-get install multitail tree joe
	elif [ $dtype == "gentoo" ]; then
		sudo emerge multitail
		sudo emerge tree
		sudo emerge joe
	elif [ $dtype == "mandriva" ]; then
		sudo urpmi multitail
		sudo urpmi tree
		sudo urpmi joe
	elif [ $dtype == "slackware" ]; then
		echo "No install support for Slackware"
	else
		echo "Unknown distribution"
	fi
}

# Show current network information
netinfo ()
{
	echo "--------------- Network Information ---------------"
	/sbin/ifconfig | awk /'inet addr/ {print $2}'
	echo ""
	/sbin/ifconfig | awk /'Bcast/ {print $3}'
	echo ""
	/sbin/ifconfig | awk /'inet addr/ {print $4}'

	/sbin/ifconfig | awk /'HWaddr/ {print $4,$5}'
	echo "---------------------------------------------------"
}

# IP address lookup
alias whatismyip="whatsmyip"
function whatsmyip ()
{
	# Dumps a list of all IP addresses for every device
	# /sbin/ifconfig |grep -B1 "inet addr" |awk '{ if ( $1 == "inet" ) { print $2 } else if ( $2 == "Link" ) { printf "%s:" ,$1 } }' |awk -F: '{ print $1 ": " $3 }';
	
	### Old commands
	# Internal IP Lookup
	#echo -n "Internal IP: " ; /sbin/ifconfig eth0 | grep "inet addr" | awk -F: '{print $2}' | awk '{print $1}'
#
#	# External IP Lookup
	#echo -n "External IP: " ; wget http://smart-ip.net/myip -O - -q
	
	# Internal IP Lookup.
	if [ -e /sbin/ip ];
	then
		echo -n "Internal IP: " ; /sbin/ip addr show wlan0 | grep "inet " | awk -F: '{print $1}' | awk '{print $2}'
	else
		echo -n "Internal IP: " ; /sbin/ifconfig wlan0 | grep "inet " | awk -F: '{print $1} |' | awk '{print $2}'
	fi

	# External IP Lookup 
	echo -n "External IP: " ; curl -s ifconfig.me
}


# For some reason, rot13 pops up everywhere
rot13 () {
	if [ $# -eq 0 ]; then
		tr '[a-m][n-z][A-M][N-Z]' '[n-z][a-m][N-Z][A-M]'
	else
		echo $* | tr '[a-m][n-z][A-M][N-Z]' '[n-z][a-m][N-Z][A-M]'
	fi
}

# Trim leading and trailing spaces (for scripts)
trim()
{
	local var=$*
	var="${var#"${var%%[![:space:]]*}"}"  # remove leading whitespace characters
	var="${var%"${var##*[![:space:]]}"}"  # remove trailing whitespace characters
	echo -n "$var"
}

_z_cd() {
    cd "$@" || return "$?"

    if [ "$_ZO_ECHO" = "1" ]; then
        echo "$PWD"
    fi
}

z() {
    if [ "$#" -eq 0 ]; then
        _z_cd ~
    elif [ "$#" -eq 1 ] && [ "$1" = '-' ]; then
        if [ -n "$OLDPWD" ]; then
            _z_cd "$OLDPWD"
        else
            echo 'zoxide: $OLDPWD is not set'
            return 1
        fi
    else
        _zoxide_result="$(zoxide query -- "$@")" && _z_cd "$_zoxide_result"
    fi
}

zi() {
    _zoxide_result="$(zoxide query -i -- "$@")" && _z_cd "$_zoxide_result"
}


alias za='zoxide add'

alias zq='zoxide query'
alias zqi='zoxide query -i'

alias zr='zoxide remove'
zri() {
    _zoxide_result="$(zoxide query -i -- "$@")" && zoxide remove "$_zoxide_result"
}


_zoxide_hook() {
    if [ -z "${_ZO_PWD}" ]; then
        _ZO_PWD="${PWD}"
    elif [ "${_ZO_PWD}" != "${PWD}" ]; then
        _ZO_PWD="${PWD}"
        zoxide add "$(pwd -L)"
    fi
}

case "$PROMPT_COMMAND" in
    *_zoxide_hook*) ;;
    *) PROMPT_COMMAND="_zoxide_hook${PROMPT_COMMAND:+;${PROMPT_COMMAND}}" ;;
esac
alias lookingglass="~/looking-glass-B5.0.1/client/build/looking-glass-client -F"
#######################################################
# Set the ultimate amazing command prompt
#######################################################

alias hug="hugo server -F --bind=10.0.0.210 --baseURL=http://10.0.0.210"

export PATH=$PATH:"$HOME/.local/bin:$HOME/.cargo/bin:/var/lib/flatpak/exports/bin:/.local/share/flatpak/exports/bin"

# Install Starship - curl -sS https://starship.rs/install.sh | sh

eval "$(starship init bash)"

#Autojump

#if [ -f "/usr/share/autojump/autojump.sh" ]; then
#	. /usr/share/autojump/autojump.sh
#elif [ -f "/usr/share/autojump/autojump.bash" ]; then
#	. /usr/share/autojump/autojump.bash
#else
#	echo "can't found the autojump script"
#fi

html(){
# Check if a project name was provided
if [ -z "$1" ]; then
  echo "Usage: $0 project_name"
  exit 1
fi

# Assign the first argument to the project_name variable
project_name=$1

directory=$(pwd)
# Create the project directory and navigate into it
mkdir "$directory/$project_name" && cd "$project_name"

# Create index.html
cat <<EOL > index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$project_name</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome to $project_name</h1>
    <script src="script.js"></script>
</body>
</html>
EOL

# Create style.css
cat <<EOL > style.css
body {
    font-family: "Montserrat", sans-serif;
    background-color: #000000;
    text-align: center;
    padding-top: 50px;
    color:white;
}
EOL

# Create script.js
cat <<EOL > script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello, World!');
});
EOL

echo "Project $project_name created successfully!"

code .
}


branch() {
    if [ -z "$1" ]; then
        echo "No branch name provided. Showing git status:"
        git status
    else
        branch_name=$1
        if git show-ref --verify --quiet refs/heads/"$branch_name"; then
            git checkout "$branch_name"
            echo "Switched to existing branch '$branch_name'"
        else
            git checkout -b "$branch_name"
            echo "Switched to a new branch '$branch_name'"
        fi
    fi
}

check(){
	if [ -z "$1"];then
		echo "No branch name provided"
	else
		branch_name=$1
		git checkout "$branch_name"
	fi
}

gcom() {
	git add .
	git commit -m "$1"
	}
lazyg() {
	git add .
	git commit -m "$1"
	git push
}


note() {
	if [ -z "$1"];then
		mkdir -p /home/anu/Documents/GitHub/notes/dailynotes/$(date -u +%Y)
		nvim /home/anu/Documents/GitHub/notes/dailynotes/$(date -u +%Y)/$(date -u +%d_%m_%Y).md
	else
		nvim /home/anu/Documents/GitHub/notes/in/$1.md
	fi
		
}

mvsub() {
  # Move all files from subdirectories to the current directory
  find . -mindepth 2 -type f -exec mv -t . {} +

  # Optionally, remove empty directories
  find . -mindepth 1 -type d -empty -delete

  echo "All files moved to the current directory."
}

unzipall() {
    for file in *.zip *.rar *.tar; do
        [ -e "$file" ] || continue  # Skip if no matching files
        echo "Extracting \"$file\"..."

        case "$file" in
            *.zip) unzip -o "$file" -d "${file%.zip}" ;;
            *.rar) rar x -o+ "$file" "${file%.rar}" ;;
            *.tar) mkdir -p "${file%.tar}" && tar -xf "$file" -C "${file%.tar}" ;;
        esac
    done
    echo "Extraction complete!"
}

subs() {
    local base_name="$1"
    local input_srt="${base_name}.srt"
    local output_video=""
    
    # Supported video extensions
    local extensions=("mp4" "mkv" "mov" "avi" "webm")

    # Find the first matching video file
    for ext in "${extensions[@]}"; do
        if [[ -f "${base_name}.${ext}" ]]; then
            local input_video="${base_name}.${ext}"
            local output_video="${base_name}_sub.${ext}"
            break
        fi
    done

    # Check if a valid video file was found
    if [[ -z "$output_video" || ! -f "$input_srt" ]]; then
        echo "Error: Video or subtitle file not found."
        return 1
    fi

    ffmpeg -i "$input_video" -i "$input_srt" -c copy -c:s mov_text "$output_video"
}

subsall() {
    local search_dir="${1:-.}"
    local -a extensions=("mp4" "mkv" "mov" "avi" "webm")

    local find_expr=()
    for ext in "${extensions[@]}"; do
        find_expr+=(-iname "*.${ext}" -o)
    done
    unset 'find_expr[${#find_expr[@]}-1]'

    find "$search_dir" -type f \( "${find_expr[@]}" \) -not -iname "*_sub.*" | while IFS= read -r video_file; do
        local dir
        dir=$(dirname "$video_file")
        local base
        base=$(basename "$video_file")
        local extension="${video_file##*.}"
        local base_name="${base%.*}"
        local output_video="${dir}/${base_name}_sub.${extension}"
        local subtitle_file="${dir}/${base_name}.srt"

        # 1. Exact match
        if [[ ! -f "$subtitle_file" ]]; then
            # 2. Fuzzy match (longest common prefix)
            subtitle_file=$(find "$dir" -maxdepth 1 -iname "*.srt" | awk -v vid="$base_name" '
                BEGIN {
                    best_match = "";
                    best_score = 0;
                }
                {
                    subfile = $0;
                    gsub(/^.*\//, "", subfile);
                    srtname = subfile;
                    gsub(/\.srt$/, "", srtname);
                    match_len = 0;
                    for (i = 1; i <= length(srtname) && i <= length(vid); i++) {
                        if (substr(srtname, i, 1) == substr(vid, i, 1))
                            match_len++;
                        else
                            break;
                    }
                    if (match_len > best_score) {
                        best_score = match_len;
                        best_match = $0;
                    }
                }
                END { print best_match }
            ')
        fi

        if [[ -f "$subtitle_file" ]]; then
            echo "📼 Processing: $video_file"
            ffmpeg -y -i "$video_file" -i "$subtitle_file" -c copy -c:s mov_text "$output_video" \
                && echo "✅ Success: $output_video" \
                || echo "❌ Failed: $video_file"
        else
            echo "⚠️  Skipping: No suitable subtitle for $video_file"
        fi
    done
}


export MANPAGER='nvim +Man!'

# Load Angular CLI autocompletion.
source <(ng completion script)

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH=$BUN_INSTALL/bin:$PATH
export XDG_SCREENSHOTS_DIR="$HOME/Pictures/Screenshots/"
eval "$(zoxide init --cmd cd bash)"

alias music='tmux new-session -s $$ "tmux source-file ~/.config/ncmpcpp/tsession"'
_trap_exit() { tmux kill-session -t $$; }

PATH=~/.console-ninja/.bin:$PATH
