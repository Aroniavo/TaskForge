const { getDefaultConfig } = require('expo/metro-config');

/**
 * Metro configuration for React Native
 * with SVG support using react-native-svg-transformer.
 */
const config = getDefaultConfig(__dirname);

// Use the SVG transformer for .svg files
config.transformer.babelTransformerPath = require.resolve(
  'react-native-svg-transformer',
);

// Ensure .svg files are processed as source, not assets
const { assetExts, sourceExts } = config.resolver;
config.resolver.assetExts = assetExts.filter((ext) => ext !== 'svg');
config.resolver.sourceExts = [...sourceExts, 'svg'];

module.exports = config;

