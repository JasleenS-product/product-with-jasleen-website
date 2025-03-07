#!/bin/bash

# Kill any existing Python servers
echo "Stopping any existing servers..."
sudo pkill -f "python.*http.server"

# Navigate to the project directory
cd "$(dirname "$0")"

# Start Python server
echo "Starting server on port 8006..."
python3 -m http.server 8006 