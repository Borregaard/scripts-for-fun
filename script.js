var wshShell = new ActiveXObject("WScript.Shell");
var computerName = wshShell.ExpandEnvironmentStrings("%COMPUTERNAME%");
alert("Your computer name is: " + computerName);
