document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    //add um evento submit ao formulario
    form.addEventListener('submit', async(e) => {
        e.preventDefault();


        //coletar os valores dos campos
        const textValue = document.getElementById('text').value
        const emailValue = document.getElementById('email')?.value

        const formData = {
            text: textValue,
            email: emailValue,
        }

        console.log('dados coletados', formData)

        //FETCH API -ENVIAR OS DADOS VIS REQUEST(POST) PARA O SERVIDOR

        const response = await fetch('https:://www.exemplo.com/cadastro',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), //converte o objeto em strong json
        })
         
    })
})
