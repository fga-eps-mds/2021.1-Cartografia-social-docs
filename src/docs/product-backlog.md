# Backlog do produto
Este Backlog consiste em uma lista que descreve todas as funcionalidades desejadas para o Twitter. Com a finalidade de obtermos uma melhor especificação dessas funcionalidades, este Backlog apresenta a os seguintes itens de granularidade:

- **Épico** que pode englobar várias Histórias de usuário;
- **ID** da História de usuário (ou US - User history);
- Descrição da História de usuário com as colunas:
    - **Eu como**...;
    - **Desejo**...;
    - **Para que eu possa**...;
<!-- - **Tarefas** para o desenvolvimento de cada funcionalidade; -->
- **Critérios de aceitação** para a validação de cada História de usuário.

## Tabela de épicos

| Épico | Descrição | Requisitos | US's relacionadas |
|--|--|--|--|
| Uso da aplicação offline |Engloba as funcionalidades relativas ao uso offline (sem internet) do aplicativo | <SimpleList data="Sincronizar informações obtidas offline com a API ;pré download do mapa ;Salvar informações de forma offline ;Exportar dados da cartografia social (na API)" /> | <SimpleLink data="US04, US08, US24"/> |
| Permissionamento e controle de acesso | Engloba as funcionalidades relacionadas ao controle de dados e permissionamento de acesso quanto às funcionalidades | <SimpleList data="Dividir o controle dos dados entre membros da comunidade;Realizar controle de acesso aos dados de acordo com perfil de usuário;Controle de membros pela comunidade;Comunidade controlar acesso aos dados (ex.: pesquisadores);Verificar histórico de acesso/permissão;Excluir dados;Ver quem demarcou o local" /> |  <SimpleLink data="US03, US05, US28, US29, US30, US32, US13, US18, US19, US20"/> |
| Cadastro e perfis/comunidades | Engloba as funcionalidades relacionadas à login, cadastro, perfis e comunidades | <SimpleList data="Crud de login (entrar, cadastrar, resetar senha, sair);Perfil para pesquisador e para comunidade;Solicitar apoio da equipe da cartografia social;Adicionar membros a comunidade;Editar dados da comunidade;Questionário para criação de uma nova comunidade;Questionário para cadastro de pessoas da comunidade" /> |  <SimpleLink data="US22,US13, US14, US15, US16, US17,US35,US36,US37"/> |
| Delimitação de dados no mapa | Engloba as funcionalidades relacionadas à marcação de pontos, áreas e outros dados relativos aos mapas | <SimpleList data="Marcar um ponto no mapa;Delimitar uma área no mapa;Ver o mapa;Categorizar um ponto no mapa;Personalizar iconografia de locais do mapa;Adicionar informações sobre o local" /> | <SimpleLink data="US01,US02, US07, US11,US23.US25"/>|
| Multimídia | Engloba as funcionalidades relacionadas aos dados de multimídia (fotos, audios, vídeos, arquivos e outros )| <SimpleList data="Adicionar elemento multimídia à marcação;Upload de documentos (áudio foto, vídeo, texto) já existentes;Personalizar iconografia de locais do mapa;Tirar foto e gravar vídeo;Gravar áudio;Permitir download dos dados;Compartilhar conteúdo de mídia com meios externos (telegram, wpp)" /> | <SimpleLink data="US21,US26,US27,US12,US31,US33,US38"/>  |
| Rascunho de dados | Engloba as funcionalidades relacionadas à manter os dados como rascunho ou versão final | <SimpleList data="Permitir marcar dos dados como uma 'versão analisada' (ou validada);Permitir o 'rascunho' dos dados" />| <SimpleLink data="US06, US09"/> |
| Tutorial e navegação experimental | Engloba as funcionalidades relacionadas ao ensino de utilização do aplicativo e navegação experimental (sem cadastro) | <SimpleList data="Modo de demonstração (utilizar sem cadastro);Tutorial de como realizar a marcação no mapa" /> | <SimpleLink data="US34, US10"/> |

<!-- ## Tabela do backlog

