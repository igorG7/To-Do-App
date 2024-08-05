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

## Processo de criação

Para o funcionamento da aplicação, uma classe construtora foi utilizada para realizar o objetivo fundamental do projeto e gerar seus principais elementos. Denominada `Task`, esta classe além de criar os objetos HTML que irão se tornar as tarefas, também carrega funções que são utilizadas para controlar o estado das mesmas. Esses estados alternam entre "Ativo" e  "Concluído", e são controlados por uma função que monitora o clique do usuário sobre cada tarefa. Além de alterar o estado de uma tarefa, também é possível realizar a exclusão através de um botão representado por um "X", após o clique, uma função própria para a deleção é chamada.

![class task](https://github.com/user-attachments/assets/3041ce8b-290e-4c05-bac1-ac0f2d4378a3)
(Classe Task, responsável pela criação e controle das tarefas).

![class task create func](https://github.com/user-attachments/assets/7160d3b9-de41-43aa-8d40-841316a43b74)
(Funções responsáveis por criar os elementos HTML que irão compor a tarefa).

![class task control func](https://github.com/user-attachments/assets/bb479223-fdd2-4873-8e4f-f798b187fc9e)
(Funções responsáveis por controlar o estado das tarefas).

Para a criação das tarefas, é necessário que o usuário entre com os dados no campo de input disponível. Após o envio dos dados, uma função para a criação da tarefa é chamada, nesta função, o objeto HTML gerado pela classe `Task` é atribuído a uma variável que armazena o objeto criado. Após a criação, o objeto recebe os dados do tipo `string` fornecidos pelo usuário e seu status, e então é acrescentado ao seu elemento pai, uma lista não ordenada.  

![create task func](https://github.com/user-attachments/assets/e35564f8-fe7d-4220-910e-37cd82280ba5)
(Função responsável pela criadção de tarefas e evento DOM inicializador).

Em paralelo a classe `Task`, um `Array` denominado `storedTasks` trabalha com uma coleção de objetos, que são alimentados pelas informações de cada tarefa criada. Para cada tarefa existente, um objeto contendo o texto e o status da mesma é armazenado dentro do Array. Conforme o usuário interage com as tarefas já criadas, o `Array` `storedTasks` é atualizado. Essas atualizações consistem na alteração do status de uma determinada tarefa, que variam entre "Ativo" e "Concluída" e sua remoção definitiva, assim como os objetos HTML. As funções responsáveis pelas alterações dentro do Array estão contidas dentro da classe `Task`, e são acionadas junto as funções de controle de estado dos Objetos HTML.

![array de objetos](https://github.com/user-attachments/assets/f277e13f-558c-40b4-9a6f-7343b4f0b1ed)
(Variavel que mantém os objetos).

![func localstorage](https://github.com/user-attachments/assets/3d1df0e8-7001-4639-81b1-bb89d2c4e277)
(Funções que inserem e alteram as informações dentro do Array de objetos).

Para a persistência das informações geradas pela interação do usuário, a coleção de dados `storedTasks` é armazenada na memoria local do navegador, assim, sempre que o usuário encerrar sua sessão e retornar a aplicação, suas tarefas irão ser recuperadas e exibidas novamente.

![image](https://github.com/user-attachments/assets/b4626549-c098-4602-9e11-155e5a56451f)
(Memoria local do navegador).

