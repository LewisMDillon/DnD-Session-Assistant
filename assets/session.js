var tabs=document.querySelectorAll('.tabs button'),more=document.getElementById('more'),full=document.getElementById('full');
function words(el){return (el.textContent.trim().match(/\S+/g)||[]).length}
var extra=Math.max(0,words(full)-70);
function setMore(){if(extra>0&&!full.hidden){more.hidden=false;more.textContent=full.classList.contains('clamp')?'Show '+extra+' More Words':'Show Less'}else{more.hidden=true}}
if(extra>0)full.classList.add('clamp');
tabs.forEach(function(b){b.addEventListener('click',function(){
tabs.forEach(function(x){x.setAttribute('aria-selected','false')});
b.setAttribute('aria-selected','true');
document.querySelectorAll('.pane').forEach(function(p){p.hidden=(p.id!==b.dataset.p)});
setMore();
})});
more.addEventListener('click',function(){full.classList.toggle('clamp');setMore()});
setMore();
function copy(text){try{navigator.clipboard.writeText(text)}catch(e){}}
document.getElementById('copyRecap').addEventListener('click',function(){
var p=document.querySelector('.pane:not([hidden])');copy(p.innerText)});
document.getElementById('copyOutline').addEventListener('click',function(){
var t=[];document.querySelectorAll('.scene').forEach(function(s){
t.push(s.querySelector('.hd').textContent.replace('›','').trim());
t.push(s.querySelector('p').textContent);
s.querySelectorAll('li').forEach(function(l){t.push('- '+l.textContent)});t.push('')});
copy(t.join('\n'))});
document.querySelectorAll('.scene').forEach(function(s){
s.querySelector('.hd').addEventListener('click',function(){
s.classList.toggle('open');s.querySelector('ul').hidden=!s.classList.contains('open')})});
document.getElementById('mc').textContent=document.querySelectorAll('.moments .card').length;
