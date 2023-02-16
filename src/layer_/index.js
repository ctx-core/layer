import { assign } from '@ctx-core/object'
/**
 * Returns a new layer.
 * @param obj{unknown}
 * @returns {import('./index.d.ts').layer_T}
 */
export function layer_(obj) {
	const layer = assign({
		zIndex: null
	}, ...arguments)
	return layer
}
