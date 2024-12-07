# Overview

The Smart Contracting manifesto envisions a transformative approach to freelancing and independent contracting by leveraging smart contracts to bring clarity, structure, and safety to financial agreements. This document outlines the potential of smart contracts to create a more transparent, fair, and efficient system for managing freelance work, emphasizing the importance of user-friendly interfaces and accessibility for non-technical users. By integrating features such as milestone tracking, automatic payments, and dispute resolution, the manifesto aims to empower freelancers to manage their contracts independently and ensure fair compensation for their work. The ultimate goal is to build a platform that simplifies contract creation and execution, making it accessible to everyone, regardless of their blockchain expertise.

# Market snapshot

---

A tool like the one you're envisioning could have a transformative impact on freelancing and independent contracting by bringing a "TypeScript" level of clarity, structure, and safety to financial agreements. While the space is evolving, there isn’t yet a mainstream platform fully realizing this vision for everyday users—yet a few projects are making promising strides toward this kind of UX and accessibility. Here are some that touch on parts of what you’re imagining:

### 1. **OpenLaw / Agreements Network**

- **What it is**: OpenLaw, now integrated with ConsenSys, is a platform that allows users to create legal contracts that execute on the Ethereum blockchain. They offer templates for legal agreements that can be customized and integrated with Ethereum-based smart contracts.
- **Pros**: OpenLaw focuses on combining traditional contracts with blockchain execution, providing templates for freelancers, NDAs, and employment contracts. Users can customize the agreement terms, making it ideal for structuring more complex relationships.
- **Cons**: OpenLaw still requires some familiarity with blockchain, and since it’s Ethereum-based, gas fees are a limitation. It’s also oriented more toward larger enterprise contracts.

### 2. **Aragon**

- **What it is**: Aragon is a decentralized app (dApp) for setting up and managing DAOs (Decentralized Autonomous Organizations) but also has functionality for setting up smart contracts that govern financial transactions and voting.
- **Pros**: It’s designed to reduce the need for intermediaries and ensure contractual terms are met automatically. Aragon can facilitate milestone-based payments, a critical feature for freelance or project-based work.
- **Cons**: It’s more focused on decentralized organizations than one-on-one client work, so the UX can feel complicated for freelancers or contractors who don’t need the full suite of DAO tools.

### 3. **Kleros (for Dispute Resolution)**

- **What it is**: Kleros is a decentralized dispute resolution protocol that integrates with smart contracts to provide a third-party arbitration layer. It lets users resolve disputes in a community-driven way, which is a huge piece of ensuring accountability.
- **Pros**: Adds an enforceable dispute mechanism within smart contracts, giving freelancers some leverage in case of a client disagreement. It’s an ideal feature for client-freelancer contracts, adding a kind of "safety net."
- **Cons**: Kleros is designed to work in conjunction with other dApps or platforms, so it doesn’t solve the full contract setup, but it can enhance a smart contract platform.

### 4. **Superfluid (for Real-Time Payment Streaming)**

- **What it is**: Superfluid enables real-time streaming payments over Ethereum, so clients can pay freelancers by the second or minute for work completed. This can work with smart contracts for setting precise terms around duration-based or milestone-based payments.
- **Pros**: Good for work that’s billed by time rather than deliverable, especially if trust is an issue and you want real-time payments to reflect ongoing work.
- **Cons**: It’s mostly suited to time-based work, so other tools would still be needed for deliverable-based contracts or milestone tracking.

### The Gap and Potential Opportunity

No single platform combines the type of "typescript for agreements" with a user-friendly interface for freelancers to set up and enforce their contracts independently, accessible for people without blockchain expertise. A platform dedicated to freelancers, with template-based, modular agreements, built-in milestone tracking, automatic payments, and optional arbitration (like Kleros), would meet a real need here.

### Why It’s a Challenge

Building this tool would require simplifying both the language of contract creation and blockchain mechanics. It would need to integrate with wallets seamlessly, provide built-in dispute resolution, and ideally avoid high gas fees by running on lower-cost blockchains like Polygon or Solana.

**This is a serious white-space opportunity**—a "smart contract as a service" (SCaaS) tool could empower freelancers to manage fair, transparent relationships without high technical barriers.

