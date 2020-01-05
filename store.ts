import { writable, derived, get, Writable } from 'svelte/store'
import { _b, assign } from '@ctx-core/object'
import { _last__a1, _union, _difference } from '@ctx-core/array'
import { throw__invalid_state } from '@ctx-core/error'
import { log } from '@ctx-core/logger'
import { _andand } from '@ctx-core/function'
const logPrefix = '@ctx-core/layer/store.js'
export interface Layer {
	zIndex:number
}
export interface Writable__a1__layer extends Writable<Layer[]> {
	push__a1__layer:(...a1__layer__:Layer[])=>void
	unshift__a1__layer:(...a1__layer__:Layer[])=>void
	remove__a1__layer:(...a1__layer__:Layer[])=>void
}
export const b__a1__layer = _b<Writable__a1__layer>('__a1__layer', ctx=>{
	const __a1__layer = writable([])
	return assign(__a1__layer, {
		push__a1__layer,
		unshift__a1__layer,
		remove__a1__layer,
	})
	function push__a1__layer(...a1__layer__) {
		log(`${logPrefix}|push__a1__layer`)
		const zIndex__top__layer = get(b__zIndex__top__layer(ctx))
		for (let j = 0; j < a1__layer__.length; j++) {
			const layer = a1__layer__[j]
			const { zIndex } = layer
			if (Number.isFinite(zIndex)) {
				if (zIndex__top__layer != null && zIndex <= zIndex__top__layer) {
					throw__invalid_state({
						key: 'layers',
						reason: `zIndex must be greater than store.zIndex__top__layer('layers')`
					})
				}
			} else {
				layer.zIndex =
					isNaN(zIndex__top__layer)
					? 1
					: zIndex__top__layer + 1
			}
		}
		const layers = get(__a1__layer).slice(0)
		layers.push(...a1__layer__)
		__a1__layer.set(layers)
	}
	function unshift__a1__layer(...a1__layer__) {
		log(`${logPrefix}|unshift__a1__layer`)
		__a1__layer.set(
			_union([
				a1__layer__,
				get(__a1__layer) || []
			]))
	}
	function remove__a1__layer(...a1__layer__) {
		log(`${logPrefix}|remove__a1__layer`)
		__a1__layer.set(
			_difference([
				a1__layer__,
				get(__a1__layer).slice(0)
			]))
	}
})
export const __a1__layer = b__a1__layer()
export const {
	push__a1__layer,
	unshift__a1__layer,
	remove__a1__layer,
} = __a1__layer
export const b__top__layer = _b('__top__layer', ctx=>
	derived(
		b__a1__layer(ctx),
		layers=>
			_last__a1(layers)))
export const __top__layer = b__top__layer()
export const b__zIndex__top__layer = _b('__zIndex__top__layer', ctx=>
	derived(
		b__top__layer(ctx),
		_andand('zIndex')))
export const __zIndex__top__layer = b__zIndex__top__layer()