|Épico | ID |	Eu como |	Desejo |	Para que eu possa |	Critérios de aceitação |	Rastro |
|------|----|---------|--------|--------------------|----------------------------------|---------|
|Cadastro | <a href="#US01">**[US01]**</a> | Visitante |	Realizar cadastro | 	Me tornar um usuário do Twitter. | <a href="#US01">**Link para a [US01]**</a> | <a href="../use_cases_specifications/user_case_geral/#UC02">**UC02;**</a> <a href="../use_cases_specifications/login/">**Caso de uso - Login;**</a> <a href="../../elicitacao/requisitos/#R030">**R030;**</a> |
|Central de ajuda| <a href="#US02">**[US02]**</a> | Usuário |	Acessar a central de ajuda | 	Sanar dúvidas sobre o funcionamento e a utilização do Twitter. | <a href="#US02">**Link para a [US02]**</a> | <a href="../use_cases_specifications/user_case_geral/#UC20">**UC20;**</a> <a href="../../elicitacao/storytelling/#storytelling01">**Storytelling 01;**</a> |
| Gerenciar perfil | <a href="#US03">**[US03]**</a> | Usuário | poder trocar minha foto de perfil | passar uma imagem sobre mim da maneira que eu preferir | <a href="#US03">**Link para a [US03]**</a> | <a href="../../elicitacao/requisitos/#R030">**R002**</a> |
| Gerenciar perfil | <a href="#US04">**[US04]**</a> | Usuário | poder escolher outro nome de usuário (@) | para que eu tenha uma identificação única no Twitter | <a href="#US04">**Link para a [US04]**</a> | <a href="../../elicitacao/requisitos/#R031">**R031**</a> |
| Gerenciar perfil | <a href="#US05">**[US05]**</a> | Usuário | ter uma descrição de perfil e que esta seja editável | para que eu possa dizer aos outros usuários o que eu desejo que saibam sobre mim em poucas palavras | <a href="#US05">**Link para a [US05]**</a> | <a href="../../elicitacao/requisitos/#R002">**R002**</a> |
| Gerenciar perfil | <a href="#US06">**[US06]**</a> | Usuário | ter controle sobre quais usuários podem visualizar minhas informações (dados do perfil, tweets etc) | me sentir seguro em relação à confidencialidade dos meus dados | <a href="#US06">**Link para a [US06]**</a> | <a href="../../elicitacao/requisitos/#R020">**R020**</a> ; <a href="../../elicitacao/requisitos/#R005">**R005**</a> |
| Pesquisa | <a href="#US07">**[US07]**</a> | Usuário | buscar qualquer termo na barra de pesquisa | encontrar qualquer assunto ou tópico do meu interesse | <a href="#US07">**Link para a [US07]**</a> | <a href="../../elicitacao/requisitos/#R025">**R025**</a> ; <a href="../use_cases_specifications/user_case_geral/#UC10">**UC10;**</a>
| Pesquisa | <a href="#US08">**[US08]**</a> | Usuário | buscar uma hashtag na barra de pesquisa | me atualizar a respeito dos tópicos mais em alta | <a href="#US08">**Link para a [US08]**</a> | <a href="../../elicitacao/requisitos/#R025">**R025**</a> ; <a href="../use_cases_specifications/user_case_geral/#UC11">**UC11;**</a>
| Pesquisa | <a href="#US09">**[US09]**</a> | Usuário | conferir tópicos sugeridos baseados no meu interesse na barra de pesquisa | ter mais celeridade em buscas | <a href="#US09">**Link para a [US09]**</a> | <a href="../../elicitacao/requisitos/#R025">**R025**</a> ; <a href="../use_cases_specifications/user_case_geral/#UC12">**UC12;**</a>
| Notificações | <a href="#US10">**[US10]**</a> | Usuário | Receber notificações de interações| Interagir com as pessoas| <a href="#US10">**Link para a [US10]**</a> | <a href="../../elicitacao/requisitos/#R010">**R010**</a> ; <a href="../use_cases_specifications/user_case_geral/#UC14">**UC14;**</a>
| Notificações | <a href="#US11">**[US11]**</a> | Usuário | Receber notificações de sugestão de conteúdo |  Ficar por dentro dos assuntos do twitter | <a href="#US11">**Link para a [US11]**</a> | <a href="../../elicitacao/requisitos/#R011">**R011**</a> ; <a href="../use_cases_specifications/user_case_geral/#UC14">**UC14;**</a>
| Notificações | <a href="#US12">**[US12]**</a> | Usuário | Receber notificações de mensagens | Responder as mesagens | <a href="#US12">**Link para a [US12]**</a> | <a href="../../elicitacao/requisitos/#R029">**R029**</a> ; <a href="../use_cases_specifications/user_case_geral/#UC14">**UC14;**</a>|
|Tweet|<a href="#US13">**[US13]**</a>|Usuário|ser capaz de twittar posts através de caracteres e/ou outros tipos mídias|expressar/opinar|<a href="#US13">**Link para a [US13]**</a>|<a href="../../elicitacao/requisitos/#R032">**R032**</a> ; <a href="../use_cases_specifications/user_case_geral/#UC18">**UC18;**</a>|
|Tweet|<a href="#US14">**[US14]**</a>|Usuário|reportar/denunciar tweets que detenham conteúdos que ferem as diretrizes do Twitter|retirar conteúdos que afetam negativamentos outros usuários|<a href="#US14">**Link para a [US14]**</a>|<a href="../../elicitacao/requisitos/#R033">**R033**</a> ; <a href="../use_cases_specifications/user_case_geral/#UC13">**UC13;**</a>|
|Tweet|<a href="#US15">**[US15]**</a>|Usuário|Compartilhar tweets de outros usuários|divulgar/dividir com outras pessoas o conteúdo em questão|<a href="#US15">**Link para a [US15]**</a>|<a href="../../elicitacao/requisitos/#R023">**R023**</a> ; <a href="../use_cases_specifications/user_case_geral/#UC06">**UC06;**</a>||
|Interagir Com Outro usuário|<a href="#US16">**[US16]**</a>|Usuário|Enviar mensagens diretas|comunicar no privado através de mensagens|<a href="#US16">**Link para a [US16]**</a>|<a href="../../elicitacao/requisitos/#R06">**R006**</a> ; <a href="../../elicitacao/requisitos/#R29">**R029**</a>||
|Interagir Com Outro usuário|<a href="#US17">**[US17]**</a>|Usuário|Mencionar outros usuários|comunicar-se publicamente através de menções em tweets|<a href="#US17">**Link para a [US17]**</a>|<a href="../../elicitacao/requisitos/#R06">**R006**</a>||
|Interagir Com Outro usuário|<a href="#US18">**[US18]**</a>|Usuário|curtir ou comentar o tweet de outro usuário|comunicar através de símbolos da plataforma|<a href="#US18">**Link para a [US18]**</a>|<a href="../../elicitacao/requisitos/#R06">**R006**</a> ; <a href="../../elicitacao/requisitos/#R08">**R008**</a>|| -->

