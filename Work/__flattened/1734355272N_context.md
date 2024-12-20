```js
import { people, projects, tasks } from "mainframe";

projects.create({
  name: "Chinese App",
  description: "A Chinese learning app",
  owner: people.findByEmail("steven@mainframe.so"),
  status: "active",
  startDate: new Date(),
  endDate: new Date(new Date().setDate(new Date().getDate() + 30)),
  budget: 10000,
  currency: "USD",
  tags: ["Chinese", "Learning", "App"],
  isPublic: true,
  isArchived: false,
  isDeleted: false,
});
```
