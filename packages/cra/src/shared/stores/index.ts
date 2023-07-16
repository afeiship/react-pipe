import camelcase from "camelcase";

const FILENAME_RE = /[._/-]/;

const context = require.context("./modules", true, /\.ts$/);
const keys = context.keys();

console.log("detect vite or webpack: ", typeof process);

function getModuleFiles(inCtx: any) {
  return inCtx.keys().reduce((acc: any, key: string) => {
    const store = inCtx(key);
    acc[key] = store;
    return acc;
  }, {});
}

// console.log("moduleFiles: ", getModuleFiles(context));

function getFiles() {
  const context = require.context("./modules", true, /\.ts$/);
  return context.keys().reduce((acc: any, key: string) => {
    const store = context(key);
    acc[key] = store;
    return acc;
  }, {});
}

console.log("files: ", getFiles());

function getFilename(inKey: string) {
  const paths = inKey.split(FILENAME_RE);
  const valid = paths.filter(Boolean);
  if (valid.length > 1) valid.pop();
  return camelcase(valid.join("-"));
}

const stores = context.keys().reduce((acc: any, key: string) => {
  console.log("key: ", key, getFilename(key));
  const moduleName = getFilename(key);
  const store = context(key);
  const moduleContext = store.default;
  const name = moduleName || moduleContext?.name;
  acc[name] = moduleContext;
  return acc;
}, {});

console.log("stores: ", stores);
