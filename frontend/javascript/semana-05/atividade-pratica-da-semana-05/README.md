### Atividade Prática da Semana 05
Nesta prática vamos elaborar um programa que simula um pequeno sistema de cadastros.

O primeiro passo a ser realizado é a escolha do tema, dentre os possíveis temas no recurso de escolha da sala virtual.

> Tema escolhido: Monitores

Após escolher seu tema, você deverá pensar em quatro características relacionadas ao conceito do tema, além do código (um identificador único). Por exemplo, para o tema cliente poderíamos ter as características: código, nome, e-mail, celular e estado.

> Características dos Monitores:
codigo
marca
tamanho_da_tela
tipo_de_conexao
estado

Seu programa deverá contemplar as funcionalidades de inserção, remoção e listagem.

Todos os cadastros deverão ser armazenados em uma coleção indexada do tipo array.

O sistema deverá apresentar um menu com as seguintes opções, onde 'X' deve ser substituído pelo tema escolhido:
```
Sistema de Cadastro de X
1 - Inserir X
2 - Excluir X
3 - Listar X
0 - Sair
Digite sua opção:
```

Este menu deverá ser exibido até que o usuário do programa digite a opção zero. Para isso, utilize um comando de repetição.

A implementação das opções de inserção (1), exclusão (2) e listagem (3), devem ser realizadas em funções específicas. Os detalhamentos das funções a serem implementadas são:

- function inserir: esta função deve receber como parâmetro um objeto relacionado ao tema escolhido. O corpo da função deve apenas adicionar este novo elemento ao array. A função não irá retornar valor.
- function excluir: esta função deve receber o código como parâmetro. O corpo da função irá localizar o cadastro com o respectivo código no array e removê-lo. A função não irá retornar valor.
- function listar: esta função não deverá receber parâmetro. O corpo da função irá percorrer o array e imprimir todos os cadastros. A função não irá retornar valor.