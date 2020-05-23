/**
 * take an md file as input
 * produce a HTML version
 */
const path = require('path');

const input = process.argv[2];

// use the input file name without extension as the document title
const items = path.parse(input);
const docTitle = items['name'];

const Markdown = require('markdown-to-html').Markdown;
const md = new Markdown();
md.bufmax = 2048;

const opts = {title: docTitle, stylesheet: 'styles/styles.css'};


// Write a trailer at eof.
md.once('end', function() {
});

md.render(input, opts, function(err) {
  if (err) {
    console.error('>>> ' + err);
    process.exit();
  }
  md.pipe(process.stdout);
});