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

|Caso de teste   | CT-002 - Usuários conseguem ver pontos de coleta no mapa 
|------|-----------------------------------------|
|Requisitos associados | RF-005​​  Permitir que o usuário visualize um ponto de coleta​​  
|Objetivo do teste |  Verificar se os usuários conseguem visualizar pontos no mapa
|Passos | 1) Entrar no navegador <br /> 2) Acessar o site <br /> 3)  visualizar o mapa <br /> 4) Clicar em um ponto de coleta <br /> 6) Caso não haja nenhum na sua região, clicar em lista e ver os pontos mais próximos
|Critérios de Êxito | - Site deve rodar normalmente <br /> - Mapa deve centralizar perto do usuário caso ele tenha dado permissão ao browser para compartilhar a localização <br /> - Ao clicar em lista a visualização deve mudar <br> - devem aparecer cards mostrando os pontos e sua distância

<br>

|Caso de teste   | CT-003 - Usuários conseguem cadastrar ponto de coleta
|------|-----------------------------------------|
|Requisitos associados | RF-006​​ Permitir que o usuário coletor cadastre um ponto de coleta
|Objetivo do teste | Verficar se os usuários conseguem cadastrar um ponto de coleta
|Passos | <ol><li>Entrar no navegador</li><li>Acessar o site</li><li>Fazer login</li><li>Abrir o menu</li><li>Clicar em "Meus Pontos de coleta"</li><li>Clicar na opção criar ponto de coleta</li><li>Preencher as informações</li><li>Salvar</li><li>Confirma que deseja salvar</li></ol>
|Critérios de Êxito | <ul><li>Ponto deve ser criado no banco</li><li>Caso haja qualquer erro de preenchimento, o usuário deve ser comunicado</li><li>Deve haver uma confirmação sempre antes de salvar um cadastro.</li><li>Caso haja qualquer falha de requisição, o usuário deve ser avisado</li></ul>



|Caso de teste   | CT-004 - Usuários conseguem editar ponto de coleta
|------|-----------------------------------------|
|Requisitos associados | RF-007​​  Permitir que o usuário coletor edite um ponto de coleta​​
|Objetivo do teste | Verficar se os usuários conseguem editar um ponto de coleta
|Passos | <ol><li>Entrar no navegador</li><li>Acessar o site</li><li>Fazer login</li><li>Abrir o menu</li><li>Clicar em "Meus Pontos de coleta"</li><li>Clicar na opção editar ponto de coleta</li><li>Preencher as informações</li><li>Salvar</li><li>Confirma que deseja salvar a edição</li></ol>
|Critérios de Êxito | <ul><li>Ponto deve ser editado no banco</li><li>Caso haja qualquer erro de preenchimento, o usuário deve ser comunicado</li><li>Deve haver uma confirmação sempre antes de salvar uma edição</li><li>Caso haja qualquer falha de requisição, o usuário deve ser avisado</li></ul>


|Caso de teste   | CT-005 - Usuários conseguem deletar ponto de coleta
|------|-----------------------------------------|
|Requisitos associados | RF-008 Permitir que o usuário coletor delete um ponto de coleta​​
|Objetivo do teste | Verficar se os usuários conseguem deletar um ponto de coleta
|Passos| <ol><li>Entrar no navegador</li><li>Acessar o site</li><li>Fazer login</li><li>Abrir o menu</li><li>Clicar em "Meus Pontos de coleta"</li><li>Clicar na opção deletar ponto de coleta</li><li>Preencher as informações</li><li>Salvar</li><li>Clicar em "Menu"</li><li>Clicar em "Meus Pontos de coleta"</li><li>Selecionar um ponto de coleta</li><li>Clicar no icone de deletar</li><li>Confirmar que deseja deletar</li></ol>
|Critérios de Êxito | <ul><li>Ponto deve ser deletado do banco</li><li>Caso haja qualquer erro de preenchimento, o usuário deve ser comunicado</li><li>Deve haver uma confirmação sempre antes de deletar um ponto</li><li>Caso haja qualquer falha de requisição, o usuário deve ser avisado</li></ul>




<br>

|Caso de teste   | CT-006 - Usuários conseguem cadastrar evento de distribuição
|------|-----------------------------------------|
|Requisitos associados | RF-010  Permitir que o usuário coletor cadastre um evento de distribuição  
|Objetivo do teste | Verificar se o usuário consegue cadastrar um evento. 
|Passos | <ol><li>Entrar no navegador</li><li>Acessar o site</li><li>Fazer login</li><li>Abrir o menu</li><li>Clicar em "Meus Eventos de Distribuição"</li><li>Clicar na opção criar novo evento</li><li>Preencher as informações</li><li>Confirmar que deseja salvar</li>
|Critérios de Êxito | <ul><li>Evento deve ser criado no banco</li><li>Caso não haja nenhum ponto de coleta cadastrado, o usuário deve ser avisado que deve configurar um antes de criar um evento</li><li>Caso haja qualquer erro de preenchimento, o usuário deve ser comunicado</li><li>Deve haver uma confirmação sempre antes de salvar um novo evento.</li><li>Caso haja qualquer falha de requisição, o usuário deve ser avisado</li></ul>

