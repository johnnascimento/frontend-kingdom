"use strict";define(["jquery"],function(e){console.log("script initialized !");var i={body:"body"};return function(e){this.options=Object.assign({},i,e),this.setOptions=function(e){return this.options=Object.assign({},this.options,e),this}.bind(this);function p(e){return l.querySelector(e)}function f(e,t,n,o,s,r,a){console.log("criarEl",e," ",t," ",n," ",o," ",s," ",r," ",a),(a=l.createElement(e)).classList.add(n),a.id=o,a.appendChild(l.createTextNode(r)),null==s?p("."+t).appendChild(a):setTimeout(function(){p(s+t).appendChild(a)},1e3)}function k(e,t){var n,o,s;return!0===t&&!0===e?(s=[],(o=[]).push(h.first.options[h.first.link.selectedIndex].text),o.push(h.second.options[h.second.link.selectedIndex].text),o.push(h.third.options[h.third.link.selectedIndex].text),s.push(h.first.link.selectedIndex),s.push(h.second.link.selectedIndex),s.push(h.third.link.selectedIndex),{element1:o,element2:s}):(elems=[],n.push(h.first.options[h.first.link.selectedIndex].text),n.push(h.second.options[h.second.link.selectedIndex].text),n.push(h.third.options[h.third.link.selectedIndex].text),elems)}function o(e,t){console.log("defineTitles was invoked",e);var n="";switch(e.toLowerCase()){case"sol":n=0===t.element2[1]?"<strong>Sol na ":"<strong>Sol em ";break;case"lua":n=0===t.element2[1]?"<strong><strong>Lua na ":"<strong>Lua em ";break;case"ascendente":n=0===t.element2[1]?"<strong>Ascendente na ":"<strong>Ascendente ";break;case"mercúrio":n=0===t.element2[1]?"<strong>Mercúrio na ":"<strong>Mercúrio em ";break;case"vênus":n=0===t.element2[1]?"<strong>Vênus na ":"<strong>Vênus em ";break;case"marte":n=0===t.element2[1]?"<strong>Marte na ":"<strong>Marte em ";break;case"júpter":n=0===t.element2[1]?"<strong>Júpter na ":"<strong>Júpter em ";break;case"saturno":n=0===t.element2[1]?"<strong>Saturno na ":"<strong>Saturno em ";break;case"urano":n=0===t.element2[1]?"<strong>Urano na ":"<strong>Urano em ";break;case"netuno":n=0===t.element2[1]?"<strong>Netuno na ":"<strong>Netuno em ";break;case"plutão":n=0===t.element2[1]?"<strong>Plutão na ":"<strong>Plutão em ";break;case"nodos lunares":n=0===t.element2[1]?"<strong>Nodos Lunares na ":function(e,t){console.log("defineNodosLunaresTitle was invoked",e);var n="";switch(t.element2[1]){case 1:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Libra";break;case 2:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Escorpião";break;case 3:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Sagitário";break;case 4:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Capricórnio";break;case 5:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Aquário";break;case 6:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Peixes";break;case 7:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Áries";break;case 8:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Touro";break;case 9:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Gêmoes";break;case 10:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Câncer";break;case 11:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Leão";break;case 12:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Virgem";break;default:n="empty"}return n}(e,t);break;case"parte da fortuna":n=0===t.element2[1]?"<strong>Parte da Fortuna na ":"<strong>Parte da Fortuna em ";break;case"quíron":n=0===t.element2[1]?"<strong>Quíron na ":"<strong>Quíron em ";break;case"juno":n=0===t.element2[1]?"<strong>Juno na ":"<strong>Juno em ";break;case"mercúrio retrógado":n=0===t.element2[1]?"<strong>Mercúrio Retrógado na ":"<strong>Mercúrio Retrógado em ";break;case"vênus retrógado":n=0===t.element2[1]?"<strong>Vênus Retrógado na ":"<strong>Vênus Retrógado em ";break;case"marte retrógado":n=0===t.element2[1]?"<strong>Marte Retrógado na ":"<strong>Marte Retrógado em ";break;case"júpter retrógado":n=0===t.element2[1]?"<strong>Júpter Retrógado na ":"<strong>Júpter Retrógado em ";break;case"saturno retrógado":n=0===t.element2[1]?"<strong>Saturno Retrógado na ":"<strong>Saturno Retrógado em ";break;case"urano retrógado":n=0===t.element2[1]?"<strong>Urano Retrógado na ":"<strong>Urano Retrógado em ";break;case"netuno retrógado":n=0===t.element2[1]?"<strong>Netuno Retrógado na ":"<strong>Netuno Retrógado em ";break;case"plutão retrógado":n=0===t.element2[1]?"<strong>Plutão Retrógado na ":"<strong>Plutão Retrógado em ";break;case"quíron retrógado":n=0===t.element2[1]?"<strong>Quíron Retrógado na ":"<strong>Quíron Retrógado em ";break;case"juno retrógado":n=0===t.element2[1]?"<strong>Juno Retrógado na ":"<strong>Juno Retrógado em ";break;default:n="empty"}return n}function b(e){console.log("Grab input values is running sound!");var t=k(!0,!0),n="";for(s in data.planets)if((n=data.planets[s].title.replace(r,""))==e)return 0!==t.element2[0]&&0===t.element2[1]?I.push(o(n,t)+" "+t.element1[2]):0!==t.element2[0]&&0===t.element2[2]&&I.push(o(n,t)+" "+t.element1[1]),I;for(s in data.signos)if(data.signos[s].title.replace(r,"")==e){if(I.push(data.signos[s].text[t.element2[0]-1]),1===t.element2[0])for(d=0;d<data.signos[s].levels.length;d++)N.push(data.signos[s].levels[d]);else 12===t.element2[0]?(x=data.signos[s].nodosLunares,console.log("nodos lunares",x)):13===t.element2[0]?(x=data.defaultText.parteFortuna,console.log("parte fortuna ",x)):14===t.element2[0]?(x=data.defaultText.quironCurador,console.log("quiron curador ",x)):15===t.element2[0]?(x=data.defaultText.junosCasasSignos,console.log("junos nas casas e signos ",x)):N.push("");return I}for(s in data.casas)if(data.casas[s].title.replace(r,"")==e)return I.push(data.casas[s].text[t.element2[0]-1]),x="",N.push(""),I;return I}function t(){console.log("addElementsToTemplate is running sound");var e,t,n=[],o=v,s="trashcan-"+v,r="textBlockWrapper-"+v,a="textBlockWrapperId-"+v,l="contentSpot-"+v,d=0!=h.second.link.selectedIndex?h.first.options[h.first.link.selectedIndex].text+" em "+h.second.options[h.second.link.selectedIndex].text:h.first.options[h.first.link.selectedIndex].text+" em "+h.third.options[h.third.link.selectedIndex].text,i='<div class="card card-'+v+'"><div class="card-header card-header-'+v+'" id="heading-'+v+'"><h5 class="mb-0"><button class="btn btn-link" data-toggle="collapse" data-target="#collapse-'+v+'" aria-expanded="true" aria-controls="collapse'+v+'">'+d+'</button><span class="fas fa-times-circle '+s+'" data-parent-card="card-'+v+'"></span></h5></div><div id="collapse-'+v+'" class="collapse show" aria-labelledby="heading-'+v+'" data-parent="#accordion"><div id="contentSpot-'+v+'" class="contentSpot-'+v+' card-body col-12"></div></div></div>',c=k(!0,!0);if(n.push(h.first.options[h.first.link.selectedIndex].text),n.push(h.second.options[h.second.link.selectedIndex].text),n.push(h.third.options[h.third.link.selectedIndex].text),t=n,console.log("templateArray",t),console.log("selectedItemsArray",n),console.log("accordionTemplate",i),0!==c.element2[0]&&0!==c.element2[1]||0!==c.element2[0]&&0!==c.element2[2]){p("#accordion").innerHTML+=i,f("div",l,r,a,null,"");var u=p(".trashcan-"+v);console.log("trashCanClass ",u),u.addEventListener("click",function(e){return t=e.target,console.log("DeleteTextBlock is running sound!"),void t.parentNode.remove();var t}),v++}N=[],e=function(e){console.log("setUpTextForTemplate is running sound!"),I=[];return(e=e||[]).length?(e.forEach(b),I):void 0}(t),console.log("elemPlaceholder",e),console.log("templateArray",t);for(var m=0;m<t.length;m++){if(console.log("For loop templateArray[z]",t[m]),0===h.first.link.selectedIndex)return;if(0!==h.first.link.selectedIndex&&0===h.second.link.selectedIndex&&0===h.third.link.selectedIndex)return;if(0!==h.first.link.selectedIndex&&0!==h.second.link.selectedIndex||0!==h.third.link.selectedIndex){if(console.log("For loop templateArray[z] else if",t[m]),12!==h.first.link.selectedIndex&&13!==h.first.link.selectedIndex&&14!==h.first.link.selectedIndex&&15!==h.first.link.selectedIndex||(console.log("For loop templateArray[z] else if - IF",t[m]),f("p",r,"arrayKlassNodos","arrayId",null,"nodosFortuna"),p(".textBlockWrapper-"+o).querySelector(".arrayKlassNodos").innerHTML=x),f("p",r,"arrayKlass-title","arrayId",null,"title created"),f("p",r,"arrayKlass","arrayId",null,"block created"),console.log("textBlock content ",e[1]),console.log("*************** Last block added ",p("."+r+":last-child")),p(".textBlockWrapper-"+o).querySelector(".arrayKlass-title").innerHTML=e[0],p(".textBlockWrapper-"+o).querySelector(".arrayKlass").innerHTML=e[1],1!==h.first.link.selectedIndex)return;for(var g=0;g<N.length;g++)f("p",r,"levelsClass","levelsId-"+g,null,g),p(".textBlockWrapper-"+o).querySelector("#levelsId-"+g).innerHTML=N[g];return}}}function n(e,t){var n="";for(s in e)n=e[s].title.replace(r,""),f("option","listOfItems-"+t,"optionClass","optionId",null,n)}var l=document,s=(l.body||l.bodyElement,window,p(".contentSpot"),""),I=[],x="",r=new RegExp("</strong>","gmi"),a=p("#submitBtn"),h=(p("#contentSpot"),{first:{link:p(".listOfItems-1"),options:p(".listOfItems-1").options,index:1},second:{link:p(".listOfItems-2"),options:p(".listOfItems-2").options,index:2},third:{link:p(".listOfItems-3"),options:p(".listOfItems-3").options,index:3}}),v=0,d=0,N=[];this.init=function(){n(data.planets,1),n(data.signos,2),n(data.casas,3),p(".listOfItems-2").setAttribute("disabled",!0),p(".listOfItems-3").setAttribute("disabled",!0),a.addEventListener("click",t),p(".listOfItems-1").addEventListener("change",function(e){switch(e.target.selectedIndex){case 0:p("#resetForm").click(),p(".listOfItems-2").setAttribute("disabled",!0),p(".listOfItems-3").setAttribute("disabled",!0);break;case 3:p(".listOfItems-3").selectedIndex=0,p(".listOfItems-2").removeAttribute("disabled",!0),p(".listOfItems-3").setAttribute("disabled",!0);break;default:p(".listOfItems-2").removeAttribute("disabled"),p(".listOfItems-3").removeAttribute("disabled")}}),p(".listOfItems-2").addEventListener("change",function(e){return 0!==e.target.selectedIndex?p(".listOfItems-3").setAttribute("disabled",!0):0===e.target.selectedIndex?p(".listOfItems-3").removeAttribute("disabled"):void 0}),p(".listOfItems-3").addEventListener("change",function(e){return 0!==e.target.selectedIndex?p(".listOfItems-2").setAttribute("disabled",!0):0===e.target.selectedIndex?p(".listOfItems-2").removeAttribute("disabled"):void 0}),p('input[type="reset"]').addEventListener("click",function(e){p(".listOfItems-2").setAttribute("disabled",!0),p(".listOfItems-3").setAttribute("disabled",!0)}),setInterval(function(){console.log("Every 60 second we run a function to clean up any empty block in the contentSpot tag")},6e4)}}});