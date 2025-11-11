#!/bin/bash

# Check Node.js version
required_node="v20.9.0"
current_node=$(node -v)

if [ "$current_node" != "$required_node" ]; then
    echo "Error: Node.js version $required_node is required"
    echo "Current version: $current_node"
    echo "Please update Node.js using nvm or visit https://nodejs.org/"
    exit 1
fi

# Clean install dependencies
echo "Installing dependencies..."
npm ci

# Start development server
echo "Starting development server..."
npm run dev