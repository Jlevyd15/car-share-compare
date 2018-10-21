export const scrollBlocker = add => {
	const bodyEl = document.querySelector('body')
	if (bodyEl) {
		if (add) {
			bodyEl.classList.add('block-scroll')
		} else {
			bodyEl.classList.remove('block-scroll')
		}
	}
}