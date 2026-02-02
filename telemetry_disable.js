
/*
 * Frida.re script to disable Hytale client telemetry
 * run using:
 *      $ frida -n HytaleClient -l telemetry_disable.js
 */

var moduleBase = Process.getModuleByName("HytaleClient").base; 

// This function seems to be the central piece behind writing telemetry files and sending them
// It also causes a ton of errors to appear when the telemetry server can't be reached.
var targetAddress = moduleBase.add(0x132fc60)

Interceptor.replace(targetAddress, new NativeCallback(function () {
    console.log("Telemetry function was blocked!");

    /*console.log("Telemetry function called from:\n" +
            Thread.backtrace(this.context, Backtracer.ACCURATE)
            .map(DebugSymbol.fromAddress).join("\n"));*/
}, 'void', []));
