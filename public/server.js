/* eslint-disable */
import Express from 'express';
import path from 'path';
import ejs from 'ejs';

const app = new Express();

app.use(Express.static(path.join(__dirname, '..', 'build')));
app.set('views', path.join(__dirname, '..', 'build'));
app.engine('html', ejs.renderFile);

app.get('/*', (req, res) => res.render('index.html'));

const port = 3000;
app.listen(port);