# A high level logical framework for measuring value

---

I wonder if we can come up with a framework to measure the value of the kind of work designers and developers do without relying on time tracking, since hourly pay can lead to lower productivity and less value for clients compared to value-based pricing, which aligns compensation with the actual value delivered.

The smart contract idea is interesting cuz i imagine maybe there's a timeline in place, and there's a clause that stipulates that the developer is penalized (maybe some percentage is subtracted from a monthly retainer) for a pre-determined set of activities that are not completed by a certain date.

It could be anything, really–but the point is that I wonder if we can come up a sort of "function" for measuring the value of the work without using time as a metric.

Something like:

```ts
type Log = {
  id: string;
  date: Date;
  projectId: string;
  type: "payment" | "amendment" | "milestone" | "deliverable";
  data: Payment | Amendment | Milestone | Deliverable;
};

type Payment = {
  id: string; // Unique identifier for the payment
  amount: number; // The amount of money being paid
  currency: string; // The currency in which the payment is made (e.g., USD, EUR)
  date: Date; // The date when the payment was made
  method: string; // The method of payment (e.g., credit card, bank transfer)
  status: "pending" | "completed" | "failed"; // The current status of the payment
  description?: string; // Optional description or note about the payment
  recipientId: string; // ID of the recipient of the payment
  senderId: string; // ID of the sender of the payment
};

type Amendment = {
  id: string; // Unique identifier for the amendment
  date: Date; // Date when the amendment was made
  description: string; // Detailed description of the amendment
  author: string; // ID of the person who made the amendment
  relatedScopeId: string; // ID of the related scope that this amendment affects
  changes: Change[]; // List of changes made in this amendment
};

type Change = {
  field: string; // The field that was changed
  oldValue: any; // The old value before the change
  newValue: any; // The new value after the change
  reason: string; // Reason for the change
};

type Health = {
  value: number; // e.g. 0.5 (50%)
  penaltyRatio: number; // e.g. 0.1 (10%) - this is the ratio of the budget that is subtracted for each penalty
  penalties: Penalty[];
  severity: "low" | "medium" | "high";
};

type Collaborator = {
  id: string; // Unique identifier for the collaborator
  name: string; // Name of the collaborator
  role: string; // Role of the collaborator
};

type Client = {
  name: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  budget: number;
  description: string;
  avatar: string;
};

type Penalty = {
  name: string;
  description: string;
  user: string; // id of the user in question
  value: number;
  severity: "low" | "medium" | "high";
};

type Stipulation = {
  name: string;
  description: string;
  penalties: Penalty[];
};

type Deliverable = {
  name: string;
  description: string;
  status: "not started" | "in progress" | "completed";
  blockers: string[]; // deliverable IDs
};

type Milestone = {
  name: string;
  deliverables: Deliverable[];
  dueDate: Date;
  buffer: number;
  stipulations: Stipulation[];
};

type Scope = {
  id: string; // Unique identifier for the scope
  name: string; // Name of the scope
  description: string; // Description of the scope
  deliverables: Deliverable[]; // List of deliverables within the scope
  milestones: Milestone[]; // List of milestones within the scope
  stipulations: Stipulation[]; // List of stipulations within the scope
  constraints: Constraint[]; // List of constraints within the scope
  client: Client; // Client for the scope
  timeline: Timeline; // Timeline for the scope
  budget: number; // Budget allocated for the scope
  status: "not started" | "in progress" | "completed"; // Current status of the scope
  owner: string; // ID of the person responsible for the scope
  stakeholders: string[]; // List of IDs of stakeholders involved in the scope
};

type Timeline = {
  start: Date;
  end: Date;
  progress: number; // e.g. 0.5 (50%)
  amendments: Amendment[];
  milestones: Milestone[];
};

type Work = {
  type: "design" | "development" | "content creation";
  status: "active" | "paused" | "completed";
  health: Health;
  client: Client;
  scope: Scope;
  timeline: Timeline;
  logs: Log[];
  collaborators: Collaborator[]; // List of collaborators within the scope
  payments: Payment[]; // List of payments within the scope
};

function calculateValue(work: Work): number {
  // Implementation of the function to calculate the value of the work
  // This function should return a number representing the value
  return 0; // Placeholder return value
}
```
