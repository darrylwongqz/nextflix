**App Overiew**
This is a simple Netflix clone that I built with NextJS for the frontend, and Hasura as the backend.
The project uses graphQL to query and mutate data.

The project can be viewed at: https://nextflix-rouge.vercel.app/

**Functionality:**
1) App calls on YouTube API to dynamically pull in video data in the categories that are displayed in the app.
2) Authentication is done via Magic-links (view more of what magic-links are at https://magic.link/, which basically verifies users by using the Ethereum blockchain)
3) Postgres Database is used and hooked up to Hasura which handles the server-side graphql portion.
  a) Database consists of users and stats table
  b) users.issuer is the primary key, which essentially takes in the didToken given by magic.link upon authentication
  c) users.issuer is mapped as the foreign key for stats table (i.e. stats.userId)
  d) Stats primary key is stats.id
  e) the table relationship is such that one user can have many stats (i.e. many video stats - where each video is either favourited, watch etc.)
 4) App uses Static Site Generation, Incremental Static Regeneration + client side hydration, and Server-Side Rendering to make full use of NextJS server-side capabilities
 5) App also uses NextJS api routes to communicate with the backend.
 6) App incorporates NextJS v12 middlewares to redirect unauthenticated users to "/login"

**Potential-to-dos:**
1) Improve styling
2) Incorporate stripe payments
