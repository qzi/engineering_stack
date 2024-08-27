#!/bin/bash
bold=$(tput bold)
normal=$(tput sgr0)
red=$(tput setaf 1)
green=$(tput setaf 2)

if [ -d "engineering_stack" ]; then
	echo '⚠️ Existing folder detected, deleting...';
  rm -rf engineering_stack
fi

# Set the repository URL
REPO_URL="https://github.com/qzi/engineering_stack.git"

# Clone the repository
echo "📦 Cloning the repository from ${bold} $REPO_URL...${normal}"
git clone $REPO_URL > /dev/null || { echo "Failed to clone repository"; exit 1; }

# Navigate into the repository directory
cd engineering_stack || { echo "${red} Failed to enter repository directory${normal}"; exit 1; }

# # Install, test, and start for engineering_stack
# echo "⏳ ${bold}Handling engineering_stack...${normal}"
# cd engineering_stack || { echo "${red}Failed to enter engineering_stack directory${normal}"; exit 1; }

echo "Installing dependencies... please wait"
npm install > /dev/null || { echo "${red}Failed to install dependencies for engineering_stack${normal}"; exit 1; }

echo "Running tests... please wait"
npm test > /dev/null || { echo "${red}Tests failed for engineering_stack${normal}"; exit 1; }

echo "🚀 ${bold}Starting the application engineering_stack...${normal}"
npm start &
backend_pid=$! 

# # Go back to the root directory
# cd .. || { echo "Failed to return to the root directory"; exit 1; }

# # Install, test, and start for music-front-end
# echo "⏳ ${bold}Handling music-front-end...${normal}"
# cd music-front-end || { echo "Failed to enter music-front-end directory"; exit 1; }

# echo "Installing dependencies... please wait"
# npm install > /dev/null || { echo "Failed to install dependencies for music-front-end"; exit 1; }

# if [ -d "__test__" ]; then
#     echo "Running tests..."
#     npm test > /dev/null  || { echo "Tests failed for $dir"; exit 1; }
# else
#     echo "__test__ directory not found. Skipping tests for $dir."
# fi
# echo "🚀 ${bold}Starting the application..."${normal}
# npm start &
# backend_pid=$! 

# Wait for both background processes to complete
sleep 2

echo "✅${green}${bold}Deployment completed successfully.${normal}"

echo 'Press any touch to stop all servers'
read -n 1 -s  # Wait for user input

echo "Stopping the app"
# kill $frontend_pid > /dev/null
kill $backend_pid > /dev/null

wait

echo -e "\n \n ${bold}Done, a bientôt! 👋 ${normal}"
