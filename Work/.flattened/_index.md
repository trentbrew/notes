Diagnostics

- Reduce JavaScript execution time — 3.4 s

> The site has a significant amount of JavaScript that takes a long time to execute. This can lead to slow page load times and a poor user experience. The JavaScript should be optimized to reduce execution time. Unused or unnecessary scripts should be removed, and the remaining scripts should be minified and deferred where possible.

- Minimize main-thread work — 4.9 s

> The main thread of the site is doing a lot of work, which can slow down the page load time. This can be improved by optimizing the site's HTML, CSS, and JavaScript to reduce the amount of work the main thread has to do. This can include deferring offscreen images, reducing unused CSS and JavaScript, and minifying the remaining code.

- Largest Contentful Paint element — 2,850 ms

> The largest contentful paint (LCP) element on the site takes 2.85 seconds to load. This is a long time and can lead to a poor user experience. The LCP element should be optimized to load faster, which can include deferring offscreen images, serving images in next-gen formats, and efficiently encoding images.

- Defer offscreen images — Potential savings of 1,804 KiB

> The site has a large number of offscreen images that are being loaded with the rest of the page. This can slow down the page load time and lead to a poor user experience. The offscreen images should be deferred to load after the rest of the page has loaded, which can significantly improve the page load time.

- Avoid large layout shifts — 5 elements found

> The site has a number of elements that cause large layout shifts when they load. This can be disorienting for users and lead to a poor user experience. The layout shifts should be minimized by ensuring that elements have explicit dimensions and are loaded in a way that doesn't cause the page to shift.

- Serve images in next-gen formats — Potential savings of 879 KiB

> The site is serving images in older formats that are larger than necessary. This can slow down the page load time and lead to a poor user experience. The images should be served in next-gen formats, such as WebP, which are smaller and load faster.

- Efficiently encode images — Potential savings of 476 KiB

> The site's images are not encoded efficiently, which can lead to larger file sizes and slower load times. The images should be encoded efficiently to reduce their file size and improve the page load time.

- Reduce unused CSS — Potential savings of 264 KiB

> The site has a significant amount of unused CSS that is being loaded with the rest of the page. This can slow down the page load time and lead to a poor user experience. The unused CSS should be removed to reduce the amount of code that needs to be loaded.

- Minify CSS — Potential savings of 24 KiB

> The site's CSS is not minified, which can lead to larger file sizes and slower load times. The CSS should be minified to reduce its file size and improve the page load time.

- Minify JavaScript — Potential savings of 334 KiB

> The site's JavaScript is not minified, which can lead to larger file sizes and slower load times. The JavaScript should be minified to reduce its file size and improve the page load time.

- Avoid an excessive DOM size — 1,675 elements

> The site has a large number of elements in its DOM, which can slow down the page load time and lead to a poor user experience. The DOM size should be reduced by removing unnecessary elements and optimizing the remaining elements.

- Serve static assets with an efficient cache policy — 7 resources found

> Cached resources can be served with a more efficient cache policy to reduce the amount of data that needs to be transferred over the network. This can improve the page load time and reduce the amount of data that users need to download.

- Ensure text remains visible during webfont load

> The site's webfonts are not being loaded in a way that ensures that text remains visible during the load process. This can lead to a poor user experience. The webfonts should be loaded in a way that ensures that text remains visible during the load process.
