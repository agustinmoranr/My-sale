const venta = document.getElementById('venta');
const horas_tienda = document.getElementById('horas_tienda');
const horas_laboradas = document.getElementById('horas_laboradas');
const boton = document.getElementById('boton')

function getVenta () {
    let ventaDia = venta.value
    let horasTienda = horas_tienda.value;
    let horasLaboradas = horas_laboradas. value;

    if(!ventaDia || !horasTienda || !horasLaboradas) {
        document.write("Por favor, coloque todos los campos requeridos")
    }
    
    const myVenta = (ventaDia / horasTienda) * horasLaboradas; 
    console.log("Mi venta total", myVenta);

    let core = Math.floor(myVenta * 0.55)

    let accessories = Math.floor(myVenta * 0.4)

    let plans = Math.floor(myVenta * 0.05)
    
    console.log(core, accessories, plans);
    document.write(`Core: ${core} \n`)
    document.write(`\nAccesorios: ${accessories} \n`)
    document.write(`\nServicios: ${plans} \n`)

    return core, accessories, plans;
}
boton.addEventListener('click', getVenta);
