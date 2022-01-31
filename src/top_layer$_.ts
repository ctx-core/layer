import { last_ } from '@ctx-core/array'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { Layer, layer_a$_ } from './layer_a$_.js'
const key = 'top_layer$'
export const top_layer$_:B<top_layer$_T> = be_(key, ctx=>
	computed$(
		layer_a$_(ctx),
		layer_a=>
			last_(layer_a)))
export type top_layer$_T = ReadableAtom$<Layer|undefined>
