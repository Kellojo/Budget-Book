
module.exports = class EventHandler {

    constructor() {
        this.listeners = {};
    }

    /**
     * Adds a listener to a given event
     * @param {string} sEvent 
     * @param {function} fnListener 
     * @public
     */
    addListener(sEvent, fnListener) {
        if (!this.listeners[sEvent]) {
            this.listeners[sEvent] = [];
        }

        if (!this.listeners[sEvent].includes(fnListener)) {
            this.listeners[sEvent].push(fnListener);
        }
    }

    /**
     * Removes a listener from a given event
     * @param {string} sEvent
     * @param {function} fnListener
     * @public
     */
    removeListener(sEvent, fnListener) {
        if (this.listeners[sEvent].includes(fnListener)) {
            this.listeners[sEvent] = this.listeners[sEvent].filter(listener !== fnListener);
        }
    }

    /**
     * Triggers an event
     * @param {string} sEvent 
     * @public
     */
    triggerEvent(sEvent) {
        try {
            if (!!this.listeners[sEvent]) {
                this.listeners[sEvent].forEach(fnListener => fnListener());
            }
        } catch (error) {
            console.error();
        }

    }

}