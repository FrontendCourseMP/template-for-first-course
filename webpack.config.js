const path = require(`path`);
const fs = require(`fs`);
const HtmlPlugin = require(`html-webpack-plugin`);
const CopyPlugin = require(`copy-webpack-plugin`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

function generateHtmlPlugins(templateDir) {
    const files  = [];

    function throughDirectory(Directory) {
      fs.readdirSync(Directory).forEach(File => {
        const absolute = path.join(Directory, File);

        if (fs.statSync(absolute).isDirectory()) return throughDirectory(absolute);
        else return files.push(absolute);
      });
    }

    throughDirectory(templateDir);
    
    return files.map((item) => {
      const parts = item.split(path.sep);
      const name = parts[parts.length - 1];
      
      return new HtmlPlugin({
        filename: name,
        template: path.resolve(item),
        inject: true,
      })
    })
}

// const htmlPlugins = generateHtmlPlugins(`./src/html`);

module.exports = {
    target: `web`,
    mode: `development`,
    entry: [
        `./src/js/index.js`,
        `./src/css/style.css`,
        `./src/html/index.html`
    ],
    output: {
        path: path.resolve(__dirname, `build`),
    },
    devtool: `source-map`,
    devServer: {
        static: path.resolve(__dirname, `build`),
        open: true,
        hot: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: [
                    "babel-loader"
                ],
            },
            {
                test: /\.(css)$/,
                include: path.resolve(__dirname, `src/css`),
                use: [
                  MiniCssExtractPlugin.loader,
                  {
                    loader: "css-loader",
                    options: { sourceMap: true }
                  },
                ],
            },
            {
                test: /\.(html)$/,
                include: path.resolve(__dirname, `src/html`),
                use: [`html-loader`]
            }

        ]
    },
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
    plugins: [
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, `src/fonts`),
              to: path.resolve(__dirname, `build/fonts/`),
            },
            {
              from: path.resolve(__dirname, `src/img`),
              to: path.resolve(__dirname, `build/img/`),
            }
          ],
        }),
        new MiniCssExtractPlugin()
    ].concat( generateHtmlPlugins(`./src/html`))
};
