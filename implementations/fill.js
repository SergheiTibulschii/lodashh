const fill = (arr, value, start = 0, end = arr.length) => {
    for (let i = start; i < end; i++) {
        arr[i] = value
    }
}

export default fill