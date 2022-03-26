module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: `@import "@/global.scss";`
        }
      }
    },
    chainWebpack: config => {
      config.module.rules.delete("svg");
    },
    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.svg$/, 
            loader: 'vue-svg-loader', 
            options: {
              svgo: {
                plugins: [
                  { cleanupIDs: false },
                ],
              },
            },
          },
        ],
      }      
    }
  };