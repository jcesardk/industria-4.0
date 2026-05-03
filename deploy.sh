#!/bin/bash
set -e

HOST="root@76.13.171.79"
REMOTE_DIR="~/industria-4-0"

echo "==> Syncing project to VPS..."
rsync -avz --exclude=node_modules --exclude=.git --exclude=dist ./ "$HOST:$REMOTE_DIR"

echo "==> Building and deploying on VPS..."
ssh "$HOST" "cd $REMOTE_DIR && docker compose down && docker compose up -d --build && docker system prune -f"

echo "==> Deploy complete!"
echo "==> https://industria40.jcssh.cloud"
