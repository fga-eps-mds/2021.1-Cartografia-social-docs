# Sprint 1

## Planejamento

__Início da sprint:__ 15/09/2021

__Término da sprint:__ 24/09/2021

A sprint 03 continua o trabalho na histórias de usuário. Com as seguintes issues planejadas:

| Issue                                                                                     | Tipo   | Descrição                                                            | Responsáveis        |
| ----------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------- | ------------------- |
| [#16](https://github.com/fga-eps-mds/2021.1-Cartografia-social-api-comunidades/issues/16) | Feat   | [US19] Adição de membro administrador                                | Arthur, Marco       |
| [#17](https://github.com/fga-eps-mds/2021.1-Cartografia-social-api-comunidades/issues/17) | Feat   | [US37] Adicionar membros a comunidade, fazer o controle de membros   | Guy, Lorrayne       |
| [#27](https://github.com/fga-eps-mds/2021.1-Cartografia-social-api-gateway/issues/27)     | Feat   | [US19] Integrar gateway com serviços para definição de administrador | Arthur, Marco       |
| [#28](https://github.com/fga-eps-mds/2021.1-Cartografia-social-api-gateway/issues/28)     | Feat   | [US37] Expor endpoints para controle de membros da comunidade        | Guy, Lorrayne       |
| [#31](https://github.com/fga-eps-mds/2021.1-Cartografia-social-api-midia/issues/10)       | Feat   | [US31] Persistir Audio                                               | Guy, Leo            |
| [#84](https://github.com/fga-eps-mds/2021.1-Cartografia-social-docs/issues/84)            | Doc    | [DOCS] Documentar fechamento de sprint 2                             | Mikha               |
| [#84](https://github.com/fga-eps-mds/2021.1-Cartografia-social-docs/issues/85)            | Doc    | [DOCS] Documentar Sprint 03                                          | Guy                 |
| [#20](https://github.com/fga-eps-mds/2021.1-Cartografia-social-front/issues/20)           | CI     | [DEVOPS] Arrumar testes do front                                     | Marco, Alexandre    |
| [#21](https://github.com/fga-eps-mds/2021.1-Cartografia-social-front/issues/21)           | Feat   | [US31] Tela de áudio                                                 | Mikha, Arthur       |
| [#14](https://github.com/fga-eps-mds/2021.1-Cartografia-social-api-comunidades/issues/14) | Feat   | [US15] CRUD da comunidade                                            | Elias, Leo          |
| [#12](https://github.com/fga-eps-mds/2021.1-Cartografia-social-api-comunidades/issues/12) | CI     | [DEVOPS] Corrigir CI/SonarCloud possa pegar as métricas de coverage  | Elias               |
| [#23](https://github.com/fga-eps-mds/2021.1-Cartografia-social-api-gateway/issues/23)     | CI     | [DEVOPS] Corrigir CI/SonarCloud possa pegar as métricas de coverage  | Elias               |
| [#10](https://github.com/fga-eps-mds/2021.1-Cartografia-social-api-mapas/issues/10)       | CI     | [DEVOPS] Corrigir CI/SonarCloud possa pegar as métricas de coverage  | Elias               |
| [#8](https://github.com/fga-eps-mds/2021.1-Cartografia-social-api-midia/issues/8)         | CI     | [DEVOPS] Corrigir CI/SonarCloud possa pegar as métricas de coverage  | Elias               |
| [#9](https://github.com/fga-eps-mds/2021.1-Cartografia-social-api-users/issues/9)         | CI     | [DEVOPS] Corrigir CI/SonarCloud possa pegar as métricas de coverage  | Elias               |
| [#24](https://github.com/fga-eps-mds/2021.1-Cartografia-social-api-gateway/issues/24)     | Feat   | [US15] Integrar gateway com o serviço para criação de perfis         | Elias, Leo          |
| [#25](https://github.com/fga-eps-mds/2021.1-Cartografia-social-front/issues/25)           | Improv | Criar regras de navegação                                            | Deusdará, Alexandre |




## Dividas Técnicas da Sprint 02

Da Sprint 02 ficaram as seguintes issues como divida técnica para a sprint 03.

| Issue                                                                                   | Tipo | Descrição                                                            | Responsáveis        |
| --------------------------------------------------------------------------------------- | ---- | -------------------------------------------------------------------- | ------------------- |
| [#9](https://github.com/fga-eps-mds/2021.1-Cartografia-social-api-comunidades/issues/9) | Doc  | [US36] Definir as questões de criação de comunidade e criar no banco | Guy, Arthur         |
| [#6](https://github.com/fga-eps-mds/2021.1-Cartografia-social-api-midia/issues/6)       | Doc  | [US21] Persistir os dados de arquivos                                | Guy, Leo, Elias     |
| [#6](https://github.com/fga-eps-mds/2021.1-Cartografia-social-api-midia/issues/6)       | Doc  | [US36] Formulário criação da comunidade dinâmico                     | Deusdará, Alexandre |

As dividas técnicas da Sprint 02 foram concluídas.


### Papéis

Se deu sequencia a rotação do papel de scrum master. Lembrando que o scrum master irá rotacionar por sprint/semana, sendo que o SM anterior irá ajudar o novo, pareando e distribuindo o conhecimento dessa forma.

__Scrum master:__ Guilherme Guy

### Outros pontos abordados

Outros pontos também foram abordados durante a reunião de planejamento, dentre eles:

- Criar regras de navegação no frontend, definir isso como critério de aceitação para as tarefas. O trabalho inicial deste direcionamento foi transformado em uma issue
- Foi decidido manter o menu hambúrguer no design do frontend

## Fechamento

Durante a reunião de fechamento foi visto que o momento de fechamento da sprint não condiz com o período produtivo da equipe, resultando na terceira sprint com dívidas técnicas. Foi feita a proposta de troca do fechamento/abertura de nova sprint para as sextas-feiras, de forma que a Sprint 03 será acrescentada de dois dias e a Sprint 04 começará sexta-feira dia 24/09 e irá até 01/10.

Mesmo assim, algumas issues não foram fechadas até o horário limite, se tornando dívidas técnicas para a Sprint 04, entretanto a maioria o trabalho estava concluído, restando apenas revisar o pull request.

### Burndown

![](../assets/sprints/sprint_03_burndown.png)


### Velocity

![](../assets/sprints/sprint_03_velocity.png)

> Nesta imagem devem ser ignorados os valores da Sprint 04 (ainda em progresso) e os valores registrados como "Sprint: September XX...", estes ultimos são gerados pela funcionalidade de sprints do ZenHub, que foi testada pela equipe mas substituida por milestones para realizar marcação das sprints.

### Dívidas técnicas

As seguintes issues se tornaram dívidas técnicas para a Sprint 04:
- [US19] Definição de membros administradores das comunidades
  * [Back] Adicionar membro da comunidade como administrador [2] -> Marco, Arthur
  * [Back - Gateway] Integrar com microsserviço [2] -> Marco, Arthur
- Arrumar testes do front [5] -> Marco, Alexandre
- [US31] Gravar áudio
  * [Front] Tela de gravador de áudio [5] -> Mikha, Arthur

### Quadro de pareamentos

<iframe width="800" height="470" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTLHE3O8zIRwIz41POb4DXlbyhoVHY9R9vC0wSL-60NMeFVH0Fk0wqUV2v8AgRGTokYaZmwunInbF3m/pubhtml?gid=816613624&amp;single=true&amp;widget=true&amp;headers=false"></iframe>

### Quadro de conhecimentos

Conforme documento de [métricas de conhecimento](./metricas/quadro-de-conhecimentos)

### Observações, comentários e melhorias possíveis

Conforme discutido no fechamento da sprint, foram feitas modificações na agenda de trabalho das sprints para melhor acomodar ao ritmo da equipe.

## Versionamento de edições desta página
---

| Data       | Autor         | Descrição                | Versão |
| ---------- | ------------- | ------------------------ | ------ |
| 21/09/2021 | Guilherme Guy | Criação do documento     | 0.1    |
| 26/09/2021 | Guilherme Guy | Atualização do documento | 0.2    |
| 01/10/2021 | Guilherme Guy | Finalização do documento | 1.0    |