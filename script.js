function obterIngresso() {

    var compra = new Object();

        compra.firstname = document.getElementById("firstname").value;
        compra.lastname = document.getElementById("lastname").value;
        compra.email = document.getElementById("email").value;
        compra.tel = document.getElementById("telefone").value;
        compra.cidade = document.getElementById("cidade").value;
        compra.password = document.getElementById("senha").value;

        console.log(compra)

    // Capturando o valor do gênero selecionado
    var genderElements = document.getElementsByName("gender");
    for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            compra.gender = genderElements[i].value;
            break;
        }
    }
    

    var json = JSON.stringify(compra);
    console.log(compra.valueOf());
    console.log(json);



    alert("Cadastro concluído.");
}

document.getElementById("obterIngresso").addEventListener('submit', obterIngresso)