# Scope of Work: GSE Loan Purchase Dashboard for Lincoln Institute of Land Policy

_As of 5/8/2024_

## Objective:

- Develop a user-friendly dynamic dashboard to visualize the disproportionate lending of Fannie Mae and Freddie Mac in the secondary mortgage market.
- The dashboard should allow users to access our repository of data (through Recursion) to show the relationship between the following variables in GSE lending:
  - Gender and location and loan purchases
  - Manufactured Housing purchases: Chattel, Site Built, and MF
  - Multifamily Affordable Housing as a share of affordable housing type
  - LTV
- The data must enable easy exploration and understanding of variables for various stakeholders and ensure compatibility across multiple devices and browsers.

## Features:

1. **Data Visualization:**
   - Display research findings using interactive charts, graphs, and maps.
   - Allow users to filter and drill down into data based on the variables provided.
2. **Dynamic Content:**
   - Integrate live data feeds for real-time updates, if available.
   - Enable automatic updates of data as new research findings become available.
3. **Customization:**
   - Provide options for users to customize dashboard views according to their preferences.
4. **Responsive Design:**
   - Design the dashboard to be responsive across various devices and screen sizes.
   - Optimize performance for fast loading times, even on slower internet connections.

## Development Process:

- **Data Collection:**
  - Lincoln Institute has collaborated with Recursion to produce data that relates to the dashboard.
  - Create wireframes and prototypes for user feedback and approval.
- **Development Phase:**
  - Develop the dashboard using backend functionality for data retrieval through Recursion to produce an accessible dashboard to be hosted on Lincoln Institute’s webpage.
- **Testing Phase:**
  - Conduct thorough testing to ensure the dashboard functions correctly across different environments and user scenarios.
  - Perform usability testing to gather feedback and make necessary improvements.
- **Deployment Phase:**
  - Deploy the dashboard to the Lincoln Institute’s website in a secure manner.
  - Provide training sessions for administrators and users, if needed.

## Timeline:

- Provide a detailed timeline outlining key milestones and deliverables for each phase of the project.

## Budget:

- Estimate the cost of development, including design, programming, testing, and deployment.
- Consider ongoing maintenance and support costs, if applicable.

## Support and Maintenance:

- Offer post-launch support for bug fixes, updates, and enhancements.
- Provide ongoing maintenance services to ensure the dashboard remains functional and up-to-date.

---

# Tech Stack

The proposed tech stack for the GSE Loan Purchase Dashboard is designed to ensure efficient development, seamless integration, and optimal performance. The selected tools and services are well-suited for building a dynamic, data-driven dashboard that meets the Lincoln Institute's requirements.

