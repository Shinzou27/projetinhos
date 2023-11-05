import genshin from './genshin_data.json'

export function getByName(name) {
    return genshin.data.filter((char) => char.name === name)[0];
}

export function getCharNames() {
    const arr = [];
    genshin.data.map((character, index) => {
        arr.push({
            id: index,
            name: character.name
        });
    })
    return arr;
}