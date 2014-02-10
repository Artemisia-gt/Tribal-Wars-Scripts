/** stats.js
 *  stats on player's or tribe's profile (screen=info_players OR screen=info_ally)
 *  author: Artemisia (artemisia@team.guerretribale.fr)
 *  game compatability: 8.18
 
 ==== license ====
 *  Copyright (C) 2014+  Artemisia

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
 */ 

/* Lib */

/**
 * returns player's or tribe id when visiting its profile
 * 
 * @return int $playerId
 */
function getId() {
    var playerId = $(location).attr('search').match( /[?&]id=([0-9]*)?/ );
    return parseInt( playerId[1] );
}

/**
 * returns url of statistical graphs
 * 
 * @param int                               $playerId
 * @param enum(points, villages, oda, odd)  $type
 * @return string
 */
function getStatsUrl(id, graph, type) {
    return "http://fr.twstats.com/" + game_data.world + "/image.php?type=" + type + "graph&graph=" + graph + "&id=" + id;
}

/* Main */

if(game_data.screen == 'info_player') {

    var points      = getStatsUrl(getId(), 'points',    'player');
    var villages    = getStatsUrl(getId(), 'villages',  'player');
    var oda         = getStatsUrl(getId(), 'oda',       'player');
    var odd         = getStatsUrl(getId(), 'odd',       'player');
    
    $('#content_value > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)').prepend("<table><tr><td><table><tr><td>Evolution des Points</td></tr><tr><td><img width='250' height='200' src='" + points +"'> <br><center><input type='text' value='[img]" + points + "[/img]' onFocus='select();'></center></td></tr><tr><td>Evolutions des Villages</td></tr><tr><td><img width='250' height='200' src='" + villages +"'><center><input type='text' value='[img]" + villages + "[/img]' onFocus='select();'></center></td></tr></table></td><td><table><tr><td>Evolutions de l'ODA</td></tr><tr><td><img width='250' height='200' src='" + oda +"'> <center><input type='text' value='[img]" + oda + "[/img]' onFocus='select();'></center></td></tr><tr><td>Evolution ODD</td></tr><tr><td><img width='250' height='200' src='" + odd +"'><center><input type='text' value='[img]" + odd + "[/img]' onFocus='select();'></center></td></tr></table></td></tr></table>");

} else if(game_data.screen == 'info_ally') {
    
    var points      = getStatsUrl(getId(), 'points',    'tribe');
    var villages    = getStatsUrl(getId(), 'villages',  'tribe');
    var oda         = getStatsUrl(getId(), 'oda',       'tribe');
    var odd         = getStatsUrl(getId(), 'odd',       'tribe');
    
    $('#content_value > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2)').prepend("<table><tr><td><table><tr><td>Evolution des Points</td></tr><tr><td><img width='250' height='200' src='" + points +"'> <br><center><input type='text' value='[img]" + points + "[/img]' onFocus='select();'></center></td></tr><tr><td>Evolutions des Villages</td></tr><tr><td><img width='250' height='200' src='" + villages +"'><center><input type='text' value='[img]" + villages + "[/img]' onFocus='select();'></center></td></tr></table></td><td><table><tr><td>Evolutions de l'ODA</td></tr><tr><td><img width='250' height='200' src='" + oda +"'> <center><input type='text' value='[img]" + oda + "[/img]' onFocus='select();'></center></td></tr><tr><td>Evolution ODD</td></tr><tr><td><img width='250' height='200' src='" + odd +"'><center><input type='text' value='[img]" + odd + "[/img]' onFocus='select();'></center></td></tr></table></td></tr></table>");

} else {
    UI.ErrorMessage('Ce script doit être lancé depuis le profil d\'un joueur ou d\'une tribu.', 5000);
}