// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  //seleccionamos el span por el que debemos comenzar
  let spanBase = document.querySelector(".selected");
  //accedemos al ul padre
  let padreUl = spanBase.parentElement.parentElement;
  //sacamos el primer li
  let li1 = padreUl.firstElementChild;
  //sacamos el span del primer li
  let span1 = li1.firstElementChild;
  //añadimos la clase al span del primer li
  span1.classList.add("element-1");

  //añadimos la clase al span del li2 partiendo del li1
  li1.nextElementSibling.firstElementChild.classList.add("element-2");
  //añadimos la clase al span4 partiendo del spanBase (span3)
  spanBase.parentElement.nextElementSibling.firstElementChild.classList.add(
    "element-3"
  );
  //partiendo del ul accedemos a su último hijo li y desde ahí damos clase al span
  padreUl.lastElementChild.firstElementChild.classList.add("element-4");

  //partiendo del Ul seleccionamos todos los li y los almacenamos
  let listali = padreUl.querySelectorAll("li");

  //accedemos al segundo li, accedemos a su padre y desde ahí lo eliminamos
  listali[1].parentElement.removeChild(listali[1]);
  //accedemos al cuarto li, accedemos a su padre y desde ahí lo eliminamos
  listali[3].parentElement.removeChild(listali[3]);

  //volvemos a coger la lista para que recoja los cambios
  listali = padreUl.querySelectorAll("li");

  //accedemos al segundo Ul
  let ul2 = document.getElementById("list2");

  //recorremos la lista de li 
  for (let i = 0; i < listali.length; i++) {
    //creamos botón
    let boton = document.createElement("button");
    //añadimos el texto del span de la primera lista al botón
    boton.textContent =  listali[i].firstElementChild.innerHTML;
    //creamos nuevo elemento li
    let nuevoLi = document.createElement("li");
    //añadimos al nuevo li el boton
    nuevoLi.appendChild(boton);
    //añadimos el li como hijo al segundo ul
    ul2.appendChild(nuevoLi);
  }

  //añadimos atributo disabled al último botón
  ul2.lastElementChild.firstElementChild.setAttribute("disabled", "");
}
