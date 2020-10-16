// функция, считающая количество повторяющихся символов
const someText = 'Downloading https://files.pythonhosted.org/packages/24/a8/5133f51967fb21e46ee50831c3f5dda49e976b7f915408d670b1603d41d6/astroid-2.4.2-py3-none-any.whl (213kB)'

const calculateLetters  = (text) => {
    const report = {};
    for (const letter of text.toLowerCase()) {
        if ('.,:;/ (){[]}+-_'.includes(letter)) {
            continue;
        };
    if (letter in report) {
        report[letter] += 1;
    } else {
        report[letter] = 1;
        };
    }
    return report;
}

console.log(calculateLetters (someText));