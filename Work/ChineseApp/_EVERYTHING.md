// ------------ braindump ------------

## Potential AI features:

- "While there are many correct ways to translate a given English sentence (i.e. 我收到了你的微信; 我收到了你发的微信), detecting that is hard. Not validating punctuation can make it feel more “fair”. Machine translation or an LLM could potentially generate alternative phrasings to validate against."

# Observations

- Most of the existing apps focus on their own content (which makes sense ig cuz that's their value prop)
- Some have good UI/UX, some don't

## Common issues:

- Cost is an issue <Q: how do you plan to resolve this?>
- Requiring internet connection at all times <Q: how do you plan to resolve this?>
- Performance and lack of functionality <Q: how do you plan to resolve this?>
- Content > Features && Features > Content <Q: how do you plan to resolve this?>

## Differentiators:

- Modern UI/UX
- Customizable and open (BYOC, open integrations)
- Community powered content/dictionary
- Open source???? <Q: what are your thoughts on this?>
- Integrate with other apps like Anki, LanguageReactor, DuChinese
- Interactive flashcards: (free input, multiple choice) <Q: are these exercises curated by the platform or by the users?>
- Personalized comprehension exercises based on your unique vocab lists, learning goals, skill-level, etc. <Q: these must be curated by the platform right?>
- Multiple-choice flashcards instead of self-scored <Q: what does this mean exactly?>
- Possibly regular flashcards as an option <Q: why would someone want this?>

## Nice to haves:

- Niches for specific goals (business, travel, etc.)
- Chapters from textbooks like HSK <Q: how are you sourcing these? Is there an API? Scraping? Partnering with publishers?>
- User generated vocab lists, lessons, stories, and other content <Q: multimedia? (images, audio, video)?>

## Pricing:

- Ideally free. (server costs near zero cuz nija shit)
- Features that rely on third party services (TTS, etc.) may need to be paid. Stov's caching solution helps with this. <Q: do you envision TTS as a luxury or as a crucial accessability feature?>
- AI features are unlikely, but maybe it can give "suggestions". <Q: tell me more about these "suggestions">

## Competitors

- `Anki`: Not just for Chinese. It's a learning tool based on the SRS (Spaced Repetition System) algorithm.
- `HelloChinese`: (great name) – Great reviews on the app store. Learning from multiple languages. Structured lessons for all levels. Expensive as fuck.
- `HackChinese`: (great logo) – Spaced repetition system. Must be online. Support exporting vocab lists. Annoying flashcard system. Mobile version is lacking. Expensive as fuck.
- `DuChinese`: Stories, lessons, flashcards, and more. Super accessible–I was able to access the content without logging in. Lots of reading content. Downloadable content. Flashcard-only review system.
- `Language Reactor`: _Amazing_ UI according to stov. Integrates directly with streaming services to lookup translations. "PhrasePump" reviews. All self-scored flashcards, no mobile support...
- `Pleco`: The best free dictionary. Dated UI, lots of manual setup, many lookup method like OCR, good support for syncing between devices.

## Core Features

### Review System

Vocabulary quizzes:

- This is similar to duolingo
- Stov imagines a game-like interface
- App validates the answers for you (based on the dictionary)

Grammar exercises:

- Freeform input exercises
- Producing output helps a lot more than just reading and memorizing
- User translates sentences (targeted vocab unique to the user)

Adding your own content

- While consuming content, the user can add/bookmark words to their vocab list by searching the dictionary.

### Reader

Stories and graded readers (most common):

- ...

Podcast read alongs:

- ...

Interactive karaoke mode:

- ...

Media playback:

- ...

### Dictionary

At the core of all this, we need a dictionary to lookup the many characters and words.

Word details:

- ...

Dictionary search:

- ...

### Integrations

<!-- WIP -->

// ------------ considerations ------------

- [ ] Should I bring Lawan onboard to help?
- [ ] How much time can I commit?
- [ ] Should I charge hourly, retainer, or flat fee?
- [ ] Would this be a long-term engagement?
- [ ] Should I visit SF after new years?

// ------------ context ------------

```js
import { people, projects, tasks } from "mainframe";

projects.create({
  name: "Chinese App",
  description: "A Chinese learning app",
  owner: people.findByEmail("steven@mainframe.so"),
  status: "active",
  startDate: new Date(),
  endDate: new Date(new Date().setDate(new Date().getDate() + 30)),
  budget: 10000,
  currency: "USD",
  tags: ["Chinese", "Learning", "App"],
  isPublic: true,
  isArchived: false,
  isDeleted: false,
});
```

// ------------ discovery ------------

# Discovery Outline

This is a high-level outline of the discovery process for Stov's Chinese learning app.

## Introduction

> 👋🏾

## Discovery

### Getting Aligned

> This is my idea of the app based on what you've sent me. Is this accurate? Anything I'm missing?

- [ ] AI shit
- [ ] Gumbo + pivoting from design to development
- [ ] Telos
- [ ] What inspired you to start this project?
- [ ] Going to China soon?

### Key Questions

Resolving common issues:

- [ ] What is your approach for resolving the cost issue?
- [ ] What is your approach for resolving the internet connection issue?
- [ ] What is your approach for balancing content and features?

Differentiators:

- [ ] Are you envisioning both a mobile and web app?
- [ ] What are your thoughts/plans on open sourcing the codebase?
- [ ] Is it accurate to think of this as github for spoken/written language (specifically Chinese)?
- [ ] Do you plan to expand this to other languages? Will then platform be tailored to all languages with Chinese as a first class citizen?
- [ ] Are the interactive flashcards (free input, multiple choice) curated by the platform or by the users?
- [ ] Are the personalized comprehension exercises based on your unique vocab lists, learning goals, skill-level, etc. curated by the platform or by the users?
- [ ] What does multiple-choice flashcards instead of self-scored mean exactly?
- [ ] What is it you don't like about regular flashcards? What has been the most effective method for you?
- [ ] How are you sourcing chapters from textbooks like HSK? Is there an API? Scraping? Partnering with publishers?
- [ ] Do you envision multimedia user generated content (images, audio, video)?
- [ ] Do you envision TTS as a luxury or as a crucial accessability feature? Where does that line get drawn?
- [ ] Tell me more about your vision for AI features.

Core Features:

- [ ] Would the review system be writing/reading focus only, or speech as well?
- [ ] How do you envision the process of adding new words to the dictionary? Is it a matter of integrating with an existing dictionary API, or would it all be user-curated (github-esque)?
- [ ] ...

Competitors:

- [ ] Would Duolingo be considered a competitor?

Wrap-up:

- [ ] Budget?
- [ ] Do you have a launch date in mind?

Collaboration:

- [ ] Best communication method?
- [ ] Do you need help with Branding/Marketing?

Roles & expectations:

- [ ] Contractor?
- [ ] Am I expected to ideate on features & strategy, or just design & frontend implementation?

## Next Steps

I'll be putting together a comprehensive plan for the project.

### Deliverables (Deadline: 12/25/2024)

- [ ] SOW (PDF)

> Includes: Overview, deliverables, constraints, timeline, scope, and payment

- [ ] Slide Deck (PDF)

> Includes: Distillation of the SOW and deeper exploration into the design/visual direction, features and other considerations.

- [ ] Terms of Service (PDF)

> Includes: Terms of Service, Privacy Policy, and other legal documents.

## Design System

---

- Platform: Figma
-

### Component Library

---

- Platform: Flutter
-

### UX Design / User Joureny

---

-

### Brand Identity / Voice

---

-

#

// ------------ insights ------------

# Key Insights

## Target Audience

- Intermediate to advanced Chinese learners
- Focused on customizing their learning experience with their own content
- Motivated to improve their Chinese for personal or professional reasons

## Target Platforms

- Mobile-first (iOS and Android)
- Web for content management and extended features
- Potential for desktop apps in the future

## User Personas

- The Self-Directed Learner: Intermediate level, wants to supplement their learning with custom content
- The Language Enthusiast: Advanced level, seeks to maintain and improve their skills through daily practice
- The Heritage Speaker: Proficient in speaking, but wants to improve reading and writing skills
- The Professional: Needs to improve their Chinese for work or business purposes

## Core Features

- Customizable dictionary with user-generated content and examples
- Intelligent review system adapting to user's performance and goals
- Integrated reader for immersive reading practice with instant word lookups
- Sentence authoring tools for creating and sharing custom learning content
- Gamification elements to maintain motivation and engagement
- AI-powered insights and analytics

## Stack

- Front-end:
  - Mobile: React Native with Expo for rapid cross-platform development
  - Web: Next.js for server-side rendering and optimized performance
- Back-end:
  - Node.js with Nest.js for a scalable and maintainable architecture
  - GraphQL API for flexible and efficient data fetching
- Database:
  - PostgreSQL for structured data and complex relationships
  - Redis for caching and real-time features
- Content Delivery:
  - AWS S3 for storing and serving user-generated audio and images
  - Cloudflare for CDN and DDoS protection
- DevOps:
  - Docker for consistent development environments and easy deployment
  - GitHub Actions for CI/CD pipelines
  - Sentry for error tracking and monitoring
- APIs & Services:
  - Anki, DuChinese, and Language Reactor for importing user content
  - Azure Cognitive Services for text-to-speech and other AI capabilities

## UI/UX Considerations

- Intuitive navigation prioritizing one-tap access to key actions like "Add Word" or "Start Review"
- Distinct app personality with playful mascot animations during loading and review screens
- Custom typography and color palette to avoid generic Material/Cupertino styles
- Accessibility features like text resizing, color contrast options, and VoiceOver support
- Tag-based organization system for user-generated words and sentences
- Intelligent review recommendations based on user activity and performance metrics
- Optimized for performance, with client-side caching and efficient API design for large datasets
- Seamless importing of user content from external sources like Anki, DuChinese, and Language Reactor

## Competitor Analysis

- **Customization as a Key Differentiator**:

  - Allow users to import their own content from various sources (e.g., YouTube, podcasts, articles) to create a personalized learning experience tailored to their interests and goals.
  - Provide flexible tools for users to create, edit, and share their own flashcards, sentences, and stories, fostering a sense of ownership and engagement.
  - Offer customizable review settings (e.g., review frequency, card format, audio options) to accommodate different learning styles and preferences.

- **Addressing Pain Points in Existing Apps**:

  - Introduce a focus on sentence-level practice to improve contextual understanding and language production skills, going beyond isolated vocabulary memorization.
  - Break away from rigid, pre-determined content by allowing users to learn from authentic materials relevant to their needs and interests.
  - Streamline the content creation process with intelligent tools for adding and tagging words/sentences, reducing manual effort compared to apps like Anki.

- **Targeting Intermediate to Advanced Learners**:

  - Recognize the unique challenges and goals of intermediate to advanced learners, such as refining tones, mastering formal/written language, and navigating domain-specific vocabulary.
  - Provide advanced features like multi-word expressions, semantic radicals, and etymological insights to deepen understanding of the language.
  - Offer a wide range of content genres and difficulty levels to support continuous growth and prevent plateauing.
  - Integrate with external tools and resources commonly used by advanced learners (e.g., pop-up dictionaries, frequency lists) for a seamless learning ecosystem.

## Monetization Strategy

- (Ideal) Pricing: Free.
- Server costs should be near zero based on current designs.
- A "paid" version could allow a user to get features that I rely on 3rd party APIs for:
  - TTS for custom content after a certain limit. My caching solution helps a lot here.
  - AI features. Unlikely to be added, but maybe it can give "suggestions". Dangerous. Potentially use it for finding images to use in quizzes/reviews.

## Roadmap and Priorities

MVP: Deliver the core dictionary, review system, and reader functionality, along with basic tools for users to create and import their own content. This will provide a solid foundation for the app's unique value proposition.

- Future Enhancements:
  - Introduce gamification elements like challenges, leaderboards, and achievements to boost engagement and motivation.
  - Develop a comprehensive analytics dashboard to provide users with detailed insights into their learning progress and areas for improvement.
  - Expand the range of supported content sources and formats to cater to diverse learning needs and preferences.
  - Explore AI-powered features such as personalized recommendations, adaptive review scheduling, and intelligent error correction to enhance the learning experience.
  - Foster a sense of community by adding social features like user profiles, shared progress, and collaborative learning tasks.
  - Build a marketplace for users to share, discover, and rate user-generated content, cultivating a vibrant ecosystem of learning resources.
- Iterate Continuously: Gather user feedback and analyze usage data to identify areas for refinement and drive ongoing improvements to the app's functionality, usability, and content offerings.

## Estimated Deliverables

This is a list of possible deliverables that I've been thinking about. Needing to clarify with Stov on what is actually needed.

- Design system documentation and component library
- Branding package including logo, color palette, and typography
- High-fidelity mockups for key user flows and screens
- Functional prototypes demonstrating core interactions and animations
- Fully implemented front-end views with integration to back-end APIs
- Optimized build pipeline and deployment process for web and mobile
- Comprehensive testing suite covering critical paths and edge cases
- Detailed analytics and reporting dashboard for monitoring key metrics
- Content strategy and guidelines for tone, voice, and localization
- Accessibility audit to ensure WCAG compliance and inclusive design
- Performance benchmarking to set baseline metrics and optimize critical rendering paths
- User onboarding flows and in-app tutorials to guide first-time users
- Error handling and empty states for graceful UX in edge cases
- Design system governance plan for maintaining consistency as the product evolves

## Estimated Timeline

This is the high-end timeline based the assumpmtion that the estimated deliverables are accurate.

- 2-3 weeks: Design system, branding, and high-fidelity mockups
- 4-6 weeks: MVP development (dictionary, review system, reader)
- 2-3 weeks: User testing, feedback, and refinements
- 3-4 weeks: Gamification, analytics, and expanded content sources
- 4-6 weeks: Advanced features (AI assistance, social, marketplace)
- Ongoing: Continuous iteration and improvement based on data-driven insights

## Estimated Cost (Awaiting Discovery Call for Further Clarification)

This is a rough estimate based on the assumpmtion that the estimated deliverables are accurate.

- **Design and Branding**: $1,000 - $3,000

  - Most design work can be handled independently using cost-effective tools like Canva or Figma.
  - Budget for a professional logo and some key illustrations to establish a strong brand identity.

- **MVP Development**: $0 - $5,000

  - Primary cost will be the developer's time.
  - Minor expenses for tools, libraries, or assets to expedite development.
  - Factor in potential costs for paid APIs or services, if required.

- **Additional Features**: $0 - $2,000

  - Main cost will be the developer's time and effort.
  - Possible upgrades for tooling or additional assets as the app increases in complexity.

- **Ongoing Maintenance**: $100 - $500 per month
  - Relatively low costs for a solo developer.
  - Main expenses include hosting, analytics, and customer support tools.
  - Budget for any paid APIs or services the app depends on.

## Possible Monetization Strategies

### Freemium Model:

- Core features available for free to attract users and demonstrate value

  - Basic dictionary with word lookup, character breakdown, and example sentences
  - Flashcard review system with customizable settings and progress tracking
  - Reader mode for importing and studying user-provided content

- Premium subscription unlocking advanced features:

  - Unlimited high-quality text-to-speech with multiple voices and dialects
  - AI-powered insights on vocabulary usage, common mistakes, and personalized recommendations
  - Advanced analytics dashboard with detailed progress metrics and learning trends
  - Offline mode for studying without internet connection
  - Priority customer support and early access to new features

### Sponsored Content:

- Partnerships with language schools, textbook publishers, or online course providers
- Sponsored lessons, articles, or videos integrated into the app's content library
- Sponsored challenges or leaderboards to encourage user engagement and competition

### Affiliate Partnerships:

- Recommend relevant products or services for Chinese learners (e.g., tutoring, books, apps)
- Earn commissions on user purchases made through affiliate links
- Provide exclusive discounts or free trials to incentivize user referrals and purchases

### Potential for Additional Revenue Streams:

- One-time purchases for specific content packs (e.g., HSK lessons, travel phrasebooks)
- Marketplace for user-generated content, with revenue split between creators and platform
- Corporate subscriptions for businesses or educational institutions
- Localized advertising for language-learning products or services

// ------------ notes ------------

- Self-scoring flashcards SUCKS
-

# Spaced repetition system

## The big issue

- Gated content
-

// ------------ overview ------------

# Excalidraw Flowchart and Screenshots

## Chinese App High-Level Overview

## Motivation

Provide a frictionless UX that allows intermediate+ learners to focus on the specific vocabulary they’re learning, including from outside of this app. It should be a “hub” for daily routines and tracking progress.

Most of the existing mobile apps for learning Chinese are focused on the content they provide. Some have good UI/UX, some don’t. Common issues are cost, requiring an internet connection at all times, performance and lack of functionality. Some apps with great content are missing features, some apps with great features are missing content.

## Differentiators

- Modern UI/UX
- Customizable and open
- Users can bring their own content
- Integrate with other apps like Anki, LanguageReactor, DuChinese
- Community audited. Inaccuracy reporting systems will allow improving the dictionary and other content over time. There may be attribution or other incentives for contributing.
- OSS codebase???
- Beyond flashcards:
  - Sentences (free input and multiple choice)
  - Passage comprehension targeting your vocab.
  - Multiple-choice flashcards instead of self-scored.
  - Regular flashcards could be an option, but I personally don’t like them.

## Nice to haves

- Useful out-of-the starter content:
  - Niches like sports, professions etc to import into your vocab lists
  - Chapters from textbooks like HSK
  - User generated content like vocab lists, lessons and stories. Would need moderation.

(Ideal) Pricing: Free.
Server costs should be near zero based on current designs.
A “paid” version could allow a user to get features that I rely on 3rd party APIs for
TTS for custom content after a certain limit. My caching solution helps a lot here.
AI features. Unlikely to be added, but maybe it can give “suggestions”. Dangerous. Potentially use it for finding images to use in quizzes/reviews.

## Prior Art

- LingQ (cool features that aggregate external content, dashboards; supports maybe too many languages, online, poor mobile support, new users are seemingly assumed beginners)
- Glossika (online, major performance issues, online)
- BoostChinese (niche vocabulary decks; flashcards, performance issues, online)
- Anki
  - Pros:
    - Very flexible, the user can have whatever form of content they want
    - Active community publishing decks and mods/plugins
  - Cons:
    - Learning curve
    - The user must do a lot of work to set things up
    - Antiquated UI
- HelloChinese
  - Pros:
    - Structured lessons from absolute beginner to intermediate level.
    - Daily review system that sources content from the lessons.
    - Lesson reviews are interactive: multiple choice, user text input, etc.
    - Large library of graded readers (up to HSK3)
    - Most features work offline (must download stories)
    - Learn from English, Spanish, German, French, Korean, Japanese, Russian, Vietnamese, Thai and Portuguese
  - Cons:
    - Saved vocabulary from readers can only be reviewed in flash cards.
    - No ability to import external vocab for review.
    - Receives almost no content updates besides new graded readers.
    - Premium is $156/year, Premium+ is $100 one-time (add on, not a replacement)
- Hack Chinese
  - Pros:
    - Detailed dashboard
    - Lots of curated vocab lists (HSK, other popular textbooks/lessons like Outlier)
    - Configurable study modes (only old, only new, only hard, only easy)
    - Assumed known words based on frequency lists.
    - Export known words as CSV.
    - Du Chinese integration.
  - Cons:
    - Must be online
    - Very word focused. Little grammar/sentence review.
    - The Flashcard system is very annoying. 4 clicks:
      - I think I know -> See answer/confim I did know
      - Both of these steps for both pronunciation and meaning.
      - It’s configurable to make it 2 click like other systems
    - Mobile is very limited compared to desktop/web.
    - Recurring cost ($144-$216 per year)
- Du Chinese
  - Pros:
    - Decent UX across both mobile and desktop web
    - Large libraries of reading content from beginner to very advanced
    - Download content for offline use
  - Cons:
    - Review system is flashcard only
    - Review is word focused. Would be nice to check the comprehension of entire sentences or passages.
    - Language Reactor
      - Pros:
        - Amazing UI that integrates directly into Netflix and Youtube on Chrome to lookup translations while consuming content without too much interruption.
        - PhrasePump reviews (flashcards with human-speaker audio clips from shows/movies/videos)
        - Exportable saved words list
      - Cons:
        - It’s all self-scored flashcards.
        - No mobile support
        - Youtube videos must have properly added chinese subtitles (translations and automatic subtitles seem to usually be mismatched with the actual word choice). Not easily fixable.
- Pleco
  - Pros:
    - Probably the best free dictionary, or at least the most well known.
    - Many lookup methods: Radicals, pinyin, english definition, OCR/Camera
    - Has a clipboard reader
    - Allows saving and reviewing words
  - Cons：
    - Dated UI
    - Takes a lot of intention to create a good learning environment (see the manual)
    - Reviews are primarily flashcard based
    - Seems to primarily focus on iPhone over Android support
    - Syncing between devices means exporting and importing database files.

## Core Features

### Review System

- Vocabulary Quizzes
  - A game-like interface to make vocabulary practice more interactive and enjoyable.
  - Multiple-choice questions:
    - Pick the corresponding word translation
    - Pick the corresponding sentence translation (with an individual focus word).
    - Pick the image that best fits the given work (or word that best fits the image)
  - App validated answers instead of self-scoring.
- Grammar Exercises
  - Producing output is massively helpful compared to just reading. The primary method for this would be for the user to translate sentences containing targeted vocab, or individually saved sentences to review. If using a mobile phone with speech-to-text, they can also practice their speaking/pronunciation to some degree.
  - While there are many correct ways to translate a given English sentence (i.e. 我收到了你的微信; 我收到了你发的微信), detecting that is hard. Not validating punctuation can make it feel more “fair”. Machine translation or an LLM could potentially generate alternative phrasings to validate against.
  - Adding your own content
    - If I’m watching a youtube video like Learn Yi Jian Mei, I might follow along with the app and add words to my words list using the dictionary search.
- For sentences
  - Reader
    - This is a screenshot, we already built the basic reader functionality.
    - Similar to HelloChinese and DuChinese, we will expose our own interface that allows easily looking up words while reading a text. Directly from this interface the user can:
      - See definitions/pinyin by tapping on a word (and hear it read by TTS)
      - Jump to the word’s full dictionary page
      - Tap and hold on a sentence to see the contextual translation (and have it read by TTS or an attached recording)
      - Save a story to the “favorites” list
      - Listen to the entire story via a recording or TTS.
    - Nice to have: Automatically highlight the word/sentence currently being read. Add a scrubber/progress bar and allow scrubbing by tapping/holding on the text.

## Content Types

- Stories and Graded Readers (most common type)
  - Browse a selection of graded reader stories tailored to different proficiency levels.
  - Optional comprehension questions to test understanding.
  - Considerations for user-generated content, with mechanisms to manage copyright risks.
- Podcast Read Along:
  - Can custom import podcasts via audio files, links from apps, RSS feeds.
  - Trigger external app playback via deeplinks
  - Integrate with Apple, Spotify, Youtube.
  - Read like normal, but tapping words will pause the system media playback.
- Interactive Karaoke Mode:
  - Auto-highlighting of words in sync with karaoke timestamps.
  - Control system media to play copyrighted audio in another app like Spotify or Youtube.
  - Learn a song’s lyrics line by line and understand what it actually means in context rather than the individual words.
  - This is a cool idea, but not sure where to source the data.
- Media Playback:
  - External media app playback triggered via deep links (Spotify, YouTube) to avoid copyright issues.

## Content Authoring

- Pick the content type.
- Importers for different sources and content types
- Fields for attribution
- Audio can be attached or recorded.
- It would be nice to automate linking each sentence with its segment of the audio. Especially in songs. Subtitle data would work, but may also need manual annotation.
- https://mfa-models.readthedocs.io/en/latest/dictionary/Mandarin/Mandarin%20%28China%29%20MFA%20dictionary%20v2_0_0a.html#mandarin-china-mfa-dictionary-v2-0-0a
  - There is a creative commons model available for this already!!!!
- Every sentence is individually editable.
- Set the English meaning for the entire sentence instead of word-by-word.
- Customize the gender, age and mood of the TTS voice. Azure is really robust here.
- Linking words to dictionary entries automatically is best-effort.
- The current algorithm uses a small frequency list of HSK terms. A better frequency list and some rules about avoiding proper nouns would fix a large number of errors. Lots of room for improvement.
- Regardless, we need a way to manually fix errors.
- Tap an underlined section: select that cluster of characters. Drag, pick a few characters. Double-tap, pick a single character. The words with those exact characters will be options below.
- We will also want to be able to handle numbers. 一三六八 or 一千三百六十八. 一 or 幺? Annotating/detecting this has a major effect on the TTS quality.

## Dictionary

- At the core of all this, we need a dictionary to look up the many characters and words.
- Word Details
  - Each dictionary entry will show:
    - Definitions
    - Appendable: Users can add their own mnemonics & interpretations
    - Editable: Users can hide or reword the system supplied definitions.
    - Example sentences:
      - Appendable: Users can add their own from content or completely custom entries that they encountered outside the app or in daily life.
      - Editable: If there are mistakes in picking pinyin/linked dictionary entries the user can touch it up. User fixes may be reported to be fixed upstream so everyone can benefit from community contributions.
    - Related words: Compound words that contain the current entry’s characters.
    - Example: 城市 is related to 大城市.
    - Character breakdown: Link to the entries for individual characters that make up a word.
- Dictionary Search
  - While a large portion of interactions with the dictionary are linked from content, Still, there are cases when you want to make one-off lookups to a work you heard in a lesson with your tutor or in your daily life and add it to your saved words list.
  - Pleco is the most widely known Chinese dictionary. It supports a few methods for lookup: In the future OCR and radical based lookup would be nice, but for starters a text box that searches across pinyin, hanzi, fanti and english definitions will be fine.

## Integrations

// TODO this section is only an outline for now

- Language reactor - import your words list automatically with smart merging
- Anki - export your list as anki cards for words and sentences
- DuChinese - if you prefer their reader and content, import the stories and words from there to become saved words and sentences to review in our app.

// ------------ questions ------------

## Questions for Steven

General:

- [x] Best communication method?
- [x] Do you need help with Branding/Marketing?
- [x] Do you have a launch date in mind?
- [x] What is your budget?
- [x] What were your pain points in your language learning journey?
- [x] What are you hoping to achieve with this app?

Resolving common issues:

- [x] What is your approach for resolving the cost issue?
  > Only have users pay for features that rely on 3rd party APIs.
- [x] What is your approach for resolving the internet connection issue?
  > Offline access
- [x] What is your approach for balancing content and features?
  > Users can bring their own content.

Differentiators:

- [x] What are your thoughts/plans on open sourcing the codebase?
  > No open source.
- [x] Is it accurate to think of this as github for spoken/written language (specifically Chinese)?
  > The dictionary will integrate with a 3rd party dictionary API that stov is licensing.
- [x] Do you plan to expand this to other languages? Will then platform be tailored to all languages with Chinese as a first class citizen?
  > No plans to expand to other languages. Just Chinese.
- [x] Are the interactive flashcards (free input, multiple choice) curated by the platform or by the users?
  > Curated by the platform but based on the user's vocab list.
- [x] Are the personalized comprehension exercises based on your unique vocab lists, learning goals, skill-level, etc. curated by the platform or by the users?
  > Based on the user's vocab list, learning goals, skill-level, etc. (likely AI suggestions)
- [x] What does multiple-choice flashcards instead of self-scored mean exactly?
  > Instead of the user manually scoring how they did in an exercise, the app will do it for them.
- [x] What is it you don't like about regular flashcards? What has been the most effective method for you?
  > They are not effective for me personally.
- [x] How are you sourcing chapters from textbooks like HSK? Is there an API? Scraping? Partnering with publishers?
  > There is a creative commons model available for this already!!!!
- [x] Do you envision multimedia user generated content (images, audio, video)?
  > Just text and audio for now. Down the road there will be a chrome extension for multimedia content.
- [x] Do you envision TTS as a luxury or as a crucial accessability feature? Where does that line get drawn?
  > TTS is a crucial accessability feature.
- [x] Tell me more about your vision for AI features.
  > AI features are unlikely to be added, but maybe it can give "suggestions".
- [x] Are you envisioning both a mobile and web app?
  > Just mobile for now.

Core Features:

- [x] Would the review system be writing/reading focus only, or speech as well?
  > Speech as well. That is already a feature in the current version.
- [x] How do you envision the process of adding new words to the dictionary? Is it a matter of integrating with an existing dictionary API, or would it all be user-curated (github-esque)?
  > The base dictionary is licensed from a 3rd party, but users can add their own words to their own fork of the dictionary. (double check this)

Monetization (out of curiosity):

- [x] Ads?
  > No
- [x] Partnerships?
  > No
- [x] Grants?
  > No
- [x] VC?
  > No
- [x] Freemium subscriptions?
  > Yes

Roles & expectations:

- [x] Contractor?
  > Yes
- [x] Am I expected to ideate on features & strategy, or just design & frontend implementation?
  > Deliverables: Design System, Component Library, UX Design / User Journeys, Branding, Landing Page, Marketing Materials

// ------------ thoughts ------------

Essentially, this is a personal knowledge management tool for language learning. It's also a kind of social network for language learning. It's a community-powered content platform... Instead of one company curating the same content for everyone, users curate their own content and share it with others. It's a decentralized educational social learning network.

My instinct/assumption is that most folks experience this kind of thing through like a discord or facebook group. This is more open and accessible. No invite required (to my knowledge).

So... _is the community aspect a feature or a product?_?

// ------------ deliverables ------------

1. **Brand Identity & Brand Voice**

- Tools: Figma, Canva, Notion
- Goals: The brand identity is the personality, face, and voice of the app. This deliverable will include the name, logo, color palette, typography, copy, and other front-facing elements that may exist beyond the scope of the app itself.

2. **Comprehensive Design System**

- Tools: Figma
- Goals: This ties everything together. It sets the tone for the brand identity, component library, and overall design language. It is the visual language for the app, and the guideline by which all other deliverables are crafted. This includes colors, type, spacing, character design, animation style, art direction, iconography, UI, and more.

3. **UI/UX Mockups & User Journeys**

- Tools: Figma, Figjam
- Goals: The aim of the the UI/UX mockups is not to be pixel perfect, but to be a comprehensive guide for the relationships of the pages/screens and flow of the app. These mockups will inform the process by which the user will interact with the app.

4. **Component Library & Documentation**

- Tools: Flutter, GitHub, GitBook
- Goals: This is a codebase of Flutter components. Each component is a fully functional widget that can be puzzle-pieced together to create a fully functional app. Each component is designed to be used in a way that is consistent with the overall design system and brand identity. Each component includes documentation, tests, and examples.

5. **Illustration & Character Animation**

- Tools: Procreate
- Goals: This is a collection of illustrations and animations that will be used to bring the app to life. This includes a cast of characters that will be used to represent the app in marketing/promotional materials as well as in the app itself. The characters will be designed and animated in a style that is consistent with the overall design system and brand identity.

6. **Landing Page**

- Tools: Figma, Notion
- Goals: This is the first thing users see when they land on the app. It will be the first impression of the app and the brand identity. It's job is to provide the user with a clear understanding of what the app is and why it's valuable. It should be a comprehensive guide for the user to understand the app and its features. The landing page should point the user to the app store, social media, and other relevant links.

7. **Marketing Materials**

- Tools: Figma, Notion
- Goals: This is a collection of marketing materials that will be used to promote the app. This includes social media posts, blog posts, and other marketing materials. This may include adhoc materials for specific events or campaigns.

// ------------ SOW outline (v1) ------------

Here’s the outline for the SOW:

---

### **Statement of Work (SOW) Outline**

1. **Project Overview**

   - Purpose and goals.
   - Key differentiators.

2. **Scope of Work**

   - Core features:
     - Dictionary and vocab management.
     - Review system.
     - Reader functionality.
     - Sentence authoring tool.
   - UI/UX design.
   - Integration features.
   - Advanced features (future scope).

3. **Deliverables**

   - Functional app with key features.
   - API integrations.
   - Documentation (user guides, technical documentation).
   - Maintenance plan.

4. **Timelines and Milestones**

   - Phase 1: Research and design.
   - Phase 2: Development.
   - Phase 3: Testing and refinement.
   - Phase 4: Launch and support.

5. **Budget Estimate**

   - Development costs.
   - Design costs.
   - Maintenance costs.

6. **Assumptions**

   - Offline functionality.
   - Free core features (monetization TBD).
   - Availability of APIs for integrations.

7. **Key Stakeholders**

   - Project owner.
   - Design team.
   - Development team.
   - QA team.
   - End users.

8. **Approval Criteria**
   - Performance benchmarks.
   - Functionality requirements.
   - Beta user feedback.

// ------------ SOW outline (v2) ------------

Here’s the **revised SOW outline** tailored to a **6-month retainer model**:

---

### **Statement of Work (SOW) Outline**

1. **Project Overview**

   - Purpose and objectives of the project.
   - Key differentiators.
   - Focus on building the app as a dynamic learning companion for Mandarin learners.

2. **Scope of Work**

   - **Phase-Based Approach:**
     - Month 1-2: Research, design, and foundational development.
     - Month 3-4: Core feature implementation and integrations.
     - Month 5: Testing, user feedback incorporation, and optimizations.
     - Month 6: Launch preparation and post-launch support.
   - **Core Features**:
     - Dictionary and vocab management.
     - Review system (game-like quizzes, sentence comprehension).
     - Reader functionality (with word lookups, TTS, and sentence translations).
     - Sentence authoring tool for annotating user-imported content.
   - **UI/UX Design**:
     - Design distinct visual identity with custom mascots.
     - Streamlined navigation for minimal user friction.
   - **Integrations**:
     - Third-party tool integrations (Anki, Language Reactor, DuChinese).
     - Media deep linking (Spotify, YouTube).
   - **Future-Proof Enhancements (Optional)**:
     - Interactive karaoke mode.
     - Community content marketplace.

3. **Deliverables (Monthly Milestones)**

   - **Months 1-2**:
     - Wireframes, prototypes, and finalized UI/UX.
     - Basic dictionary functionality with search and word detail pages.
   - **Months 3-4**:
     - Fully functional review system and reader.
     - Sentence authoring tool MVP.
     - Initial API integrations.
   - **Month 5**:
     - QA testing, beta testing, and feature refinements.
     - Analytics dashboards for streaks and progress.
   - **Month 6**:
     - Launch-ready app with all core features.
     - Post-launch support plan and developer handoff.

4. **Retainer-Based Budget and Payment Terms**

   - Fixed monthly fee covering:
     - Development team.
     - Design team.
     - QA and testing resources.
   - Allocated hours and priority adjustments based on monthly deliverables.

5. **Assumptions**

   - APIs for third-party integrations are accessible and documented.
   - Regular feedback loops with the project owner to prioritize features.
   - Offline functionality for all core features.

6. **Key Stakeholders**

   - Project owner (decision-making and direction).
   - Retained team (design, development, QA, project management).
   - End users (beta testers for feedback).

7. **Approval Criteria**
   - Each phase and feature must meet agreed-upon benchmarks.
   - Positive feedback from beta testers.
   - Final app adheres to UX/UI, performance, and feature quality standards.

// ------------ SOW outline (v3) ------------

### **Statement of Work (SOW) High-Level Outline**

---

#### **1. Introduction**

- **Project Name**: Chinese Learning App
- **Client Name**: [Insert Client/Stakeholder Name]
- **Prepared By**: [Your Name/Company Name]
- **Date**: [Insert Date]
- **Purpose**: High-level overview of the project objectives, scope, and deliverables to set clear expectations between all stakeholders.

---

#### **2. Objectives and Goals**

- Briefly describe the overarching goals of the project:
  - To create a mobile-first Chinese learning app for intermediate and advanced learners.
  - Provide a customizable and engaging platform for vocabulary building, sentence practice, and comprehension exercises.
  - Emphasize personalization, offline access, and community-driven features.

---

#### **3. Scope of Work**

##### **3.1. Core Deliverables**

- **Design**:
  - Modern UI/UX design with a distinct personality (e.g., mascots, animations).
  - User-centric workflows for key features (e.g., word lookup, review system).
  - Accessible design that meets basic WCAG guidelines.
- **Features**:
  - Vocabulary management with tagging and editing.
  - Sentence authoring and review functionality.
  - Reader mode with inline dictionary lookup.
  - Gamified review system (streaks, leaderboards).
  - TTS integration and offline capabilities.
- **Platform**:
  - Cross-platform mobile app (iOS and Android).
- **Integrations**:
  - Initial integration with Language Reactor, Anki, and DuChinese.

##### **3.2. Exclusions**

- Community marketplace and advanced AI features (e.g., AI-generated suggestions) for future phases.
- Language support beyond Mandarin and English.

---

#### **4. Deliverables and Milestones**

| **Phase**       | **Deliverable**                                     | **Estimated Timeline** |
| --------------- | --------------------------------------------------- | ---------------------- |
| **Discovery**   | Finalized SOW, wireframes, and user journeys        | 2 weeks                |
| **Design**      | High-fidelity mockups, design system documentation  | 3 weeks                |
| **Development** | MVP core features (dictionary, reviews, reader)     | 6 weeks                |
| **Testing**     | Beta testing, bug fixes, and refinements            | 2 weeks                |
| **Launch Prep** | Final app submission to App Stores, onboarding docs | 1 week                 |

---

#### **5. Roles and Responsibilities**

- **Client**:
  - Provide feedback on designs and prototypes.
  - Supply any required assets or content (e.g., branding, starter vocab lists).
- **Developer/Designer**:
  - Full-stack development and testing.
  - Regular progress updates and demos.
- **Additional Collaborators**:
  - Illustrator for mascots (e.g., Natalie).

---

#### **6. Timeline**

- Total project duration: [Insert Duration].
- Highlight dependencies or contingencies (e.g., API licensing, client feedback deadlines).

---

#### **7. Budget**

- Estimated cost breakdown:
  - **Design and Branding**: $X,XXX
  - **Development**: $X,XXX
  - **Testing and QA**: $X,XXX
  - **Miscellaneous Costs**: $X,XXX
- Payment terms (e.g., milestone-based payments, retainers).

---

#### **8. Communication Plan**

- Weekly status updates via [insert preferred platform: email/Slack/Zoom].
- Regular milestone demos.
- Dedicated point of contact for the project.

---

#### **9. Success Metrics**

- Define criteria for a successful project:
  - App performance (low latency, offline access).
  - Positive feedback from beta users.
  - Successful submission to App Stores.
  - Alignment with design and functionality expectations.

---

#### **10. Terms and Conditions**

- Ownership of intellectual property.
- Confidentiality agreements.
- Revisions and scope changes.
- Termination clause.

---

#### **11. Next Steps**

- Review and approval of the SOW.
- Kickoff meeting to finalize design and development priorities.

// ------------ SOW outline (scaffold) ------------

### **Statement of Work (SOW) High-Level Outline**

---

#### **1. Introduction**

- **Project Name**: ...
- **Client Name**: ...
- **Prepared By**: ...
- **Date**: ...
- **Purpose**: ...

---

#### **2. Objectives and Goals**

- ...
- ...
- ...

---

#### **3. Scope of Work**

##### **3.1. Core Deliverables**

- **Design**:
  - ...
  - ...
  - ...
- **Features**:
  - ...
  - ...
  - ...
- **Platform**:
  - ...
- **Integrations**:
  - ...

##### **3.2. Exclusions**

- ...
- ...

---

#### **4. Deliverables and Milestones**

| **Phase**       | **Deliverable** | **Estimated Timeline** |
| --------------- | --------------- | ---------------------- |
| **Discovery**   | ...             | ...                    |
| **Design**      | ...             | ...                    |
| **Development** | ...             | ...                    |
| **Testing**     | ...             | ...                    |
| **Launch Prep** | ...             | ...                    |

---

#### **5. Roles and Responsibilities**

- **Client**:
  - ...
  - ...
- **Developer/Designer**:
  - ...
  - ...
- **Additional Collaborators**:
  - ...

---

#### **6. Timeline**

- Total project duration: ...
- ...

---

#### **7. Budget**

- Estimated cost breakdown:
  - ...
  - ...
  - ...
  - ...
- Payment terms: ...

---

#### **8. Communication Plan**

- ...
- ...
- ...

---

#### **9. Success Metrics**

- ...
- ...
- ...
- ...

---

#### **10. Terms and Conditions**

- ...
- ...
- ...
- ...

---

#### **11. Next Steps**

- ...
- ...
- ...
