var mainDiv = document.querySelector('#table_div');

var componentHTML = ['HTML', 'Base', 'Span', 'Em', 'Table', 'Tr', 'Td', 'Label', 'Select', 'Meter', 'Form', 'Fieldset', 'aside', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
/*On calcule le nombre de ligne*/
var nbLines = componentHTML.length / 5;
/*on arrondit au point supérieur*/
nbLines = Math.ceil(nbLines);

for (var i = 0; i < nbLines; i++) {
    /*Creation de nos lignes*/
    var els = document.createElement('div');
    els.setAttribute("id", "line" + i);
    els.setAttribute("class", "row");
    mainDiv.appendChild(els);
    for (var j = 10 * i; j < 10 * (i + 1); j++) {
        var texte = componentHTML[j];
        /*Creation de nos colonnes*/

        var col = document.createElement('div');
        col.setAttribute("class", "col c1");
        col.innerHTML = "<a href='#'>" + texte + "</a>";
        els.appendChild(col);


    }
}