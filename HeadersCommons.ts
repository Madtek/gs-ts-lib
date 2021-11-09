/**
 * Helper interface for current common HTTP Headers
 * Based on: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
 * at 09.11.2021
 */
export interface HeadersCommons {
    // Authentication
    "WWW-Authenticate":string;
    // Defines the authentication method that should be used to access a resource.

    Authorization:string;
    // Contains the credentials to authenticate a user-agent with a server.

    "Proxy-Authenticate":string;
    // Defines the authentication method that should be used to access a resource behind a proxy server.

    "Proxy-Authorization":string;
    // Contains the credentials to authenticate a user agent with a proxy server.


    // Caching
    Age:string;
    // The time, in seconds, that the object has been in a proxy cache.

    "Cache-Control":string;
    // Directives for caching mechanisms in both requests and responses.

    "Clear-Site-Data":string;
    // Clears browsing data (e.g. cookies, storage, cache) associated with the requesting website.

    Expires:string;
    // The date/time after which the response is considered stale.

    Pragma:string;
    // Implementation-specific header that may have various effects anywhere along the request-response chain. Used for backwards compatibility with HTTP/1.0 caches where the Cache-Control header is not yet present.

    Warning:string;
    // General warning information about possible problems.


    // Client hints
    "Accept-CH":string;
    // Servers can advertise support for Client Hints using the Accept-CH header field or an equivalent HTML <meta> element with http-equiv attribute.

    // Network client hints
    Downlink:string;
    // Approximate bandwidth of the client's connection to the server, in Mbps. This is part of the Network Information API.

    ECT:string;
    // The effective connection type ("network profile") that best matches the connection's latency and bandwidth. This is part of the Network Information API.

    RTT:string;
    // Application layer round trip time (RTT) in miliseconds, which includes the server processing time. This is part of the Network Information API.

    "Save-Data":string;
    // A boolean that indicates the user agent's preference for reduced data usage.


    // Conditionals
    "Last-Modified":string;
    // The last modification date of the resource, used to compare several versions of the same resource. It is less accurate than ETag, but easier to calculate in some environments. Conditional requests using If-Modified-Since and If-Unmodified-Since use this value to change the behavior of the request.

    ETag:string;
    // A unique string identifying the version of the resource. Conditional requests using If-Match and If-None-Match use this value to change the behavior of the request.

    "If-Match":string;
    // Makes the request conditional, and applies the method only if the stored resource matches one of the given ETags.

    "If-None-Match":string;
    // Makes the request conditional, and applies the method only if the stored resource doesn't match any of the given ETags. This is used to update caches (for safe requests), or to prevent uploading a new resource when one already exists.

    "If-Modified-Since":string;
    // Makes the request conditional, and expects the resource to be transmitted only if it has been modified after the given date. This is used to transmit data only when the cache is out of date.

    "If-Unmodified-Since":string;
    // Makes the request conditional, and expects the resource to be transmitted only if it has not been modified after the given date. This ensures the coherence of a new fragment of a specific range with previous ones, or to implement an optimistic concurrency control system when modifying existing documents.

    Vary:string;
    // Determines how to match request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server.

    // Connection management
    Connection:string;
    // Controls whether the network connection stays open after the current transaction finishes.

    "Keep-Alive":string;
    // Controls how long a persistent connection should stay open.

    // Content negotiation
    Accept:string;
    // Informs the server about the types of data that can be sent back.

    "Accept-Encoding":string;
    // The encoding algorithm, usually a compression algorithm, that can be used on the resource sent back.

    "Accept-Language":string;
    // Informs the server about the human language the server is expected to send back. This is a hint and is not necessarily under the full control of the user: the server should always pay attention not to override an explicit user choice (like selecting a language from a dropdown).

    // Controls
    Expect:string;
    // Indicates expectations that need to be fulfilled by the server to properly handle the request.

    "Max-Forwards":string;
    // TBD

