import { _difference, _union } from '@ctx-core/array'
import { throw_invalid_state, throw_invalid_state_ctx_type } from '@ctx-core/error'
import { B, be_, assign } from '@ctx-core/object'
import { get, Writable$, writable$ } from '@ctx-core/store'
import { top_layer_zIndex$_b } from './top_layer_zIndex$_b.js'
const key = 'layer_a$'
export const layer_a$_b:B<layer_a$_T> = be_(key, ctx=>{
	const layer_a = writable$([] as layer_a_T) as layer_a$_T
	return assign(layer_a, {
		push_layer_a,
		unshift_layer_a,
		remove_layer_a,
	})
	function push_layer_a(...in_layer_a:Layer[]) {
		const layer_top_zIndex = top_layer_zIndex$_b(ctx).$
		for (let j = 0; j < in_layer_a.length; j++) {
			const layer = in_layer_a[j]
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
		const layers = get(layer_a).slice(0) as layer_a_T
		layers.push(...in_layer_a)
		layer_a.set(layers)
	}
	function unshift_layer_a(...in_layer_a:layer_a_T) {
		layer_a.set(
			_union<Layer>([
				in_layer_a,
				get(layer_a) || []
			]))
	}
	function remove_layer_a(...in_layer_a:Layer[]) {
		layer_a.set(
			_difference<Layer>([
				in_layer_a,
				get(layer_a).slice(0) as layer_a_T
			]))
	}
})
export interface Layer {
	zIndex:number
}
export type layer_a_T = Layer[]
export interface layer_a$_T extends Writable$<layer_a_T> {
	push_layer_a:(...in_layer_a:layer_a_T)=>void
	unshift_layer_a:(...in_layer_a:layer_a_T)=>void
	remove_layer_a:(...in_layer_a:layer_a_T)=>void
}
export {
	layer_a$_b as b__a1__layer
}
