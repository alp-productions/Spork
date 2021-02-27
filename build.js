var electronInstaller = require('electron-winstaller');

var settings = {
    // Specify the folder where the built app is located
    appDirectory: './spork-built-win32-x64',
    // Specify the existing folder where 
    outputDirectory: './spork-installers',
    // The name of the Author of the app (the name of your company)
    authors: 'alp productions',
    // The name of the executable of your built
    exe: './myapp-source-built.exe',
    loadingGif: './spork-source/static/loading.gif',
    setupIcon: './setup.ico',
    releases: 'https://github.com/alp-productions/Spork.git'
};

resultPromise = electronInstaller.createWindowsInstaller(settings);
 
resultPromise.then(() => {
    console.log("The installers of your application were succesfully created !");
}, (e) => {
    console.log(`Well, sometimes you are not so lucky: ${e.message}`)
});