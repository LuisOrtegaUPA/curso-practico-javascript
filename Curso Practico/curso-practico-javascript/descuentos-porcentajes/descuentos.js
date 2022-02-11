// const precioOriginal = 120;
// const descuento = 18;

// Cupones 

const coupons = [
    {
        name: "Spoderman",
        discount: 33,
    },
    {
        name: "Todo_Free",
        discount: 98,
    },
    {
        name: "50_Cent",
        discount: 50,
    },
];


function calcularPrecioDescuento(precio, descuento) {
    const porcentaje = descuento * 0.01;
    const precioFinal = precio - (precio * porcentaje);

    return precioFinal;
}

function calcularDescuento() {
    const inputPrice = document.getElementById("InputPrice");
    const valuePrice =  inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const valueCoupon = inputCoupon.value;

    const isCouponValueValid = function (coupon) {
        return coupon.name === valueCoupon;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + valueCoupon + " no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioDescuento(valuePrice, descuento);
    
        const resultP = document.getElementById("resultPrice");
        resultP.innerText = "El precio final con descuento es: $" + precioConDescuento;
        // innerText muestra texto en HTML
    }
}



// console.log({ Impresión de variables por medio de un objeto
//     precio,
//     descuento,
//     porcentaje,
//     precioFinal,
// });