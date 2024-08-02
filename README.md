# To-Do App
 
## Visão Geral

A aplicação em questão trata-se de uma Todo List (Lista de Tarefas).  Para sua construção foram utilizadas as seguintes tecnologias: HTML (Linguagem de Marcação de Hipertexto), CSS (Folha de Estilo em Cascatas), JavaScript como linguagem de programação.

### Visualização da aplicação

**Desktop**
![image](https://github.com/user-attachments/assets/f2179673-9604-4719-acdd-821d376fb78a)

**Mobile**
![image](https://github.com/user-attachments/assets/44836c82-a1b0-4128-a37f-1c775485f190)

### Link de acesso

https://igorg7.github.io/To-Do-App/

### Funcionamento da Aplicação

O funcionamento do projeto gira em torno de uma classe construtora denominada "Task", responsável por criar os objetos HTML principais da aplicação através da entrada de dados, também carrega funções de controle que são utilizadas durante o fluxo do código. 

![class task](https://github.com/user-attachments/assets/327d6876-f3f8-4c57-991f-9b9783b2c763)
(Construtor da classe)

![class task create func](https://github.com/user-attachments/assets/b921bae4-430a-4c1d-a165-b8bb38db3c46)
(Funções que criam os elementos HTML)

Após receber os dados do tipo string através da entrada do usuário, uma função para a criação do objeto HTML é chamada, dentro dessa função a classe "Task" é iniciada e atribuída a uma variável que armazena o objeto criado e o adiciona ao seu elemento pai, uma lista não ordenada que recebe os objetos criados como seus itens filhos. 

O elemento pai ( elemento UL ) recebe os elementos filhos ( elemento LI ) que são atualizados durante o fluxo da aplicação, que podem ser inseridos ou removidos pelo usuário através da área de entrada dos dados ou o botão de remoção das tarefas. 

![elements](https://github.com/user-attachments/assets/5d2e3cec-6df4-40c0-ae2c-6c3fa34c3a70)
(Elemento pai UL, Elemento filho LI)

![create task func](https://github.com/user-attachments/assets/532f001b-aef8-40fb-95f5-4048f66a3c6d)
(Função que cria os objetos e evento DOM inicializando a função)

Com a criação das tarefas por parte do usuário, elas são inseridas em uma estrutura de dados do tipo array, que funciona em paralelo com o controle de estado das tarefas criadas e existentes na aplicação.

![array de objetos](https://github.com/user-attachments/assets/619b9f54-e17c-461e-aeab-64422ab3ada7)

Esse array recebe uma coleção de objetos que guardam as informações de cada tarefa, como por exemplo, o texto da tarefa e o seu status. Para a persistência desses dados, o array é armazenado na memoria local do navegador e todas as informações são mantidas mesmo após o usuário encerrar sua sessão. 

![image](https://github.com/user-attachments/assets/2afc031f-14ca-4e3c-aa0e-74c9e8e28374)

Com as tarefas sendo exibidas em tela, é possível controlar seus estados interagindo com cliques em seus botões. Existem os seguintes botões em cada tarefa: botão de verificação que alterna o estado da tarefa entre "Ativo" e "Completa", e o botão de exclusão representado por um "X". Ao clicar em algum desses botões, as funções de controle da classe "Task" são chamadas e executadas. 

![class task control func](https://github.com/user-attachments/assets/05ed8e99-2658-4e2d-981a-cac0e36df2ab)
