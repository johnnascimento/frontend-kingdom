"use strict";define(["jquery"],function(e){console.log("script initialized !");var I={body:"body"};return function(e){this.options=Object.assign({},I,e),this.setOptions=function(e){return this.options=Object.assign({},this.options,e),this}.bind(this);function i(e){return l.querySelector(e)}var l=document,o=(l.body||l.bodyElement,window,i(".contentSpot"),""),d=[],c="",r=new RegExp("</strong>","gmi");contentSpot.innerHTML="";function u(e,t,n,o,r,s,a){(a=l.createElement(e)).classList.add(n),a.id=o,a.appendChild(l.createTextNode(s)),null==r?i("."+t).appendChild(a):setTimeout(function(){i(r+t).appendChild(a)},1e3)}function m(e,t){var n,o,r;return!0===t&&!0===e?(r=[],(o=[]).push(p.first.options[p.first.link.selectedIndex].text),o.push(p.second.options[p.second.link.selectedIndex].text),o.push(p.third.options[p.third.link.selectedIndex].text),r.push(p.first.link.selectedIndex),r.push(p.second.link.selectedIndex),r.push(p.third.link.selectedIndex),{element1:o,element2:r}):(elems=[],n.push(p.first.options[p.first.link.selectedIndex].text),n.push(p.second.options[p.second.link.selectedIndex].text),n.push(p.third.options[p.third.link.selectedIndex].text),elems)}function s(e,t){console.log("defineTitles was invoked",e);var n="";switch(e.toLowerCase()){case"sol":n=0===t.element2[1]?"<strong>Sol na ":"<strong>Sol em ";break;case"lua":n=0===t.element2[1]?"<strong><strong>Lua na ":"<strong>Lua em ";break;case"ascendente":n=0===t.element2[1]?"<strong>Ascendente na ":"<strong>Ascendente ";break;case"mercúrio":n=0===t.element2[1]?"<strong>Mercúrio na ":"<strong>Mercúrio em ";break;case"vênus":n=0===t.element2[1]?"<strong>Vênus na ":"<strong>Vênus em ";break;case"marte":n=0===t.element2[1]?"<strong>Marte na ":"<strong>Marte em ";break;case"júpter":n=0===t.element2[1]?"<strong>Júpter na ":"<strong>Júpter em ";break;case"saturno":n=0===t.element2[1]?"<strong>Saturno na ":"<strong>Saturno em ";break;case"urano":n=0===t.element2[1]?"<strong>Urano na ":"<strong>Urano em ";break;case"netuno":n=0===t.element2[1]?"<strong>Netuno na ":"<strong>Netuno em ";break;case"plutão":n=0===t.element2[1]?"<strong>Plutão na ":"<strong>Plutão em ";break;case"nodos lunares":n=0===t.element2[1]?"<strong>Nodos Lunares na ":function(e,t){console.log("defineNodosLunaresTitle was invoked",e);var n="";switch(t.element2[1]){case 1:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Libra";break;case 2:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Escorpião";break;case 3:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Sagitário";break;case 4:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Capricórnio";break;case 5:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Aquário";break;case 6:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Peixes";break;case 7:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Áries";break;case 8:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Touro";break;case 9:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Gêmoes";break;case 10:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Câncer";break;case 11:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Leão";break;case 12:n="<strong>Nodo Sul em "+t.element1[1]+" / Nodo Norte em Virgem";break;default:n="empty"}return n}(e,t);break;case"parte da fortuna":n=0===t.element2[1]?"<strong>Parte da Fortuna na ":"<strong>Parte da Fortuna em ";break;case"quíron":n=0===t.element2[1]?"<strong>Quíron na ":"<strong>Quíron em ";break;case"juno":n=0===t.element2[1]?"<strong>Juno na ":"<strong>Juno em ";break;case"mercúrio retrógado":n=0===t.element2[1]?"<strong>Mercúrio Retrógado na ":"<strong>Mercúrio Retrógado em ";break;case"vênus retrógado":n=0===t.element2[1]?"<strong>Vênus Retrógado na ":"<strong>Vênus Retrógado em ";break;case"marte retrógado":n=0===t.element2[1]?"<strong>Marte Retrógado na ":"<strong>Marte Retrógado em ";break;case"júpter retrógado":n=0===t.element2[1]?"<strong>Júpter Retrógado na ":"<strong>Júpter Retrógado em ";break;case"saturno retrógado":n=0===t.element2[1]?"<strong>Saturno Retrógado na ":"<strong>Saturno Retrógado em ";break;case"urano retrógado":n=0===t.element2[1]?"<strong>Urano Retrógado na ":"<strong>Urano Retrógado em ";break;case"netuno retrógado":n=0===t.element2[1]?"<strong>Netuno Retrógado na ":"<strong>Netuno Retrógado em ";break;case"plutão retrógado":n=0===t.element2[1]?"<strong>Plutão Retrógado na ":"<strong>Plutão Retrógado em ";break;case"quíron retrógado":n=0===t.element2[1]?"<strong>Quíron Retrógado na ":"<strong>Quíron Retrógado em ";break;case"juno retrógado":n=0===t.element2[1]?"<strong>Juno Retrógado na ":"<strong>Juno Retrógado em ";break;default:n="empty"}return n}function g(e){console.log("Grab input values is running sound!");var t=m(!0,!0),n="";for(o in data.planets)if((n=data.planets[o].title.replace(r,""))==e)return 0!==t.element2[0]&&0===t.element2[1]?d.push(s(n,t)+" "+t.element1[2]):0!==t.element2[0]&&0===t.element2[2]&&d.push(s(n,t)+" "+t.element1[1]),d;for(o in data.signos)if(data.signos[o].title.replace(r,"")==e){if(d.push(data.signos[o].text[t.element2[0]-1]),1===t.element2[0])for(k=0;k<data.signos[o].levels.length;k++)b.push(data.signos[o].levels[k]);else 12===t.element2[0]?(c=data.signos[o].nodosLunares,console.log("nodos lunares",c)):13===t.element2[0]?(c=data.defaultText.parteFortuna,console.log("parte fortuna ",c)):14===t.element2[0]?(c=data.defaultText.quironCurador,console.log("quiron curador ",c)):15===t.element2[0]?(c=data.defaultText.junosCasasSignos,console.log("junos nas casas e signos ",c)):b.push("");return d}for(o in data.casas)if(data.casas[o].title.replace(r,"")==e)return d.push(data.casas[o].text[t.element2[0]-1]),c="",b.push(""),d;return d}function t(){console.log("addElementsToTemplate is running sound");var e,t,n,o=[],r=f,s=m(!0,!0);t="textBlockWrapper-"+f,idAssigner="textBlockWrapperId-"+f,o.push(p.first.options[p.first.link.selectedIndex].text),o.push(p.second.options[p.second.link.selectedIndex].text),o.push(p.third.options[p.third.link.selectedIndex].text),n=o,console.log("templateArray",n),console.log("selectedItemsArray",o),0!==s.element2[0]&&0!==s.element2[1]||0!==s.element2[0]&&0!==s.element2[2]?(u("div","contentSpot",t,idAssigner,null,""),u("div","textBlockWrapper-"+f,"trashcan-"+f,"trashcanId",null,"x"),i(".trashcan-"+f).addEventListener("click",function(e){return t=e.target,console.log("DeleteTextBlock is running sound!"),void t.parentNode.remove();var t}),f++):h("contentSpot"),b=[],e=function(e){console.log("setUpTextForTemplate is running sound!"),d=[];return(e=e||[]).length?(e.forEach(g),d):void 0}(n),console.log("elemPlaceholder",e),console.log("templateArray",n);for(var a=0;a<n.length;a++){if(0===p.first.link.selectedIndex)return;if(0!==p.first.link.selectedIndex&&0===p.second.link.selectedIndex&&0===p.third.link.selectedIndex)return;if(0!==p.first.link.selectedIndex&&0!==p.second.link.selectedIndex||0!==p.third.link.selectedIndex){if(12!==p.first.link.selectedIndex&&13!==p.first.link.selectedIndex&&14!==p.first.link.selectedIndex&&15!==p.first.link.selectedIndex||(u("p",t,"arrayKlassNodos","arrayId",null,"nodosFortuna"),i(".textBlockWrapper-"+r).querySelector(".arrayKlassNodos").innerHTML=c),u("p",t,"arrayKlass-title","arrayId",null,"title created"),u("p",t,"arrayKlass","arrayId",null,"block created"),console.log("textBlock content ",e[1]),console.log("*************** Last block added ",i("."+t+":last-child")),i(".textBlockWrapper-"+r).querySelector(".arrayKlass-title").innerHTML=e[0],i(".textBlockWrapper-"+r).querySelector(".arrayKlass").innerHTML=e[1],1!==p.first.link.selectedIndex)return;for(var l=0;l<b.length;l++)u("p",t,"levelsClass","levelsId-"+l,null,l),i(".textBlockWrapper-"+r).querySelector("#levelsId-"+l).innerHTML=b[l];return}}}function n(e,t){var n="";for(o in e)n=e[o].title.replace(r,""),u("option","listOfItems-"+t,"optionClass","optionId",null,n)}var a=i("#submitBtn"),p=(i("#contentSpot"),{first:{link:i(".listOfItems-1"),options:i(".listOfItems-1").options,index:1},second:{link:i(".listOfItems-2"),options:i(".listOfItems-2").options,index:2},third:{link:i(".listOfItems-3"),options:i(".listOfItems-3").options,index:3}}),f=0,k=0,b=[],h=function(e){console.log("Check empty text block is running sound!");var t=l.getElementsByClassName(e);if(0!==t[0].children.length)for(var n=0;n<t[0].children.length;n++)1<t[0].children[n].children.length?console.log("%c didn't remove it: ","font-size: 12px; color: darkred;",t[0].children[n].children):t[0].children[n].remove()};this.init=function(){n(data.planets,1),n(data.signos,2),n(data.casas,3),i(".listOfItems-2").setAttribute("disabled",!0),i(".listOfItems-3").setAttribute("disabled",!0),a.addEventListener("click",t),i(".listOfItems-1").addEventListener("change",function(e){switch(e.target.selectedIndex){case 0:i("#resetForm").click(),i(".listOfItems-2").setAttribute("disabled",!0),i(".listOfItems-3").setAttribute("disabled",!0);break;case 3:i(".listOfItems-3").selectedIndex=0,i(".listOfItems-2").removeAttribute("disabled",!0),i(".listOfItems-3").setAttribute("disabled",!0);break;default:i(".listOfItems-2").removeAttribute("disabled"),i(".listOfItems-3").removeAttribute("disabled")}}),i(".listOfItems-2").addEventListener("change",function(e){return 0!==e.target.selectedIndex?i(".listOfItems-3").setAttribute("disabled",!0):0===e.target.selectedIndex?i(".listOfItems-3").removeAttribute("disabled"):void 0}),i(".listOfItems-3").addEventListener("change",function(e){return 0!==e.target.selectedIndex?i(".listOfItems-2").setAttribute("disabled",!0):0===e.target.selectedIndex?i(".listOfItems-2").removeAttribute("disabled"):void 0}),i('input[type="reset"]').addEventListener("click",function(e){i(".listOfItems-2").setAttribute("disabled",!0),i(".listOfItems-3").setAttribute("disabled",!0)}),document.querySelector("#printDocument")&&i("#printDocument").addEventListener("click",function(e){window.print()}),setInterval(function(){console.log("Every 60 second we run a function to clean up any empty block in the contentSpot tag"),h("contentSpot")},6e4)}}});
