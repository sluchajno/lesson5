
let newTable = document.write('<table style = "border-style : solid">');
for (var k = 1; k <= 8; k++) {
    document.write('<tr>');
    if (k % 2 == 0) {
        for (var i = 1; i <= 8; i++) {
            if (i % 2 == 0) {
                document.write('<td style = "width : 30px; height : 30px; background-color : white"></td>');
            }
            else {
                document.write('<td style = "width : 30px; height : 30px; background-color : black"></td>');
            };
        };
    }
    else {
        for (var i = 1; i <= 8; i++) {
            if (i % 2 == 0) {
                document.write('<td style = "width : 30px; height : 30px; background-color : black"></td>');
            }
            else {
                document.write('<td style = "width : 30px; height : 30px; background-color : white"></td>');
            };
        };
    }
    document.write('</tr>');
};
document.write('</table>');
