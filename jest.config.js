module.exports = {
  "setupFiles": ['<rootDir>/scripts/babelSetup.js', '<rootDir>/scripts/enzymeSetup.js'],
  "transform": {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.scss$": "jest-css-modules-transform"
  },
  "snapshotSerializers": ['enzyme-to-json/serializer'],
  "moduleFileExtensions": [ "js", "jsx", "scss" ],
  "moduleDirectories": ["node_modules", "src"]
}
