const path = require("path");

const BASE_MAP = {
  ORANGE: "#63a4f7",
  WHITE: "#e6edf2",
};

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    additionalData: (content, loaderContext) => {
      const { resourcePath, rootContext } = loaderContext;
      const relativePath = path.relative(rootContext, resourcePath);

      console.log({
        relativePath,
      });
      if (relativePath === "public/css/style.scss") {
        for (const [key, value] of Object.entries(BASE_MAP)) {
            content = content.replace(value, process.env?.[key] ?? value)
        }
      }
      return content;
    },
  },
};
