const getMonedas = async () => {
    try {
        const res = await fetch ("https://mindicador.cl/api/")
        const data = await res.json();
        let monedas = {

            dolar: data.dolar.valor,
            euro: data.euro.valor,
            uf: data.uf.valor,

        }
        return monedas;
    } catch (error) {
        none.innerHTML = "<p class='text-danger'>Hubo un error al procesar. Por favor, intente más tarde.</p>";
    }
}

const input = document.getElementById("monto");
const button = document.getElementById("convertButton");
const resultado = document.getElementById("resultado");
const select = document.getElementById("monedas");
const none = document.getElementById("none")

button.addEventListener("click", async ()=> {
    const valor = await getMonedas();
    const monedaSeleccionada = select.value;
    const monto = input.value;
    console.log(valor)

    if (monedaSeleccionada ==="dolar") {
        resultado.textContent = (monto / valor.dolar).toFixed(2) + " USD";
    } else if (monedaSeleccionada === "euro") {
        resultado.textContent = (monto / valor.euro).toFixed(2) + " EUR";
    } else if (monedaSeleccionada === "uf") {
        resultado.textContent = (monto / valor.uf).toFixed(4) + " UF";
    }
})