var link = document.URL; 
var link = link + '';  
if(link.indexOf("mode=combined")!=-1){
var pos = link.indexOf(".fr");
var link = link.substring(0,pos);
var link = link + ".fr/stat.php?mode=settings";
var xhReq=new XMLHttpRequest();
    xhReq.open("GET", link, false);
    xhReq.send(null);
var txt = xhReq.responseText; 
var txt = txt.substring(txt.indexOf("Vitesse de jeu"), txt.length);
var pos = txt.indexOf("50%");
var vitesse = txt.indexOf("</td>",pos);
var speed = txt.substring(pos + 5, vitesse);
if(speed.indexOf(".")!=-1){
var speed2 = speed.substring(speed.indexOf(".") + 1 ,speed.length);
var speed2 = parseInt(speed2);
var speed2 = speed2 / 10;
var speed = parseInt(speed);
var speed = speed + speed2;
}else{
var speed = parseInt(speed);
}
var txt = txt.substring(txt.indexOf("Vitesse des unités"), txt.length);
var pos = txt.indexOf("<td>");
var pos2 = txt.indexOf("</td>",pos);
var speedU = txt.substring(pos + 4, pos2);
if(speedU.indexOf(".")!=-1){
var speedU2 = speedU.substring(speedU.indexOf(".") + 1 ,speedU.length);
var speedU2 = parseInt(speedU2);
var speedU2 = speedU2 / 10;
var speedU = parseInt(speedU);
var speedU = speedU + speedU2;
} else {
var speedU = parseInt(speedU);
}
var txt = txt.substring(txt.indexOf("Église"), txt.length);
var pos = txt.indexOf("<td>");
var pos2 = txt.indexOf("</td>",pos);
var Eglise = txt.substring(pos + 4, pos2);
if(Eglise.indexOf("inactif")!=-1){
var eglise = false;
} else {
var eglise = true;
}
var txt = txt.substring(txt.indexOf("Archers"), txt.length);
var pos = txt.indexOf("50%");
var pos2 = txt.indexOf("</td>",pos);
var archer = txt.substring(pos + 5, pos2);
if(archer.indexOf("inactif")!=-1){
var archer = false;
} else {
var archer = true;
}
var txt = txt.substring(txt.indexOf("Paladin"), txt.length);
var pos = txt.indexOf("<td>");
var pos2 = txt.indexOf("</td>",pos);
var paladin = txt.substring(pos + 4, pos2);
if(paladin.indexOf("inactif")!=-1){
var palouf = false;
} else {
var palouf = true;
}

var speed = speed * speedU;

if(eglise){
var q = 1;
} else {
var q = 0;
}

if(archer){
var nbA = 1;
} else {
var nbA = 0;
}
if(palouf){
var nbP = 1;
} else {
var nbP = 0;
}
var paladin = '';

var guillemet = '"';
var ap = "'";
function Generate() {

var d = new Date(document.getElementById('heure').value);
var e = new Date();
var f = d-e;


var array1 = [];
var array2 = [];

var viviA = document.getElementById('vivi').value;
var pos = viviA.indexOf('|' , 0);
var xA = viviA.substring(pos - 3,pos);
var yA = viviA.substring(pos + 1,pos + 4);
var xA = parseInt(xA);
var yA = parseInt(yA);

var nb = document.getElementById('combined_table').children[0].children[0].children[1].innerHTML;
var nb = nb.substring( nb.indexOf('(') + 1 , nb.indexOf(')'));
var nb = parseInt(nb);
var b = 0;
for(i = 0; i<nb; i++){
var source = document.getElementById('combined_table').children[0].children[i + 1].children[1].children[0].children[0].innerHTML;
var pos = source.indexOf('|' , 0);
var x = source.substring(pos - 3,pos);
var y = source.substring(pos + 1,pos + 4);
var viviD = source.substring(pos-3,pos+4);
var x = parseInt(x);
var y = parseInt(y);
var distance = Math.sqrt((Math.pow(x - xA,2)) + (Math.pow(y - yA,2)));
var timeS = distance*(1080/speed);
var timeS = Math.round(timeS);
var timeP = distance*(1320/speed);
var timeP = Math.round(timeP);

var timeL = distance*(600/speed);
var timeL = Math.round(timeL);

var timeH = distance*(660/speed);
var timeH = Math.round(timeH);

var timeB = distance*(1800/speed);
var timeB = Math.round(timeB);
var arrayL = [];
var lance = document.getElementById('combined_table').children[0].children[i + 1].children[8 + q].innerHTML;
if(document.getElementById('lance').value == 1 && lance != '0'){
if(timeS<f/1000 && f>0){
var g = d.getTime();
var g = g - (timeS*1000);
var h = new Date(g);
var j = h.getTime();

var txt = j + '/3Envoyer ' + lance + ' [unit]spear[/unit] de [coord]' + viviD + '[/coord] vers [coord]'+ viviA + '[/coord] le ' + h;
array1[b] = txt;
array2[b] = j;
b++;
arrayL[0] = 1;
}else{
arrayL[0] = 0;
}
} else {
arrayL[0] = 0;
}
var pe = document.getElementById('combined_table').children[0].children[i + 1].children[9 + q].innerHTML;
if(document.getElementById('pe').value == 1 && pe != '0'){
if(timeP<f/1000 && f>0){
var g = d.getTime();
var g = g - (timeP*1000);
var h = new Date(g);
var j = h.getTime();

var txt = j + '/3Envoyer ' + pe + ' [unit]sword[/unit] de [coord]' + viviD + '[/coord] vers [coord]'+ viviA + '[/coord] le ' + h;
array1[b] = txt;
array2[b] = j;
b++;
arrayL[1] = 1;
}else{
arrayL[1] = 0;
}
} else {
arrayL[1] = 0;
}
var hache = document.getElementById('combined_table').children[0].children[i + 1].children[10 + q].innerHTML;
if(document.getElementById('hache').value == 1 && hache != '0'){
if(timeS<f/1000 && f>0){
var g = d.getTime();
var g = g - (timeS*1000);
var h = new Date(g);
var j = h.getTime();

var txt = j + '/3Envoyer ' + hache + ' [unit]axe[/unit] de [coord]' + viviD + '[/coord] vers [coord]'+ viviA + '[/coord] le ' + h;
array1[b] = txt;
array2[b] = j;
b++;
arrayL[2] = 1;
}else{
arrayL[2] = 0;
}
} else {
arrayL[2] = 0;
}
if(archer){
var archer = document.getElementById('combined_table').children[0].children[i + 1].children[11 + q].innerHTML;
if(document.getElementById('archer').value == 1 && archer != '0'){
if(timeS<f/1000 && f>0){
var g = d.getTime();
var g = g - (timeS*1000);
var h = new Date(g);
var j = h.getTime();

var txt = j + '/3Envoyer ' + archer + ' [unit]archer[/unit] de [coord]' + viviD + '[/coord] vers [coord]'+ viviA + '[/coord] le ' + h;
array1[b] = txt;
array2[b] = j;
b++;
arrayL[3] = 1;
}else{
arrayL[3] = 0;
}
} else {
arrayL[3] = 0;
}
}else{
arrayL[3] = 0;
}
var leger = document.getElementById('combined_table').children[0].children[i + 1].children[12 + nbA + q].innerHTML;
if(document.getElementById('leger').value == 1 && leger != '0'){
if(timeL<f/1000 && f>0){
var g = d.getTime();
var g = g - (timeL*1000);
var h = new Date(g);
var j = h.getTime();

var txt = j + '/3Envoyer ' + leger + ' [unit]light[/unit] de [coord]' + viviD + '[/coord] vers [coord]'+ viviA + '[/coord] le ' + h;
array1[b] = txt;
array2[b] = j;
b++;
arrayL[4] = 1;
}else{
arrayL[4] = 0;
}
} else {
arrayL[4] = 0;
}
if(archer){
var archerM = document.getElementById('combined_table').children[0].children[i + 1].children[12 + nbA + nbA + q].innerHTML;
if(document.getElementById('archerM').value == 1 && archerM != '0'){
if(timeL<f/1000 && f>0){
var g = d.getTime();
var g = g - (timeL*1000);
var h = new Date(g);
var j = h.getTime();

var txt = j + '/3Envoyer ' + archerM + ' [unit]marcher[/unit] de [coord]' + viviD + '[/coord] vers [coord]'+ viviA + '[/coord] le ' + h;
array1[b] = txt;
array2[b] = j;
b++;
arrayL[5] = 1;
}else{
arrayL[5] = 0;
}
} else {
arrayL[5] = 0;
}
}else{
arrayL[5] = 0;
}
var lourd = document.getElementById('combined_table').children[0].children[i + 1].children[13 + nbA + nbA + q].innerHTML;
if(document.getElementById('lourd').value == 1 && lourd != '0'){
if(timeH<f/1000 && f>0){
var g = d.getTime();
var g = g - (timeH*1000);
var h = new Date(g);
var j = h.getTime();

var txt = j + '/3Envoyer ' + lourd + ' [unit]heavy[/unit] de [coord]' + viviD + '[/coord] vers [coord]'+ viviA + '[/coord] le ' + h;
array1[b] = txt;
array2[b] = j;
b++;
arrayL[6] = 1;
}else{
arrayL[6] = 0;
}
} else {
arrayL[6] = 0;
}
var belier = document.getElementById('combined_table').children[0].children[i + 1].children[14 + nbA + nbA + q].innerHTML;
if(document.getElementById('belier').value == 1 && belier != '0'){
if(timeB<f/1000 && f>0){
var g = d.getTime();
var g = g - (timeB*1000);
var h = new Date(g);
var j = h.getTime();

var txt = j + '/3Envoyer ' + belier + ' [unit]ram[/unit] de [coord]' + viviD + '[/coord] vers [coord]'+ viviA + '[/coord] le ' + h;
array1[b] = txt;
array2[b] = j;
b++;
arrayL[7] = 1;
}else{
arrayL[7] = 0;
}
} else {
arrayL[7] = 0;
}
var cata = document.getElementById('combined_table').children[0].children[i + 1].children[15 + nbA + nbA + q].innerHTML;
if(document.getElementById('cata').value == 1 && cata != '0'){
if(timeB<f/1000 && f>0){
var g = d.getTime();
var g = g - (timeB*1000);
var h = new Date(g);
var j = h.getTime();

var txt = j + '/3Envoyer ' + cata + ' [unit]catapult[/unit] de [coord]' + viviD + '[/coord] vers [coord]'+ viviA + '[/coord] le ' + h;
array1[b] = txt;
array2[b] = j;
b++;
arrayL[8] = 1;
}else{
arrayL[8] = 0;
}} else {
arrayL[8] = 0;
}
if(palouf){
var palouf = document.getElementById('combined_table').children[0].children[i + 1].children[16 + nbA + nbA + q].innerHTML;
if(document.getElementById('palouf').value == 1 && palouf != '0'){
if(timeL<f/1000 && f>0){
var g = d.getTime();
var g = g - (timeL*1000);
var h = new Date(g);
var j = h.getTime();

var txt = j + '/3Envoyer ' + paladin + ' [unit]knight[/unit] de [coord]' + viviD + '[/coord] vers [coord]'+ viviA + '[/coord] le ' + h;
array1[b] = txt;
array2[b] = j;
b++;
arrayL[9] = 1;
}else{
arrayL[9] = 0;
}} else {
arrayL[9] = 0;
}
}else{
arrayL[9] = 0;
}
}
var txtt = '';
var txtr1 = '';
var txtr2 = '';
var txt = '';
var array3 = [];
 array2.sort(function(a,b){return a-b});

for(i = 0; i<array1.length; i++){
var txt = array2[i];
var txt = txt + '';
for(n = 0; n<array1.length; n++){
var txt1 = array1[n];
var txt1 = txt1 + '';
if(txt1.indexOf(txt)!=-1){
array1[n] = '';
var pos = txt1.indexOf('/3');
var txt1 = txt1.substring(pos + 2, txt1.length);
var txtt = txtt + txt1 + '\n';
array3[i] = 1;
}
}
}


 var source = document.getElementById("paged_view_content").innerHTML;

var txt = '<textarea id="txt" onclick="select();" cols="200" rows="25">' + txtt + '</textarea>';
var source = txt + source;
document.getElementById('paged_view_content').innerHTML = source;
}
var viviAc = document.getElementById("menu_row2").children[3].children[0].innerHTML;

if(viviAc.indexOf("|")==-1){
var viviAc = document.getElementById("menu_row2").children[4].children[0].innerHTML;
}
if(viviAc.indexOf("|")==-1){
var viviAc = document.getElementById("menu_row2").children[5].children[0].innerHTML;
}
var viviAc = viviAc.substring( viviAc.indexOf('(') + 1 , viviAc.indexOf(')'));
var date = new Date();
var source = document.getElementById("combined_table").children[0].children[0].children[8 + q].innerHTML;
var txt =  '<input id="lance" value="1" type="checkbox" onclick="var source = document.getElementById(' + ap + 'lance' + ap +').value; var source = parseInt(source); var source = source * -1; document.getElementById(' + ap + 'lance' + ap + ').value = source;" checked = "">';
var source = txt + source;
document.getElementById("combined_table").children[0].children[0].children[8 + q].innerHTML = source;
var source = document.getElementById("combined_table").children[0].children[0].children[9 + q].innerHTML;
var txt =  '<input id="pe" value="1" type="checkbox" onclick="var source = document.getElementById(' + ap + 'pe' + ap +').value; var source = parseInt(source); var source = source * -1; document.getElementById(' + ap + 'pe' + ap + ').value = source;" checked = "">';
var source = txt + source;
document.getElementById("combined_table").children[0].children[0].children[9 + q].innerHTML = source;
var source = document.getElementById("combined_table").children[0].children[0].children[10 + q].innerHTML;
var txt =  '<input id="hache" value="1" type="checkbox" onclick="var source = document.getElementById(' + ap + 'hache' + ap +').value; var source = parseInt(source); var source = source * -1; document.getElementById(' + ap + 'hache' + ap + ').value = source;" checked = "">';
var source = txt + source;
document.getElementById("combined_table").children[0].children[0].children[10 + q].innerHTML = source;
if(archer){
var source = document.getElementById("combined_table").children[0].children[0].children[10 + nbA + q].innerHTML;
var txt =  '<input id="archer" value="1" type="checkbox" onclick="var source = document.getElementById(' + ap + 'archer' + ap +').value; var source = parseInt(source); var source = source * -1; document.getElementById(' + ap + 'archer' + ap + ').value = source;" checked = "">';
var source = txt + source;
document.getElementById("combined_table").children[0].children[0].children[10 + nbA + q].innerHTML = source;
}
var source = document.getElementById("combined_table").children[0].children[0].children[12 + nbA + q].innerHTML;
var txt =  '<input id="leger" value="1" type="checkbox" onclick="var source = document.getElementById(' + ap + 'leger' + ap +').value; var source = parseInt(source); var source = source * -1; document.getElementById(' + ap + 'leger' + ap + ').value = source;" checked = "">';
var source = txt + source;
document.getElementById("combined_table").children[0].children[0].children[12 + nbA + q].innerHTML = source;
if(archer){
var source = document.getElementById("combined_table").children[0].children[0].children[12 + nbA + nbA + q].innerHTML;
var txt =  '<input id="archerM" value="1" type="checkbox" onclick="var source = document.getElementById(' + ap + 'archerM' + ap +').value; var source = parseInt(source); var source = source * -1; document.getElementById(' + ap + 'archerM' + ap + ').value = source;" checked = "">';
var source = txt + source;
document.getElementById("combined_table").children[0].children[0].children[12 + nbA + nbA + q].innerHTML = source;
}
var source = document.getElementById("combined_table").children[0].children[0].children[13 + nbA + nbA + q].innerHTML;
var txt =  '<input id="lourd" value="1" type="checkbox" onclick="var source = document.getElementById(' + ap + 'lourd' + ap +').value; var source = parseInt(source); var source = source * -1; document.getElementById(' + ap + 'lourd' + ap + ').value = source;" checked = "">';
var source = txt + source;
document.getElementById("combined_table").children[0].children[0].children[13 + nbA + nbA + q].innerHTML = source;
var source = document.getElementById("combined_table").children[0].children[0].children[14 + nbA + nbA + q].innerHTML;
var txt =  '<input id="belier" value="1" type="checkbox" onclick="var source = document.getElementById(' + ap + 'belier' + ap +').value; var source = parseInt(source); var source = source * -1; document.getElementById(' + ap + 'belier' + ap + ').value = source;" checked = "">';
var source = txt + source;
document.getElementById("combined_table").children[0].children[0].children[14 + nbA + nbA + q].innerHTML = source;
var source = document.getElementById("combined_table").children[0].children[0].children[15 + nbA + nbA + q].innerHTML;
var txt =  '<input id="cata" value="1" type="checkbox" onclick="var source = document.getElementById(' + ap + 'cata' + ap +').value; var source = parseInt(source); var source = source * -1; document.getElementById(' + ap + 'cata' + ap + ').value = source;" checked = "">';
var source = txt + source;
document.getElementById("combined_table").children[0].children[0].children[15 + nbA + nbA + q].innerHTML = source;
if(palouf){
var source = document.getElementById("combined_table").children[0].children[0].children[16 + nbA + nbA + q].innerHTML;
var txt =  '<input id="palouf" value="1" type="checkbox" onclick="var source = document.getElementById(' + ap + 'palouf' + ap +').value; var source = parseInt(source); var source = source * -1; document.getElementById(' + ap + 'palouf' + ap + ').value = source;" checked = "">';
var source = txt + source;
document.getElementById("combined_table").children[0].children[0].children[16 + nbA + nbA + q].innerHTML = source;
}
var txt = '<strong> Village ciblé </strong>
  <input id="vivi" type="text" style="width: 150px" value="' + viviAc + '">
  <strong> Heure d\'impact </strong>
  <input id="heure" type="text" style="width: 400px" value="' + date + '">
  <a class="btn" href="#" onclick="Generate();">Générer</a>
    ';
  var s = document.getElementById("paged_view_content").innerHTML;
  var s = txt + s;
  
  document.getElementById("paged_view_content").innerHTML = s;
  
  
  }else{
var link = link.substring(0,link.indexOf("&")) + "&mode=combined&group=0&screen=overview_villages";
window.location = link;

  }
  void(0);