## Lista das Histórias de usuário
---

<span id="US01"></span>
### <a href="#US01">**[US01]**</a> Marcar ponto no mapa

__Epico:__ Delimitação de dados no mapa	

__Prioridade__: 

**Eu como:** Usuário

**Desejo:** Que seja possível marcar no mapa da aplicação locais que sejam áreas de risco para a comunidade conforme eu me locomovo pelo terreno da minha comunidade.

**Para que eu possa:** Persistir os dados online.

**Critérios de aceitação:**
- Todos os membros participantes de uma comunidade devem poder marcar pontos no mapa
- Deve permitir a marcação de forma offline
</br>

<span id="US02"></span>
### <a href="#US02">**[US02]**</a> Adicionar elemento multimídia à marcação

__Epico:__ Delimitação de dados no mapa

__Prioridade__: 

**Eu como:** Usuário

**Desejo:** Que seja possível adicionar informações multimídia conforme eu marco os pontos no mapa, essas informações são áudios, fotos e até mesmo descrições sobre o local demarcado

**Para que eu possa:** Descrever as características de um determinado lugar.

**Critérios de aceitação:**
- A pessoa responsável pela demarcação de um ponto deve poder adicionar textos, áudios ou fotos sobre um determinado lugar que ela deseja marcar.
- Deve permitir adicionar elementos multimídia à um ponto/área de forma offline
</br>

<span id="US03"></span>
### <a href="#US03">**[US03]**</a> Dividir o controle dos dados entre membros da comunidade

__Épico:__ Permissionamento e controle de acesso	

__Prioridade__: 

**Eu como:** Usuário

**Desejo:** Que as alguns usuários tenham permissão para adicionar novas pessoas na comunidade, tirar pessoas da comunidade, deletar dados.

**Para que eu possa:** Permitir que mais de um membro da comunidade possa adicionar novas pessoas a comunidade.

**Critérios de aceitação:**
-  Apenas pessoas com uma rule especial podem admitir novos membros na comunidade.
- Não se pode permitir que qualquer usuário delete dados relacionados a uma determinada comunidade.
- Ter um pedido que seja avaliado para quem pode se tornar um usuário.
</br>

<span id="US04"></span>
### <a href="#US04">**[US04]**</a> Sincronizar informações obtidas offline com a API

__Épico:__ Uso da aplicação offline	

__Prioridade__: 

**Eu como:** Usuário

**Desejo:** Que as as informações e dados multimídia que eu produzir offline sejam enviadas para o servidor remoto quando eu tiver acesso à internet.

**Para que eu possa:** Salvar informações armazenadas no dispositivo no servidor remoto

**Critérios de aceitação:**

