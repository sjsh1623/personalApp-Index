var path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            "@assets": path.resolve(__dirname, './assets'),
            "@icons" : path.resolve(__dirname, "./assets/icons"),
            "@res": path.resolve(__dirname, "./src/res"),
            "@templates" : path.resolve(__dirname, "./src/component/templates"),
            "@organisms" : path.resolve(__dirname, "./src/component/organisms"),
            "@molecules" : path.resolve(__dirname, "./src/component/molecules"),
            "@atoms" : path.resolve(__dirname, "./src/component/atoms"),
            "@screens": path.resolve(__dirname, "./src/screens"),
            "@navigations" : path.resolve(__dirname, "./src/navigation"),
            "@stores" : path.resolve(__dirname, "./src/stores"),
            "@context" : path.resolve(__dirname, "./src/context"),
        },
    },
};
