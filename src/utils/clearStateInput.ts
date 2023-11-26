type SetStateFunction<T> = React.Dispatch<React.SetStateAction<T>>;

function resetStateValues<T extends Record<any, string | boolean>>(
    state: T,
    setState: SetStateFunction<T>
): void {
    const resetValues: Partial<T> = {};
    Object.keys(state).forEach((key) => {
        const typedKey = key as keyof T;
        if (typeof state[typedKey] === 'string') {
            resetValues[typedKey] = '' as T[keyof T];
        } else if (typeof state[typedKey] === 'boolean') {
            resetValues[typedKey] = false as T[keyof T];
        }
    });
    setState({ ...state, ...resetValues });
}

export default resetStateValues;