- A sincronização só deve ocorrer quando houver internet.
- Deve ser feito um diff, verificando se os dados já estão presentes no servidor remoto.
- (Os arquivos devem ser mantidos ou removidos após a sincronização?)

</br>

<span id="US05"></span>
### <a href="#US05">**[US05]**</a> Realizar controle de acesso aos dados de acordo com perfil de usuário

__Épico:__ Permissionamento e controle de acesso

__Prioridade__: 

**Eu como:** Membro de uma comunidade tradicional (usuário)

**Desejo:** Conceder ou revogar acesso aos dados da minha própria comunidade

**Para que eu possa:** controlar quem possui acesso aos dados da minha comunidade

**Critérios de aceitação:**

- Deve permitir que um membro administrador da comunidade possa revogar ou conceder os acessos.
- Um membro da comunidade que não for administrador não poderá controlar o acesso aos dados.

</br>

<span id="US06"></span>
### <a href="#US06">**[US06]**</a> Permitir que o pesquisador facilitador juntamente com a comunidade possam controlar o modo dos dados (rascunho ou versão final)

__Épico:__ Rascunho de dados

__Prioridade__: 

**Eu como:** Membro de uma comunidade tradicional & pesquisador facilitador (Usuários)

**Desejo:** Alterar o status dos dados

**Para que eu possa:** Dizer se um dado é um rascunho ou versão final

**Critérios de aceitação:**

- Deve exigir que o pesquisador facilitador e um membro administrador da comunidade.
</br>

<span id="US07"></span>
### <a href="#US07">**[US07]**</a> Permitir que seja demarcada uma área no mapa pelos membros da comunidade

__Épico:__ Delimitação de dados no mapa	

__Prioridade__: 

**Eu como:** Membro de uma comunidade tradicional (Usuário)

**Desejo:** Marcar uma área no mapa

**Para que eu possa:** Expressar e marcar minha cartografia social

**Critérios de aceitação:**

- Deve permitir marcar uma área a partir de vários pontos ou formas pré-definidas.
- Deve permitir inserir, no mínimo, descrição, tipo e nome.
- O status inicial deve ser, obrigatoriamente, “rascunho”, somente podendo ser alterado por um membro administrador da comunidade.
- Deve permitir que uma área seja marcada de forma offline
</br>

<span id="US08"></span>
### <a href="#US08">**[US08]**</a> Fazer o pré-download dos dados do mapa em determinada região

__Épico:__ Uso da aplicação offline

__Prioridade__: 

**Eu como:** Usuário

**Desejo:** Poder realizar o download dos mapas

**Para que eu possa:**  Vê-los de forma offline

**Critérios de aceitação:**

- Deve exigir acesso à internet no primeiro acesso para que os dados possam ser baixados.
- Deve permitir o usuário escolher qual área terá seus dados baixados, respeitando um raio de N km.
- Os arquivos baixados devem ser armazenados no dispositivo do usuário.

</br>

<span id="US09"></span>
### <a href="#US09">**[US09]**</a> Labels para as informações no app

__Épico:__ Rascunho de dados

__Prioridade__: 

**Eu como:** Usuário

**Desejo:** Marcar informações de um ponto/área como rascunho ou como validada

**Para que eu possa:** Fazer a diferenciação das informações válidas e das que são rascunho

**Critérios de aceitação:**

- Poder marcar informações no app como "rascunho"
- Poder marcar informações no app como "validado"
- Poder editar as informações marcadas como "rascunho" ou "validado"
- As informações adicionadas precisam ter uma dessas labels, ou "rascunho" ou "validado", não podendo estar sem essa marcação

</br>

<span id="US10"></span>
### <a href="#US10">**[US10]**</a> Modo de demonstração

__Épico:__ Tutorial e navegação experimental

__Prioridade__: 

**Eu como:** Pesquisador e membro da comunidade.

**Desejo:** Utilizar o app sem a necessidade de fazer login.

**Para que eu possa:** Ver como é o funcionamento do app sem precisar adicionar nenhuma informação minha ao aplicativo.

**Critérios de aceitação:**
- Conseguir marcar um ponto sem estar logado
- Conseguir marcar uma área sem estar logado
- Conseguir adicionar informações à um ponto/área sem estar logado
- Conseguir adicionar elementos multimídia à um ponto/área sem estar logado
- Conseguir excluir dados locais sem estar logado

</br>

<span id="US11"></span>
### <a href="#US11">**[US11]**</a> Visualizar o mapa

__Épico:__ Delimitação de dados no mapa

__Prioridade__: 

**Eu como:** Usuário.

**Desejo:** Visualizar o mapa do meu local.

