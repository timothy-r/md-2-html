/**
 * take an md file as input
 * produce a HTML version
 */

const path = require('path');
const { Remarkable } = require('remarkable');
const fs = require('fs');
const Handlebars = require('handlebars');

const input = process.argv[2];

// use the input file name without extension as the document title
const items = path.parse(input);

const templateName = 'templates/main-2.tpl';

const md = new Remarkable();

try {
    const mdContents = fs.readFileSync(input, 'utf8');
    const templateContents = fs.readFileSync(templateName, 'utf8');
    const template = Handlebars.compile(templateContents);

    var variables = {
        "title": items['name'], 
        "styleSheet": "styles/styles.css",
	"contents": md.render(mdContents)
    };
    // if this fails, stop & show error
    //variables["contents"] = md.render(mdContents);

    // now template it
    // if this fails, stop & show error
    const result = template(variables);

    // print out the results
    console.log(result);

} catch(e) {
    console.log('Error:', e.stack);
}
