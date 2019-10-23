const findIndex = (arr, predicate, fromIndex = 0) => {
    if(typeof predicate === 'function') {
        for (let i = 0; i < arr.length; i++) {
            if(predicate(arr[i])) return i
        }
    } else if (Array.isArray(predicate)) {
        const [prop, value] = predicate
        for (let i = 0; i < arr.length; i++) {
            const entries = Object.entries(arr[i])
            if(entries.some(([p, v]) => p === prop && v === value)) return i
        }
    }

    return -1;
}

export default findIndex