**Para que eu possa:** Possa ver o mapa do local que me encontro, possíveis áreas ou pontos demarcados pela minha comunidade, ou executar outras funcionalidades do aplicativo.(marcar ponto, área, adc info etc..)

**Critérios de aceitação:**
- Exibir mapa integrado à localização do usuário.
- Mostrar marcações no mapa feitas pelo usuário
- Mostrar marcações no mapa feitas pela comunidade que o usuário está

</br>

<span id="US12"></span>
### <a href="#US12">**[US12]**</a> Adicionar informações sobre o local

__Épico:__ Delimitação de dados no mapa	

__Prioridade__: 

**Eu como:** Usuário.

**Desejo:** Adicionar informações sobre o meu local.

**Para que eu possa:** Possa contar a história daquele local, descrever o que aquele local representa para minha comunidade ou colocar outras informações relevantes como área do local, etc.

**Critérios de aceitação:**
- Campo de texto(ou form) para preencher com informações
- Integrar esse texto a um ponto ou área
- Disponível apenas para a comunidade (?)
- Deve permitir a inserção de informações de forma offline

</br>

<span id="US13"></span>
### <a href="#US13">**[US13]**</a> Autenticação e registro de usuário

__Épico:__ Cadastro e perfis/comunidades	

__Prioridade__: 

**Eu como:** Usuário.

**Desejo:** Entrar, cadastrar, resetar senha ou sair do aplicativo.

**Para que eu possa:** Possa acessar as funcionalidades da aplicação ou encerrar minha sessão.

**Critérios de aceitação:**
- Form de login com nome e senha
- Botão resetar senha
- Tela de reset com o campo de email
- Enviar email para resetar senha
<!-- - Tela de cadastro com campos (nome, email, senha, confirmar senha, cpf, membro comunidade ou pesquisador ...) -->
- Botão sair (encerrar sessão)
- Usuário deve ser registrado no banco de dados
- Deve-se checar se nome e senha estão corretos no login

</br>

<span id="US14"></span>
### <a href="#US14">**[US14]**</a> Perfil para pesquisador e para comunidade

__Épico:__ Cadastro e perfis/comunidades

__Prioridade__: 

**Eu como:** Usuário.

**Desejo:** Ter um perfil.

**Para que eu possa:** Coletar e inserir dados e fazer uso da aplicação.

**Critérios de aceitação:**
- Tela de login deve apresentar botão para cadastro
- Usuário deve realizar cadastro no aplicativo
- Api deve armazenar usuário no banco


</br>

<span id="US15"></span>
### <a href="#US15">**[US15]**</a> Perfil para a comunidade

__Épico:__ Cadastro e perfis/comunidades

__Prioridade__: 

**Eu como:** Membro da comunidade.

**Desejo:** Criar um perfil para a comunidade.

**Para que eu possa:** Pertencer a uma comunidade e inserir dados nessa comunidade.

**Critérios de aceitação:**
- Usuário deve estar cadastrado como membro de comunidade
- Tela de perfil deve apresentar botão de cadastrar comunidade
- Inserir dados primários sobre a comunidade
- Cadastrar comunidade

</br>

<span id="US16"></span>
### <a href="#US16">**[US16]**</a> Editar perfil de usuário

__Épico:__ Cadastro e perfis/comunidades

__Prioridade__: 

**Eu como:** Usuário.

**Desejo:** Editar meu perfil.

**Para que eu possa:** Adicionar, remover, editar meus dados.

**Critérios de aceitação:**
- Botão de editar dados no perfil
- Tela para edição de dados
- Usar API para fazer atualizações no banco
- Botão para salvar alterações

</br>

<span id="US17"></span>
### <a href="#US17">**[US17]**</a> Fazer edição no perfil da comunidade

__Épico:__ Cadastro e perfis/comunidades

__Prioridade__: 

**Eu como:** Usuário administrador.

**Desejo:** Editar o perfil da comunidade.

**Para que eu possa:** Adicionar, remover, editar dados da comunidade.

**Critérios de aceitação:**
- Usuário deve estar cadastrado como membro de comunidade
- Usuário deve ser o admin da comunidade
- Botão de editar dados no perfil da comunidade
- Usar API para fazer atualizações no banco
- Botão para salvar alterações

</br>

<span id="US18"></span>
### <a href="#US18">**[US18]**</a> Controle de membros pela comunidade

__Épico:__ Cadastro e perfis/comunidades

__Prioridade__: 

**Eu como:** Usuário administrador.

**Desejo:** Controlar quem tem acesso a comunidade.

**Para que eu possa:** Adicionar e remover pessoas na comunidade.

