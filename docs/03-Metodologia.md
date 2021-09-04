# Metodologia

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

A metodologia de trabalho que a equipe adotou com o objetivo de atacar o problema foi a utilização do método SCRUM e KANBAN: 

O método Scrum agrega mais produtividade aos processos, além de permitir que a equipe identifique e corrija desafios de forma ágil e orientada à resolução de problemas, mesmo que estes venham a surgir durante o processo de desenvolvimento.

O método KANBAN é bastante flexível e atende aos sistemas que possuem muitos requisitos de alterações. Além de permitir uma visualização melhor do trabalho e limitação das atividades em andamento, o KANBAN possibilita que toda a equipe seja responsável pela tomada de decisões num mecanismo de controle, que garante um acompanhamento e uma constante atualização entre os envolvidos.



## Controle de Versão

O projeto utiliza um design de fluxo de trabalho baseado  no  [Gitflow Workflow](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow), mostrado na Figura a seguir:
<br><br>

<p align="center">
    <img src="img/git-flow.png" width="600">
</p>
<p align="center"><em>Fluxo de controle do código fonte no repositório</em></p>
<br>

Seguindo a seguinte convenção para o nome de branchs:

- `main`: versão estável já testada do software
- `develop`: versão de desenvolvimento e teste do software
- `bugfix`: uma funcionalidade encontra-se com problemas
- `feature`: introduzir uma nova funcionalidade

A cada sprint uma branch develop será criada a partir da main, que contém a versão estável.<br>

Para incluir uma nova funcionalidade o desenvolvedor deve criar uma branch feature a partir da branch develop criada para aquela sprint e ao finalizar o desenvolvimento, com os devidos testes realizados, solicitar o Pull Request para a branch develop e o code review de algum outro desenvolvedor da equipe.<br>

O desenvolvedor responsável pelo code review deve realizar o merge e testar a branch develop, caso encontre algum problema, deve abrir uma issue com a tag bug.<br>

O desenvolvedor responsável por corrigir o bug, deve criar uma branch bugFix a partir da develop e ao finalizar a correção, com os devidos testes realizados deve solicitar o Pull Request para a branch develop.<br>

Ao final da sprint a branch develop, devidamente testada será mesclada com a branch main e uma tag de versionamento será criada.

## Gerenciamento de Projeto

### Divisão de Papéis

Divisão de papéis entre os membros do grupo.

Scrum Master : Amanda Salles Monteiro

Project Owner: Renê Boaventura Neto

Desenvolvedores:
- Renê Boaventura Neto 
- Amanda Salles Monteiro 

Designers: 
- Amanda Salles Monteiro
- Renê Boaventura Neto 

### Processo

Para dividir nossos processos vamos utilizar a metodologia Scrum.
Nossas sprints tem uma semana sendo a divisão das tarefas feitas no Sábado e baseada na entrega semanal ao cliente que deve ser feita geralmente na Terça-Feira às 20hs. 

