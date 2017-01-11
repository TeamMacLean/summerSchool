var http = require('http');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var less = require('less');
var path = require('path');
var fs = require('fs');

var serve = serveStatic("./");

function compileLESS() {
    // from = path.join(__dirname, from);
    // to = path.join(__dirname, to);
    // fs.readFile(from, function (err, data) {
    //     if (err) return;
    //     less.render(data.toString(), {compress: true, paths: [__dirname]}, function (e, css) {
    //         if (!e) fs.writeFile(to, css);
    //     });
    // });


    // Load the file, convert to string
    fs.readFile('./main.less', function (error, data) {
        var dataString = data.toString();

        less.render(dataString, function (error, output) {
            if (error) {
                less.writeError(error, {});
                return;
            }

            // Write output
            fs.writeFileSync("./main.css", output.css, 'utf8');
            // console.log("Converted Less: '" + options.filename + "', to CSS: " + options.outputDir + options.outputfile);
        });
    });


}

var server = http.createServer(function (req, res) {
    var done = finalhandler(req, res);
    compileLESS();
    serve(req, res, done)
});

server.listen(process.env.PORT || 3000);