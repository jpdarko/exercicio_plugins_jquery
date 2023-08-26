$(document).ready(function() {
    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('#cadastro-form').submit(function(event) {
        event.preventDefault();

       
        $('.error-message').remove();
        $('input').removeClass('error');

        // Validar campos
        const nome = $('#nome').val();
        const email = $('#email').val();
        const telefone = $('#telefone').val();
        const cpf = $('#cpf').val();
        const endereco = $('#endereco').val();
        const cep = $('#cep').val();

        let isValid = true;

        if (nome.trim() === '') {
            isValid = false;
            displayError($('#nome'), 'Por favor, insira seu nome.');
        }

        if (!isValidEmail(email)) {
            isValid = false;
            displayError($('#email'), 'Por favor, insira um e-mail válido.');
        }

        if (!isValidCpf(cpf)) {
            isValid = false;
            displayError($('#cpf'), 'Por favor, insira um CPF válido.');
        }

        if (!isValidCep(cep)) {
            isValid = false;
            displayError($('#cep'), 'Por favor, insira um CEP válido.');
        }

        if (isValid) {
            
            const formData = $(this).serializeArray();
            console.log(formData);

            
            $('input').val('');
        }
    });

    function displayError(field, message) {
        field.addClass('error');
        $('<p class="error-message">' + message + '</p>').insertAfter(field);
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function isValidCpf(cpf) {
        
        return true;
    }

    function isValidCep(cep) {
        
        return true;
    }
});
