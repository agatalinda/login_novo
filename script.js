const firebaseConfig = {
  apiKey: "AIzaSyCMw5cy-qDwmLU-P4uO1Z5-ld5G1i_hhVY",
  authDomain: "loginnovo-9bf5d.firebaseapp.com",
  projectId: "loginnovo-9bf5d",
  storageBucket: "loginnovo-9bf5d.firebasestorage.app",
  messagingSenderId: "1013616302137",
  appId: "1:1013616302137:web:d97cb11cf94b698524d5e8",
  measurementId: "G-RDXT835JMW"
};
const btn = document.querySelector('button');
const campoNome = document.getElementById('campo-nome');
const campoEmail = document.getElementById('campo-email');
const campoSenha = document.getElementById('senha');

btn.addEventListener('click', function () {
    const nome = campoNome.value;
    const email = campoEmail.value;
    const senha = campoSenha.value;

    // 1. Definição da Regex (Expressão Regular)
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // 2. Verificação de campos vazios
    if (nome === "" || email === "" || senha === "") {
        alert("Ops! Você esqueceu de preencher algum campo.");
        return; 
    }

    // 3. Validação do formato do e-mail usando .test()
    if (!regexEmail.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Se passou pelas validações acima:
    console.log("--- Novo Cadastro ---");
    console.log("Usuário:", nome);
    console.log("E-mail:", email);
    
    alert("Cadastro de " + nome + " realizado com sucesso!");
	window.location.href = "pagina-de-sucesso.html";

    // Limpar campos apenas para não mostrar o "rastros"
    campoNome.value = "";
    campoEmail.value = "";
    campoSenha.value = "";
})
