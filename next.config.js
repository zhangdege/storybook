module.exports = {
  images: {
    domains: ["http://192.168.50.195:7000", "http://localhost:7000"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      loader: "file-loader",
      options: {
        outputPath: "images",
      },
    })
    return config
  },
}
