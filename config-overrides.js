const {
  override,
  addWebpackAlias,
  addBabelPlugins,
  addBabelPresets,
  babelExclude,
  path,
} = require('customize-cra');

module.exports = override(
  babelExclude([path.resolve("node_modules")]),
  ...addBabelPlugins('@babel/plugin-proposal-class-properties'),
  ...addBabelPresets('@babel/preset-env', '@babel/preset-react'),
  addWebpackAlias({
    'react-native-linear-gradient': 'react-native-web-linear-gradient',
  }),
);