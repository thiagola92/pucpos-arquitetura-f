# pucpos-arquitetura-f

![Cenário](./assets/cenario.jpg)

## Usage

Make sure to install Deno:
https://docs.deno.com/runtime/getting_started/installation

Install dependencies:

```
deno install
```

Then start the project in development mode:

```
deno task dev
```

This will watch the project directory and restart as necessary.

Access through http://127.0.0.1:5173

## Container

```shell
# Build image
sudo docker image build --tag "pucpos-f" .

# Create container
sudo docker container create --publish 5173:5173 --name "pucpos-f" pucpos-f

# Start container
sudo docker container start --attach pucpos-f
```

```shell
# Remove container and image
sudo docker container stop pucpos-f
sudo docker container rm pucpos-f
sudo docker image rm pucpos-f
```

## References

- https://fresh.deno.dev/
- https://fakestoreapi.com/
- https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements
- https://picocss.com/
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events#inline_event_handlers_%E2%80%94_dont_use_these
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles
