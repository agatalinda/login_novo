// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCMw5cy-qDwmLU-P4uO1Z5-ld5G1i_hhVY",
  authDomain: "loginnovo-9bf5d.firebaseapp.com",
  projectId: "loginnovo-9bf5d",
  storageBucket: "loginnovo-9bf5d.firebasestorage.app",
  messagingSenderId: "1013616302137",
  appId: "1:1013616302137:web:d97cb11cf94b698524d5e8",
  measurementId: "G-RDXT835JMW"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Referência ao Auth
const auth = firebase.auth();

// Seletores
const btnCadastro = document.getElementById('btn-cadastro');
const btnLogin = document.getElementById('btn-login');
const campoNome = document.getElementById('campo-nome');
const campoEmail = document.getElementById('campo-email');
const campoSenha = document.getElementById('senha');

// Regex para validar e-mail
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Função de Cadastro
btnCadastro.addEventListener('click', function () {
  const nome = campoNome.value;
  const email = campoEmail.value;
  const senha = campoSenha.value;

  if (nome === "" || email === "" || senha === "") {
    alert("Ops! Você esqueceu de preencher algum campo.");
    return;
  }

  if (!regexEmail.test(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  auth.createUserWithEmailAndPassword(email, senha)
    .then(userCredential => {
      const user = userCredential.user;
      alert("Cadastro realizado com sucesso! Bem-vindo, " + nome);
      window.location.href = "pagina-de-sucesso.html";
    })
    .catch(error => {
      alert("Erro ao cadastrar: " + error.message);
    });
});

// Função de Login
btnLogin.addEventListener('click', function () {
  const email = campoEmail.value;
  const senha = campoSenha.value;

  if (email === "" || senha === "") {
    alert("Preencha e-mail e senha para entrar.");
    return;
  }

  auth.signInWithEmailAndPassword(email, senha)
    .then(userCredential => {
      alert("Login realizado com sucesso!");
      window.location.href = "home.html";
    })
    .catch(error => {
      alert("Erro ao fazer login: " + error.message);
    });
});

