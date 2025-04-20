const url = '../../data/db.json';

export async function getProductsDataArray() {
    return await fetch(url).then(res => res.json());
}
