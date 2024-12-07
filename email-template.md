```js
{
  "context": {
    "purpose": "string",  // The main goal of the email (e.g., "Request for information", "Providing updates", "Follow-up").
    "recipient_profile": {
      "name": "string",  // The recipient's name or identifier.
      "role": "string",  // The recipient's role (e.g., "Client", "Team member", "Manager").
      "relationship": "string",  // The relationship with the recipient (e.g., "Professional", "Friend", "Vendor").
      "preferences": "string"  // Specific details about the recipient's communication preferences or priorities.
    },
    "urgency": "string",  // Level of urgency (e.g., "High", "Medium", "Low").
    "tone": "string"  // Desired tone (e.g., "Formal", "Casual", "Empathetic", "Assertive").
  },
  "content": {
    "greeting": {
      "explicit": false,  // Whether the greeting should be directly specified (true/false).
      "optional_note": "string"  // Any specific greeting note or context (e.g., "Hope you're doing well").
    },
    "opening": {
      "summary": "string"  // A brief overview of the email's purpose or context to capture attention.
    },
    "body": [
      {
        "section_heading": "string",  // Optional section heading for organizing content.
        "details": "string",  // Core information or details to be conveyed.
        "queries_or_actions": [
          {
            "type": "string",  // Type of request (e.g., "Question", "Action item").
            "content": "string"  // Specific query or requested action.
          }
        ]
      }
    ],
    "closing": {
      "summary": "string",  // Recap or final statement summarizing key points.
      "next_steps": "string"  // Clear description of follow-up actions or expectations.
    },
    "sign_off": {
      "explicit": false,  // Whether the sign-off is explicitly defined.
      "name": "string",  // Name or title to be used in the sign-off.
      "signature_note": "string"  // Optional additional note in the sign-off.
    }
  },
  "meta": {
    "timestamp": "string",  // Timestamp of when the draft was created.
    "draft_version": "integer",  // Version number for tracking revisions.
    "tags": ["string"]  // Optional tags for categorization or searchability.
  }
}
```
