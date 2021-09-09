
- [Plano de Gerenciamento de Riscos](#plano-de-gerenciamento-de-riscos)
  - [1. Introdução](#1-introdução)
  - [2. Processo de gerenciamento de risco](#2-processo-de-gerenciamento-de-risco)
    - [2.1. Metodologia](#21-metodologia)
    - [2.2. Responsabilidade](#22-responsabilidade)
  - [3. Categoria dos riscos](#3-categoria-dos-riscos)
    - [3.1. Técnico](#31-técnico)
    - [3.2. Externo](#32-externo)
    - [3.3. Organizacional](#33-organizacional)
    - [3.4. Gerenciamento de projetos](#34-gerenciamento-de-projetos)
  - [4. Análise quantitativa](#4-análise-quantitativa)
    - [4.1. Probabilidade](#41-probabilidade)
    - [4.2. Impacto](#42-impacto)
    - [4.3. Prioridade](#43-prioridade)
      - [4.3.1 Nível de prioridade](#431-nível-de-prioridade)
  - [5. Documentação dos riscos](#5-documentação-dos-riscos)
  - [## 6. Versionamento de edições desta página](#-6-versionamento-de-edições-desta-página)

#  Plano de Gerenciamento de Riscos

## 1. Introdução

Este documento tem como objetivo detectar e classificar riscos externos ou internos inerentes ao processo de desenvolvimento do software, tornando possível o gerenciamento desses riscos.

## 2. Processo de gerenciamento de risco
### 2.1. Metodologia

Este documento usa da análise quantitativa e tem por objetivo a priorização e categorização dos riscos de acordo com 2 métricas: probabilidade(chances de um risco ocorrer) e impacto (o quanto o risco impacta no projeto).

### 2.2. Responsabilidade
Os responsáveis pelo monitoramento e controle dos riscos serão de todos os integrantes. Os riscos serão divididos igualmente entre os membros. Os riscos por quais ficaram responsáveis serão definidos por reunião remota, com base nas qualificações de cada membro.

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

## 4. Análise quantitativa
### 4.1. Probabilidade

| Probabilidade | Intervalo | Peso | 
|------|-------|-----------|
| Muito baixa | 0 a 15 | 1 |
| Baixa | 16 a 35 | 2 |
| Média | 36 a 50 | 3 |
| Alta | 51 a 65 | 4 |
| Muito alta | 66 a 100 | 5 |

### 4.2. Impacto

| Impacto | Descrição | Peso | 
|------|-------|-----------|
| Muito baixa | Pouco Expressivo | 1 |
| Baixa | Pouco impacto	 | 2 |
| Média | Impacto Médio	 | 3 |
| Alta | Grande impacto	 | 4 |
| Muito alta | Impacto impede o desenvolvimento do projeto | 5 |

### 4.3. Prioridade

A prioridade é o que determina a urgência que medidas devem ser tomadas para resolver o risco, e é calculada com base no impacto e na probabilidade.

| Impacto | Muito baixa	 | Baixa | Média | Alta | Muito alta |
|------|-------|-----------| ----- | ----| ----- | 
| Muito baixa | 1 | 2 | 3 | 4 | 5 |
| Baixa | 2	 | 4 | 6 | 8 | 10 |
| Média | 3 | 6 | 9 | 12 | 15 |
| Alta | 4 | 8 | 12 | 16 | 20 |
| Muito alta | 5 | 10 | 15 | 20 | 25 |

#### 4.3.1 Nível de prioridade

| Prioridade | Intervalo | 
|------|-------|
| Muito baixa | 1 a 5 |
| Baixa | 6 a 10 | 
| Média | 11 a 15 |
| Alta | 16 a 20 |
| Muito alta | 21 a 25 |

## 5. Documentação dos riscos

| ID  |  Risco  | Categoria | Causa | Consequência |
| ------------------- | ------------------- | ------------------- | ------------------- | ------------------- |
| R01 |  Arquitetura do software mal desenvolvida | Técnico | Falta de conhecimento da equipe sobre o assunto | Baixo desempenho do software |
| R02 |  Dificuldade no desenvolvimento do software | Técnico | Tema complexo ou falta de experiência dos membros da equipe | Atraso no cronograma |
| R03 |  O software não funciona corretamente | Técnico | Presença de falhas no sistema | Insatisfação do cliente com o produto |
| R04 |  Projeto não atende a expectativa do cliente | Técnico | Falta de comunicação com o cliente ou incompreenção do escopo | Insatisfação do cliente com o produto |
| R05 |  Mudança de escopo | Externo | Nova demanda do cliente ou definição da disciplina | Replanejamento do projeto e atraso nas entregas |
| R06 | Falta de cliente real | Externo | Cliente desiste de prosseguir com o projeto | Projeto encerrado |
| R07 |  Baixa produtividade da equipe | Organizacional | Desmotivação dos membros da equipe | Atraso no cronograma |
| R08 |  Ambiente e recursos de trabalho inadequados | Organizacional | Ambiente de trabalho barulhento e/ou desconfortável, conexão de internet instável ou ferramenta de desenvolvimento inadequada | Dificuldade na comunicação, desmotivação dos membros, baixa produtividade e atraso no desenvolvimento do projeto |
| R09 |  Membro ocioso	 | Gerenciamento | Mal gerenciamento de recursos humanos | Sobrecarga de tarefas para alguns membros |
| R10 |  Membro ocioso	 | Gerenciamento | Mal gerenciamento de recursos humanos | Sobrecarga de tarefas para alguns membros |
| R11 |  Um ou mais integrantes sairem ou ficarem ausentes	 | Gerenciamento | Problemas pessoais ou desistência da matéria | Sobrecarga de tarefas para alguns membros |
| R12 |  Problema de comunicação na equipe	 | Gerenciamento | Falta de afinidade entre os membros ou sentimento de não pertencente ao grupo | Baixa integração e alinhamento da equipe |
| R13 |  Divergência de horários entre membros da equipe | Gerenciamento | Impossibilidade de pareamento | Baixa integração, atraso no cronograma e baixa qualidade |



## 6. Versionamento de edições desta página
---

| Data | Autor | Descrição | Versão |
|------|-------|-----------|--------|
| 07/09/2021 | Mikhaelle Bueno | Iniciando documento | 0.1 |