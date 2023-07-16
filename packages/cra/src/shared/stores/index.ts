import React from "react";
import camelcase from "camelcase";

const FILENAME_RE = /[._/-]/;

const context = require.context("./modules", true, /\.ts$/);
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
