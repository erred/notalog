package main

import (
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"

	pb "seankhliao.com/notalog/notalog"
)

var (
	Debug   bool
	Headers []string
	Origins map[string]struct{}
	Port    = os.Getenv("PORT")
)

func init() {
	if Port == "" {
		Port = ":8090"
	} else if Port[0] != ':' {
		Port = ":" + Port
	}
	if os.Getenv("DEBUG") == "1" {
		Debug = true
	}

	Origins = make(map[string]struct{})
	for _, o := range strings.Split(os.Getenv("ORIGINS"), ",") {
		Origins[strings.TrimSpace(o)] = struct{}{}
	}

	Headers = strings.Split(os.Getenv("HEADERS"), ",")
	for i, h := range Headers {
		Headers[i] = strings.TrimSpace(h)
	}
}

func allowOrigin(o string) bool {
	_, ok := Origins[o]
	return ok
}

func main() {
	svr := NewServer()
	gsvr := grpc.NewServer()
	pb.RegisterStreamerServer(gsvr, svr)
	wsvr := grpcweb.WrapServer(gsvr,
		grpcweb.WithOriginFunc(allowOrigin),
		grpcweb.WithAllowedRequestHeaders(Headers),
	)

	if Debug {
		log.Printf("starting on %v\nallowing headers: %v\nallowing origins: %v\n", Port, Headers, Origins)
	}
	http.ListenAndServe(Port, http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		wsvr.ServeHTTP(w, r)
	}))
}

type Server struct{}

func NewServer() *Server {
	return nil
}

func (s *Server) Stream(r *pb.Request, stream pb.Streamer_StreamServer) error {
	old := int(r.GetOld())
	if old > 0 {
		// gte olf
	}
	if r.GetTail() {
		// keepalive stream
		e := &pb.Event{
			Time:   "...",
			Source: "...",
			Title:  "...",
			Detail: "...",
		}
		err := stream.Send(e)
		if err != nil {
			// handle
		}
	}
	return nil
}
