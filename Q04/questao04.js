// O meu raciocínio foi o seguinte: programei cada interruptor
// para ser ativado por 10 segundos, um de cada vez.Então,
// ao iniciar o programa, fui até a primeira sala e observei
// em qual interruptor a lâmpada acendeu, assim descobri o
// primeiro.Em seguida, repeti o processo na sala da segunda lâmpada,
// obtendo assim o segundo interruptor.Com isso, ao entender a relação
// entre dois interruptores e duas lâmpadas, pude inferir qual seria o
// terceiro interruptor sem a necessidade de observá - lo diretamente.

function interruptores() {
    let interruptor1 = false;
    let interruptor2 = false;
    let interruptor3 = false;

    console.log("Ligando o primeiro interruptor...");
    interruptor1 = true;

    setTimeout(() => {
        console.log("Desligando o primeiro interruptor...");
        interruptor1 = false;

        console.log("Ligando o segundo interruptor...");
        interruptor2 = true;

        setTimeout(() => {
            console.log("Desligando o segundo interruptor...");
            interruptor2 = false;

            console.log("Ligando o terceiro interruptor...");
            interruptor3 = true;

            setTimeout(() => {
                console.log("Desligando o terceiro interruptor...");
                interruptor3 = false;
            }, 10000);
        }, 10000);
    }, 10000);
}

interruptores();

