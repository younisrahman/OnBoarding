module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app/features/*': ['./src/features/*'],
          '@app/features': ['./src/features'],
          '@app/components/*': ['./src/components/*'],
          '@app/components': ['./src/components'],
          '@app/navigator/*': ['./src/navigator/*'],
          '@app/navigation': ['./src/navigation/'],
          '@app/screens/*': ['./src/screens/*'],
          '@app/screens': ['./src/screens'],
          '@app/lib/*': ['./src/lib/*'],
          '@app/lib': ['./src/lib'],
          '@app/config/*': ['./src/config/*'],
          '@app/config': ['./src/config'],
          '@app/theme': ['./src/config/theme'],
          '@app/assets/*': ['./src/assets/*'],
          '@app/assets': ['./src/assets'],
          '@app/store/*': ['./src/store/*'],
          '@app/store': ['./src/store'],
          '@app/validators/*': ['./src/validators/*'],
          '@app/validators': ['./src/validators'],
        },
      },
    ],
  ],
};
