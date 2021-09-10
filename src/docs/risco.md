# Plano de Gerenciamento de Riscos

## 1. Introdução

Este documento tem como objetivo detectar e classificar riscos externos ou internos inerentes ao processo de desenvolvimento do software, tornando possível o gerenciamento desses riscos.

----

## 2. Processo de gerenciamento de risco
### 2.1. Metodologia

Este documento usa da análise quantitativa e tem por objetivo a priorização e categorização dos riscos de acordo com 2 métricas: probabilidade(chances de um risco ocorrer) e impacto (o quanto o risco impacta no projeto).

### 2.2. Responsabilidade
Os responsáveis pelo monitoramento e controle dos riscos serão de todos os integrantes. Os riscos serão divididos igualmente entre os membros. Os riscos por quais ficaram responsáveis serão definidos por reunião remota, com base nas qualificações de cada membro.

----

## 3. Categoria dos riscos
Neste projeto, os riscos serão categorizados em técnico, externo, organizacional ou gerenciamento de projetos.

### 3.1. Técnico
Os riscos técnicos abordam os requisitos, tecnologia, complexidade, confiabilidade e qualidade.

### 3.2. Externo
Os riscos externos são relativos ao cliente, mercado ou ambiente.

### 3.3. Organizacional
Os riscos organizacionais abordam as dependências do projeto, recursos e priorização.

### 3.4. Gerenciamento de projetos
Os riscos de gerenciamento do projeto abordam a estimativa, planejamento, controle e a comunicação.

----

## 4. Análise quantitativa
### 4.1. Probabilidade

| Probabilidade | Intervalo | Peso |
| ------------- | --------- | ---- |
| Muito baixa   | 0 a 15    | 1    |
| Baixa         | 16 a 35   | 2    |
| Média         | 36 a 50   | 3    |
| Alta          | 51 a 65   | 4    |
| Muito alta    | 66 a 100  | 5    |

### 4.2. Impacto

| Impacto     | Descrição                                   | Peso |
| ----------- | ------------------------------------------- | ---- |
| Muito baixa | Pouco Expressivo                            | 1    |
| Baixa       | Pouco impacto                               | 2    |
| Média       | Impacto Médio                               | 3    |
| Alta        | Grande impacto                              | 4    |
| Muito alta  | Impacto impede o desenvolvimento do projeto | 5    |

### 4.3. Prioridade

A prioridade é o que determina a urgência que medidas devem ser tomadas para resolver o risco, e é calculada com base no impacto e na probabilidade.

| Impacto     | Muito baixa | Baixa | Média | Alta | Muito alta |
| ----------- | ----------- | ----- | ----- | ---- | ---------- |
| Muito baixa | 1           | 2     | 3     | 4    | 5          |
| Baixa       | 2           | 4     | 6     | 8    | 10         |
| Média       | 3           | 6     | 9     | 12   | 15         |
| Alta        | 4           | 8     | 12    | 16   | 20         |
| Muito alta  | 5           | 10    | 15    | 20   | 25         |

#### 4.3.1 Nível de prioridade

| Prioridade  | Intervalo |
| ----------- | --------- |
| Muito baixa | 1 a 5     |
| Baixa       | 6 a 10    |
| Média       | 11 a 15   |
| Alta        | 16 a 20   |
| Muito alta  | 21 a 25   |

----

## 5. Planejamento de resposta dos riscos
A resposta aos riscos consiste em aumentar as oportunidades e reduzir as ameaças aos objetivos do projeto, permitindo assim a abordagem dos riscos por prioridades. Os tipos de abordagem que devem ser aplicadas a cada risco são prevenir, transferir, mitigar ou aceitar.

### 5.1. Prevenir
Na estratégia de prevenir o risco, a equipe deve agir para eliminar a ameaça ou proteger o projeto contra o impacto deste risco. Extensão do cronograma, alteração da estratégia ou redução do escopo são exemplos de ações com o objetivo de prevenir.

### 5.2. Transferir
A estratégia de transferência de riscos consiste em realocar o impacto e responsabilidade da ameaça para terceiros, transferindo o esforço gerencial para outra área, equipe ou software.

