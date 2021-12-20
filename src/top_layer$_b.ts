import { last_ } from '@ctx-core/array'
import { B, be_ } from '@ctx-core/object'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { Layer, layer_a$_b } from './layer_a$_b.js'
const key = 'top_layer$'
export const top_layer$_b:B<top_layer$_T> = be_(key, ctx=>
	computed$(
		layer_a$_b(ctx),
		layer_a=>
			last_(layer_a)))
export type top_layer$_T = ReadableAtom$<Layer|undefined>
