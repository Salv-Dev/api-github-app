export default (url) => {
    return fetch(url).then(response => {
        return response;
    })
    .then(result => {
        return result.json();
    })
    .catch(err => {
        console.error(err);
    })
} 