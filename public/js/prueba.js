let boton= document.getElementsByClassName("cart")
let nombre= document.getElementById("nombreCarrito").innerText
let precioCarrito = document.getElementById("precioCarrito").innerText
let precio=precioCarrito.replace(/\D/g,'');
let img =document.getElementById("imgCart").src
   
/* script para guardar los datos en localstorage cuando haces click en el boton de agregar carrito en la pagina de unProducto */

if (localStorage.getItem("carrito")== undefined){
    arrayProducts =[]
    console.log ("esoty vacio")
} else{
    arrayProducts =JSON.parse(localStorage.getItem("carrito"))
    
}
 
boton[0].addEventListener("click",()=>{
    
  let producto= {
        "nombre": nombre, 
        "precio": precio,
        "img": img}  
         
    if (arrayProducts.length<1){
        arrayProducts.push(producto);
        localStorage.setItem("carrito",JSON.stringify(arrayProducts) )

        
        
    }else{ 
        arrayProducts.push(producto)
        localStorage.setItem("carrito",JSON.stringify (arrayProducts))
        console.log ("ya cargue otro producto")
   }; 
            
})
    

// let arregloProdutos = localStorage.getItem("carrito");
