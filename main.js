// document
console.log(document); // documento
console.log(document.head); // heade
console.log(document.body); // body

// getElementById
// getElementsByClassName
// getElementsByTagName

// querySelector
// querySelectorAll

const itemsAccordionHTMLCollection = document.getElementsByClassName("accordion-item");

const itemsAccordionNodeList = document.querySelectorAll(".accordion-item");

console.log("itemsAccordionHTMLCollection", itemsAccordionHTMLCollection);
console.log("itemsAccordionNodeList", itemsAccordionNodeList);

console.log("HTMLCollection - item", itemsAccordionHTMLCollection.item(1));

itemsAccordionNodeList.item(1).style.backgroundColor = "red";

console.log("NodeList - item", itemsAccordionNodeList.item(1).style);

// Seleccionar el nodo
const accordionBodiesHTMLCollection = document.getElementsByClassName("accordion-body");

console.log("accordionBodiesHTMLCollection prev", accordionBodiesHTMLCollection);

for (let i = 0; i < accordionBodiesHTMLCollection.length; i++) {
  accordionBodiesHTMLCollection[i].classList.add("claseJS");
}

console.log("accordionBodiesHTMLCollection after", accordionBodiesHTMLCollection);itemsAccordionNodeList


console.log("ejemplo", document.querySelector("#ejemplo"));


const accordionNode = document.querySelector(".accordion");
// const accordionNode2 = document.getElementsByClassName("accordion")[0];

console.log("accordionNode", accordionNode);
// console.log("accordionNode2", accordionNode2);

// quiero saber si el nodo que seleccione tiene hijos
if (accordionNode.children.length > 0) {
  console.log("si es un nodo padre")
}

// quiero obtener el primer hijo del nodo que seleccione
accordionNode.firstElementChild

// quiero conocer al ultimo hijo del nodo que seleccione
accordionNode.lastElementChild

// quiero conocer si el lastElementChild tiene hijos
if (accordionNode.lastElementChild.children.length > 0) {
  console.log("si es un nodo padre")
}

// quiero conocer el nextSibling del hijo 4 del nodo que seleccione
// validar si el nodo selecciona tiene mas de 4 hijos
if (accordionNode.children.length >= 4) {
  console.log("4 hijo", accordionNode.children[3].nextSibling);
} else {
  console.log("el nodo no tiene tantos hijos")
}


// convertir HTMLCollectio o NodeList a arreglo
const nuevoArregloFromHTMLCollection = Array.from(itemsAccordionHTMLCollection);
const nuevoArregloFromNodeList = Array.from(itemsAccordionNodeList);

console.log("nuevoArregloFromHTMLCollection", nuevoArregloFromHTMLCollection)
console.log("nuevoArregloFromNodeList", nuevoArregloFromNodeList)