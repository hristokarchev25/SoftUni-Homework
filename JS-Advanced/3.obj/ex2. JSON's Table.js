function name(input) {
    let output = '<table>\n';

    let employees = [];

    input.forEach(e => {
        employees.push(JSON.parse(e));
    });
    output += arrayAsTable(employees) + '</table>';

    function arrayAsTable(employees) {
        let result = '';
        employees.forEach(e => {
            result += '\t<tr>\n';
            Object.values(e).forEach(v => {
                result += `\t\t<td>${v}</td>\n`;
            })
            result += '\t</tr>\n';
        })
        return result;
    }
    console.log(output);
}
name(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
);