**Critérios de aceitação:**
- Botão de adicionar e remover pessoas no perfil da comunidade
- Botão para permitir ou negar solicitação de participação
- Administrador seleciona permissão dos dados
- Administrador adiciona permissão ao usuário que está na comunidade


</br>

<span id="US19"></span>
### <a href="#US19">**[US19]**</a> Definição de membros administradores das comunidades

__Épico:__ Permissionamento e controle de acesso

__Prioridade__: 

**Eu como:** Usuário administrador.

**Desejo:** Controlar permissões de usuário na comunidade.

**Para que eu possa:** Adicionar e remover permissões de administrador para outros usuários.

**Critérios de aceitação:**
- Ser possível alterar permissões de usuários
- Alterações de permissões devem gerar logs

</br>

<span id="US20"></span>
### <a href="#US20">**[US20]**</a> Visualizar dados da comunidade

__Épico:__ Cadastro e perfis/comunidades

__Prioridade__: 

**Eu como:** Usuário.

**Desejo:** Pertencer a uma comunidade.

**Para que eu possa:** Visualizar os dados da comunidade.

**Critérios de aceitação:**
- Visualizar comunidades
- Enviar solicitação de participação

</br>

<span id="US21"></span>
### <a href="#US21">**[US21]**</a> Upload de documentos já existentes

__Épico:__ Multimídia

__Prioridade__: 

**Eu como:** Membro da comunidade.

**Desejo:** Fazer upload de arquivos.

**Para que eu possa:** Adicionar dados sobre a comunidade.

**Critérios de aceitação:**
- Poder escolher arquivos existentes no dispositivo
- Poder selecionar um ou mais arquivos
- Excluir, pré visualizar e adicionar arquivo
- Deve permitir a inserção de forma offline

</br>

<span id="US22"></span>
### <a href="#US22">**[US22]**</a> Solicitar apoio da equipe da cartografia social

__Épico:__ Cadastro e perfis/comunidades	

__Prioridade__: 

**Eu como:** Membro da comunidade.

**Desejo:** Solicitar apoio de pesquisadores.

**Para que eu possa:** Conseguir uma “validação” do rascunho que fiz.

**Critérios de aceitação:**
- Deverá ter um formulário a ser preenchido pelo membro.
- O formulário deverá chegar ao pesquisador via E-mail ou Whatsapp.

</br>

<span id="US23"></span>
### <a href="#US23">**[US23]**</a> Permitir a personalização da iconografia de locais do mapa.

__Épico:__ Delimitação de dados no mapa	

__Prioridade__: 

**Eu como:** Membro administrador da comunidade.

**Desejo:** Personalizar a iconografia dos locais.

**Para que eu possa:** Definir um ícone que irá representar um certo local ou área no mapa.

**Critérios de aceitação:**
- Definir um ícone para uma certa categoria
- Visualizar e alterar ícones já criados
- Enviar imagem e definir como ícone


</br>

<span id="US24"></span>
### <a href="#US24">**[US24]**</a> Permitir exportar os dados da cartografia social

__Épico:__ Uso da aplicação offline	

__Prioridade__: 

**Eu como:** Colaborador.

**Desejo:** Exportar dados preenchidos por um povo ou comunidade tradicional.

**Para que eu possa:** Analisar os dados preenchidos pela comunidade, fazer a validação e  enviar de volta para a comunidade além de utilizá-los para auxiliar na criação do fascículo.

**Critérios de aceitação:**
- Os dados devem ser exportados no formato json e também no formato compatível com Arcgis (kml).
- A exportação deve ser feita na api

</br>

<span id="US25"></span>
### <a href="#US25">**[US25]**</a> Permitir categorizar um ponto no mapa

__Épico:__ Delimitação de dados no mapa	

__Prioridade__: 

**Eu como:** Usuário.

**Desejo:** Poder adicionar categorias a um ponto no mapa.

**Para que eu possa:** Filtrar, pesquisar, organizar e visualizar os pontos separados em cada categoria.

**Critérios de aceitação:**
- criar categoria
- visualizar categorias
- apagar categorias
- visualizar, adicionar e remover ponto de uma categoria
- editar categoria
- deve permitir categorizar de forma offline

</br>

<span id="US26"></span>
### <a href="#US26">**[US26]**</a> Permitir tirar fotos pelo aplicativo

__Épico:__ Multimídia

__Prioridade__: 

**Eu como:** Membro da comunidade.

**Desejo:** Registrar fotos com dados etnográficos de interesse da minha comunidade e associar a uma determinada localização.

**Para que eu possa:** Registrar a história da minha comunidade e enriquecendo com registros multimídia local.

