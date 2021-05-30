import { _b, assign } from '@ctx-core/object'
import { _difference, _union } from '@ctx-core/array'
import { throw_invalid_state, throw_invalid_state_ctx_type } from '@ctx-core/error'
import { get, Writable$, writable$ } from '@ctx-core/store'
import { top_layer_zIndex$_b } from './top_layer_zIndex$_b'
import type { layer_Ctx } from './layer_Ctx'
const key = 'layer_a$'
export const layer_a$_b = _b<layer_Ctx, typeof key>(key, ctx=>{
	const layer_a1 = writable$([] as layer_a_T) as layer_a$_T
	return assign(layer_a1, {
		push_layer_a1,
		unshift_layer_a1,
		remove_layer_a1,
	})
	function push_layer_a1(...in_layer_a1:Layer[]) {
		const layer_top_zIndex = top_layer_zIndex$_b(ctx as layer_Ctx).$
		for (let j = 0; j < in_layer_a1.length; j++) {
			const layer = in_layer_a1[j]
			const { zIndex } = layer
			if (Number.isFinite(zIndex)) {
				if (layer_top_zIndex != null && zIndex <= layer_top_zIndex) {
					throw_invalid_state({
						key: 'layers',
						reason: `zIndex must be greater than store.zIndex__top__layer('layers')`
					} as throw_invalid_state_ctx_type)
				}
			} else {
				layer.zIndex =
					isNaN(layer_top_zIndex)
					? 1
					: layer_top_zIndex + 1
			}
		}
		const layers = get(layer_a1).slice(0) as layer_a_T
		layers.push(...in_layer_a1)
		layer_a1.set(layers)
	}
	function unshift_layer_a1(...in_layer_a1:layer_a_T) {
		layer_a1.set(
			_union<Layer>([
				in_layer_a1,
				get(layer_a1) || []
			]))
	}
	function remove_layer_a1(...in_layer_a1:Layer[]) {
		layer_a1.set(
			_difference<Layer>([
				in_layer_a1,
				get(layer_a1).slice(0) as layer_a_T
			]))
	}
})
export interface Layer {
	zIndex:number
}
export type layer_a_T = Layer[]
export interface layer_a$_T extends Writable$<layer_a_T> {
	push_layer_a1:(...in_layer_a1:layer_a_T)=>void
	unshift_layer_a1:(...in_layer_a1:layer_a_T)=>void
	remove_layer_a1:(...in_layer_a1:layer_a_T)=>void
}
export {
	layer_a$_b as b__a1__layer
}
