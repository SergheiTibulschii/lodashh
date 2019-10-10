const concat = (arr, ...arrs) => {
    return [...arr, ...arrs.reduce((result, element) =>
            [...result, ...(Array.isArray(element) ? element : [element])],
        [])]
}

export default concat;