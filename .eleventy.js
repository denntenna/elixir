

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("prism.css");
  eleventyConfig.addPassthroughCopy("prism.js");
  eleventyConfig.addPassthroughCopy("style.css");

};
