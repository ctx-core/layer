import { difference_a_, union_a_ } from '@ctx-core/array'
import { invalid_state__throw } from '@ctx-core/error'
import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
import { top_layer_zIndex_ } from '../top_layer_zIndex/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('./index.d.ts').Layer}Layer */
/** @typedef {import('./index.d.ts').layer_T}layer_T */
export const [
	layer_a$_,
	layer_a_,
	layer_a__set,
] = be_atom_triple_('layer_a', ctx=>
	atom_([]))
export { layer_a$_ as layer_a__ }
/**
 * @param {Ctx}ctx
 * @param {Layer[]}in_layer_a
 */
export function layer_a__push(ctx, ...in_layer_a) {
	const layer_top_zIndex = top_layer_zIndex_(ctx)
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
	const layers = layer_a_(ctx).slice(0)
	layers.push(...in_layer_a)
	layer_a__set(ctx, layers)
}
/**
 * @param {Ctx}ctx
 * @param {Layer[]}in_layer_a
 */
export function layer_a__unshift(ctx, ...in_layer_a) {
	layer_a__set(ctx, union_a_([
		in_layer_a,
		layer_a_(ctx) || []
	]))
}
/**
 * @param {Ctx}ctx
 * @param {Layer[]}in_layer_a
 */
export function layer_a__remove(ctx, ...in_layer_a) {
	layer_a__set(ctx, difference_a_([
		in_layer_a,
		layer_a_(ctx).slice(0)
	]))
}
/**
 * Returns a new layer.
 * @param {...Partial<layer_T>[]}arg_a
 * @returns {import('./index.d.ts').layer_T}
 */
export function layer__new(...arg_a) {
	return {
		zIndex: null,
		...arg_a
	}
}