    // Cookies
    Cookie:string;
    // Contains stored HTTP cookies previously sent by the server with the Set-Cookie header.

    "Set-Cookie":string;
    // Send cookies from the server to the user-agent.

    // CORS
    // Learn more about CORS here.

    "Access-Control-Allow-Origin":string;
    // Indicates whether the response can be shared.

    "Access-Control-Allow-Credentials":string;
    // Indicates whether the response to the request can be exposed when the credentials flag is true.

    "Access-Control-Allow-Headers":string;
    // Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request.

    "Access-Control-Allow-Methods":string;
    // Specifies the methods allowed when accessing the resource in response to a preflight request.

    "Access-Control-Expose-Headers":string;
    // Indicates which headers can be exposed as part of the response by listing their names.

    "Access-Control-Max-Age":string;
    // Indicates how long the results of a preflight request can be cached.

    "Access-Control-Request-Headers":string;
    // Used when issuing a preflight request to let the server know which HTTP headers will be used when the actual request is made.

    "Access-Control-Request-Method":string;
    // Used when issuing a preflight request to let the server know which HTTP method will be used when the actual request is made.

    Origin:string;
    // Indicates where a fetch originates from.

    "Timing-Allow-Origin":string;
    // Specifies origins that are allowed to see values of attributes retrieved via features of the Resource Timing API, which would otherwise be reported as zero due to cross-origin restrictions.

    // Downloads
    "Content-Disposition":string;
    // Indicates if the resource transmitted should be displayed inline (default behavior without the header), or if it should be handled like a download and the browser should present a “Save As” dialog.

    // Message body information
    "Content-Length":string;
    // The size of the resource, in decimal number of bytes.

    "Content-Type":string;
    // Indicates the media type of the resource.

    "Content-Encoding":string;
    // Used to specify the compression algorithm.

    "Content-Language":string;
    // Describes the human language(s) intended for the audience, so that it allows a user to differentiate according to the users' own preferred language.

    "Content-Location":string;
    // Indicates an alternate location for the returned data.

    // Proxies
    Forwarded:string;
    // Contains information from the client-facing side of proxy servers that is altered or lost when a proxy is involved in the path of the request.

    "X-Forwarded-For":string;
    // Identifies the originating IP addresses of a client connecting to a web server through an HTTP proxy or a load balancer.

    "X-Forwarded-Host":string;
    // Identifies the original host requested that a client used to connect to your proxy or load balancer.

    "X-Forwarded-Proto":string;
    // Identifies the protocol (HTTP or HTTPS) that a client used to connect to your proxy or load balancer.

    Via:string;
    // Added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers.

    // Redirects
    Location:string;
    // Indicates the URL to redirect a page to.

    // Request context
    From:string;
    // Contains an Internet email address for a human user who controls the requesting user agent.

    Host:string;
    // Specifies the domain name of the server (for virtual hosting), and (optionally) the TCP port number on which the server is listening.

    Referer:string;
    // The address of the previous web page from which a link to the currently requested page was followed.

    "Referrer-Policy":string;
    // Governs which referrer information sent in the Referer header should be included with requests made.

    "User-Agent":string;
    // Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent. See also the Firefox user agent string reference.

    // Response context
    Allow:string;
    // Lists the set of HTTP request methods supported by a resource.

    Server:string;
    // Contains information about the software used by the origin server to handle the request.

    // Range requests
    "Accept-Ranges":string;
    // Indicates if the server supports range requests, and if so in which unit the range can be expressed.

    Range:string;
    // Indicates the part of a document that the server should return.

    "If-Range":string;
    // Creates a conditional range request that is only fulfilled if the given etag or date matches the remote resource. Used to prevent downloading two ranges from incompatible version of the resource.

    "Content-Range":string;
    // Indicates where in a full body message a partial message belongs.

    // Security
    "Cross-Origin-Embedder-Policy":string;
    // Allows a server to declare an embedder policy for a given document. (COEP)