### 5.3. Mitigar
Na estratégia de mitigar o risco, a equipe age para reduzir a probabilidade ou impacto do risco. Diminuir a possibilidade da ocorrência do risco é melhor do que reparar o impacto produzido pelo mesmo. Quando reduzir a probabilidade do risco não é possível, deve-se abordar fatores determinantes para a gravidade do impacto.

### 5.4. Aceitar
A aceitação é a resposta ao risco que a equipe do projeto decide não agir para diminuir sua ocorrência. Essa postura é aplicada quando é inviável evitar, diminuir ou transferir o risco.

----

## 6. Documentação dos riscos

| ID  | Risco                                             | Categoria      | Causa                                                                                                                         | Consequência                                                                                                     | Probabilidade | Impacto     | Prioridade | Resposta   |
| --- | ------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------- | ----------- | ---------- | ---------- |
| R01 | Arquitetura do software mal desenvolvida          | Técnico        | Falta de conhecimento da equipe sobre o assunto                                                                               | Baixo desempenho do software                                                                                     | Baixa         | Alto        | 8          | Mitigar    |
| R02 | Dificuldade no desenvolvimento do software        | Técnico        | Tema complexo ou falta de experiência dos membros da equipe                                                                   | Atraso no cronograma                                                                                             | Alta          | Médio       | 12         | Previnir   |
| R03 | O software não funciona corretamente              | Técnico        | Presença de falhas no sistema                                                                                                 | Insatisfação do cliente com o produto                                                                            | Baixa         | Alto        | 8          | Mitigar    |
| R04 | Projeto não atende a expectativa do cliente       | Técnico        | Falta de comunicação com o cliente ou incompreenção do escopo                                                                 | Insatisfação do cliente com o produto                                                                            | Muito baixa   | Muito alto  | 5          | Previnir   |
| R05 | Mudança de escopo                                 | Externo        | Nova demanda do cliente ou definição da disciplina                                                                            | Replanejamento do projeto e atraso nas entregas                                                                  | Muito alta    | Muito alto  | 25         | Aceitar    |
| R06 | Falta de cliente real                             | Externo        | Cliente desiste de prosseguir com o projeto                                                                                   | Projeto encerrado                                                                                                | Muito baixa   | Muito baixa | 1          | Transferir |
| R07 | Baixa produtividade da equipe                     | Organizacional | Desmotivação dos membros da equipe                                                                                            | Atraso no cronograma                                                                                             | Muito alta    | Médio       | 15         | Previnir   |
| R08 | Ambiente e recursos de trabalho inadequados       | Organizacional | Ambiente de trabalho barulhento e/ou desconfortável, conexão de internet instável ou ferramenta de desenvolvimento inadequada | Dificuldade na comunicação, desmotivação dos membros, baixa produtividade e atraso no desenvolvimento do projeto | Muito alta    | Médio       | 15         | Aceitar    |
| R09 | Membro ocioso                                     | Gerenciamento  | Mal gerenciamento de recursos humanos                                                                                         | Sobrecarga de tarefas para alguns membros                                                                        | Baixa         | Médio       | 6          | Mitigar    |
| R10 | Um ou mais integrantes sairem ou ficarem ausentes | Gerenciamento  | Problemas pessoais ou desistência da matéria                                                                                  | Sobrecarga de tarefas para alguns membros                                                                        | Baixa         | Médio       | 6          | Transferir |
| R11 | Problema de comunicação na equipe                 | Gerenciamento  | Falta de afinidade entre os membros ou sentimento de não pertencente ao grupo                                                 | Baixa integração e alinhamento da equipe                                                                         | Média         | Médio       | 9          | Prevenir   |
| R12 | Divergência de horários entre membros da equipe   | Gerenciamento  | Impossibilidade de pareamento                                                                                                 | Baixa integração, atraso no cronograma e baixa qualidade                                                         | Alta          | Médio       | 12         | Aceitar    |

----

## 7. Versionamento de edições desta página


| Data       | Autor           | Descrição            | Versão |
| ---------- | --------------- | -------------------- | ------ |
| 07/09/2021 | Mikhaelle Bueno | Iniciando documento  | 0.1    |
| 08/09/2021 | Mikhaelle Bueno | Classificando riscos | 0.2    |