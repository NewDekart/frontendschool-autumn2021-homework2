require('ignore-styles');

require('@babel/register')({
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    //"@babel/plugin-transform-modules-commonjs",
    "inline-react-svg",
    [
      "transform-assets",
      {
        "extensions": [
          "css",
          "svg"
        ],
        "name": "static/media/[name].[hash:8].[ext]"
      }
    ]
  ]
});

require('./index');
