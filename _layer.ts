import { assign } from '@ctx-core/object'
/**
 * Returns a new layer.
 */
export function _layer() {
	const layer = assign({
		zIndex: null
	}, ...arguments)
	return layer
}
