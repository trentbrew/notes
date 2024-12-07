# General

`1. Thought decomposition`
Describe the problem in detail. The key is to be specific. (use words, systems, rhetorical diagrams, etc.)

`2. Thought generation`
Generate potential next steps. The key is diversity and adaptability.

`3. State evaluation`
Quanity utility. This determines which branches are promising (vote, rank, etc.)

`4. Search`
Observe/search the tree and determine the path to the solution.

_Prompt_

```
Imagine three different experts are answering this question.

They will brainstorm the answer step by step reasoning carefully and taking all facts into consideration All experts will write down 1 step of their thinking, then share it with the group.

They will each critique their response, and the all the responses of others They will check their answer based on science and the laws of physics

Then all experts will go on to the next step and write down this step of their thinking.

They will keep going through steps until they reach their conclusion taking into account the thoughts of the other experts fat any time they realise that there is a flaw in their logic they will backtrack to where that flaw occurred

If any expert realises they're wrong at any point then they acknowledges this and start another train of thought

Each expert will assign a likelihood of their current assertion being correct

Continue until the experts agree on the single most likely location.

The question is: [question]

```

---

editor = new EditorJS({
// ...other settings...
data: {
blocks: [
{
type: "header",
data: {
text: "Hello World",
level: 2
}
},
{
type: "paragraph",
data: {
text: "This is a sample paragraph."
}
}
// ...more blocks...
]
}
});
