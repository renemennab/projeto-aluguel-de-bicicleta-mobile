# Plano de Testes de Software


<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
- Site publicado na Internet ou disponível para o servidor local do visual studio code
- Navegador da Internet - Chrome, safari e Firefox
- Conectividade de Internet para acesso às plataformas (APIs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

<br>

|Caso de teste   | CT-001 - Usuários conseguem se registrar 
|------|-----------------------------------------|
|Requisitos associados | RF-001​​  Permitir que o usuário crie cadastro como coletor​ <br/>RF-002  Permitir que o usuário crie cadastro como doador​ <br/>RF-003​  Permitir que o usuário efetue login​​ <br/>RF-004​​  Permitir que o usuário efetue logout​​ <br/>
|Objetivo do teste | Verificar se os usuários conseguem se registrar
|Passos | 1) Entrar no navegador <br /> 2) Acessar o site <br /> 3) Clicar em "Menu" e "login" <br /> 4) Inserir os dados, inclusive o tipo de usuário <br /> 5) Fazer login
|Critérios de Êxito | - Site deve rodar normalmente <br /> - Aparecer mensagem de exito ao criar o cadastro <br /> - Dados devem ser salvos no banco de dados<br /> - Senha deve ser cryptografada <br /> - Deve ser gerado um identificador único para aquele usuário <br /> - Site deve conseguir acessar o banco de dados para permitir o login

<br>

|Caso de teste   | CT-002 - Usuários conseguem ver pontos no mapa 
|------|-----------------------------------------|
|Requisitos associados | RF-005​​  Permitir que o usuário visualize um ponto de coleta​​  
|Objetivo do teste |  Verificar se os usuários conseguem visualizar pontos no mapa
|Passos | 1) Entrar no navegador <br /> 2) Acessar o site <br /> 3)  visualizar o mapa <br /> 4) Clicar em um ponto de distribuição <br /> 6) Caso não haja nenhum na sua região, clicar em lista e ver os pontos mais próximos
|Critérios de Êxito | - Site deve rodar normalmente <br /> - Mapa deve centralizar perto do usuário caso ele tenha dado permissão ao browser para compartilhar a localização <br /> - Ao clicar em lista a visualização deve mudar <br> - devem aparecer cards mostrando os pontos e sua distância

<br>

|Caso de teste   | CT-003 - Usuários consegue utilizar a funcionalidade de ponto de coleta
|------|-----------------------------------------|
|Requisitos associados | RF-006​​ Permitir que o usuário coletor cadastre um ponto de coleta <br /> RF-007​​  Permitir que o usuário coletor edite um ponto de coleta​​ <br /> RF-008 Permitir que o usuário coletor delete um ponto de coleta​​
|Objetivo do teste | Verficar se os usuários conseguem cadastrar, editar e deletar um ponto de coleta
|Passos | <ol><li>Entrar no navegador</li><li>Acessar o site</li><li>Fazer login</li><li>Abrir o menu</li><li>Clicar na opção criar ponto de coleta</li><li>Preencher as informações</li><li>Salvar</li><li>Clicar em "Menu"</li><li>Clicar em "Meus Pontos de coleta"</li><li>Selecionar um</li><li>Clicar no icone de edição</li><li>Editar campo desejado</li><li>Salvar</li><li>Clicar no ícone de deletar</li><li>Confirmar que deseja deletar</li></ol>
|Critérios de Êxito | <ul><li>Site deve rodar normalmente</li><li>Ponto deve ser criado, editado e deletado do banco</li><li>Caso haja qualquer erro de preenchimento, o usuário deve ser comunicado</li><li>Deve haver uma confirmação sempre antes de salvar uma edição ou de deletar</li><li>Caso haja qualquer falha de requisição, o usuário deve ser avisado</li></ul>


<br>

|Caso de teste   | CT-004 - Usuários conseguem fazer buscas 
|------|-----------------------------------------|
|Requisitos associados | RF-09 Permitir que o usuário procure por estabelecimentos próximos de sua localização​​ <br/> RF-010 Permitir que o usuário filtre os pontos de coleta pelo tipo de doação que deseja fazer
|Objetivo do teste |  Verificar se os usuários conseguem fazer buscas
|Passos | <ol><li>Entrar no navegador</li><li>Acessar o site</li><li>Digitar o nome de um estabelecimento ou cidade no campo de buscas</li><li>Clicar no ícone de filtros</li><li>Selecionar tipos de itens desejados</li></ol>
|Critérios de Êxito | <ul><li>Site deve rodar normalmente</li><li>Caso a pesquisa retorne com pontos, o usuário deve conseguir visualizar os cards com os pontos</li><li>Ao selecionar um filtro, lista deve mostrar apenas cards que correspondam àquele filtro</li><li>Caso a busca não retorne resultados o usuário deve ser informado</li></ul>

<br>

|Caso de teste   | CT-005 - Usuários conseguem favoritar e interagir com pontos de coleta
|------|-----------------------------------------|
|Requisitos associados | RF-011​​ Permitir que o usuário envie mensagem para um ponto de coleta​​ <br /> RF-012​ Permitir que o usuário doador favorite pontos de coleta​
|Objetivo do teste | Verificar se os usuários conseguem favoritar e entrar em contato com pontos de coleta
|Passos | <ol><li> Entrar no navegador </li><li>  Acessar o site </li><li>  Clicar em um ponto de coleta </li><li>  Ver informações do usuário </li><li> Clicar em Contatar usuário</li><li>Voltar</li><li>Clicar no ícone de estrela</li><li>   Fazer login ou cadastro </li></ol>
|Critérios de Êxito | <ul><li> Site deve rodar normalmente </li> <li> Informações exibidas devem ser as referentes à instituição selecionada na tela de busca</li> <li> Botão de contato mostra informações de contato da instituição </li> <li> Botão enviar mensagem me leva ao whatsapp </li> <li>Ao clicar na estrela, caso o usuário não esteja logado, ele será redirecionado para o processo de signup e login, ao finalizar, seu ponto estará favoritado em seu perfil</li></ul> 

<br> 
## Ferramentas de Testes
 
- Jest
- Cypress
- Métodos de teste c#
- Vscode test Explorer