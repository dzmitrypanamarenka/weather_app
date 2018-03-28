import Express from 'express';
import path from 'path';
import ejs from 'ejs';

const app = new Express();

app.use(Express.static(__dirname));
app.engine('html', ejs.renderFile);

app.get('/*', (req, res) => res.render(path.join(__dirname, 'index.html')));

const port = 3000;
app.listen(port);