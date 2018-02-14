var sass = require('node-sass');
var writeFileSync = require('fs').writeFileSync
sass.render({
  file: "./hello_world/main.scss",
  includePaths: ["styles"]
}, function(err, result) {
  if(err) {
    console.error(err);
  } else {
    console.log(result.stats.includedFiles);
    writeFileSync("./hello_world/main.css", result.css);
    console.log("done");
  }
});
