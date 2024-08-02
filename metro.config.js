const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts, "ttf"],
    extraNodeModules: {
      'react-navigation-header-buttons': require.resolve('react-navigation-header-buttons'),
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
