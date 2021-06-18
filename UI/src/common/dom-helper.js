export default class DomHelper {
	static findSingle(element, selector) {
		if (element) {
			return element.querySelector(selector);
		}

		return null;
	}

	static scrollInView(container, item) {
		const borderTopValue = getComputedStyle(container).getPropertyValue(
			'borderTopWidth'
		);
		const borderTop = borderTopValue ? Number.parseFloat(borderTopValue) : 0;
		const paddingTopValue = getComputedStyle(container).getPropertyValue(
			'paddingTop'
		);
		const paddingTop = paddingTopValue ? Number.parseFloat(paddingTopValue) : 0;
		const containerRect = container.getBoundingClientRect();
		const itemRect = item.getBoundingClientRect();
		const offset =
			itemRect.top +
			document.body.scrollTop -
			(containerRect.top + document.body.scrollTop) -
			borderTop -
			paddingTop;
		const scroll = container.scrollTop;
		const elementHeight = container.clientHeight;
		const itemHeight = item.offsetHeight;

		if (offset < 0) {
			container.scrollTop = scroll + offset;
		} else if (offset + itemHeight > elementHeight) {
			container.scrollTop = scroll + offset - elementHeight + itemHeight;
		}
	}

	static addClass(element, className) {
		if (element) {
			if (element.classList) element.classList.add(className);
			else element.className += ' ' + className;
		}
	}

	static removeClass(element, className) {
		if (element) {
			if (element.classList) element.classList.remove(className);
			else
				element.className = element.className.replace(
					new RegExp(
						'(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
						'gi'
					),
					' '
				);
		}
	}
}
