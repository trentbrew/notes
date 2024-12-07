# About Project Brevity:

Brevity is a web application designed to assist my clients who require consistent, high-quality blog content & copywriting but struggle with consistently writing high-quality material. The clients can upload their brand documentation to the system, allowing it to understand their brand voice and generate content that aligns with their brand identity.

The telos of Brevity is to provide a UX that is radically simple and intuitive. The user should be able to use the app without any prior knowledge of how it works. The aim to create a system that is so simple to use that it feels like magic. Speed, simplicity, and quality are the three pillars of Brevity.

### Target Audience

The target audience is people who need to write content but don't have the time or skill to do so. This includes small business owners, entrepreneurs, and content creators. The app can also be used for people to draft emails, social media posts, and other forms of content.

### Features & Functionality

MVP:

- Simple WYSIWYG editor
- Brand-aligned content generation
- Auto-save
- Autocomplete
- Workspaces
- Multiple brand profiles
- Markdown shortcuts
- Chatbot assistant capable of editing & proofreading the working draft

v1:

- Content templates
- Multiplayer editing / real-time collaboration
- Version control
- kanban-style task manager (state manager)
- Generative interpolation

Long-term:

- Text to speech
- Image generation
- Content analytics

### Future Developments

The brand analysis process currently depends on the user to upload a brand document or provide their website. The document is analyzed by OpenAI's GPT-4V on the backend. If the user doesn't have a brand document, they're routed to my website where I offer branding & art direction services. Alternatively, they can fill out a brief questionnaire that will be used to generate a brand document for them. The aim in the future is to use any available data to generate a brand document for the user. This includes social media posts, emails, videos, even music. The user can go in and edit the brand voice to their liking.

The writing process is a chain-of-thought process between multiple LLMs that act as an editorial team. The editorial team is managed by the runChatChain function, which adheres to a four-step process: Discover, Define, Draft, and Deliver. Initially, it crafts a brief that captures the brand's essence and style, followed by outlining, drafting, and refining the content to produce a final draft ready for the client's review and use.

I'm hoping to move away from CoT and instead use a more robust ToT method that acts as a sort way to generate higher quality content but also as a knowledge tree across multiple documents. This will help the system to better understand the brand voice and style, as well as the client's needs and preferences. (open to suggestions)

### Additional Notes

- The frontend is built with SvelteKit, Vite, TailwindCSS, DaisyUI, SCSS, and Quill.
- PocketBase will be used for Auth, storage, and DB. The PocketBase instance will be hosted on pockethost.io and the frontend will be hosted on Vercel. The LLMs will be hosted on a separate server. Gemini Pro will be used for writing tasks, and the OpenAI API will be used for file analysis and image generation.
- I'm not too worried about coding standards.
- When it comes to error handling my main concern is on the client side. If something goes wrong I want the user to know it wasn't their fault. They should be notified of what exactly what went wrong, why it went wrong, how it's being resolved, the status of that resolution, and how long it will take. This will require some backend gymnastics but it's important to me from a UX standpoint.
- the runChatChain function is like handing off a client request to a team of copywriters and editors. They analyze the uploaded files using the openai assistants API, generate a brief of the brand voice in a structured format, handoff brief to writer agent, writer agents creates outlines based on brief and client request, writer agent writes first draft based on outline, brief, and client request, then writer creates final draft based on first draft, outline, brief, and client request. then the final draft is sent to the client where they can reject(regenerate), accept(manual edit), or offer natural language feedback in real time (insert/edit)
