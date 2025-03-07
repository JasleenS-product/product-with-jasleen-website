#!/bin/bash

# Kill any existing http-server processes
echo "Stopping any existing servers..."
sudo pkill -f http-server

# Navigate to the project directory
cd "$(dirname "$0")"

# Start the server in the current directory
echo "Starting server..."
/opt/homebrew/bin/http-server . -p 8006 -c-1 