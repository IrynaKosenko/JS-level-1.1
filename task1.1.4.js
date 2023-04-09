let textFromFile =
    `44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некоммент

#
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,
#45.40,34.29,Джанкой,43343,

# в этом файле три строки-коммента :)`;

const textToReplace = `я народився в місті Алушта, a потім переїхав в Бердичів`;

function replaceText(textToReplace, parsedText) {
    let keys = Object.keys(parsedText);
    const reg = new RegExp(keys.join('|'), 'gi');
    return textToReplace.replace(reg, ((match) =>
        `${match} ( ${parsedText[match].rating} місце в ТОП-10 найбільших міст України, населення ${parsedText[match].population} чоловік)`
    ));
};

function firstFunction(textFromFile) {
    let parsedText = textFromFile.split('\n')
        .filter(a => a)
        .filter(a => a[0] !== '#')
        .map(c => (c = c.split(','), { x: c[0], y: c[1], name: c[2], population: Number(c[3]) }))
        .sort(function (a, b) { return b.population - a.population })
        .slice(0, 9)
        .reduce((accum, current, i) => {
            return { ...accum, [current.name]: { population: current.population, rating: i + 1 } }
        }, {})
    return replaceText(textToReplace, parsedText);
}

console.log(firstFunction(textFromFile));
