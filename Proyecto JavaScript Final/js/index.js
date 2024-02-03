
const ContenidoGrid = document.querySelector('.ContenidoGrid')
const tablacarr = document.querySelector('.tablacarr')
const btnC = document. querySelector('.comprartodo')
try {
    fetch("./../js/elementos.json")
    .then(respuesta => {
    return respuesta.json()
    })
    .then(datos => {
        console.log(datos[0].nombre);
        console.log(datos[0].precio);
        console.log(datos[0].img);
        let contador = 0;
        while(datos.length > contador)
        {
        
            let producto = document.createElement('div')
            let ImgCont = document.createElement('div')
            let img = document.createElement('img')
            let contenido = document.createElement('div')
            let titulo = document.createElement('h2')
            let precio= document.createElement('p')
            let carrito = document.createElement('button') 

            producto.setAttribute('class','producto')
            ImgCont.setAttribute('class','ImgCont')
            img.setAttribute('src', datos[contador].img)
            contenido.setAttribute('class','contenido')
            titulo.setAttribute('class','titulo')
            precio.setAttribute('class','precio')

            titulo.innerHTML = datos[contador].nombre;
            precio.innerHTML = datos[contador].precio + "$"

            carrito.setAttribute("class",'btncarrito')
            carrito.setAttribute('value', contador)
            carrito.innerHTML= 'Añadir al carrito'

            producto.appendChild(ImgCont)
            ImgCont.appendChild(img)
            producto.appendChild(contenido)
            contenido.appendChild(titulo)
            contenido.appendChild(precio)
            contenido.appendChild(carrito)

            ContenidoGrid.appendChild(producto)

            carrito.addEventListener('click', (e)=> {
                e.preventDefault()
                
                const tr= document.createElement('tr')
                const td= document.createElement('td')
                const td2= document.createElement('td')

                td.setAttribute('class', 'obtjst')
                tr.setAttribute('class', 'trjs')
                
                td.innerHTML= datos[carrito.value].nombre
                td2.innerHTML= datos[carrito.value].precio

                let tdGen= document.querySelectorAll('.obtjst')

                if (tdGen.length == 0) {
                    tr.appendChild(td)
                    tr.appendChild(td2)
                    tablacarr.appendChild(tr)
                } 
                else {
                    tdGen.forEach((elem, i) => {
                        console.log(elem);
                        if (elem.innerHTML== datos[carrito.value].nombre) {
                            alert('El elemento se ha agregado al carrito')
                            tr.removeChild(td)
                            tr.removeChild(td2)
                            tablacarr.removeChild(tr) 
                        } else{
                            tr.appendChild(td)
                            tr.appendChild(td2)
                            tablacarr.appendChild(tr)      
                        }   
                    })
                }

                

            });

            contador++
            
        }
            

    })
} catch(e) { 
    console.log(e);
}

btnC.addEventListener('click', (e) => {
    const trjs= document.querySelectorAll('.trjs')

    if(trjs.length === 0){
        alert("No hay productos en el carrito")
    } else{
        trjs.forEach(elem =>
            elem.outerHTML= '')
        alert('Elementos se han comprado exitosamente')
    }
})


