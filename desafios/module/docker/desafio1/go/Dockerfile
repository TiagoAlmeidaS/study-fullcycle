FROM golang:alpine3.16

WORKDIR /app

COPY *.go ./

RUN go build main.go

EXPOSE 8080

CMD ["./main"]