export * from './parser'
export * from './stores/local'

export const debounce = (func: (value: string) => void, wait = 250) => {
    let debounceTimeout: number;
    return (value: string) => {
        clearInterval(debounceTimeout);
        debounceTimeout = window.setTimeout(() => {
            func(value);
        }, wait);
    };
};
