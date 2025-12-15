FROM denoland/deno:latest

WORKDIR /app

ENV DENO_DEPLOYMENT_ID="1.0.0"

COPY . .

RUN deno install

# Compile the main app so that it doesn't need to be compiled each startup/entry
RUN deno task build

# Executed at the container startup
CMD ["deno", "task", "dev"]