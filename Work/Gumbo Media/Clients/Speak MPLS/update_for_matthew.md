<!-- # Context

I'm working on website updates for speak mpls. Rebecca (the client and director at speak mpls) noted that the events & classes for members was too difficult to find on the current site (burried across different pages). She wants them to be front & center. Same deal with their about page. She wants to see general aesthetic improvements and accessibility fixes based on her audit. Oh, here is the full audit btw:

```speakmpls_audit.md

Website Audit
SPEAK MPLS
March 2024

Summary
This needs assessment and website audit for speakmpls.com outlines a comprehensive strategy for enhancing the site through optimization, CMS restructuring, feature development, and design improvements. Key focus areas include boosting accessibility to widen user engagement, with proposed enhancements in contrast ratios, internationalization, and support for assistive technologies. Performance is already strong but will benefit from further efficiency improvements and layout stability efforts. The audit suggests a significant shift in content management, recommending the conversion of specific CMS collections to static content for increased performance, security, and simplicity, while retaining dynamic collections for frequently updated content. Feature development priorities include video integration with a TV Guide-style web app, social media feed implementation, and member profile creation. Design deliverables will encompass channel bumpers, slideshow assets, handouts, animations, and iconography, all aimed at elevating the user experience and site functionality.

Site Optimization
Overview
The website has strong scores in performance (96), best practices (96), and SEO (100), indicating solid foundations in these areas.
The main area of improvement is accessibility, scored at 88, where enhancements could significantly improve user experience for a wider audience.
Accessibility Improvements (score: 88%)
Contrast Ratio: Increase the contrast between background and foreground colors to enhance text legibility.
Internationalization and Localization: Add a lang attribute to the <html> element to improve content interpretation for users in different locales.
Names and Labels: Ensure links have discernible names to enhance usability for assistive technologies.
Audio and Video: Include <track> elements with captions in <video> elements to provide alternative content for users with hearing impairments.
Manual Testing: Conduct manual testing to identify and address issues not covered by automatic detection.
Performance Enhancements (score: 96%)
Efficiency Improvements: Optimize image loading, reduce unused CSS and JavaScript, and ensure efficient cache policies to speed up page loading times.
Layout Stability: Address layout shifts and ensure images have explicit width and height to improve visual stability.
Best Practices and SEO (score: 96%)
Best Practices: Address browser console errors and ensure Content Security Policy (CSP) is effective against XSS attacks.
SEO: Continue to adhere to basic SEO advice while exploring additional validators for enhanced search engine ranking.
Implementation Plan (score: 100%)
Prioritize accessibility improvements to ensure compliance with WCAG guidelines.
Schedule performance optimizations to enhance the user experience across devices.
Review and apply best practices for web development and security measures.
Conduct an SEO audit with additional tools to identify further improvement areas.


CMS Restructuring
Overview
If each collection within the CMS (Content Management System) is dedicated to a single page and only contains one entry that houses all the content for that page, it implies that the content is static, meaning that the content doesn't change often or at all, making it a suitable candidate for being managed statically within the page itself, rather than being dynamically loaded and managed through the CMS.

 There are several benefits to this approach:
Performance: Static content can be served faster since it doesn't require database queries or dynamic generation at runtime. This is especially true for websites where content doesn't change frequently.
Security: Static pages are inherently more secure because there's no database interaction or server-side processing involved in serving the content, reducing the attack surface for potential vulnerabilities.
Simplicity and Reliability: Managing content statically can simplify the architecture of a site, as it removes the need for content management overhead for those specific pages. It also increases reliability since there's less that can go wrong in terms of database issues or CMS-related bugs affecting the content delivery.
Version Control and Collaboration: Static content can be easily version-controlled using systems like Git, allowing for better tracking of changes and collaboration among developers and content creators.


Collections to remove (static content):
Home Pages (1 item)
About Pages (1 item)
Watch Pages (1 item)
Connect Pages (1 item)
Amplify Pages (1 item)
Engage Pages (1 item)
Create Pages (1 item)


Collections to update:
Show Spotlights (6 items)
Image / thumbnail (img)
Show title (text)
Add bio (text)
Add reel (video)
Add social media handle (url)
Team Member Second Groups (5 items)
Photo (img)
Add bio (text)
Add reel (video)
Add social media handle (url)


Unchanged collections:
Programs (6 items)
Membership Plans (3 items)
Home Slides (4 items)
Team Members First Groups (6 items)
Watch Page FAQs (46 items)
RYSE MPLS Pages (2 items)
RYSE MPLS Pages FAQs (10 items)
RYSE MPLS Story Lab Page FAQs Copies (4 items)
Stream Channels (3 items)
Engage Slides (4 items)


Feature Development
Video integration
TV Guide (embedded custom web app)
Overview
The TV Guide-style web app is designed to enhance speakmpls.com's video content presentation, offering users a streamlined and intuitive interface to browse and access video programming. Inspired by established platforms like Cablecast.tv, CBS's TV schedule, Gracenote's TV listings, and the UI design language of modern apps such as YouTube TV, this web app aims to provide a comprehensive and user-friendly live streaming experience. The TV Guide-style web app powered by Nuxt is a strategic addition to speakmpls.com, aiming to engage viewers with a rich, accessible, and engaging video viewing platform.
Design Inspiration
Streaming and Video On Demand Solutions (cablecast.tv)
TV Listings and Schedule for CBS Shows
TV Listings- Find Local TV Listings and Watch Full Episodes (gracenote.com)
YouTube TV update utilizes more of Google TV’s UI design language (chromeunboxed.com)
Food Network TV & Show Schedule
Minneapolis TV Guide - TV Listings (ontvtonight.com)
Social media integration
For integrating social media content into the Webflow site without directly embedding from the platforms, there are several third-party plugins and solutions that could be highly beneficial. These tools allow you to maintain your website's design language while seamlessly integrating social media feeds.
Juicer offers a straightforward way to aggregate and display content from various social media platforms, including Facebook, Twitter, Instagram, YouTube, and more. It allows customization to align with your Webflow site's design through a simple process that involves setting up an account, adding your social media sources, and then embedding the generated code into your Webflow site​​.
Common Ninja provides a responsive solution for integrating Social Media & RSS Feeds, which can be customized with your own CSS to perfectly match your site's design. Their widget automatically updates on your Webflow website with every change you make, ensuring your social feeds are always current. It's touted for its ease of use, requiring no special coding skills to integrate​​.
Flockler (Note: As per the latest information, this plugin has been deprecated and is only available for customers who have previously installed it) gathered and displayed branded social media feeds on Webflow sites. This was an option for those looking to incorporate social feeds into their websites directly​​.
EmbedSocial provides a suite of widgets for Webflow to aggregate and reuse user-generated content from platforms like Facebook, Instagram, and TikTok. It boasts official API integrations with major social networks and offers fast-loading widgets, which are essential for maintaining website performance. Their service is customizable and aims to enhance your website's social proof by showcasing real user interactions and reviews​​.
Design Deliverables
General
Animations / GIFs
Iconography
Social media assets
Document templates / handouts
Video
Thumbnails
Bumpers
Member highlights
Testimonials
Reels
Slideshows
Physical
Table covers
Banners
Posters
Swag (t-shirts, mugs, buttons, etc)
iPad covers & phone cases



```