|Caso de teste   | CT-007 - Usuários conseguem editar evento de distribuição
|------|-----------------------------------------|
|Requisitos associados | RF-011  Permitir que o usuário coletor edite um evento de distribuição 
|Objetivo do teste | Verificar se o usuário consegue editar um evento. 
|Passos | <ol><li>Entrar no navegador</li><li>Acessar o site</li><li>Fazer login</li><li>Abrir o menu</li><li>Clicar em "Meus Eventos de Distribuição"</li>Selecionar um evento</li><li>Clicar no icone de edição</li><li>Editar campo desejado do evento</li><li>Salvar</li>
|Critérios de Êxito | <ul><li>Evento deve ser editado do banco</li><li>Caso não haja nenhum ponto de coleta ou evento cadastrado, o usuário deve ser avisado que deve configurar um antes de editar um evento</li><li>Caso haja qualquer erro de preenchimento, o usuário deve ser comunicado</li><li>Deve haver uma confirmação sempre antes de salvar uma edição no evento.</li><li>Caso haja qualquer falha de requisição, o usuário deve ser avisado</li></ul>

|Caso de teste   | CT-008 - Usuários conseguem deletar evento de distribuição
|------|-----------------------------------------|
|Requisitos associados | RF-012​​  Permitir que o usuário coletor delete um evento de distribuição ​ ​
|Objetivo do teste | Verificar se o usuário consegue deletar um evento. 
|Passos | <ol><li>Entrar no navegador</li><li>Acessar o site</li><li>Fazer login</li><li>Abrir o menu</li><li>Clicar em "Meus Eventos de Distribuição"</li><li>Selecionar evento</li><li>Clicar no ícone de deletar</li><li>Confirmar que deseja deletar</li></ol>
|Critérios de Êxito | <ul>li>Evento deve deletado do banco</li><li>Caso não haja nenhum ponto de coleta ou evento cadastrado, o usuário deve ser avisado que não existem eventos a serem deletados.</li><li>Deve haver uma confirmação sempre antes deletar um evento.</li><li>Caso haja qualquer falha de requisição, o usuário deve ser avisado</li></ul>

<br>

|Caso de teste   | CT-009 - Usuários conseguem fazer buscas 
|------|-----------------------------------------|
|Requisitos associados | RF-09 Permitir que o usuário procure por estabelecimentos próximos de sua localização​​ <br/> RF-013 Permitir que o usuário filtre os pontos de coleta pelo tipo de doação que deseja fazer
|Objetivo do teste |  Verificar se o filtro de busca aparece os estabelecimentos próximos a sua localização.
|Passos | <ol><li>Entrar no navegador</li><li>Acessar o site</li><li>Digitar o nome de um estabelecimento ou cidade no campo de buscas</li><li>Clicar no ícone de filtros</li><li>Selecionar tipos de itens desejados</li></ol>
|Critérios de Êxito | <ul><li>Caso a pesquisa retorne com pontos, o usuário deve conseguir visualizar os cards com os pontos</li><li>Ao selecionar um filtro, lista deve mostrar apenas cards que correspondam àquele filtro</li><li>Caso a busca não retorne resultados o usuário deve ser informado</li></ul>

<br>

|Caso de teste   | CT-010 - Usuários conseguem favoritar e interagir com pontos de coleta
|------|-----------------------------------------|
|Requisitos associados | RF-014​​ Permitir que o usuário envie mensagem para um ponto de coleta​​ <br /> RF-015​ Permitir que o usuário doador favorite pontos de coleta​
|Objetivo do teste | Verificar se os usuários conseguem enviar mensagem pelo WhatsApp no ponto de coleta desejado. 
|Passos | <ol><li> Entrar no navegador </li><li>  Acessar o site </li><li>  Clicar em um ponto de coleta </li><li>  Ver informações do usuário </li><li> Clicar em Contatar usuário</li><li>Voltar</li><li>Clicar no ícone de estrela</li><li>   Fazer login ou cadastro </li></ol>
|Critérios de Êxito | <ul><li> Informações exibidas devem ser as referentes à instituição selecionada na tela de busca</li> <li> Botão de contato mostra informações de contato da instituição </li> <li> Botão enviar mensagem me leva ao whatsapp </li> <li>Ao clicar na estrela, caso o usuário não esteja logado, ele será redirecionado para o processo de signup e login, ao finalizar, seu ponto estará favoritado em seu perfil</li></ul> 

<br> 
## Ferramentas de Testes
 
- Jest
- Cypress
- xUnit.net
- Vscode test Explorer