    "Cross-Origin-Opener-Policy":string;
    // Prevents other domains from opening/controlling a window. (COOP)

    "Cross-Origin-Resource-Policy":string;
    // Prevents other domains from reading the response of the resources to which this header is applied. (CORP)

    "Content-Security-Policy":string;
    // Controls resources the user agent is allowed to load for a given page. (CSP)

    "Content-Security-Policy-Report-Only":string;
    // Allows web developers to experiment with policies by monitoring, but not enforcing, their effects. These violation reports consist of JSON documents sent via an HTTP POST request to the specified URI.

    "Expect-CT":string;
    // Allows sites to opt in to reporting and/or enforcement of Certificate Transparency requirements, which prevents the use of misissued certificates for that site from going unnoticed. When a site enables the Expect-CT header, they are requesting that Chrome check that any certificate for that site appears in public CT logs.

    "Feature-Policy":string;
    // Provides a mechanism to allow and deny the use of browser features in its own frame, and in iframes that it embeds.

    "Origin-Isolation":string;
    // Provides a mechanism to allow web applications to isolate their origins.

    "Strict-Transport-Security":string;
    // Force communication using HTTPS instead of HTTP. (HSTS)

    "Upgrade-Insecure-Requests":string;
    // Sends a signal to the server expressing the client’s preference for an encrypted and authenticated response, and that it can successfully handle the upgrade-insecure-requests directive.

    "X-Content-Type-Options":string;
    // Disables MIME sniffing and forces browser to use the type given in Content-Type.

    "X-Download-Options":string;
    // The X-Download-Options HTTP header indicates that the browser (Internet Explorer) should not display the option to "Open" a file that has been downloaded from an application, to prevent phishing attacks as the file otherwise would gain access to execute in the context of the application. (Note: related MS Edge bug).

    "X-Frame-Options":string;
    // Indicates whether a browser should be allowed to render a page in a <frame>, <iframe>, <embed> or <object>. (XFO)

    "X-Permitted-Cross-Domain-Policies":string;
    // Specifies if a cross-domain policy file (crossdomain.xml) is allowed. The file may define a policy to grant clients, such as Adobe's Flash Player (now obsolete), Adobe Acrobat, Microsoft Silverlight (now obsolete), or Apache Flex, permission to handle data across domains that would otherwise be restricted due to the Same-Origin Policy. See the Cross-domain Policy File Specification for more information.

    "X-Powered-By":string;
    // May be set by hosting environments or other frameworks and contains information about them while not providing any usefulness to the application or its visitors. Unset this header to avoid exposing potential vulnerabilities.

    "X-XSS-Protection":string;
    // Enables cross-site scripting filtering.

    "HTTP Public Key Pinning":string;
    // HTTP Public Key Pinning has been deprecated and removed in favor of Certificate Transparency and Expect-CT. (HPKP)

    "Public-Key-Pins":string;
    // Associates a specific cryptographic public key with a certain web server to decrease the risk of MITM attacks with forged certificates.

    "Public-Key-Pins-Report-Only":string;
    // Sends reports to the report-uri specified in the header and does still allow clients to connect to the server even if the pinning is violated.

    "Fetch metadata request headers":string;
    // Fetch metadata request headers provides information about the context from which the request originated. This allows a server to make decisions about whether a request should be allowed based on where the request came from and how the resource will be used.

    "Sec-Fetch-Site":string;
    // It is a request header that indicates the relationship between a request initiator's origin and its target's origin. It is a Structured Header whose value is a token with possible values cross-site, same-origin, same-site, and none.

    "Sec-Fetch-Mode":string;
    // It is a request header that indicates the request's mode to a server. It is a Structured Header whose value is a token with possible values cors, navigate, no-cors, same-origin, and websocket.

    "Sec-Fetch-User":string;
    // It is a request header that indicates whether or not a navigation request was triggered by user activation. It is a Structured Header whose value is a boolean so possible values are ?0 for false and ?1 for true.

