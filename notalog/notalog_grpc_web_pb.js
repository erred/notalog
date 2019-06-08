/**
 * @fileoverview gRPC-Web generated client stub for notalog
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.notalog = require('./notalog_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.notalog.StreamerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.notalog.StreamerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.notalog.Request,
 *   !proto.notalog.Event>}
 */
const methodInfo_Streamer_Stream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.notalog.Event,
  /** @param {!proto.notalog.Request} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.notalog.Event.deserializeBinary
);


/**
 * @param {!proto.notalog.Request} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.notalog.Event>}
 *     The XHR Node Readable Stream
 */
proto.notalog.StreamerClient.prototype.stream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/notalog.Streamer/Stream',
      request,
      metadata || {},
      methodInfo_Streamer_Stream);
};


/**
 * @param {!proto.notalog.Request} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.notalog.Event>}
 *     The XHR Node Readable Stream
 */
proto.notalog.StreamerPromiseClient.prototype.stream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/notalog.Streamer/Stream',
      request,
      metadata || {},
      methodInfo_Streamer_Stream);
};


module.exports = proto.notalog;

