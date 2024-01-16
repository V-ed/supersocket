import WebSocket from "ws";
import { CloseEvent, ErrorEvent, Event } from "./types/events";
import { SuperSocketOptions } from "./types/supersocket";
export default class SuperSocket {
    /**
     * Store the websocket client
     */
    private _client?;
    /**
     * Contains the computed URL of the websocket string
     */
    private readonly _url;
    /**
     * List of protocols (only applied in front end environment)
     */
    private readonly _protocols?;
    /**
     * Default options
     */
    private readonly _options;
    /**
     * Timer used for reconnection
     */
    private _reconnectInterval;
    /**
     * Timer used for reconnection
     */
    private _pingInterval;
    /**
     * Prevents multiple connection if one is ongoing
     */
    private _lockConnect;
    /**
     * Prevents triggering reconnect timer onError when one reconnect time is already running
     */
    private _lockReConnect;
    /**
     * Current number of total retries
     */
    private _totalRetry;
    /**
     * Queue used to store messages in case of connectivity drops
     */
    private _queue;
    /**
     * current timestamp
     */
    private _timestamp;
    /**
     * Call to authentication middleware
     */
    private _authenticate;
    /**
     * Debug
     */
    private _debug;
    constructor(url: string, protocols?: string | string[], options?: SuperSocketOptions);
    /**
     * URL computed by websocket
     */
    get url(): string;
    /**
     * returns websocket client
     */
    get client(): WebSocket | undefined;
    /**
     * Current retry
     */
    get totalRetry(): number;
    /**
     * State of websocket
     * 0: CONNECTING 1: OPEN 2: CLOSING 3: CLOSED
     */
    get readyState(): number | undefined;
    /**
     * Trigger websocket connection
     */
    connect(): void;
    /**
     * Closes the underlying connection.
     */
    close(options?: {
        skipReconnect: boolean;
    }): void;
    /**
     * Called on open event
     */
    onopen: ((event: Event) => void) | null;
    /**
     * Triggers when onmessage event
     */
    onmessage: ((event: WebSocket.MessageEvent) => void) | null;
    /**
     * Triggers when onclose event
     */
    onclose: ((event: CloseEvent) => void) | null;
    /**
     * Triggers when onclose event
     */
    onerror: ((event: ErrorEvent) => void) | null;
    /**
     * send message to websocket
     * Chunks message if chunkSize > 0
     * Encrypts message if encryptKey provided
     */
    send(data: Object): void;
    /**
     * Handles websocket connection
     */
    private _connect;
    /**
     * split string by size into chuncks (in kb)
     */
    private _splitStringBySize;
    /**
     * on open handler
     */
    private _onopen;
    /**
     * on reconnect handler
     */
    private _reconnect;
    /**
     * on close handler
     */
    private _onclose;
    /**
     * on message handler
     */
    private _onmessage;
    /**
     * on error handler
     */
    private _onError;
    /**
     * on disconnect handler
     */
    private _disconnect;
    /**
     * add event listener to socket
     */
    private _addEventListeners;
}
