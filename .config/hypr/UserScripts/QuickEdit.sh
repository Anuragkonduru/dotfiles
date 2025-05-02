#!/bin/bash
# /* ---- 💫 https://github.com/JaKooLit 💫 ---- */  ##
# Rofi menu for Quick Edit/View of Settings (SUPER E)

# Define preferred text editor and terminal
edit=${EDITOR:-nano}
tty=kitty

# Paths to configuration directories
configs="$HOME/.config/hypr/configs"
UserConfigs="$HOME/.config/hypr/configs"

# Function to display the menu options
menu() {
    cat <<EOF
1. View / Edit  Env-variables
2. View / Edit  Window-Rules
3. View / Edit  Startup_Apps
4. View / Edit  Monitors
5. View / Edit  User-Settings
6. View / Edit  Decorations
7. View / Edit  Animations
8. View / Edit  Workspace-Rules
9. View / Edit  Keybinds
EOF
}

# Main function to handle menu selection
main() {
    choice=$(menu | rofi -i -dmenu -config ~/.config/rofi/config-compact.rasi | cut -d. -f1)
    
    # Map choices to corresponding files
    case $choice in
        1) file="$UserConfigs/ENVariables.conf" ;;
        2) file="$UserConfigs/WindowRules.conf" ;;
        3) file="$UserConfigs/Startup_Apps.conf" ;;
        4) file="$UserConfigs/Monitors.conf" ;;
        5) file="$UserConfigs/UserSettings.conf" ;;
        6) file="$UserConfigs/UserDecorations.conf" ;;
        7) file="$UserConfigs/UserAnimations.conf" ;;
        8) file="$UserConfigs/WorkspaceRules.conf" ;;
        9) file="$configs/Keybinds.conf" ;;
        *) return ;;  # Do nothing for invalid choices
    esac

    # Open the selected file in the terminal with the text editor
    $tty -e $edit "$file"
}

# Check if rofi is already running
if pidof rofi > /dev/null; then
  pkill rofi
fi

main
