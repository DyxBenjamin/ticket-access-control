import {notifyError} from "@utils/Notify";

class ServerlessConnector {
    name = 'ServerlessConnector';

    constructor(name, origin, apiVersion) {
        this.name = name ?? 'ServerlessConnector';
        this.origin = origin ?? process.env.NEXT_PUBLIC_SERVERLESS_URL;
        this.apiVersion = apiVersion ?? 'v1';
    }

    /**
     * This method is used to call Ampt methods from the client. If callback is provided, it will be called with the response as parameter.
     * Otherwise, it will return the response as JSON.
     *
     * @param {String} route - Ampt method to call.
     * @param {Object} payload - Ampt method required payload.
     * @param callback - Optional callback function.
     * @returns {Object} - Ampt method response on JSON format.
     */
    async callAsync({route, payload, callback}) {
        const response = await fetch(`${this.origin}/api/${this.apiVersion}/${route}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        if (!response.ok) throw new Error(response.msg);
        if (callback) return callback(response);
        return await response.json();
    }

    async fetchStaticData({
                              collection,
                              singleton,
                              filters,
                              projection,
                              settings,
                              links,
                              callback = null
                          }) {
        try {
            const route = `${collection}/find`;
            const response = await this.callAsync({
                route,
                payload: {singleton, filters, projection, settings, links}, callback
            });
            return response.data;
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    async updateData({
                         collection,
                         selector,
                         modifier,
                         singleton = false,
                         upsert = false,
                         callback = null
                     }) {
        try {
            const route = `${collection}/update`;
            const response = await this.callAsync({
                route,
                payload: {selector, modifier, singleton, upsert}, callback
            });
            return response.data;
        } catch (err) {
            console.error(err);
            notifyError('An error occurred contact support');
            return null;
        }
    }

    async status() {
        return await this.callAsync({
            route: 'status',
            payload: {},
            callback: null
        });
    }
}

const ServerlessConnectorSingleton = (function () {
    let instance;

    function createInstance() {
        return new ServerlessConnector();
    }

    return {
        getInstance: function () {
            if (!instance) instance = createInstance();
            return instance;
        },
    };
})();

const Serverless = ServerlessConnectorSingleton.getInstance();
export default Serverless;