    "Sec-Fetch-Dest":string;
    // It is a request header that indicates the request's destination to a server. It is a Structured Header whose value is a token with possible values audio, audioworklet, document, embed, empty, font, image, manifest, object, paintworklet, report, script, serviceworker, sharedworker, style, track, video, worker, and xslt.

    // Server-sent events
    "Last-Event-ID":string;
    // TBD

    NEL:string;
    // Defines a mechanism that enables developers to declare a network error reporting policy.

    "Ping-From":string;
    // TBD

    "Ping-To":string;
    // TBD

    "Report-To":string;
    // Used to specify a server endpoint for the browser to send warning and error reports to.

    // Transfer coding
    "Transfer-Encoding":string;
    // Specifies the form of encoding used to safely transfer the resource to the user.

    TE:string;
    // Specifies the transfer encodings the user agent is willing to accept.

    Trailer:string;
    // Allows the sender to include additional fields at the end of chunked message.

    // WebSockets
    "Sec-WebSocket-Key":string;
    // TBD

    "Sec-WebSocket-Extensions":string;
    // TBD

    "Sec-WebSocket-Accept":string;
    // TBD

    "Sec-WebSocket-Protocol":string;
    // TBD

    "Sec-WebSocket-Version":string;
    // TBD

    // Other
    "Accept-Push-Policy":string;
    // A client can express the desired push policy for a request by sending an Accept-Push-Policy header field in the request.

    "Accept-Signature":string;
    // A client can send the Accept-Signature header field to indicate intention to take advantage of any available signatures and to indicate what kinds of signatures it supports.

    "Alt-Svc":string;
    // Used to list alternate ways to reach this service.

    Date:string;
    // Contains the date and time at which the message was originated.

    "Early-Data":string;
    // Indicates that the request has been conveyed in TLS early data.

    "Large-Allocation":string;
    // Tells the browser that the page being loaded is going to want to perform a large allocation.

    Link:string;
    // The Link entity-header field provides a means for serialising one or more links in HTTP headers. It is semantically equivalent to the HTML <link> element.

    "Push-Policy":string;
    // A Push-Policy defines the server behavior regarding push when processing a request.

    "Retry-After":string;
    // Indicates how long the user agent should wait before making a follow-up request.

    Signature:string;
    // The Signature header field conveys a list of signatures for an exchange, each one accompanied by information about how to determine the authority of and refresh that signature.

    "Signed-Headers":string;
    // The Signed-Headers header field identifies an ordered list of response header fields to include in a signature.

    "Server-Timing":string;
    // Communicates one or more metrics and descriptions for the given request-response cycle.

    "Service-Worker-Allowed":string;
    // Used to remove the path restriction by including this header in the response of the Service Worker script.

    SourceMap:string;
    // Links generated code to a source map.

    Upgrade:string;
    // The relevant RFC document for the Upgrade header field is RFC 7230, section 6.7. The standard establishes rules for upgrading or changing to a different protocol on the current client, server, transport protocol connection. For example, this header standard allows a client to change from HTTP 1.1 to HTTP 2.0, assuming the server decides to acknowledge and implement the Upgrade header field. Neither party is required to accept the terms specified in the Upgrade header field. It can be used in both client and server headers. If the Upgrade header field is specified, then the sender MUST also send the Connection header field with the upgrade option specified. For details on the Connection header field please see section 6.1 of the aforementioned RFC.

    "X-DNS-Prefetch-Control":string;
    // Controls DNS prefetching, a feature by which browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth.

    "X-Firefox-Spdy":string;
    // TBD

    "X-Pingback":string;
    // TBD

    "X-Requested-With":string;
    // TBD

    "X-Robots-Tag":string;
    // The X-Robots-Tag HTTP header is used to indicate how a web page is to be indexed within public search engine results. The header is effectively equivalent to <meta name="robots" content="...">.

    "X-UA-Compatible":string;
    // Used by Internet Explorer to signal which document mode to use.
} 
