Debugify 
========

Debugify provides a [Browserify](http://browserify.org/) transform
that grabs references to every module imported in your bundle, and
exposes them for use in the browser console.

It was inspired by
[Requireify](https://github.com/johnkpaul/requireify), but I wanted to
avoid polluting the global namespace (which can cause headaches when
you're working with modules created by other build systems that have
their own expectations for what `require` means).

It uses a dead simple strategy: grab each of the `require` functions
that get passed into each of your modules, and expose a simple
function for walking through them to find the module you want.

Synopsis
-------

1. `npm install debugify`

2. Use the browserify transform:

        browserify --transform debugify main.js > bundle.js

3. Place the debug-friendly require function somewhere in your global scope:

        window.req = require('debugify');

4. Use it in the browser console:

        req('aModule')


