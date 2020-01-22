const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports =
{
	mode: "production",
	devtool: "source-map",
	entry: ["./src/index.tsx", "./src/site.scss"],
	// externals:
	// {
	// 	"react": "React",
	// 	"react-dom": "ReactDOM"
	// },
	module:
	{
		rules:
		[
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.s[ac]ss$/i,
				use:
				[
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: { url: false }
					},
					"sass-loader",
				],
			},
			{
				test: /\.ts[x]?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			}
		],
	},
	optimization:
	{
		splitChunks:
		{
			cacheGroups:
			{
				styles:
				{
					name: "styles",
					test: /\.css$/i,
					chunks: "all",
					enforce: true,
				},
			},
		},
	},
	performance:
	{
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
	plugins:
	[
		new MiniCssExtractPlugin({filename: "site.css"}),
	],
	resolve:
	{
		extensions:
		[
			".js",
			".jsx",
			".ts",
			".tsx"
		],
	},
	output:
	{
		filename: "site.js",
		path: path.resolve(__dirname, "dist"),
	},
};
