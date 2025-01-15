# Website Audit Summary for [newroot.org](http://newroot.org/)

---

## Manual Testing

### Desktop Issues

- **Missing ARIA Labels**: Several interactive elements lack ARIA labels, which are crucial for screen readers to provide context to users with visual impairments. This includes:
  - Navigation buttons without descriptive labels, making it unclear what action they perform.
  - Form inputs missing ARIA labels, which can lead to confusion about what information is required.
  - Icon-only buttons and links that do not have accompanying text or labels, making their purpose ambiguous to non-sighted users.
- **Color Contrast**: The text on the buttons may not meet the minimum contrast ratio required for accessibility, making it difficult for users with visual impairments to read.
- **Consistent Iconography**: The icons used in the buttons vary in style and complexity, which can lead to a lack of visual cohesion across the interface.

### Mobile Issues

- **Banner Overlap**: The top banner overlaps with the navigation menu, causing potential usability issues.
- **Text Legibility**: On the wellness section, the text "How are you feeling today?" is not sufficiently contrasted against the background, which may affect readability.
- **Button Accessibility**: The "Engage With Us" and "Check In" buttons are too close to other interactive elements, which could lead to accidental taps.
- **Responsive Design**: The layout does not adapt well to different screen sizes, leading to cropped images and text.

## Lighthouse Report

This summary provides an analysis of the Lighthouse reports for [newroot.org](http://newroot.org/), highlighting key metrics, opportunities for improvement, and recommended next steps to enhance performance, accessibility, best practices, and SEO.

### Key Metrics

**Performance:**

- Page State Report: 33
- Navigation Report: 58

**Accessibility:**

- Page State Report: 74
- Navigation Report: 78

**Best Practices:**

- Page State Report: 83
- Navigation Report: 96

**SEO:**

- Page State Report: 83
- Navigation Report: 92

## Performance

### Key Issues:

- **First Contentful Paint (FCP):** 3.2 seconds
- **Largest Contentful Paint (LCP):** 5.0 seconds
- **Speed Index:** 4.6 seconds
- **Eliminate render-blocking resources:** Potential savings of 1,230 ms
- **Reduce initial server response time:** Root document took 930 ms
- **Reduce unused CSS/JavaScript:** Potential savings of 323 KiB/1,719 KiB

### Action Items:

1. **Optimize Images:**
   - Serve images in next-gen formats.
   - Properly size images.
2. **Minimize Resources:**
   - Minify CSS and JavaScript.
   - Preconnect to required origins.
3. **Reduce Payload:**
   - Avoid enormous network payloads.
   - Serve static assets with an efficient cache policy.

## Accessibility

### Key Issues:

- **ARIA Roles:**
  - Elements with ARIA roles lack required children.
  - Values assigned to roles are not valid ARIA roles.
- **Contrast Ratio:**
  - Background and foreground colors lack sufficient contrast.
- **Form Elements and Links:**
  - Form elements lack associated labels.
  - Links do not have discernible names.

### Action Items:

1. **Improve ARIA Usage:**
   - Ensure elements with ARIA roles contain required children.
   - Use valid ARIA roles.
2. **Enhance Contrast:**
   - Adjust background and foreground colors for better contrast.
3. **Label Elements:**
   - Add labels to form elements.
   - Provide discernible names for links.

## Best Practices

### Key Issues:

- **JavaScript Libraries:**
  - Missing source maps for large first-party JavaScript.
- **Browser Errors:**
  - Logged errors in the console.

### Action Items:

1. **Add Source Maps:**
   - Ensure all JavaScript libraries include source maps.
2. **Fix Console Errors:**
   - Address and resolve all logged browser errors.

## SEO

### Key Issues:

- **Meta Descriptions:**
  - Document lacks a meta description.

### Action Items:

1. **Add Meta Descriptions:**
   - Include meta descriptions for all pages.
2. **Format HTML:**
   - Ensure HTML is well-formatted for better crawler understanding.

## Next Steps

1. **Implement the identified action items to address key issues in performance, accessibility, best practices, and SEO.**
2. **Conduct manual testing for accessibility to cover areas not detected by automated tools.**
3. **Regularly monitor and re-evaluate using Lighthouse to track improvements and maintain optimal web performance.**

## Glossary

- **First Contentful Paint (FCP):** The time it takes for the first piece of content to appear on the screen.
- **Largest Contentful Paint (LCP):** The time it takes for the largest piece of content to appear on the screen.
- **Speed Index:** Measures how quickly content is visually displayed.
- **ARIA Roles:** Accessible Rich Internet Applications roles that make web content more accessible to people with disabilities.
- **Contrast Ratio:** The difference in luminance between the foreground and background colors, affecting readability.
- **Meta Description:** An HTML attribute that provides a brief summary of a web page, often displayed in search engine results.

For more detailed guidelines and best practices, refer to the [Lighthouse documentation](https://developer.chrome.com/docs/lighthouse/overview/).
