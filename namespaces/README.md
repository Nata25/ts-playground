This is a simply configured environment to practice TypeScript namespaces.

To run the script, use `tsc` from command line, which is equivalent to `npm start`
here. TypeScript compiler will use `tsconfig.json` to bundle
files in the correct order so that all referenced namespaces would be available in the result script.js.

An alternative way is to run all configurations from the command line (the shorthand to that is `npm run bundle`). Notice that in this case any configuratons from `tscongif.json` will be ignored (like `"target": "es6", which is needed to use `Array.prototype.find` method in `Students` namespace). So if we want anything special, it also should be specified as a flag after `tsc`. 

See [this issue](https://github.com/Microsoft/TypeScript/issues/6591) for more details.

The result (identical in both cases) is printed to the browser console.