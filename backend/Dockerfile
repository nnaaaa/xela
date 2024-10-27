FROM node:20.18-alpine3.20 AS BASE
WORKDIR /app

# Copy only the files needed to install dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies with the preferred package manager
RUN yarn --frozen-lockfile;



FROM node:20.18-alpine3.20 AS BUILD
WORKDIR /app

COPY --from=BASE /app/node_modules ./node_modules

# Copy the rest of the files
COPY . .

# Run build with the preferred package manager
RUN yarn build;

# Set NODE_ENV environment variable
ENV NODE_ENV production

# Re-run install only for production dependencies
RUN yarn --frozen-lockfile --production && yarn cache clean;


FROM node:20.18-alpine3.20 AS PRODUCTION
WORKDIR /app

# Copy the bundled code from the builder stage
COPY --from=BUILD --chown=node:node /app/dist ./dist
COPY --from=BUILD --chown=node:node /app/graphql/schema.gql ./dist/graphql/schema.gql
COPY --from=BUILD --chown=node:node /app/node_modules ./node_modules

# Use the node user from the image
USER node

# Start the server
CMD ["node", "dist/src/main.js"]
