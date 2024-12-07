# MVP Feature Checklist for Project Brevity

## General

- [ ] Write a User Manual to auto-populate as the app tutorial

## Core Functionality

- [ ] Simple WYSIWYG editor
  - [x] Install Quill
  - [x] Render content & toolbar
  - [x] Add markdown plugin
  - [x] Insert dynamic data (markdown)
  - [x] Format inline dynamic data
  - [ ] Auto-save debounce 🟢
  - [ ] Autocomplete / suggestions
  - [ ] Interpolation / generative edits

## Pages

- [x] `/auth`
  - [x] page: login
  - [x] page: signup
  - [x] page: forgot password
  - [x] page: reset password
- [x] `/settings`
  - [x] page: account
  - [x] page: editor
- [x] `/workspaces` <!-- HOME -->
  - [ ] feat: create workspace
  - [ ] feat: edit workspace
  - [ ] feat: delete workspace
  - [ ] feat: view workspace
- [ ] `/brands`
  - [ ] feat: view brand profiles (list)
  - [ ] feat: create brand profile
    - [ ] feat: upload logo
    - [ ] feat: generate from website
    - [ ] feat: generate from file/document
    - [ ] feat: generate from image(s)
  - [ ] feat: edit brand profile
    - [ ] feat: manual entry
  - [ ] feat: delete brand profile (soft delete)
- [ ] `/organization`
  - [ ] feat: create organization
  - [ ] feat: edit organization
  - [ ] feat: delete organization
  - [ ] feat: view organization
  - [ ] feat: invite members
  - [ ] feat: upload logo
  - [ ] page: members
  - [ ] page: billing

## External Links

- [ ] feedback.brevity.ink
- [ ] api.brevity.ink

## Brand Alignment

- [ ] Brand-aligned content generation
  - [o] Working with local files
  - [ ] Handle file uploads
    - [ ] Frontend file input
    - [ ] PocketBase file storage
    - [ ] Backend upload handler
  - [x] Backend file analysis
  - [ ] Save brand profiles in PocketBase
  - [ ] Extract brand voice from user website
  - [ ] Multimodal brand analysis (video, audio, text, images)

## Organizational Tools

- [ ] Workspaces for content organization
  - [ ] Setup workspaces in PocketBase
  - [ ] Setup workspaces routes
  - [ ] Setup workspaces components
- [ ] Multiple brand profiles

## User Experience

- [x] Markdown shortcuts
- [ ] Setup PocketBase
  - [ ] Setup auth
    - [ ] Init pocketbase with auth
    - [ ] Setup auth routes
    - [ ] Setup auth components
    - [ ] Setup auth pages
  - [ ] Setup pocketbase collections
    - [x] Define user schema
    - [x] Define organization schema
    - [x] Define brand_profiles schema
    - [ ] Define outlines schema
    - [x] Define documents schema
    - [x] Define document_templates schema
    - [x] Define workspaces schema
    - [ ] Define settings schema
    - [ ] Initialize schemas in PocketBase

## Additional Features for Consideration Post-MVP

- [ ] Chatbot assistant (Medium priority)
- [ ] Multiplayer editing/real-time collaboration (Low priority for MVP)

Remember to focus on delivering immediate value to your users with these features, ensuring a strong launch of your MVP.
