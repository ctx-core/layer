import { assign } from '@ctx-core/object'
/**
 * Returns a new layer.
 */
export function layer_():any&{ zIndex:number|null } {
	const layer = assign({
		zIndex: null
	}, ...arguments)
	return layer
}
