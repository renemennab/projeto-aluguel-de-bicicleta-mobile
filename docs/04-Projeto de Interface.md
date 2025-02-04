# Projeto de Interface

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

A interface foi projetada utilizando o processo de design centrado no usuário e o conceito Mobile First a fim de oferecer a melhor experiência do usuário, usabilidade e acessibilidade.

## Diagrama de fluxo
<br><br>
<img src="img/diagramas/Diagrama de fluxo.svg" width="500">
<br><br>
O diagrama acima apresenta as diferentes açoões possíveis por tipo de usuário pela aplicação.

## Wireframes

Abaixo apresentamos o detalhamento e descrição dos wireframes mostrados no fluxo de usuário. O wireframe interativo pode ser encontrado no [figma](https://www.figma.com/proto/Am9uOV7d5cALEt0lydM26W/Onde-Doar-team-library?node-id=362%3A7376&scaling=min-zoom&page-id=362%3A5861&starting-point-node-id=362%3A7376).

### Componentes comuns a todas as telas

- Rodapé: onde estão dispostos os botões 'Lista' para listar pontos de coleta, 'Mapa' para visualizar
pontos de coleta no mapa e 'Menu' para acessar o menu da aplicação. <br> <br>

<p>
 <img src="img/wireframes/rodape.png" width="180" hspace="40">
 <img src="img/wireframes/menu.png" width="180" hspace="40">
</p>
<br>

### Tela - Home
Apresenta mapa com pontos de coleta próximos à localização do usuário.

Os componentes encontrados na tela são:
 - Mapa
 - Barra de pesquisa
 - Informações do ponto selecionado
 - Rodapé
<br> <br>

<p>
 <img src="img/wireframes/home-1.png" width="180" hspace="40">
 <img src="img/wireframes/home-2.png" width="180" hspace="40">
</p>

<br>

### Tela - Listar Pontos ou Eventos de Coleta
Apresenta lista de pontos ou eventos de coleta de acordo com a seleção no mapa ou pesquisa realizada.

Os componentes encontrados na tela são:
 - Campo que permite que o usuário busque por um ponto de coleta
 - Lista que permite selecionar um dos pontos ou eventos próximos
<br><br>

<p>
 <img src="img/wireframes/list.png" width="180" hspace="40">
</p>

<br>

### Tela - Visualizar Ponto ou Evento de Coleta
Apresenta informações do ponto ou evento de coleta selecionado

Os componentes encontrados na tela são:
 - Dados do ponto ou evento de coleta
 - Botões "Editar" e "Deletar"
<br><br>

<p>
 <img src="img/wireframes/visualizar.png" width="180" hspace="40">
</p>

<br>

### Tela - Editar Ponto de Coleta
Apresenta formulário para edição dos dados do ponto de coleta

Os componentes encontrados na tela são:
 - Formulário de edição
 - Botão "Salvar" que efetua a atualização dos dados do ponto de coleta na base de dados da aplicação e apresenta mensagem de sucesso
<br><br>

<p>
 <img src="img/wireframes/editar-form.png" width="180" hspace="40">
 <img src="img/wireframes/editar-sucesso.png" width="180" hspace="40">
</p>

<br>

### Tela - Deletar Ponto de Coleta
Apresenta modal de confirmação de exclusão

Os componentes encontrados na tela são:
 - Modal de confirmação de exclusão
 - No modal, Botão "Ok" que efetua a exclusão dos dados do ponto de coleta na base de dados da aplicação e apresenta mensagem de sucesso e
 'Cancelar' que cancela a ação
<br><br>

<p>
 <img src="img/wireframes/deletar-confirmacao.png" width="180" hspace="40">
 <img src="img/wireframes/deletar-sucesso.png" width="180" hspace="40">
</p>

<br>

### Tela - Cadastro Usuário
Apresenta o formulário de cadastro de usuário.

Os componentes encontrados na tela são:
 - Formulário de cadastro de usuário
 - Botão "Salvar" que efetua o cadastro do usuário na base de dados da aplicação, apresenta mensagem de sucesso e o direciona para a página Home

<br><br>

<p>
 <img src="img/wireframes/cadastro-usuario.png" width="180" hspace="40">
 <img src="img/wireframes/sucesso-usuario.png" width="180" hspace="40">
</p>

<br>

### Tela - Cadastro Ponto de Coleta
Apresenta o formulário de cadastro de ponto de coleta.

Os componentes encontrados na tela são:
 - Formulário de cadastro de ponto de coleta
 - Botão "Salvar" que efetua o cadastro do ponto de coleta na base de dados da aplicação e apresenta mensagem de sucesso

<br><br>

<p>
 <img src="img/wireframes/cadastro-ponto.png" width="180" hspace="40">
 <img src="img/wireframes/sucesso-ponto.png" width="180" hspace="40">
</p>

<br>

### Tela - Login
Apresenta o formulário para logar na aplicação

Os componentes encontrados na tela são:
 - Formulário de login
 - Botão "Login" que realiza a autenticação do usuário na base de dados da aplicação

<br><br>

<p>
 <img src="img/wireframes/login.png" width="180" hspace="40">
</p>