While working on these tweaks, I kinda went overboard and basiclly rebuilt the site from scratch. I love the result, but a full redesign was not within scope and I'm afraid the project manager will be upset if I show him a whole new site rather than just the small updates we talked aobut. Sometimes I feel like I do too much. I love this work and it was so much fun building the new site, but I'm afraid I might've wasted time??? idk, I think (hope) the client will like it.

I'm writing a message to Matthew (project manager) about this. I want to get his thoughts on the new design but in a way that isnt too wordy or audacious. I'm trying to be as concise and considerate as possible. -->

# Draft for Matthew

Hey Matthew, just wanted to give a quick update on the Speak website updates.
While working on it this week I found myself going a bit overboard. This is what I've been working on: https://speakmpls2.webflow.io
I understand that this is bordering on a full redesign which is not within scope but I do think this design solves many of the outstanding issues.
I'm available

---

1. Events & classes are now front & center and have their own CMS collection for Rebecca & team to manage.
2. The CMS is heavily simplified, allowing static content to be managed more effectively.
3. The memberships and events+classes have been given their own page for a more focused experience with an emphasis on visuals > text.
4. Rebecca mentioned adding more motion, playfulness & video into the site to be more inline with the tone of their social media. I believe this design captures this through the emphasis on microinteractions & transition animations.
5. Regarding Rebecca's request for more video content on the site, I found that the angular design of the current site makes it a bit difficult to implement video and the boxier design lends itself well to be a blank canvas for rich content.

Of course, I'd love to hear your thoughts on this new design. While it was a lot of fun to work on, the last thing I want to do is

---

heres the new website
we discuss such & such in the scope
i wanted to take this opportunity to ...

---

This is just a draft

---

Rebecca asked for a banana and I'm providing a plantain.

---

"fake it til you make it only works when it's something you actually wanna make it to"
