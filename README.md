This project uses React, NextJS, and TypeScript to call a MLB api in order to display the various teams, divisions, and rosters.

You can view a team's roster by clicking on the team's table cell.  Clicking on the MLB header will reroute back to the home page.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

In order to hit the MLB_API you must create an .env file at the root of the project with


 ```
 MLB_URL=<URL>
 ```
 
 
 Given more time, I would have implemented a filter dropdown to display specific divisions and a text search filter for teams.  Also, I would have created more robust tests in Jest.
 
 
