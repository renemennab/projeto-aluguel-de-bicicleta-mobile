# Plano de Testes de Software


<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
- Site publicado na Internet ou disponível para o servidor local do visual studio code
- Navegador da Internet - Chrome, safari e Firefox
- Conectividade de Internet para acesso às plataformas (APIs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

<br>

|Caso de teste   | CT-001 - Sistema deve permitir que usuários se cadastrem
|------|-----------------------------------------|
|Requisitos associados | RF-001​​  Permitir que o usuário crie cadastro como coletor​ <br/>RF-002  Permitir que o usuário crie cadastro como doador​ <br/>
|Objetivo do teste | Verificar se o sistema permite que o usuário se cadastre
|Passos | <ol><li>Entrar no navegador </li> <li>Acessar o site </li> <li> Clicar em "Menu" e "Cadastro" </li> <li> Inserir os dados, inclusive o tipo de usuário </li> <li> Realizar cadastro</li></ol>
|Critérios de Êxito | <ul><li>Aparecer mensagem de êxito ao criar o cadastro </li> <li>Dados devem ser salvos no banco de dados</li> <li> Senha deve ser cryptografada </li> <li> Deve ser gerado um identificador único para aquele usuário</li></ul>

<br>

|Caso de teste   | CT-002 - Sistema deve permitir que usuários vejam pontos de coleta no mapa 
|------|-----------------------------------------|
|Requisitos associados | RF-005​​  Permitir que o usuário visualize um ponto de coleta​​  
|Objetivo do teste |  Verificar se o sistema exibe pontos no mapa
|Passos | <ol><li> Entrar no navegador </li> <li> Acessar o site </li> <li>  Visualizar o mapa </li> <li> Clicar em um ponto de coleta </li> <li> Caso não haja nenhum na sua região, clicar em lista e ver os pontos mais próximos</li></ol>
|Critérios de Êxito | <ul><li> Mapa deve centralizar perto do usuário caso ele tenha dado permissão ao browser para compartilhar a localização </li> <li> Ao clicar em lista a visualização deve mudar </li> <li> Devem aparecer cards mostrando os pontos e sua distância </li></ul>

<br>

|Caso de teste   | CT-003 - Sistema deve permitir que usuários cadastrem ponto de coleta
|------|-----------------------------------------|
|Requisitos associados | RF-006​​ Permitir que o usuário coletor cadastre um ponto de coleta
|Objetivo do teste | Verficar se o sistema permite que o usuário cadastre pontos de coleta
|Passos | <ol><li>Entrar no navegador</li><li>Acessar o site</li><li>Fazer login</li><li>Abrir o menu</li><li>Clicar em "Meus Pontos de coleta"</li><li>Clicar na opção criar ponto de coleta</li><li>Preencher as informações</li><li>Salvar</li><li>Confirma que deseja salvar</li></ol>
|Critérios de Êxito | <ul><li>Caso haja qualquer erro de preenchimento, o usuário deve ser avisado</li><li>Caso haja qualquer falha de requisição, o usuário deve ser avisado</li><li>Ponto deve ser criado no banco</li></ul>



|Caso de teste   | CT-004 - Sistema deve permitir que usuários editem ponto de coleta
|------|-----------------------------------------|
|Requisitos associados | RF-007​​  Permitir que o usuário coletor edite um ponto de coleta​​
|Objetivo do teste | Verficar se o sistema permite que o usuário edite ponto de coleta
|Passos | <ol><li>Entrar no navegador</li><li>Acessar o site</li><li>Fazer login</li><li>Abrir o menu</li><li>Clicar em "Meus Pontos de coleta"</li><li>Clicar na opção editar ponto de coleta</li><li>Preencher as informações</li><li>Salvar</li><li>Confirma que deseja salvar a edição</li></ol>
|Critérios de Êxito | <ul><li>Caso haja qualquer erro de preenchimento, o usuário deve ser avisado</li><li>Deve haver uma confirmação sempre antes de salvar uma edição</li><li>Caso haja qualquer falha de requisição, o usuário deve ser avisado</li><li>Ponto deve ser editado no banco</li></ul>


|Caso de teste   | CT-005 - Sistema deve permitir que usuários deletem ponto de coleta
|------|-----------------------------------------|
|Requisitos associados | RF-008 Permitir que o usuário coletor delete um ponto de coleta​​
|Objetivo do teste | Verficar se o sistema permite que o usuário delete ponto de coleta
|Passos| <ol><li>Entrar no navegador</li><li>Acessar o site</li><li>Fazer login</li><li>Abrir o menu</li><li>Clicar em "Meus Pontos de coleta"</li><li>Selecionar um ponto de coleta</li><li>Clicar no ícone de deletar</li><li>Confirmar que deseja deletar</li></ol>
|Critérios de Êxito | <ul><li>Deve haver uma confirmação sempre antes de deletar um ponto</li><li>Caso haja qualquer falha de requisição, o usuário deve ser avisado</li><li>Ponto deve ser deletado do banco</li></ul>

<br>

|Caso de teste   | CT-006 - Sistema deve permitir que usuários cadastrem evento de distribuição
|------|-----------------------------------------|
|Requisitos associados | RF-010  Permitir que o usuário coletor cadastre um evento de distribuição  
|Objetivo do teste | Verificar se o sistema permite que o usuário que possui um ponto de coleta cadastre evento de distribuição
|Passos | <ol><li>Entrar no navegador</li><li>Acessar o site</li><li>Fazer login</li><li>Abrir o menu</li><li>Clicar em "Meus Eventos de Distribuição"</li><li>Clicar na opção criar novo evento</li><li>Preencher as informações</li>
|Critérios de Êxito | <ul><li>Caso não haja nenhum ponto de coleta cadastrado, o usuário deve ser avisado que deve configurar um antes de criar um evento</li><li>Caso haja qualquer erro de preenchimento, o usuário deve ser comunicado</li><li>Caso haja qualquer falha de requisição, o usuário deve ser avisado</li><li>Evento deve ser criado no banco</li></ul>

|Caso de teste   | CT-007 - Sistema deve permitir que usuários editem evento de distribuição
|------|-----------------------------------------|
|Requisitos associados | RF-011  Permitir que o usuário coletor edite um evento de distribuição 
|Objetivo do teste | Verificar se o sistema permite que o usuário edite evento de distribuição
|Passos | <ol><li>Entrar no navegador</li><li>Acessar o site</li><li>Fazer login</li><li>Abrir o menu</li><li>Clicar em "Meus Eventos de Distribuição"</li><li>Selecionar um evento</li><li>Clicar no ícone de edição</li><li>Editar campo desejado do evento</li><li>Salvar</li>
|Critérios de Êxito | <ul><li>Caso haja qualquer erro de preenchimento, o usuário deve ser comunicado</li><li>Deve haver uma confirmação sempre antes de salvar uma edição no evento.</li><li>Caso haja qualquer falha de requisição, o usuário deve ser avisado</li><li>Evento deve ser editado no banco</li></ul>

|Caso de teste   | CT-008 - Sistema deve permitir que usuários deletem evento de distribuição
|------|-----------------------------------------|
|Requisitos associados | RF-012​​  Permitir que o usuário coletor delete um evento de distribuição ​ ​
|Objetivo do teste | Verificar se o sistema permite que o usuário delete evento de distribuição
|Passos | <ol><li>Entrar no navegador</li><li>Acessar o site</li><li>Fazer login</li><li>Abrir o menu</li><li>Clicar em "Meus Eventos de Distribuição"</li><li>Selecionar evento</li><li>Clicar no ícone de deletar</li><li>Confirmar que deseja deletar</li></ol>
|Critérios de Êxito | <ul><li>Deve haver uma confirmação sempre antes deletar um evento.</li><li>Caso haja qualquer falha de requisição, o usuário deve ser avisado</li><li>Evento deve deletado do banco</li></ul>

<br>

|Caso de teste   | CT-009 - Sistema deve permitir que usuários realizem buscas 
|------|-----------------------------------------|
|Requisitos associados | RF-09 Permitir que o usuário procure por estabelecimentos próximos de sua localização​​ <br/> RF-013 Permitir que o usuário filtre os pontos de coleta pelo tipo de doação que deseja fazer
|Objetivo do teste |  Verificar se o sistema permite que o usuário realize buscas por pontos de coleta ou evento de distribuição, inclusive utilizando filtros
|Passos | <ol><li>Entrar no navegador</li><li>Acessar o site</li><li>Digitar o nome de um estabelecimento ou cidade no campo de buscas</li><li>Clicar no ícone de filtros</li><li>Selecionar tipos de itens desejados</li></ol>
|Critérios de Êxito | <ul><li>Caso a pesquisa retorne com pontos, o usuário deve conseguir visualizar os cards com os pontos</li><li>Ao selecionar um filtro, lista deve mostrar apenas cards que correspondam àquele filtro</li><li>Caso a busca não retorne resultados o usuário deve ser informado</li></ul>

<br>

|Caso de teste   | CT-010 - Sistema deve permitir que usuários favoritem pontos de coleta
|------|-----------------------------------------|
|Requisitos associados |  RF-015​ Permitir que o usuário doador favorite pontos de coleta​
|Objetivo do teste | Verificar se o sistema permite ao usuário favoritar os pontos de coletas desejados.
|Passos | <ol><li> Entrar no navegador </li><li>  Acessar o site </li><li>Fazer login</li><li> Clicar em um ponto de coleta </li><li> Ver informações do ponto de coleta </li><li>Clicar no ícone de estrela</li></ol>
|Critérios de Êxito | <ul><li>Ao clicar na estrela, caso o usuário não esteja logado, ele será redirecionado para o processo de cadastro e login, ao finalizar, seu ponto estará favoritado em seu perfil</li></ul> 

|Caso de teste   | CT-011 - Sistema deve permitir que usuários contatem o ponto de coleta através do whatsapp
|------|-----------------------------------------|
|Requisitos associados | RF-014​​ Permitir que o usuário envie mensagem para um ponto de coleta​​ 
|Objetivo do teste | Verificar se o sistema permite que o usuário envie mensagem para o ponto de coleta através do whatsapp 
|Passos | <ol><li> Entrar no navegador </li><li>  Acessar o site </li><li>  Clicar em um ponto de coleta </li><li>  Ver informações do ponto</li><li> Clicar em Contatar Pelo Whatsapp</li><li>Usuário direcionado ao WhatsApp do ponto de coleta com mensagem padrão editável pronta para ser enviada.</li></ol>
|Critérios de Êxito | <ul><li> Informações exibidas devem ser as referentes à instituição selecionada na tela de busca</li> <li> Botão de contato mostra informações de contato da instituição </li> <li> Botão enviar mensagem leva ao whatsapp </li></ul>

|Caso de teste   | CT-012 - Sistema deve permitir que usuários efetuem login
|------|-----------------------------------------|
|Requisitos associados | RF-003​  Permitir que o usuário efetue login
|Objetivo do teste | Verificar se o sistema permite que usuário realize login
|Passos | <ol><li> Entrar no navegador </li><li>  Acessar o site </li><li> Clicar Login </li><li>  Digitar dados para login </li><li> Clicar em entrar</li></ol>
|Critérios de Êxito | <ul><li>Aparecer mensagem de êxito ao realizar login.</li> <li> Caso o login não seja realizado, usuário deverá ser informado</li> <li>Site deve conseguir acessar o banco de dados para permitir o login</li></ul>

|Caso de teste   | CT-013 - Sistema deve permitir que usuários efetuem logout
|------|-----------------------------------------|
|Requisitos associados | RF-004​​  Permitir que o usuário efetue logout​
|Objetivo do teste | Verificar se o sistema permite que usuário realize logout
|Passos | <ol><li>  Acessar o site </li><li>  Clicar em menu </li><li>  Selecionar logout </li><li> Selecionar que confirma realizar logout</li></ol>
|Critérios de Êxito | <ul><li>Voltar a página Home.</li> <li> Caso o logout não seja realizado, usuário deverá ser informado</li></ul>

<br> 
## Ferramentas de Testes
 
- Jest
- Cypress
- xUnit.net
- Vscode test Explorer
