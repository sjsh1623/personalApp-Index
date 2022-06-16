module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: ['react-native-reanimated/plugin',
            [
                'module-resolver',
                {
                    root: ["./src"],
                    extensions: [
                        ".ios.ts",
                        ".android.ts",
                        ".ts",
                        ".ios.tsx",
                        ".android.tsx",
                        ".jsx",
                        ".js",
                        ".json"
                    ],
                    alias: {
                        "@assets": "./assets",
                        "@icons": "./assets/icons",
                        "@res": "./src/res",
                        "@templates": "./src/component/templates",
                        "@organisms": "./src/component/organisms",
                        "@molecules": "./src/component/molecules",
                        "@screens": "./src/screens",
                        "@navigations": "./src/navigation",
                        "@stores": "./src/stores",
                    }
                }
            ]
        ]
    };
};

