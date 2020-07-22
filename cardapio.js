    let cachorroQuente = 4
    let xSalada = 4.5
    let xBacon = 5
    let torrada = 2
    let refrigerante = 1.5

    alert("1: Cachorro Quente<br> 2: Salada<br> 3: X-Bacon<br> 4: Torrada simples<br> 5: Refrigerante")
    let codigoPedido = parseInt(prompt("Qual é a pedida de hoje?!"))
    
    

    if(codigoPedido === 1) {
        let quantidadePedido = parseInt(prompt("Quantidade? "))
        var total = quantidadePedido *= cachorroQuente
        
    } else if (codigoPedido === 2){
        quantidadePedido = parseInt(prompt("Quantidade? "))
        total = quantidadePedido *= xSalada

    } else if (codigoPedido === 3) {
        quantidadePedido = parseInt(prompt("Quantidade? "))
        total = quantidadePedido *= xBacon

    } else if(codigopedido === 4){
        quantidadePedido = parseInt(prompt("Quantidade? "))
        total = quantidadePedido *= torrada
        
    } else {
        quantidadePedido = parseInt(prompt("Quantidade? "))
        total = quantidadePedido *= refrigerante
        
    }


    alert("Total a pagar: R$ " + total)
    




