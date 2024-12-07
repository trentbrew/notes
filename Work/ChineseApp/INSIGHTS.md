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

## Monetization Strategy

(Ideal) Pricing: Free.
Server costs should be near zero based on current designs.
A "paid" version could allow a user to get features that I rely on 3rd party APIs for:

- TTS for custom content after a certain limit. My caching solution helps a lot here.
- AI features. Unlikely to be added, but maybe it can give "suggestions". Dangerous. Potentially use it for finding images to use in quizzes/reviews.

## Roadmap and Priorities

- MVP: Deliver the core dictionary, review system, and reader functionality, along with basic tools for users to create and import their own content. This will provide a solid foundation for the app's unique value proposition.
- Future Enhancements:
  - Introduce gamification elements like challenges, leaderboards, and achievements to boost engagement and motivation.
  - Develop a comprehensive analytics dashboard to provide users with detailed insights into their learning progress and areas for improvement.
  - Expand the range of supported content sources and formats to cater to diverse learning needs and preferences.
  - Explore AI-powered features such as personalized recommendations, adaptive review scheduling, and intelligent error correction to enhance the learning experience.
  - Foster a sense of community by adding social features like user profiles, shared progress, and collaborative learning tasks.
  - Build a marketplace for users to share, discover, and rate user-generated content, cultivating a vibrant ecosystem of learning resources.
- Iterate Continuously: Gather user feedback and analyze usage data to identify areas for refinement and drive ongoing improvements to the app's functionality, usability, and content offerings.

## Estimated Deliverables

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

- 2-3 weeks: Design system, branding, and high-fidelity mockups
- 4-6 weeks: MVP development (dictionary, review system, reader)
- 2-3 weeks: User testing, feedback, and refinements
- 3-4 weeks: Gamification, analytics, and expanded content sources
- 4-6 weeks: Advanced features (AI assistance, social, marketplace)
- Ongoing: Continuous iteration and improvement based on data-driven insights

## Estimated Cost (Awaiting Discovery Call for Further Clarification)

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

- Freemium Model:
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
- Sponsored Content:
  - Partnerships with language schools, textbook publishers, or online course providers
  - Sponsored lessons, articles, or videos integrated into the app's content library
  - Sponsored challenges or leaderboards to encourage user engagement and competition
- Affiliate Partnerships:
  - Recommend relevant products or services for Chinese learners (e.g., tutoring, books, apps)
  - Earn commissions on user purchases made through affiliate links
  - Provide exclusive discounts or free trials to incentivize user referrals and purchases
- Potential for Additional Revenue Streams:
  - One-time purchases for specific content packs (e.g., HSK lessons, travel phrasebooks)
  - Marketplace for user-generated content, with revenue split between creators and platform
  - Corporate subscriptions for businesses or educational institutions
  - Localized advertising for language-learning products or services
