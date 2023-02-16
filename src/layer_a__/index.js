import { _difference, _union } from '@ctx-core/array'
import { invalid_state__throw } from '@ctx-core/error'
import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { top_layer_zIndex__ } from '../top_layer_zIndex__/index.js'
/** @type {typeof import('index.d.ts').layer_a__} */
export const layer_a__ = be_('layer_a__', ctx=>
	atom_([]))
export { layer_a__ as layer_a$_ }
export function layer_a__push(ctx, ...in_layer_a) {
	const layer_top_zIndex = top_layer_zIndex__(ctx).$
	for (let j = 0; j < in_layer_a.length; j++) {
		const layer = in_layer_a[j]
		const { zIndex } = layer
		if (Number.isFinite(zIndex)) {
			if (layer_top_zIndex != null && zIndex <= layer_top_zIndex) {
				invalid_state__throw({
					key: 'layers',
					reason: `zIndex must be greater than store.zIndex__top__layer('layers')`
				})
			}
		} else {
			layer.zIndex = isNaN(layer_top_zIndex) ? 1 : layer_top_zIndex + 1
		}
	}
	const layers = layer_a__(ctx).$.slice(0)
	layers.push(...in_layer_a)
	layer_a__(ctx).set(layers)
}
export function layer_a__unshift(ctx, ...in_layer_a) {
	layer_a__(ctx).set(_union([
		in_layer_a,
		layer_a__(ctx).$ || []
	]))
}
export function layer_a__remove(ctx, ...in_layer_a) {
	layer_a__(ctx).set(_difference([
		in_layer_a,
		layer_a__(ctx).$.slice(0)
	]))
}
