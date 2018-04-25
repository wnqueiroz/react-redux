export function changeValue(e) {
    console.log('changeValue')
    return {
        type: 'VALUED_CHANGED',
        payload: e.target.value
    }
}