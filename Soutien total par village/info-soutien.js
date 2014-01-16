
// @name       TribalWars - Soutien total par village
// @version    1.5_fr_1.0
// @description  Ajoute un tableau à l'aperçu troupe > soutien contenant la liste des soutiens triée par village soutenu.
// @copyright  2013+, Artemisia
/*== license ==
 *	Copyright (C) 2013+  Ademes (auteur)
 *  Copyright (C) 2013+  Artemisia (traduction fr, amélioration, relecture)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see http://www.gnu.org/licenses/
 
== script API ==*/
ScriptAPI.register('Soutien total par village', [8.18], 'Artemisia & Ademes', 'https://github.com/Artemisia-gt/Tribal-Wars-Scripts');

/*== main ==*/
ads_lduDidT()
function ads_lduDidT() {
    var doc = document;
    var villages = new Array(0);
    var players = new Array(0);  
    var deffs = new Array(0);
    var links = new Array(0);
    var table = doc.getElementById('units_table');
    // Arrays Abfrage bilden        
    var rows = table.getElementsByTagName('tr');
    for (var i = 1; i < rows.length - 1; i++) {
        if (rows[i].lastChild.previousSibling.getElementsByTagName('a').length == 0) {
            var village = trim(rows[i].getElementsByTagName('span')[0].textContent);
            var player = rows[i].getElementsByTagName('a')[2];                          
            for (var j = 0; j < villages.length; j++) {
                if (villages[j] == village) break;
            }
            if (j == villages.length) {
                villages[j] = village;
                deffs[j] = new Array(0);
                var th = rows[0].getElementsByTagName('th');
                for (var k = 0; k < th.length - 3; k++) {
                    deffs[j][k] = 0;
                    links[j] = rows[i].getElementsByTagName('a')[0];
                    players[j] = (player == undefined) ? '' : player.textContent;           
                }
            }
            var cells = rows[i].getElementsByTagName('td');
            for (var k = 0 ; k < deffs[j].length; k++) {
                deffs[j][k] += parseInt(cells[k+1].textContent);
            }
        }
    }
    // Arrays Abfrage sortieren 
    Array.prototype.multisort = function() {
        var sortArray = [];
        for (var i = 0; i < this.length; i++) {
            sortArray[i] = [this[i]];
            for (var j = 0; j < arguments.length; j++) {
                if (arguments[j].length != this.length) return false;
                sortArray[i][j+1] = arguments[j][i];
            }
        }
        sortArray.sort();
        for (var i = 0; i < sortArray.length; i++) {
            this[i] = sortArray[i][0];
            for (var j = 0; j < arguments.length; j++) {
                arguments[j][i] = sortArray[i][j+1];
            }
        }
        return true;
    }
    players.multisort(links,villages,deffs);
    // Display erstellen    
    var div = doc.getElementById('paged_view_content');
    var newTable = doc.createElement('table');
    newTable.className = 'vis';
    newTable.setAttribute("style","width:100%; margin: 0 auto;");
    var headerTable = doc.createElement('br');
    newTable.appendChild(headerTable)   
    headerRow = doc.getElementById('units_table').getElementsByTagName('tr')[0].cloneNode(true);    
    newTable.appendChild(headerRow);
    rowClone = newTable.getElementsByTagName('tr')[0];
    $(rowClone).children('th:first').replaceWith("<th>Villages soutenus</th>");
    $(rowClone).children('th:eq(1)').remove();
    $(rowClone).children('th:last').remove();
    for (var i = 0; i < villages.length; i++){
        var newRow = doc.createElement('tr');
        newRow.classList.add(insertRow(i));
        var newCell = doc.createElement('td');
        var checkBox = doc.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.id = villages[i];
        newCell.appendChild(checkBox);
        newCell.innerHTML += '<a href=' + links[i] + '>' + villages[i] + '</a>';    
        newRow.appendChild(newCell);
        for (var j = 0; j < deffs[i].length; j++){
            var troopCell = doc.createElement('td');
            if (deffs[i][j] == 0) troopCell.className = 'hidden';
            troopCell.innerHTML = deffs[i][j];
            newRow.appendChild(troopCell);
        }
        newTable.appendChild(newRow);
    }
    div.insertBefore(newTable, doc.forms[doc.forms.length-2]);
    window.addEventListener('click', function(event) { 
        if (event.target.type == 'checkbox')  {
            var rows = table.getElementsByTagName('tr');            
            for (var i = 1; i < rows.length - 1; i++) {
                if ((rows[i].getElementsByTagName('td')[rows[i].getElementsByTagName('td').length - 1].textContent != 'Wojska') && trim(rows[i].getElementsByTagName('span')[0].textContent) == event.target.id) {
                    rows[i].getElementsByTagName('input')[0].checked = event.target.checked;
                }
            }
        }
    }, true);

    var button = doc.getElementsByName('submit_units_back')[0];
    var newButton = doc.createElement('input');
    newButton.type = 'submit';
    newButton.value = 'Retirer';
    newButton.className = "btn";
    newTable.appendChild(newButton);
    newButton.addEventListener('click', action, false);
    function action() {
        button.click();
    }
    var endTable = doc.createElement('tr');
    endTable.innerHTML = '<br>';
    newTable.appendChild(endTable)
};



function trim(str, chars) {
    return ltrim(rtrim(str, chars), chars);
};
function ltrim(str, chars) {
    var chars = chars || '\\s';
    return str.replace(new RegExp('^[' + chars + ']+', 'g'), '');
};
function rtrim(str, chars) {
    var chars = chars || '\\s';
    return str.replace(new RegExp('[' + chars + ']+$', 'g'), '');
};

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function insertRow(n) 
{
    if (n % 2 == 0) return 'row_a';
    return 'row_b';
};