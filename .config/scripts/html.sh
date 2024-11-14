#!/bin/bash

# Check if a project name was provided
if [ -z "$1" ]; then
  echo "Usage: $0 project_name"
  exit 1
fi

# Assign the first argument to the project_name variable
project_name=$1

# Create the project directory and navigate into it
mkdir "$project_name" && cd "$project_name"

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
    <h1>Hello, World!</h1>
    <script src="script.js"></script>
</body>
</html>
EOL

# Create style.css
cat <<EOL > style.css
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    text-align: center;
    padding-top: 50px;
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
