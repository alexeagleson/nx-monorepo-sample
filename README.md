Use node v12 due to deprecated node-sass


https://www.npmjs.com/package/node-sass

node-sass forces nodev12 instead of dart-sass

https://www.npmjs.com/package/antd-scss-theme-plugin

plugin is 3 years since update



yarn add -D rollup-plugin-postcss

yarn add -D postcss autoprefixer

ant has react as a dependency, so using it as a dependency bundles react with your app which is not wanted

yarn add -D less

`tsdx.config.js`
```js
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [autoprefixer()],
        inject: false,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    );
    return config;
  },
};
```


```
 "antd": "^4.19.3",
    "identity-obj-proxy": "^3.0.0",
    "react-router-dom": "^6.3.0"
    ```

    move to devDependencies




    ```
    update react in package library to v18
    ```

    yarn list react



    https://www.reddit.com/r/reactjs/comments/kfnerf/thoughts_on_ant_design_vs_other_design_frameworks/



    https://www.reddit.com/r/reactjs/comments/sxwyad/any_reason_why_not_to_use_ant_design_in_2022/


    remove explicit children

    https://github.com/DefinitelyTyped/DefinitelyTyped/commit/55dc209ceb6dbcd59c4c68cc8dfb77faadd9de12#diff-32cfd8cb197872bcba371f5018185d2e75fa540b52cda2dd7d8ac12dcc021299L500