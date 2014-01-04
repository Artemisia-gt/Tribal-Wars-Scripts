// ==UserScript==
// @name       TribalWars - Simplified Smiles
// @version    Alpha 1.0
// @description  Add smiles to your favorite browser game
// @match      http://*.guerretribale.fr/game.php?*screen=forum*
// @copyright  2013+, Artemisia
// @grant unsafeWindow
// ==/UserScript==
/*== license ==
 *	Copyright (C) 2013+  Artemisia

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
ScriptAPI.register('Simplified Smiles', [8.18], 'Artemisia', 'https://github.com/Artemisia-gt/Tribal-Wars-Scripts');

/*== lib ==*/

/**
* 	replace smiles within a string with its iconographic representation
* 	@param		string:String - text to format
* 	@return		string:String - formated text
*/
function formatSmiles(string){
    var smiles = [
    	[':\\\)', '01.png'],
    	[':o', '04.png'],
    	[':\\\(', '03.png'],
    	[':p', '06.png'],
    	[';\\\)', '05.png'],
    	[':\\\|', '02.png'],
    	[':rofl:', '07.png'],
    	['8D', '09.png'],
    	[':\\\$', '12.png'],
    	[':mad:', '10.png'],
    	[':D', '11.png'],
    	[':zip:', '13.png'],
    	[';\\\(', '14.png'],
    	[':inlove:', '15.png'],
    	[':angel:', '18.png']
	];
    for(var i = 0; i < smiles.length; i++){
        string = string.replace(new RegExp(smiles[i][0], 'gi'), '[img]http://forum.guerretribale.fr/images/smilies/' + smiles[i][1] + '[/img]');
    }
    return string;
}

/*== main ==*/
$('form').submit(function(){
    $('#message').val(formatSmiles( $('#message').val()) );
	return true; 
});  





