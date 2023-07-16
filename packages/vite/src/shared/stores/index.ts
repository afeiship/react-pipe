import React from "react";
import camelcase from "camelcase";
import viteRequireContext from "@jswork/vite-require-context";

const moduleFiles = import.meta.glob("./modules/*.ts", { eager: true });

const FILENAME_RE = /[._/-]/;

const context = viteRequireContext(moduleFiles);
function getFilename(inKey: string) {
  const paths = inKey.split(FILENAME_RE);
  const valid = paths.filter(Boolean);
  if (valid.length > 1) valid.pop();
  return camelcase(valid.join("-"));
}

const stores = (context.keys() as any[]).reduce((acc: any, key: string) => {
  console.log("key: ", key, getFilename(key));
  const moduleName = getFilename(key);
  const store = context(key);
  const moduleContext = store.default;
  const name = moduleName || moduleContext?.name;
  acc[name] = moduleContext;
  return acc;
}, {});

console.log("stores: ", stores);
