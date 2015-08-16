# Starting (NPM, Event-loop, Debugger)

##[NPM](https://semaphoreci.com/community/tutorials/npm-node-js-package-manager)

##[Event Loop](http://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/)

## Debbuger

The `node-debug` command will load Node Inspector in your default browser.

> **NOTE:** Node Inspector works in Chrome and Opera only. You have to re-open
the inspector page in one of those browsers if another browser
is your default web browser (e.g. Safari or Internet Explorer).

Node Inspector works almost exactly as the Chrome Developer Tools. Read the
excellent
[DevTools overview](https://developer.chrome.com/devtools/index)
to get started.

#### Install

```sh
$ npm install -g node-inspector
```

#### Start

```sh
$ node-debug example.js
```

where ```example.js``` is the name of your main Node application JavaScript file.

See available configuration options [here](https://github.com/node-inspector/node-inspector#configuration)


