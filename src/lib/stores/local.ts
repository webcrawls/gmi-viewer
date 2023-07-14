import type {Updater, Writable} from "svelte/store";
import {writable} from "svelte/store";
import {browser} from "$app/environment";

export const localStore = <T = any>(key: string,
                                    value: T,
                                    deserializer: (value: string) => T = JSON.parse,
                                    serializer: (value: T) => string = JSON.stringify): Writable<T> => {
    const {subscribe, set: initialSet, update: initialUpdate} = writable<T>()

    const loadValue = (): string | null => browser ? localStorage.getItem(key) : null
    const saveValue = (value: string) => browser && localStorage.setItem(key, value)

    const initialValue = loadValue()
    initialSet(initialValue ? deserializer(initialValue) : value)

    const set = (newValue: T) => {
        value = newValue
        initialSet(newValue)
        if (newValue) saveValue(serializer(newValue))
    }

    const update = (fn: Updater<T>): void => {
        set(fn(value))
    }

    return {subscribe, set, update}
}