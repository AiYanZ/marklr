var packager = require('electron-packager');
var config = require("./config");
var topolr = require("topolr-util");
topolr.file(require("path").resolve(__dirname, "./../app_temp.html")).read().then(function (content) {
    content = content.replace(/\{\{path\}\}/, "app.asar");
    return topolr.file(require("path").resolve(__dirname, "./../app.html")).write(content);
}).then(function () {
    packager(topolr.extend(true, config, {
        asar: true,
        platform: 'win32'
    }), function done_callback(err, appPaths) {
        if (err) {
            console.log(err);
        } else {
            console.log(appPaths);
        }
    });
});
