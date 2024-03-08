module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-root-import",
        {
          rootPathSuffix: "app/",
          rootPathPrefix: "@/",
        },
      ],
      ["nativewind/babel"],
      ["inline-dotenv"],
      ["react-native-reanimated/plugin"],
      // [
      //   "expo-font",
      //   {
      //     fonts: [
      //       "./assets/NunitoSans/NunitoSans-Black.ttf",
      //       "./assets/NunitoSans/NunitoSans-Bold.ttf",
      //       "./assets/NunitoSans/NunitoSans-Italic.ttf",
      //       "./assets/NunitoSans/NunitoSans-Light.ttf",
      //       "./assets/NunitoSans/NunitoSans-Regular.ttf",
      //     ],
      //   },
      // ],
    ],
  };
};
