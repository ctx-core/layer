import { _difference, _union } from '@ctx-core/array'
import { invalid_state__throw, throw_invalid_state_ctx_type } from '@ctx-core/error'
import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { assign, B, be_ } from '@ctx-core/object'
import { top_layer_zIndex__ } from './top_layer_zIndex__.js'
export const layer_a__:B<layer_a__T> = be_('layer_a__', ctx=>{
	const layer_a_ = atom_([] as Layer[]) as layer_a__T
	return assign(layer_a_, {
		push_layer_a,
		unshift_layer_a,
		remove_layer_a,
	})
	function push_layer_a(...in_layer_a:Layer[]) {
		const layer_top_zIndex = top_layer_zIndex__(ctx).$
		for (let j = 0; j < in_layer_a.length; j++) {
			const layer = in_layer_a[j]
			const { zIndex } = layer
			if (Number.isFinite(zIndex)) {
				if (layer_top_zIndex != null && zIndex <= layer_top_zIndex) {
					invalid_state__throw({
						key: 'layers',
						reason: `zIndex must be greater than store.zIndex__top__layer('layers')`
					} as throw_invalid_state_ctx_type)
				}
			} else {
				layer.zIndex =
					isNaN(layer_top_zIndex as number)
					? 1
					: (layer_top_zIndex as number) + 1
			}
		}
		const layers = layer_a_.$.slice(0) as Layer[]
		layers.push(...in_layer_a)
		layer_a_.set(layers)
	}
	function unshift_layer_a(...in_layer_a:Layer[]) {
		layer_a_.set(
			_union<Layer>([
				in_layer_a,
				layer_a_.$ || []
			]))
	}
	function remove_layer_a(...in_layer_a:Layer[]) {
		layer_a_.set(
			_difference<Layer>([
				in_layer_a,
				layer_a_.$.slice(0) as Layer[]
			]))
	}
})
export interface Layer {
	zIndex:number
}
export interface layer_a__T extends WritableAtom_<Layer[]> {
	push_layer_a:(...in_layer_a:Layer[])=>void
	unshift_layer_a:(...in_layer_a:Layer[])=>void
	remove_layer_a:(...in_layer_a:Layer[])=>void
}
export { layer_a__ as layer_a$_ }
