import { readFileSync } from 'fs';
import { join } from 'path';

export const external = (packageDirectory, additional) => {
    const pkg = JSON.parse(readFileSync(join(packageDirectory, 'package.json')));
    const externalDependencies = [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ];
  
    return moduleId => {
      if (additional && additional.includes(moduleId)) return true;
      return externalDependencies
        .filter(dependency => moduleId.startsWith(dependency))
        .length > 0;
    };
};

export const babelrc = (packageDirectory) => {
    const config = JSON.parse(readFileSync(join(packageDirectory, '.babelrc')));
    const { plugins } = config;

    plugins.push('@babel/plugin-external-helpers');

    return config;
};

const knownGlobals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};
  
export const globals = () => {
    return (moduleId) => {
        if (moduleId in knownGlobals) return knownGlobals[moduleId];

        let modulePkg;
        try {
            modulePkg = JSON.parse(readFileSync(require.resolve(join(moduleId, 'package.json'))));
        } catch(e) {
            modulePkg = {};
        }
        return modulePkg.globalName;
    }
};

export const stubProcess = 'if (typeof process === "undefined") { var process = { env: {} }; }';