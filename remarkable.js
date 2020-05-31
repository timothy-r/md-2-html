const { Remarkable } = require('remarkable');
const md = new Remarkable();
const fs = require('fs');

const input = process.argv[2];


try {
    const data = fs.readFileSync(input, 'utf8');
    console.log(md.render(data));

} catch(e) {
    console.log('Error:', e.stack);
}


