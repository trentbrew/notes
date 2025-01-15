# Braindump

Brevity is a markdown-esque language that uses LLMs to generate content. It can be thought of as a way to program language using an LLM as the compiler. (this is a simplification, but it's a start)

I guess it technically wouldnt be a language, as much as a writing framework, but I'll call it a language anyway. Lets call the language "Brevity" (file extension: `example.brev`)

Files could be structured similar to Vue.
- Instead of <template>, we could have <prose> or maybe <draft> or <doc>, which would contain a markdown-esque syntax with the addition of
- we could have 'mutators' or 'revisors' instead of functions. they only take strings as params and output a response based on a prompt defined within each revisor.
- I'm thinking it will be highly opinionated cuz the revisors may need to follow a certain structure in order to be consistent.
- Maybe we can chain together functions to perform more complex mutations and fine-tuned output.
- A config might be used project wide or for specific files to set a global tone, persona, essence, cadence, etc.

I reckon functions can be written to manipulate the text and be called in a <prose> with special markdown-esque syntax. something like vue components, except each "Component" is a "Block".

A Block is a single file `example.brev`

# Critical Features

- Bi-direction linking between files
- Import information from other files (ie. people, places, things, etc.)
- Retain context across files and memorize information for later use

# Exploration

Basic Structure: How do you envision the basic structure of this language? For example, would it be line-based like Markdown or more like a traditional programming language with blocks and functions?

**Text Formatting:** Should the language include commands for text formatting (e.g., bold, italic, headers)? If so, what might these commands look like?

I think the text formatting would be similar to markdown, but with the addition of functions and variables. The embedded LLM would be able to intuitively format the text based on the functions and variables.

**Variables and Functions:** Do you want to include variables, functions, or other programming constructs? How should they be defined and used?

I think variables and functions would be essential. Variables could be defined with a certain syntax, and functions could be called with a similar syntax. The language could have *built-in functions for common text manipulations*. Example built in functions may include:

## Templates:

- <draft> - a generic container for the document
- <email> - a container for drafting an email
- <article> - a container for drafting an article
- <report> - a container for drafting a report
- <post> - a container for drafting a social media post
- <letter> - a container for drafting a letter
- <memo> - a container for drafting a memo
- <message> - a container for drafting a message
- <note> - a container for drafting a note
- <screenplay> - a container for drafting a screenplay
- <story> - a container for drafting a story
- <novel> - a container for drafting a novel
- <play> - a container for drafting a play

<!-- The following are some rough exploration about properties of the containers -->

- <book type='["novel", "short story", "play"]'> - a container for drafting a book
- <chapter number='1' title='The First Chapter'> - a container for drafting a chapter

# Built-in Functions

## Built-in Mutators (first-class functions):

- `summarize()` - takes some text and returns a summary of the text
- `casualize()` - makes the text more casual and friendly
- `humorize()` - makes the text more humorous
- `professionalize()` - makes the text more professional and formal
- `personalize()` - makes the text more personal and intimate
- `soften()` - makes the text more soft and friendly
- `sendoff()` - makes the text more sentimental and emotional
- `eagerize()` - makes the text more eager and excited
- `energize()` - makes the text more energetic and excited
- `quantify()` - makes the text more quantitative and numerical
- `emphasize()` - highlights the text to make it more important
- `simplify()` - reduces the text to its core essence
- `clarify()` - makes the text more clear and understandable
- `loosen()` - a pinch of casualization and relaxation
- `tighten()` - makes the text more dense, concise, and focused
- `inspire()` - adds inspirational and motivational elements to the text
- `enhance()` - enhances the text to make it more powerful and impactful
- `deconstruct()` - breaks down the text into smaller, more manageable pieces
- `reconstruct()` - takes the smaller pieces and puts them back together
- `elaborate()` - provides more details and context to the text
- `connect()` - connects the text to the next block of text
- `format()` - cleans up formatting
- `flow()` - rearranges the text to be more readable and coherent
- `fyi()` - provides inline context / notes / additional information

## Validators:

- `validate.accuracy()` - searches the web to validate the text, and returns a confidence score
- `validate.plagiarism()` - checks the text for plagiarism, and returns a confidence score
- `validate.spelling()` - checks the text for spelling errors, and returns a confidence score
- `validate.grammar()` - checks the text for grammar errors, and returns a confidence score
- `validate.style()` - checks the text for style errors, and returns a confidence score
- `validate.length()` - checks the text for length errors, and returns a confidence score

## Evaluators:
- `evaluate.tone()` - evaluates the tone of the text
- `evaluate.style()` - evaluates the style of the text
- `evaluate.length()` - evaluates the length of the text
- `evaluate.coherence()` - evaluates the coherence of the text
- `evaluate.relevance()` - evaluates the relevance of the text

## Tone Modifiers:
- `tone.happy()` - makes the text more happy
- `tone.sad()` - makes the text more sad
- `tone.angry()` - makes the text more angry
- `tone.excited()` - makes the text more excited
- `tone.frustrated()` - makes the text more frustrated
- `tone.relaxed()` - makes the text more relaxed
- `tone.confident()` - makes the text more confident
- `tone.confused()` - makes the text more confused
- `tone.neutral()` - makes the text more neutral
- `tone.serious()` - makes the text more serious
- `tone.sarcastic()` - makes the text more sarcastic
- `tone.playful()` - makes the text more playful and improvised
- `tone.kawaii()` - makes the text more cute and whimsical
- `tone.lithe()` - makes the text more breezy, calm, and lighthearted

**Special Commands:** Are there any specific commands or features you'd like to include that would make writing more efficient or expressive?

## Special Commands:

- `rhyme()` - makes the text rhyme

**Output and Interpretation:** How do you envision the output being generated? Would it be rendered text, HTML, or something else?

Once I have a better idea of what you're aiming for, we can start sketching out a potential syntax!

# Syntax

```md (brev)

<prose></prose>

```
