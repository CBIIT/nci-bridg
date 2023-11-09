const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  path.join(
                    __dirname,
                    './node_modules/@nciocpl/ncids-css/packages'
                  ),
                  path.join(
                    __dirname,
                    './node_modules/@nciocpl/ncids-css/uswds-packages'
                  ),
                ],
              },
            },
          },
        ],
      },
    ],
  },
};