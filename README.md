# Hytale Disable Telemetry

Small [Frida](https://frida.re/) setup to disable Hytale Client telemetry.

Currently only tested on Linux with client version v2026.01.28-87d03be09

Due to the nature of hooking into functions based on their address this could break at any time.

To run you need to install frida-tools and run the either ``./start.sh`` or manually run ``frida -n HytaleClient -l hytale_telemetry_optout.js``.

Note that to be effective frita should be up at most 1.5 seconds after the process has started. The start script does this by checking every 500ms.