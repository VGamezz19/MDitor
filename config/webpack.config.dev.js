{
    test: /\.scss$/,
    use: [
      {
        loader: require.resolve('style-loader'),
      },
      {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
        }
      },
      {
        loader: require.resolve('sass-loader'),
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9',  
              ],
              flexbox: 'no-2009',
            }),
          ],
        },
      }, 
    ]
  }
  