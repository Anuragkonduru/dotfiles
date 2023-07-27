#!/bin/bash

# Set the wallpaper directory
wallpaper_directory="$HOME/Pictures/walls/"

# Find all image files within the wallpaper directory and its subdirectories
image_files=()
while IFS= read -r -d '' file; do
    image_files+=("$file")
done < <(find "$wallpaper_directory" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -print0)

# Count the number of image files found
num_files=${#image_files[@]}

# Generate a random index within the range of the number of image files
random_index=$((RANDOM % num_files))

# Output the path to the randomly chosen image file
random_image="${image_files[random_index]}"

# Set the wallpaper using pywal
wal -i "$random_image"
pywalfox update
wal-telegram --wal
qtile cmd-obj -o cmd -f restart

