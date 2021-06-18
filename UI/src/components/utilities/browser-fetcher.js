/**
 * This class was largely forked from a portion of the PrimeReact DomHandler
 *
 * source: https://github.com/primefaces/primereact
 */
export default class BrowserFetcher {
	static getCurrentBrowser() {
		if (!this.browser) {
			const matched = this.resolveUserAgent();
			this.browser = {};

			if (matched.browser) {
				this.browser[matched.browser] = true;
				this.browser.version = matched.version;
			}

			if (this.browser.chrome) {
				this.browser.webkit = true;
			} else if (this.browser.webkit) {
				this.browser.safari = true;
			}
		}

		return this.browser;
	}

	static resolveUserAgent() {
		const ua = navigator.userAgent.toLowerCase();
		const match =
			/(chrome) ([\w.]+)/.exec(ua) ||
			/(webkit) ([\w.]+)/.exec(ua) ||
			/(opera)(?:.*version|) ([\w.]+)/.exec(ua) ||
			/(msie) ([\w.]+)/.exec(ua) ||
			(!ua.includes('compatible') &&
				/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)) ||
			[];

		return {
			browser: match[1] || '',
			version: match[2] || '0'
		};
	}
}
