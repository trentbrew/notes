# Monolithic Contextual Embedding (MCE)

> If the aim is to retain context as much as possible in a conversation with a large language model (LLM), there are a few approaches that can be used:

## Session-Based Context Management: ❌

The model can maintain context within a single session. This means it remembers the conversation history and uses it to inform responses. However, once the session ends, this context is typically not retained.

## Providing Context in Queries: ❌

You can include relevant context in your queries. This helps the model understand the conversation's history and respond more appropriately. For instance, summarizing previous discussions or key points at the beginning of a new query.

## Persistent Storage Integration (For Custom Implementations): 🟢

In custom implementations of LLMs (like specific applications or platforms using an LLM), developers can `design systems to store conversation history or important context in a database. This stored context can then be fed into the model during future interactions to maintain continuity over extended periods, even beyond single sessions.`

## User Profiles: 🟢

Some systems allow for the creation of `user profiles where key information about the user is stored and used to tailor responses.` This can include preferences, past behavior, and other relevant data.

---

- So what I'm hearing is that indexing is about speed, not relationships
- Me writing these notes is like indexing.
- Me processing and understanding the information is like embedding.
- One happens on the inside and the other happens on the outside.

---

<!-- That convo w wabi comes to mind: **"unrecorded data is not data, ¿not using data? is not intelligence"** -->

1. comprehend == `embeding`
2. recall == `indexing`
3. analyze == {

- `connecting` ??
  - identifying relationships of any kind (linkages, overlaps, intersections, etc)
- `correlating` ??
  - identifying the kinds of relationships (causal, temporal, spatial, etc)
- `inferring` ??
  - extracting implications, conclusions, and deeper meanings
- `modeling` ??
  - mapping out an abstraction of the connections, correlations, and inferences
- `reframing` ?? \* zooming out from the leaves and seeing the forest
}
<!-- ~~~ -->

4. apply == `???`
5. create == `???` <!-- humans create -->
<!-- ~~~ -->
6. synthesize == `???` <!-- machines synthesize the things humans create -->
7. innovation == `???` <!-- rince and repeat -->
