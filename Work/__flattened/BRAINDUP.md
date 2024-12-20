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
