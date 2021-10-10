import express from "express"
import fs from "fs"
import path from "path"

import React from "react";
import ReactDOMServer from "react-dom/server.js";
import { StaticRouter } from "react-router";

import App from "../src/components/App"

const app = express();

app.get(/\.(js|css|map|ico|svg)$/, express.static(path.resolve(__dirname, '../build')));

app.use('*', (req, res) => {
    const indexHTML = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), {
        encoding: 'utf8',
    });

    const context = {};

    const appHtml = ReactDOMServer.renderToString(<StaticRouter location={req.originalUrl} context={context}><App /></StaticRouter>);

    const renderedApp = indexHTML.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

    res.contentType('text/html');
    res.status(200);

    return res.send(renderedApp);

});

app.listen('9000', () => {
    console.log('Express server started at <http://localhost:9000>');
});
