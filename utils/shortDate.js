export default (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-EN', {month: 'long', year: 'numeric'})
}