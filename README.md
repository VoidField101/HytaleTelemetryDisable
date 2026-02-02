# Hytale Disable Telemetry

Small [Frida](https://frida.re/) setup to disable Hytale Client telemetry.

Currently only tested on Linux with client version v2026.01.28-87d03be09

Due to the nature of hooking into functions based on their address this could break at any time.

To run you need to install frida-tools and run the either ``./start.sh`` or manually run ``frida -n HytaleClient -l hytale_telemetry_optout.js``.

Note that to be effective frita should be up at most 1.5 seconds after the process has started. The start script does this by checking every 500ms.

## Information about obtaining the injection address

1. Block ``telemetry.hytale.com`` through either via DNS or /etc/hosts by redirection to `0.0.0.0`
2. Start the game you should see ``System.Net.Sockets.SocketException (111): Connection refused`` errors in the log (a lot of them)
3. At the bottom of the stack trace take the last address (in this case `0x132ff40`) subtract `0x2e0`.

As long as the function itself doesn't change too much this method of obtaining the address should be relatively stable. For Pre-Release v2026.01.29-301e13929 this method gave address `0x133acc0`.

If there is no output ``Telemetry function was blocked!`` the address is likely too low; if it does appear and immedatly crash afterwards it's likely a bit too high.