[Link para o kanban](https://github.com/adnamamonteiro/projeto-doacoes/projects/2)

#### Backlog
No início do nosso processo levantamos os requisitos necessários para a próxima entrega e colocamos no kanban do projeto na aba To Do para que cada integrante escolha suas tarefas. 

As tarefas, que são criadas como issues, devem estar devidamente descritas com todas as informações necessárias e com as etiquetas corretas.

Dentre as etiquetas temos: 

- `documentation`: tarefa relativa a documentação do trabalho
- `feature`: funcionalidade nova adicionada
- `enhancement`: melhoria de algo que já existe
- `bug`: problema encontrado
- `question`: informações precisam ser solicitadas para dar continuidade ao projeto

Para cada sprint é criado um milestone e todas as tarefas são atribuídas a ele de modo que possamos acompanhar o andamento da sprint até a data de entrega.

#### Desenvolvimento
Cada colaborador deve então escolher uma tarefa e movê-la para a aba In Progress. 

O desenvolvedor deve verificar se ele tem todas as informações e ferramentas necessárias para realizar a tarefa, assim como deve verificar se não há nenhuma coisa que impeça sua realização. 

Caso a tarefa seja de código, o desenvolvedor deve criar um branch para a tarefa e, quando finalizada e devidamente testada, solicitar que um colega revise. 

Caso seja uma tarefa de outro tipo, o realizador deve reportar sobre seu estado de progresso pelo grupo no teams. Este trabalho também deve passar por um processo de revisão. 

#### Revisão
Quando a tarefa estiver completa, ela deve ser movida para a aba de revisão. Quem estiver responsável por revisar deve, realizar testes, conferir se o código segue a norma culta e regras de ortografia e gramática da língua portuguesa, além de verificar se a tarefa foi de fato resolvida. 

Caso seja encontrado algum problema, o revisor deve retornar com a tarefa para a aba In Progress, comunicar ao desenvolvedor e solicitar a correção. 

#### Finalização

Quando pronto, o revisor tem a função de fechar a issue e mergear o branch criado com o branch estável. 
 
### Ferramentas

As ferramentas empregadas no projeto são:

|Função    | Plataforma  | Link de Acesso |
|------|-----------------------------------------|----|
| Ferramentas de comunicação | Microsoft Teams| [teams.com](https://teams.microsoft.com/l/channel/19%3a8b1cc63b1dd348d2b074fd1da5068805%40thread.tacv2/Grupo%2520Ter%25C3%25A7a%252020h50%2520-%2520Projeto%2520Doa%25C3%25A7%25C3%25B5es?groupId=18d77840-33bd-47d2-910b-0f5c42a4de5c&tenantId=14cbd5a7-ec94-46ba-b314-cc0fc972a161)|
| Apresentação | Power Point 365 | [office.com](https://sgapucminasbr-my.sharepoint.com/:p:/g/personal/1328929_sga_pucminas_br/EWYwcjw4R89Pk_dK-oFA8h8B4Al0dZfswmKdRSrDXkNJjg?e=iqoZ9u)|
| Repositório | Github | [github/onde-doar](https://github.com/adnamamonteiro/projeto-doacoes) |
| Organização de tarefas | Kanban Github| [github/projects](https://github.com/adnamamonteiro/projeto-doacoes/projects/2)|
| Editor de código | Visual Studio Code| [visualstudio.com](https://code.visualstudio.com/)|
| Ferramentas de diagramação e projeto de interfaces | Figma| [figma.com/onde-doar](https://www.figma.com/file/AnDAMIwcsLVi92pWUxlJYc/Design-para-doa%C3%A7%C3%A3o-de-alimentos?node-id=758%3A1)|

<!-- | Documentos do projeto | Teams| [teams.com](https://teams.microsoft.com/_#/school/conversations/Grupo%2004%20-%20Doa%C3%A7%C3%A3o%20de%20alimentos?groupId=f3eea540-4f48-4502-97be-5c1864eecd76&threadId=19:2c749bce7ac14388aa8710cfe5551d46@thread.tacv2&ctx=channel) -->

Com o intuito de economizar tempo e evitar o uso de múltiplas ferramentas com a mesma função, o grupo deu preferência para o uso das ferramentas já usadas e sugeridas pelo curso. 

Por isso, usamos o teams/ microsoft para comunicação, apresentação e guardar documentos. Seguindo a mesma linha, mas também por ser uma ferramenta crucial no mercado de trabalho, decidimos pelo uso do Github tanto como repositório quanto como organizador de tarefas. 

O editor de código foi escolhido porque ele é gratuito, é um dos mais populares para desenvolvimento front-end e possui uma integração com o
sistema de versão. 

Por fim, escolhemos o figma como ferramenta de diagramação pois também é gratuito e não necessita de instalação, ele roda completamente no browser. 
 
