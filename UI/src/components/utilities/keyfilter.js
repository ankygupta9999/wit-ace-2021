import BrowserFetcher from './browser-fetcher';

/**
 * This class was largely forked from the PrimeReact KeyFilter class
 *
 * source: https://github.com/primefaces/primereact
 */
export default class KeyFilter {
	static DEFAULT_MASKS = {
		pint: /\d/,
		int: /[\d\-]/, // eslint-disable-line no-useless-escape
		pnum: /[\d.]/,
		money: /[\d.\s,]/,
		num: /[\d\-.]/,
		hex: /[\da-f]/i,
		email: /[\w.\-@]/i,
		alpha: /[a-z_]/i,
		alphanum: /\w/i
	};

	static KEYS = {
		BACKSPACE: 8,
		TAB: 9,
		RETURN: 13,
		SHIFT: 16,
		CTRL: 17,
		ESC: 27,
		DELETE: 46
	};

	static SAFARI_KEYS = {
		63234: 37, // left
		63235: 39, // right
		63232: 38, // up
		63233: 40, // down
		63276: 33, // page up
		63277: 34, // page down
		63272: 46, // delete
		63273: 36, // home
		63275: 35 // end
	};

	static isNavKeyPress(event) {
		let k = event.keyCode;
		k = BrowserFetcher.getCurrentBrowser().safari
			? this.SAFARI_KEYS[k] || k
			: k;

		return (
			(k >= 33 && k <= 40) ||
			k === this.KEYS.RETURN ||
			k === this.KEYS.TAB ||
			k === this.KEYS.ESC
		);
	}

	static isSpecialKey(event) {
		const k = event.keyCode;

		return (
			k === this.KEYS.TAB ||
			k === this.KEYS.RETURN ||
			k === this.KEYS.ESC ||
			k === this.KEYS.SHIFT ||
			k === this.KEYS.CTRL ||
			(k >= 18 && k <= 20) ||
			(BrowserFetcher.getCurrentBrowser().opera &&
				!event.shiftKey &&
				(k === this.KEYS.BACKSPACE ||
					(k >= 33 && k <= 35) ||
					(k >= 36 && k <= 39) ||
					(k >= 44 && k <= 45)))
		);
	}

	static getKey(event) {
		const key = event.keyCode || event.charCode;
		return BrowserFetcher.getCurrentBrowser().safari
			? this.SAFARI_KEYS[key] || key
			: key;
	}

	static getCharCode(event) {
		return event.charCode || event.keyCode || event.which;
	}

	static onKeyPress(event, keyfilter, validateOnly) {
		if (validateOnly) {
			return;
		}

		const regex = this.DEFAULT_MASKS[keyfilter]
			? this.DEFAULT_MASKS[keyfilter]
			: keyfilter;
		const browser = BrowserFetcher.getCurrentBrowser();

		if (event.ctrlKey || event.altKey) {
			return;
		}

		const key = this.getKey(event);
		if (
			browser.mozilla &&
			(this.isNavKeyPress(event) ||
				key === this.KEYS.BACKSPACE ||
				(key === this.KEYS.DELETE && event.charCode === 0))
		) {
			return;
		}

		const input = String.fromCharCode(this.getCharCode(event));

		if (browser.mozilla && (this.isSpecialKey(event) || !input)) {
			return;
		}

		if (!regex.test(input)) {
			event.preventDefault();
		}
	}

	static validate(value, keyfilter) {
		let validatePattern = true;

		if (value && !keyfilter.test(value)) {
			validatePattern = false;
		}

		return validatePattern;
	}
}
