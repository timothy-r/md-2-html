/**
 * take an md file as input
 * produce a HTML version
 */

const path = require('path');
const { Remarkable } = require('remarkable');
const fs = require('fs');
const Handlebars = require('handlebars');

const input = process.argv[2];

// if this fails, stop & show error
const mdContents = fs.readFileSync(input, 'utf8');

// use the input file name without extension as the document title
const items = path.parse(input);

var variables = {"title": items['name']};


const templateName = 'templates/main.tpl';
const templateContents = fs.readFileSync(templateName, 'utf8');
// if this fails, stop & show error
const template = Handlebars.compile(templateContents);

const md = new Remarkable();

try {
    // if this fails, stop & show error
    variables["contents"] = md.render(mdContents);

    // now template it
    // if this fails, stop & show error
    const result = template(variables);

    // print out the results
    console.log(result);

} catch(e) {
    console.log('Error:', e.stack);
}
