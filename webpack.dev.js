const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { EnvironmentPlugin } = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");

const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    resolve: {
        extensions: [".js", ".jsx"],
        // alias: {
        //     "@assets": path.resolve(__dirname, "src/assets/"),
        //     "@components": path.resolve(__dirname, "src/components/"),
        //     "@View": path.resolve(__dirname, "src/view/"),
        //     "@constant": path.resolve(__dirname, "src/utils/constants/"),
        //     "@helpers": path.resolve(__dirname, "src/utils/helpers/"),
        //     "@services": path.resolve(__dirname, "src/services/"),
        // },
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "static/[name].[chunkhash].js",
        publicPath: "/",
        assetModuleFilename: "assets/[name][ext]",
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|json)?$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.txt$/i,
                use: [{ loader: "raw-loader" }],
                type: "asset/source",
            },
            {
                test: /\.(png|jpg|jpeg|webp)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name][ext]",
                            outputPath: "assets/images/",
                        },
                    },
                ],
                dependency: { not: ["url"] },
                type: "javascript/auto",
            },
            {
                test: /\.svg$/i,
                type: "javascript/auto",
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name][ext]",
                            outputPath: "assets/icons/",
                        },
                    },
                ],
            },
            {
                test: /\.(css|scss)$/i,
                include: path.resolve(__dirname, "src"),
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                    },
                ],
            },
        ],
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "styles",
                    test: /\.css$/,
                    chunks: "all",
                    enforce: true,
                },
                vendor: {
                    chunks: "initial",
                    test: "vendor",
                    name: "vendor",
                    enforce: true,
                },
            },
        },
    },

    plugins: [
        new BundleAnalyzerPlugin({ analyzerMode: "disabled", openAnalyzer: false }),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: "Web App",
            template: "public/index.html",
            favicon: "public/favicon.ico",
        }),
        new ESLintPlugin(),
    ],

    devtool: "inline-source-map",
    devServer: {
        host: "0.0.0.0",
        port: "auto",
        hot: true,
        historyApiFallback: true,
        open: true,
    },
};
