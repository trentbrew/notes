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
      - Cons: .
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
