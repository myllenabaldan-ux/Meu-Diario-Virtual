function abrirCadastro(){

    document.getElementById("capa").style.display = "none";

    document.getElementById("cadastro").style.display = "block";
}

function cadastrar(){

    const usuario =
    document.getElementById("usuario").value.trim();

    const senha =
    document.getElementById("senha").value;

    if(usuario === ""){

        alert("Digite um usuário.");

        return;
    }

    if(senha.length < 12){

        alert("A senha precisa ter pelo menos 12 caracteres.");

        return;
    }

    sessionStorage.setItem("usuario", usuario);

    document.getElementById("cadastro").style.display = "none";

    document.getElementById("diario").style.display = "block";

    carregarPaginas();
}

function criarPagina(){

    let paginas =
    JSON.parse(localStorage.getItem("paginas")) || [];

    paginas.push("");

    localStorage.setItem(
        "paginas",
        JSON.stringify(paginas)
    );

    carregarPaginas();
}

function carregarPaginas(){

    let paginas =
    JSON.parse(localStorage.getItem("paginas")) || [];

    const container =
    document.getElementById("paginas");

    container.innerHTML = "";

    paginas.forEach((texto,index)=>{

        const textarea =
        document.createElement("textarea");

        textarea.classList.add("pagina-caderno");

        textarea.value = texto;

        textarea.placeholder =
        "Escreva aqui...";

        textarea.addEventListener("input",()=>{

            paginas[index] = textarea.value;

            localStorage.setItem(
                "paginas",
                JSON.stringify(paginas)
            );

        });

        container.appendChild(textarea);

    });
}

function sair(){

    sessionStorage.clear();

    document.getElementById("diario").style.display = "none";

    document.getElementById("capa").style.display = "flex";
}
