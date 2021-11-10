# Próximos Passos

Devido ao fim do fluxo de desenvolvimento no contexto da discipina de EPS, finalizado em 06/11/2021, foi realizado um levantamento de acordo com os feedbacks finais, sendo estruturados nos seguintes pontos de melhorias.

## Bugs

Os seguintes itens representam bugs identificados na última versão disponibilizada do sistema, que, por não serem impeditivos para a realização dos fluxos principais. Os Bugs e erros constatados foram categorizados com identificador no formato `B<NUMERO>`.

| ID | Descrição | Serviço | Ação Corretiva |
| --- | --- | --- | --- |
| [#B01]() | Investigar erro request 404 que aparece ao logar como pesquisador | users | - Verificar o fluxo de expiração de token no Firebase; <br> - Verificar possíveis redirecionamentos incorretos. |
| [#B02]() | Investigar mídias desaparecendo ao salvar (comportamento esperado no modo demonstração mas não deve ocorrer quando logado) | midia | - Verificar o fluxo de associação de mídias a usuários e pontos;<br>- Verificar se há aplicações do fluxo do modo demonstração inseridas no fluxo de salvamento de mídias no quando há um usuário logado. |
| [#B03]() | Investigar sobrescrita de mídias adicionadas | midia/gateway | - Verificar o fluxo de associação de mídias a usuários, pontos e áreas. |
| [#B04]() | No campo de login o incio do email e o "C" do .com esta começando com maiúsculo | frontend | Correção da grafia |
| [#B05]() | É exibido "Solicitar acesso" onde deveria ser exibido "Solicitar apoio" no menu lateral | frontend | - Invesitgar o fluxo de solicitação de perguntas ao backend<br>- Corrigir o obtenção do nome do formulário via backend. |

## Melhorias

Os seguintes itens representam melhorias (ou *Improvements*) a serem feitas para uma melhor performance e usabilidade da aplicação em próximos fluxos de desenvolvimento. As futuras melhorias foram categorizadas com identificador no formato `I<NUMERO>`. Para cada melhoria, foi realizada uma breve descrição conceitual para orientação das ações a serem realizadas para a implemntação dos aspectos mencionados.

| ID | Descrição | Serviço | Ações futuras|
| --- | --- | --- | --- |
| [#I01]() | Possibilitar o cadastro de novos membros por um foms | users/gateway/frontend | - Criar o fluxo de cadastro desses usuários com conexão entre os servições de `users` e `gateway`; <br>- Criar a aba e tela de cadastro desses usuários no frontend  |
| [#I02]() | Salvar localmente as mídias do modo demonstração | frontend | - Permitir que as mídias adicionadas no Modo Demonstração sejam salvas durante localmente na aplicação;<br>- Validar o tamanho da mídia enviada no Modo Demonstração para correto salvamento local. |
| [#I03]() | Melhorar usabilidade de adição manual de pontos e áreas | frontend | - Realizar testes de usabilidade para verificar os pontos específicos cuja implementação atual possa ser melhorada;<br>- Adaptar a biblioteca atual de interação com o mapa para aplicar os estilos mapeados para melhorar a usabilidade.|
| [#I04]() | Adicionar funcionalidade da remoção de pontos e áreas no modo demonstração | frontend | A funcionalidade existe no modo logado, basta adaptar esse fluxo para existir, também, no modo demonstração |

## Versionamento de edições desta página

| Data       | Autor         | Descrição                | Versão |
| ---------- | ------------- | ------------------------ | ------ |
| 09/10/2021 | Alexandre Miguel | Elaboração do documento conforme as análises mapeadas com o auxílio de Guilherme Guy e Mikhaelle Bueno   | 0.1    |