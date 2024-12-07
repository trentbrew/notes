```js

import { people, projects, tasks } from 'mainframe'

projects.create({
  name: 'Chinese App',
  description: 'A Chinese learning app',
  owner: people.findByEmail('steven@mainframe.so'),
})

```