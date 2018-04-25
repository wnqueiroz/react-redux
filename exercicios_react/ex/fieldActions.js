export function changeValue(e) {
    return {
        type: 'VALUED_CHANGED',
        payload: e.target.value
    }
}