- **_Tools & Services:_**
  - **_UI Design:_** Figma
  - **_Development:_**
    - Front-end
      - Framework: [Vue](https://vuejs.org/guide/introduction.html) + [Nuxt](https://nuxt.com/docs/getting-started/introduction)
      - UI Library: [TailwindCSS](https://tailwindcss.com/docs) + [DaisyUI](https://daisyui.com/components/)
      - Data Visualization: [Apache ECharts](https://echarts.apache.org/examples/en/index.html)
      - Hosting: [Vercel](https://vercel.com/docs)
    - Backend
      - Framework: [Node.js](https://nodejs.org/en/docs/) + [TypeScript](https://www.typescriptlang.org/docs/)
      - API: [Express](https://expressjs.com/en/4x/api.html)
      - Real-time Data: [Hono](https://hono.io/docs)
      - Database: [PocketBase](https://pocketbase.io/docs)
      - File Storage: [PocketBase](https://pocketbase.io/docs)
      - Authentication: [PocketBase](https://pocketbase.io/docs)
      - Hosting: [PocketHost](https://pockethost.io/docs/overview/introduction/)
    - Version control: [GitHub](https://github.com/)
  - **_Documentation:_** [Gitbook](https://www.gitbook.com/)
  - **_Project Management:_** [Notion](https://notion.so/)

# Timeline

The project will be divided into the following phases with estimated timelines for each:

### Phase 1: Planning and Requirements Gathering (2 weeks)

**Tasks:**

- Initial meetings to understand project goals and requirements.
- Detailed scope definition.
- Creation of initial wireframes and prototypes using Figma.
- Feedback and approval cycles with stakeholders.

### Phase 2: Design (3 weeks)

**Tasks:**

- Finalizing UI/UX designs based on approved wireframes.
- Creating detailed design specifications and assets.

### Phase 3: Development (8-10 weeks)

**Front-end Development (4-5 weeks):**

- Setting up the development environment with Vue, Nuxt, TailwindCSS, and DaisyUI.
- Developing the interactive dashboard interface.
- Implementing data visualization using Apache ECharts.

**Backend Development (4-5 weeks):**

- Setting up the backend environment with Node.js, TypeScript, Express, and Hono.
- Implementing data retrieval and processing logic.
- Integrating with PocketBase for database, file storage, and authentication.
- Setting up real-time data feeds if available.

### Phase 4: Integration and Testing (3 weeks)

**Tasks:**

- Integrating front-end and back-end components.
- Conducting unit and integration testing.
- Performing user acceptance testing (UAT) with stakeholders.
- Gathering feedback and making necessary adjustments.

### Phase 5: Deployment (1 week)

**Tasks:**

- Final deployment preparations.
- Deploying the dashboard to Vercel and PocketHost.
- Ensuring secure deployment and access control.
- Conducting final checks and optimizations.

### Phase 6: Training and Documentation (1 week)

**Tasks:**

- Creating user documentation and guides using Gitbook.
- Conducting training sessions for administrators and users.
- Handing over the project with necessary documentation.

### Phase 7: Post-launch Support (Ongoing)

**Tasks:**

- Providing ongoing support for bug fixes, updates, and enhancements.
- Regular maintenance to ensure the dashboard remains functional and up-to-date.

### Total Estimated Timeline: 18-20 weeks

### Key Milestones:

- **Week 2:** Completion of Planning and Requirements Gathering.
- **Week 5:** Finalization of Design Phase.
- **Week 15:** Completion of Development Phase.
- **Week 18:** Finalization of Integration and Testing.
- **Week 19:** Deployment of the Dashboard.
- **Week 20:** Completion of Training and Documentation.

### Considerations:

- **Buffer Time:** Including buffer time in each phase can help manage unforeseen delays.
- **Regular Check-ins:** Weekly progress meetings with Matthew to ensure alignment and address any issues promptly.
- **Stakeholder Feedback:** Incorporate feedback loops at key stages to ensure the project meets expectations.

# Cost Estimate

The Lincoln Institute of Land Policy has a robust history of funding and supporting significant projects and research initiatives. They are a well-established nonprofit think tank with a focus on land policy, aiming to improve quality of life through various policy interventions. Their financial backing comes from a combination of their endowment, grants, and partnerships with other organizations [1†](https://en.wikipedia.org/wiki/Lincoln_Institute_of_Land_Policy) [2†](https://www.lincolninst.edu/es/courses/2024/fundamentals-municipal-finance-credential/).

While specific budget details for individual projects are not typically disclosed publicly, the Institute's broad scope of work and global reach indicate a strong financial foundation. They support diverse initiatives including capacity building, research, and policy development across various regions, from the United States to Latin America and Asia [1†](https://en.wikipedia.org/wiki/Lincoln_Institute_of_Land_Policy) [3†](https://www.guidestar.org/profile/86-6021106).

Given their comprehensive support for similar large-scale, data-driven projects and their collaboration with other institutions, it is likely that a project budget in the range of $53,000 - $99,000 for the GSE Loan Purchase Dashboard could be within their capacity, especially if it aligns with their goals of improving public policy and land use [2†](https://www.lincolninst.edu/es/courses/2024/fundamentals-municipal-finance-credential/).

To confirm this, we might consider reaching out directly to their procurement or project management teams, as they regularly issue Requests for Proposals (RFPs) and may provide specific guidance or budget ranges for upcoming projects [3†](https://www.guidestar.org/profile/86-6021106).

## High-level Breakdown:

The cost estimate for a team of two (a developer and a project manager) to develop the GSE Loan Purchase Dashboard for the Lincoln Institute of Land Policy is based on the following factors:

1. **Data Collection and Preparation**

   - **Cost Estimate:** $3,000 - $5,000
   - **Timeframe:** 1-2 weeks (40-80 hours)
   - **Tasks:** Gathering and cleaning data from Recursion for dashboard use.
   - **Note:** The developer's familiarity with the data source and tools may streamline this phase.

2. **Design Phase**

   - **Cost Estimate:** $8,000 - $12,000
   - **Timeframe:** 3 weeks (120 hours)
   - **Tasks:** Create wireframes, gather user feedback using Figma, and design the UI/UX.
   - **Note:** Efficient collaboration between the developer and project manager can reduce the time needed.

3. **Development Phase**

   - **Cost Estimate:** $25,000 - $50,000
   - **Timeframe:** 8-10 weeks (320-400 hours)
   - **Tasks:** Full-stack development using Vue, Nuxt, TailwindCSS, DaisyUI, Node.js, TypeScript, Express, Hono, PocketBase, and Apache ECharts.
   - **Note:** The developer will handle the bulk of the hands-on work, ensuring the technical aspects are robust and functional.

4. **Testing Phase**

   - **Cost Estimate:** $3,000 - $7,000
   - **Timeframe:** 2-3 weeks (80-120 hours)
   - **Tasks:** Comprehensive testing and usability improvements.
   - **Note:** With a smaller team, testing may be more straightforward but could require more iterative cycles.

5. **Deployment Phase**

   - **Cost Estimate:** $2,000 - $4,000
   - **Timeframe:** 1 week (40 hours)
   - **Tasks:** Securely deploy the dashboard using Vercel and PocketHost, and train administrators and users.
   - **Note:** Deployment tools like Vercel simplify this process, reducing costs.

6. **Support and Maintenance**

   - **Cost Estimate:** $8,000 - $15,000 (annually)
   - **Timeframe:** Ongoing
   - **Tasks:** Post-launch support and ongoing maintenance.
   - **Note:** With a single developer, ongoing support might need to be more comprehensive to ensure reliability.

7. **Project Management**
   - **Cost Estimate:** $4,000 - $6,000
   - **Tasks:** Project management, team coordination, and milestone delivery using Notion.
   - **Note:** The project manager's role is crucial for ensuring smooth progress and timely delivery.

**Total Cost Estimate:** $53,000 - $99,000

## Hourly Breakdown:

To calculate the approximate hourly rate for both the developer and the project lead, we need to consider the total estimated cost and the total number of hours expected to be worked over the project timeline.

### Total Estimated Cost

The total cost estimate for the project is between $53,000 and $99,000.

### Total Project Duration

The project duration is estimated to be 18-20 weeks. For simplicity, let's use 19 weeks as the average duration.

### Weekly Hours

Assuming a standard 40-hour work week, the total number of hours for the project is:
19 weeks \* 40 hours/week = 760 hours

### Cost Allocation

Let's assume the developer will spend twice as much time on the project as the project lead. This means the developer will work 2/3 of the total hours, and the project lead will work 1/3 of the total hours.

### Hourly Rate Calculation

1. **Lower Bound Estimate:**

   - Total cost: $53,000
   - Developer's cost: $53,000 \* 2/3 = $35,333.33
   - Project lead's cost: $53,000 \* 1/3 = $17,666.67
   - Developer's hours: 760 \* 2/3 = 506.67 hours
   - Project lead's hours: 760 \* 1/3 = 253.33 hours
   - Developer's hourly rate: $35,333.33 / 506.67 hours ≈ $69.72/hour
   - Project lead's hourly rate: $17,666.67 / 253.33 hours ≈ $69.72/hour

2. **Upper Bound Estimate:**

   - Total cost: $99,000
   - Developer's cost: $99,000 \* 2/3 = $66,000
   - Project lead's cost: $99,000 \* 1/3 = $33,000
   - Developer's hours: 760 \* 2/3 = 506.67 hours
   - Project lead's hours: 760 \* 1/3 = 253.33 hours
   - Developer's hourly rate: $66,000 / 506.67 hours ≈ $130.23/hour
   - Project lead's hourly rate: $33,000 / 253.33 hours ≈ $130.23/hour

### Approximate Hourly Rates

- **Developer:**

  - Lower Bound: $69.72/hour
  - Upper Bound: $130.23/hour

- **Project Lead:**

  - Lower Bound: $69.72/hour
  - Upper Bound: $130.23/hour

### Summary

The estimated hourly rate for both the developer and the project lead ranges from $69.72 to $130.23 per hour, reflecting the variability in the total project cost. This range provides a practical estimate for budgeting.