**Critérios de aceitação:**
- usar a api do sistema operacional para gerar os artefatos de multimídia
- excluir, visualizar e adicionar artefato
- associar um artefato a um ponto ou área, necessariamente
- adicionar, editar e remover uma descrição ao artefato
- ter um botão para iniciar o processo de captura
- deve permitir que as fotos sejam tiradas de forma offline

</br>

<span id="US27"></span>
### <a href="#US27">**[US27]**</a> Permitir gravar vídeos pelo aplicativo

__Épico:__ Multimídia

__Prioridade__: 

**Eu como:** Membro da comunidade.

**Desejo:** Gravar vídeos com dados etnográficos de interesse da minha comunidade e associar a uma determinada localização.

**Para que eu possa:** Registrar a história da minha comunidade e enriquecendo com registros multimídia local.

**Critérios de aceitação:**
- usar a api do sistema operacional para gerar os artefatos de multimídia
- excluir, visualizar e adicionar artefato
- associar um artefato a um ponto ou área, necessariamente
- adicionar, editar e remover uma descrição ao artefato
- ter um botão para iniciar o processo de captura
- deve permitir que os vídeos sejam tiradas de forma offline

</br>

<span id="US28"></span>
### <a href="#US28">**[US28]**</a> Exibir histórico de acesso e alterações de permissões

__Épico:__ Permissionamento e controle de acesso

__Prioridade__: 

**Eu como:** Membro da comunidade.

**Desejo:** Visualizar quem e quando, acessou determinado registro na aplicação e também quem e quando, realizou mudanças de permissão em algum aspecto.

**Para que eu possa:** Realizar a auditoria e o controle para gerenciar o acesso à informação.

**Critérios de aceitação:**
- exibir para o administrador, incluindo, mas não limitado à usuário, data e objeto acessado de quem acessou determinado dado
- exibir para o administrador os dados, incluindo, mas não limitado à usuário, data e permissão alterada de quem realizou alguma operação de modificação de permissões
- poder clicar no usuário ou objeto e abrir a tela correspondente

</br>

<span id="US29"></span>
### <a href="#US29">**[US29]**</a> Exibir permissões dos usuários

__Épico:__ Permissionamento e controle de acesso	

__Prioridade__: 

**Eu como:** Usuário administrador.

**Desejo:** Visualizar as permissões dos usuários.

**Para que eu possa:** realizar a auditoria e o controle para gerenciar o acesso à informação.

**Critérios de aceitação:**
- exibir para o administrador, incluindo, mas não limitado à usuário, dados de permissões
- poder clicar no usuário ou objeto e abrir a tela correspondente

</br>

<span id="US30"></span>
### <a href="#US30">**[US30]**</a> Excluir dados

__Épico:__ Permissionamento e controle de acesso

__Prioridade__: 

**Eu como:** Usuário administrador (comunidade).

**Desejo:** Poder iniciar um processo de remoção de todos os meus dados e os dados da comunidade da aplicação.

**Para que eu possa:** Proteger e ter controle dos  meus dados.

**Critérios de aceitação:**
- apertar um botão para iniciar um processo de exclusão condicionado a um período de tempo, que se inicia quando este botão é pressionado
- o processo de exclusão deve gerar um alerta para que algum pesquisador entre em contato para resolver a solicitação
- caso o usuário administrador não mude de ideia, após o período de tempo todos os dados da comunidade devem ser excluídos
- poder apertar um botão para cancelar o processo de exclusão, o tempo do contador deve voltar ao tempo inicial e parar de contar

</br>

<span id="US31"></span>
### <a href="#US31">**[US31]**</a> Gravar áudio

__Épico:__ Multimídia

__Prioridade__: 

**Eu como:** Membro da comunidade.

**Desejo:** Registrar áudio que contenha informações etnográficos sobre a minha comunidade e associar a uma determinada localização.

**Para que eu possa:** Registrar a história da minha comunidade, enriquecendo com registros multimídia.

**Critérios de aceitação:**

- Usar a api do sistema operacional para gerenciar a gravação de áudio
- Excluir, visualizar e adicionar áudio
- Associar um artefato a um ponto ou área, necessariamente
- Adicionar, editar e remover uma descrição ao artefato
- Ter um botão para iniciar o processo de captura de áudio

</br>

<span id="US32"></span>
### <a href="#US32">**[US32]**</a> Permitir visualizar quem demarcou o local

__Épico:__ Permissionamento e controle de acesso

__Prioridade__: 

**Eu como:** Usuário.

**Desejo:** Conseguir identificar quem foi o autor de uma marcação de ponto ou área

**Para que eu possa:** Tomar conhecimento sobre quem foi o responsável por uma marcação

**Critérios de aceitação:**

