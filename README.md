# pucpos-arquitetura-f

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

## Container

```shell
# Build image
sudo docker image build --tag "pucpos-f" .

# Create container
sudo docker container create --publish 8000:8000 --name "pucpos-f" pucpos-f

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
- https://www.w3schools.com/tags/
