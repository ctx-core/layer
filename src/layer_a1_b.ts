import { _b, assign } from '@ctx-core/object'
import { _difference, _union } from '@ctx-core/array'
import { throw_invalid_state, throw_invalid_state_ctx_type } from '@ctx-core/error'
import { get, Writable, writable } from '@ctx-core/store'
import { top_layer_zIndex_b } from './top_layer_zIndex_b'
export const layer_a1_b = _b<layer_a1_type>('layer_a1', ctx=>{
	const layer_a1 = writable([] as $layer_a1_type) as layer_a1_type
	return assign(layer_a1, {
		push_layer_a1,
		unshift_layer_a1,
		remove_layer_a1,
	})
	function push_layer_a1(...in_layer_a1:Layer[]) {
		const layer_top_zIndex = get(top_layer_zIndex_b(ctx))
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
		const layers = get(layer_a1).slice(0) as $layer_a1_type
		layers.push(...in_layer_a1)
		layer_a1.set(layers)
	}
	function unshift_layer_a1(...in_layer_a1:$layer_a1_type) {
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
				get(layer_a1).slice(0) as $layer_a1_type
			]))
	}
})
export interface Layer {
	zIndex:number
}
export type $layer_a1_type = Layer[]
export interface layer_a1_type extends Writable<$layer_a1_type> {
	push_layer_a1:(...in_layer_a1:$layer_a1_type)=>void
	unshift_layer_a1:(...in_layer_a1:$layer_a1_type)=>void
	remove_layer_a1:(...in_layer_a1:$layer_a1_type)=>void
}
export {
	layer_a1_b as b__a1__layer
}