- Exibir o nome de quem criou uma marcação

</br>

<span id="US33"></span>
### <a href="#US33">**[US33]**</a> Compartilhamento conteúdo de mídia com meios externos (Telegram, Whatsapp)

__Épico:__ Multimídia

__Prioridade__: 

**Eu como:** Usuário.

**Desejo:** Compartilhar algum conteúdo multimídia disponibilizado na aplicação para meios externos

**Para que eu possa:** Possa mais facilmente enviar um documento para disponibilização ou discussão em outros canais

**Critérios de aceitação:**

- Apresentar botão de compartilhamento integrado a API do sistema operacional em elementos multimídia

</br>

<span id="US34"></span>
### <a href="#US34">**[US34]**</a> Tutorial de Como Realizar a Marcação no Mapa

__Épico:__ Tutorial e navegação experimental

__Prioridade__: 

**Eu como:** Usuário.

**Desejo:** Realizar um tutorial sobre como realizar a marcação de pontos e áreas no mapa

**Para que eu possa:** Possa realizar a atividade de marcar pontos e áreas no Mapa com maior facilidade e autonomia após meu primeiro uso

**Critérios de aceitação:**

- Apresentar passo a passo guiado sobre como realizar a marcação
- Indicar, com informações escritas e setas, quais são as etapas necessárias para que o usuário possa realizar a marcação no mapa
- Ser apresentado na primeira vez em que o usuário fizer uso da aplicação

</br>


<span id="US35"></span>
### <a href="#US35">**[US35]**</a> Questionário para Cadastro de Pessoas da Comunidade

__Épico:__ Cadastro e perfis/comunidades

__Prioridade__: 

**Eu como:** Usuário.

**Desejo:** Preencher o questionário para fazer parte da comunidade referente ao povo original do qual pertenço ou acompanho

**Para que eu possa:** Visualizar informações, realizar ações e fazer parte da comunidade

**Critérios de aceitação:**

- Preencher dados do usuário a ser adicionado, como o nome, local de residência, documentos de identificação - se possuir, idade, ocupação, dentre outros
- Validar se dados de cadastro já existem associados a outro membro da comunidade

</br>

<span id="US36"></span>
### <a href="#US36">**[US36]**</a> Questionário para criação de uma nova comunidade

__Épico:__ Cadastro e perfis/comunidades

__Prioridade__: 

**Eu como:** Usuário Administrador.

**Desejo:** Preencher o questionário para poder criar uma nova comunidade no aplicativo.

**Para que eu possa:** possa visualizar informações, realizar ações e gerenciar a comunidade criada.

**Critérios de aceitação:**

- Preencher dados da comunidade a ser adicionada, como nome, área de localização (latitude, longitude) e descrição
- Validar se dados de cadastro já existem associados a outra comunidade

</br>

<span id="US37"></span>
### <a href="#US37">**[US37]**</a> Adicionar membros a comunidade

__Épico:__ Cadastro e perfis/comunidades

__Prioridade__: 

**Eu como:** Pesquisador, Membro administrador da comunidade 

**Desejo:** Adicionar um membro cadastrado a uma determinada comunidade

**Para que eu possa:** Gerenciar o membro cadastrado dentro da comunidade.

**Critérios de aceitação:**

- Adicionar, remover membro da comunidade.

</br>

<span id="US38"></span>
### <a href="#US38">**[US38]**</a> Permitir download dos dados

__Épico:__ Multimídia

__Prioridade__: 

**Eu como:** Usuário.

**Desejo:** Realizar download dos artefatos disponibilizados na aplicação.

**Para que eu possa:** Visualizar os artefatos disponíveis.

**Critérios de aceitação:**

- Criar funcionalidade de realizar download
- Disponibilizar na aplicação que possa realizar a ação de download

</br>

## Referências
---

1. **[Ebrary]** Young, Ralph. Requirements Engineering Handbook. Norwood, US:
Artech House Books, 2003.
2. **[Open Access]** Leite, Julio Cesar Sampaio do Prado. Livro Vivo - Engenharia de
Requisitos. <a href="http://livrodeengenhariaderequisitos.blogspot.com.br/">**http://livrodeengenhariaderequisitos.blogspot.com.br/**</a> (último acesso:
2019)

***
## Versionamento de edições desta página
---

| Data | Autor | Descrição | Versão |
|------|-------|-----------|--------|
| 30/08/2021 | Lorrany e Leonardo | Criação da página e dos textos descritivos, adição de algumas referências & inserção das US's | 0.1 |
| 01/08/2021 | Lorrany, Leonardo, Elias | Organização das US's e da Tabela do Product Backlog | 0.2 |
