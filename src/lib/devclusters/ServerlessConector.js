class ServerlessConnector {
	constructor(origin) {
		this.origin = origin ?? process.env.NEXT_PUBLIC_SERVERLESS_URL;
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
		const response = await fetch(`${this.origin}/api/v1/${route}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})
		if (callback) {
			return callback(response);
		}
		return response.json();
	}

	async fetchStaticData({
		                      collection,
		                      singleton,
		                      filters,
		                      projection,
		                      settings,
		                      links
	                      }) {
		try {
			const route = `/${collection}/find`;
			const data = this.callAsync({
				route: `${process.env.NEXT_PUBLIC_SERVERLESS_URL}/api/v1${route}`,
				payload: {singleton, filters, projection, settings, links}, callback: null
			});
			return data.result;
		} catch (err) {
			console.error(err);
			return null;
		}
	}

	async status() {
		return await this.callAsync({
			route: '/status',
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
