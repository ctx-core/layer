import { _difference, _union } from '@ctx-core/array'
import { throw_invalid_state, throw_invalid_state_ctx_type } from '@ctx-core/error'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { assign, B, be_ } from '@ctx-core/object'
import { top_layer_zIndex$_ } from './top_layer_zIndex$_.js'
export const layer_a$_:B<layer_a$_T> = be_('layer_a$', ctx=>{
	const layer_a$ = atom$([] as Layer[]) as layer_a$_T
	return assign(layer_a$, {
		push_layer_a,
		unshift_layer_a,
		remove_layer_a,
	})
	function push_layer_a(...in_layer_a:Layer[]) {
		const layer_top_zIndex = top_layer_zIndex$_(ctx).$
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
		const layers = layer_a$.$.slice(0) as Layer[]
		layers.push(...in_layer_a)
		layer_a$.set(layers)
	}
	function unshift_layer_a(...in_layer_a:Layer[]) {
		layer_a$.set(
			_union<Layer>([
				in_layer_a,
				layer_a$.$ || []
			]))
	}
	function remove_layer_a(...in_layer_a:Layer[]) {
		layer_a$.set(
			_difference<Layer>([
				in_layer_a,
				layer_a$.$.slice(0) as Layer[]
			]))
	}
})
export interface Layer {
	zIndex:number
}
export interface layer_a$_T extends WritableAtom$<Layer[]> {
	push_layer_a:(...in_layer_a:Layer[])=>void
	unshift_layer_a:(...in_layer_a:Layer[])=>void
	remove_layer_a:(...in_layer_a:Layer[])=>void
}