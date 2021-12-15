# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

|Caso de teste   | CT-001 - Sistema deve permitir que usuários se cadastrem
|------|-----------------------------------------|
|Objetivo do teste | Verificar se o sistema permite que o usuário se cadastre
|Conclusão do teste | Sistema permitindo usuário se cadastrar. <br/>


<br>

|Caso de teste   | CT-002 - Sistema deve permitir que usuários vejam pontos de coleta no mapa
|------|-----------------------------------------|
|Objetivo do teste | Verificar se o sistema exibe pontos no mapa
|Conclusão do teste | Sistema exibe os pontos no mapa <br/>


<br>

<br>

|Caso de teste   | CT-003 - Sistema deve permitir que usuários cadastrem ponto de coleta
|------|-----------------------------------------|
|Objetivo do teste | Verficar se o sistema permite que o usuário cadastre pontos de coleta
|Conclusão do teste | Sistema permitindo usuário cadastrar pontos de coleta <br/>


<br>



|Caso de teste   | CT-004 - Sistema deve permitir que usuários editem ponto de coleta
|------|-----------------------------------------|
|Objetivo do teste | Verficar se o sistema permite que o usuário edite ponto de coleta
|Conclusão do teste | Sistema permitindo usuários editarem ponto de coleta. <br/>


<br>

|Caso de teste   | CT-005 - Sistema deve permitir que usuários deletem ponto de coleta
|------|-----------------------------------------|
|Objetivo do teste |Verficar se o sistema permite que o usuário delete ponto de coleta
|Conclusão do teste | Sistema permitindo usuários deletarem ponto de coleta.  <br/>


<br>

<br>

|Caso de teste   | CT-006 - Sistema deve permitir que usuários cadastrem evento de distribuição
|------|-----------------------------------------|
|Objetivo do teste | Verificar se o sistema permite que o usuário que possui um ponto de coleta cadastre evento de distribuição
|Conclusão do teste | Sistema permitindo o cadastro de eventos. <br/>


<br>

|Caso de teste   | CT-007 - Sistema deve permitir que usuários editem evento de distribuição
|------|-----------------------------------------|
|Objetivo do teste | Verificar se o sistema permite que o usuário edite evento de distribuição
|Conclusão do teste | Sistema permitindo a edição de eventos. <br/>




<br>

|Caso de teste   |CT-008 - Sistema deve permitir que usuários deletem evento de distribuição
|------|-----------------------------------------|
|Objetivo do teste | Verificar se o sistema permite que o usuário delete evento de distribuição
|Conclusão do teste | Sistema permitindo a exclusão de eventos. <br/>


<br>

<br>

|Caso de teste   | CT-009 - Sistema deve permitir que usuários realizem buscas
|------|-----------------------------------------|
|Objetivo do teste | Verificar se o sistema permite que o usuário realize buscas por pontos de coleta ou evento de distribuição, inclusive utilizando filtros
|Conclusão do teste | Buscas sendo realizadas no sistema. <br/>


<br>

<br>

|Caso de teste   |CT-010 - Sistema deve permitir que usuários favoritem pontos de coleta
|------|-----------------------------------------|
|Objetivo do teste |Verificar se o sistema permite ao usuário favoritar os pontos de coletas desejados.
|Conclusão do teste |  Sistema permitindo usuários favoritarem os pontos de coletas desejados. <br/>


<br>

|Caso de teste   | CT-011 - Sistema deve permitir que usuários contatem o ponto de coleta através do whatsapp
|------|-----------------------------------------|
|Objetivo do teste | Verificar se o sistema permite que o usuário envie mensagem para o ponto de coleta através do whatsapp
|Conclusão do teste | Sistema abre o whatsapp e permite o envio de mensagens


<br>

|Caso de teste   | CT-012 - Sistema deve permitir que usuários efetuem login
|------|-----------------------------------------|
|Objetivo do teste | Verificar se o sistema permite que usuário realize login
|Conclusão do teste |  Sistema permitindo usuários realizarem login. <br/>


<br>

|Caso de teste   | CT-013 - Sistema deve permitir que usuários efetuem logout
|------|-----------------------------------------|
|Objetivo do teste | Verificar se o sistema permite que usuário realize logout
|Conclusão do teste |  Sistema permitindo usuário realizarem logout. <br/>


<br>
<br> 

## Conclusão

Após realizarmos os testes concluímos que todos os requisitos foram entregues. Todos os testes puderam ser realizados e rodaram sem grandes problemas. Como os testes foram feitos usando ferramentas focadas em acessibilidade, podemos dizer que o site desempenha bem no quesito acessibilidade. A performance também foi um fator positivo. O site ficou leve e rodou bem em todos os aparelhos testados.

No entanto, verificamos que o uso do whatsapp como requisito dificulta a testagem completa devido a limitações do cypress ao lidar com uma nova aba aberta. Além disso, não conseguimos testar os elementos que foram renderizados dentro do mapa. Por fim, a maior dificuldade foi lidar com a latitude e longitude. Não conseguimos encontrar uma ferramenta gratuita que descobrisse as coordenadas apenas a partir do endereço. Por isso, o usuário precisa saber sua própria latitude e longitude ao criar um local de doação. 

Devido ao tempo limitado, muitas melhorias não puderam ser feitas. Com mais tempo, gostaríamos de corrigir mais bugs, colocar aviso de senha incorreta e informações sobre o formato da senha. Também gostaríamos de incluir um feedback sobre os resultados das ações como a alteração ou remoção de um ponto de coleta. 