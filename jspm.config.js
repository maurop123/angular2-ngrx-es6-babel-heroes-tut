SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "app": "app",
    "github:": "jspm_packages/github/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.13"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "app/app.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "angular2": "npm:angular2@2.0.0-beta.17",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "es6-shim": "github:es-shims/es6-shim@0.35.1",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "reflect-metadata": "npm:reflect-metadata@0.1.8",
    "rxjs": "npm:rxjs@5.0.0-beta.11",
    "zone.js": "npm:zone.js@0.6.12"
  },
  packages: {
    "npm:rxjs@5.0.0-beta.11": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.2"
      }
    }
  }
});
