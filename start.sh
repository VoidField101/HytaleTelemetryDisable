#!/bin/bash

# Launches Frida automatically after the client has started
# It does so by polling the pid of HytaleClient every 500ms so don't keep it running in the background

CLIENT_NAME="HytaleClient"
SCRIPT_JS="telemetry_disable.js"

echo "Waiting for $CLIENT_NAME to start..."
while :
do
    PID=$(pidof "$CLIENT_NAME")
    if [ ! -z "$PID" ]; then
        echo "Found $GAME_NAME at PID $PID! Attaching..."
        frida -p "$PID" -l "$SCRIPT_JS"
        break
    fi
    sleep 0.5
done