export type SuperSocketAuth = {
    /**
     * Authentication middleware custom headers
     * ex: JWT, CRSF token
     * @default undefined
     */
    headers?: any;
    /**
     * Authentication endpoint
     * ex: /api/ws/auth
     * @default undefined
     */
    endpoint: string;
    /**
     * POST data attached to authentication call
     * ex: user password, usernam
     * @default undefined
     */
    data?: any;
};
export type SuperSocketOptions = {
    /**
     * Delay used in millisecond to reconnect after last try
     * @default 1000
     */
    reconnectDelay?: number;
    /**
     * Cypher encryption
     * ref: https://github.com/brix/crypto-js#object-encryption
     * @default undefined
     */
    encryptKey?: string;
    /**
     * In milliseconds, triggers a timeout error
     * @default 10000
     */
    connectionTimeout?: number;
    /**
     * In milliseconds, triggers a timeout error
     * @default 10
     */
    maxRetries?: number;
    /**
     * Add debus lines when set to true
     * @default false
     */
    debug?: boolean;
    /**
     * Will not reconnect after drop if set to true
     * @default false
     */
    disableReconnect?: boolean;
    /**
     * Split data string into chunks of X Kb
     * Warning: need to reconstruct when onmessage
     * @default undefined
     */
    chunkSize?: number;
    /**
     * Query params attached to base URL
     * ex { foo: bar } => wss://mysocket.com/?foo=bar
     * @default undefined
     */
    queryParams?: any;
    /**
     * ms interval used for ping/keep-alive
     * @default undefined
     */
    pingInterval?: any;
    /**
     * Warning: Prevent non secured (ws://) traffic to go through
     * @default true
     */
    secureOnly?: boolean;
    /**
     * Forward websocket events to API route
     * @default undefined
     */
    forwardOptions?: {
        /**
         * Forward (POST) onmessage() to API route
         * ex: '/api/ws/message'
         * @default undefined
         */
        onMessage?: string;
        /**
         * Forward (POST) onerror() to API route
         * ex: '/api/ws/error'
         * @default undefined
         */
        onError?: string;
        /**
         * Adds extra-headers to POST call
         * @default undefined
         */
        headers?: any;
    };
    /**
     * Authentication middleware
     * connects if 200 return otherwhise
     * @default undefined
     */
    authenticate?: SuperSocketAuth;
    offline?: boolean;
    /**
     * The ping data to send.
     *
     * Defaults to :
     * ```json
     * {
     *  "type": "ping"
     * }
     * ```
     */
    pingData?: Object;
    /**
     * By default, doing `new WebSocket(...)` connects the socket immediately.
     * This allows to delay the connection until the `SuperSocket.connect()` method is called.
     * @default false
     */
    lazy?: boolean;
};
declare const _default: {
    reconnectDelay: number;
    connectionTimeout: number;
    secureOnly: boolean;
    maxRetries: number;
    debug: boolean;
    disableReconnect: boolean;
    queryParams: {};
    offline: boolean;
    pingInterval: number;
    pingData: {
        type: string;
    };
    lazy: boolean;
};
export default _default;
