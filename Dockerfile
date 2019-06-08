FROM golang:alpine AS build

WORKDIR /app
COPY . .
RUN GO111MODULE=on CGO_ENABLED=0 GOOS=linux GOARCH=amd64 \
        go build -mod=vendor -o readss-server github.com/seankhliao/notalog/server

FROM scratch

COPY --from=build /app/readss-server /bin/notalog-server

ENTRYPOINT ["/bin/notalog-server"]
