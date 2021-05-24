import { Cliente } from "./Cliente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";

const diretor = new Diretor("Maycon", 10000, 93759375821);
diretor.cadastrarSenha("12345");
const gerente = new Gerente("John Doe", 5000, 37561517355);
gerente.cadastrarSenha("123");
const cliente = new Cliente("Jane Doe", 47583658836, "1");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12345");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);