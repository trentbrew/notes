# users

```js
{
  id: String,
  email: String, // Must be verified
  first_name: String,
  last_name: String,
  organization: String, // <ref to organization>
  role: String, // User's role within the organization
  brand_profiles: [String], // <ref to brand profiles>
  workspaces: [String], // <ref to workspaces>
  content: [String], // <ref to content>
  content_templates: [String], // <ref to content templates>
}
```

# organizations

```js
{
  id: String,
  name: String,
  owner: String, // <ref to users> Owner of the organization
  users: [String], // <ref to users>
  workspaces: [String], // <ref to workspaces>
  content: [String], // <ref to content>
  content_templates: [String], // <ref to content templates>
  brands: [String], // <ref to brands>
  created_at: Date, // Timestamp when the organization was created
  updated_at: Date, // Timestamp when the organization was last updated
  logo: String,
  website: String,
  stripe_id: String, // all users will technically have an organization, and thus a stripe_id
}
```

# brand_profiles

```js
{
  id: String,
  name: String,
  meta: {
    description: String,
    keywords: [String],
    image: String,
    url: String,
  },
  organization: String, // <ref to organization>
  workspaces: [String], // <ref to workspaces>
  content: [String], // <ref to content> //
  content_templates: [String], // <ref to content templates>
}
```

# workspaces

```js
{
  id: String,
  name: String,
  organization: String, // <ref to organization>
  brand_profiles: [String], // <ref to brand profiles>
  workspaces: [String], // <ref to workspaces>
  documents: [String], // <ref to content>
  content_templates: [String], // <ref to content templates>
}
```

# content

```js
{
  id: String,
  created: Date,
  last_modified: Date,
  name: String,
  organization: String, // <ref to organization>
  brand_profile: String, // <ref to brand profiles>
  workspace: [String], // <ref to workspaces>
  content: String, // <ref to content>
  content_template: String, // <ref to content templates>
  authors: [String], // <ref to users>
  version: Number,
  meta: {
    description: String,
    keywords: [String],
    image: String,
    url: String,
  },
}
```

# content_templates

```js
{
  id: String,
  name: String,
  created_by: String, // <ref to users>
  base_template: String, // <ref to base template, optional>
  content: String,
  meta: { // optional
    description: String,
    tags: [String]
  }
}
```

# settings

```js
{
  id: String,
  user: String, // <ref to users>
  organization: String, // <ref to organization>
  brand_profile: String, // <ref to brand profiles>
  workspace: String, // <ref to workspaces>
  content: String, // <ref to content>
  content_template: String, // <ref to content templates>
  settings: {
    theme: String, // User's preferred theme (e.g., 'light', 'dark')
    notifications: {
      email: Boolean, // Whether to send notifications via email
      push: Boolean, // Whether to send push notifications
    },
    editor_preferences: {
      font_size: Number, // Editor's font size
      auto_save: Boolean, // Whether the editor should auto-save documents
      spellcheck: Boolean, // Whether spellcheck is enabled
    },
    privacy: {
      profile_visibility: String, // User's profile visibility (e.g., 'public', 'private')
      data_download: Boolean, // Whether the user can download their data
    }
  }
}
```
```