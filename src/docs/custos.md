# Gerenciamento de Custos

## Histórico de revisões

|Data|Versão|Descrição|Autor|
|:---:|:---:|:---:|:---:|
|09/09/2021 |1.0| Adição da Tabela de Custos do Projeto |[Lorrany dos Santos](https://github.com/lorryaze)|
|09/09/2021|1.1|Adição de descrições do gerenciamento de custos|[Alexandre Miguel](https://github.com/aleronupe) e [Lorrany dos Santos](https://github.com/lorryaze)|
|10/09/2021|1.2|Adição de descrições acerca de EVM e Agile EVM|[Alexandre Miguel](https://github.com/aleronupe)|

## Tabela Geral de Custos do Projeto

Para o custo médio de desenvolvimento foi estimado a quantidade de horas de trabalho total por membro do projeto, por sprint, para um custeio embasado na obtenção dos dados de um salário médio de um desenvolvedor de software da graduação, como ainda não temos diploma o salário e a carga horária considerados foram a média de um estágiario que ganha 1500 reais por 60h mensais, isso da cerca de 18,75 reais a hora trabalhada.

Para o planejamento de custos do Projeto, foi realizada uma análise de diversos fatores mercadológicos para a construção da seguinte tabela, sumarizando os diversos aspectos que geram custos para o projeto como um todo. A seguinte tabela se encontra [aqui](https://docs.google.com/spreadsheets/d/1tsxEeGRkSujDorQhbVZn12We2zhT1jF9ugV597QH_uk/edit?usp=sharing). Este planejamento foi o nosso planejamento e estimativas iniciais, uma tabela de evm mais detalhada será mostrada abaixo.

<iframe src="https://docs.google.com/spreadsheets/d/1tsxEeGRkSujDorQhbVZn12We2zhT1jF9ugV597QH_uk/edit?usp=sharing" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>


### Aquisições

O Principal fator que representa custo para o projeto foi determinado como a aquisição de computadores de uso pessoal, cuja principal especificação técnica se refere aos seguintes aspectos:

- Processador Intel Core i7;
- 8 GB de Memória RAM;
- 256 GB de *SSD*.

Seguindo esses aspectos, foi realizada uma [análise dos preços e dos modelos](https://www.notebookcheck.net/The-best-laptops-for-Q2-2021-80-laptops-in-review.549940.0.html) disponíveis no mercado, sendo possível obter os seguintes dados: 

| Dispositivo | Descrição de Uso | Quantidade | Valor Unitário Médio (R$) | Valor Total (R$) |
| --- | --- | --- | --- | --- |
| Notebook | Desenvolvimento, testes e contribuições gerais em documentação e gerência | 9 | 4.278,80 | 38.509,20 |


### Gasto Energético

Tendo que, para o desenvolvimento, seria necessário o gasto energético associado ao uso contínudo dos equipamentos adquiridos e especificados no item anterior, foi necessário identificar o preço do [***KWh*** da região de Brasília](https://www.neoenergiabrasilia.com.br/residencial-e-rural/Paginas/tarifas.aspx) para a execução do seguinte cálculo:


`Potência do Dispositivo em KW` **x** 
`Total de Horas Trabalhadas Na Sprint` **x**
`Preço do KWh` =
`Gasto Energático da Sprint`

Tendo que a potência por Aparelho é de **0,06 KW** e que são 9 aparelhos no total, além de que o preço do KWh na região é de **0,7941717 R$/KWh**, possível montar a seguinte tabela

| Sprint | Total de Horas | Potência Total da Sprint (KW) | Gasto da Sprint (R$) |
| --- | --- | --- | --- |
| Semana 1 - Pré desenvolvimento | 30| 5,4 | 4,29 |
| Semana 2 - pré desenvolvimento | 30 | 5,4 | 4,29 |
| Semana 3 - pré desenvolvimento | 30 | 6,48 | 5,14 | 
| Semana 4 - pré desenvolvimento | 30 | 6,48 | 5,14 | 
| Semana 5 - pré desenvolvimento | 30 | 7,56 | 6,00 | 
| Semana 6 - pré desenvolvimento | 30 | 6,48 | 5,14 |
| Sprint 01 |  | 6,48 | 5,14 |
| Sprint 02 | 108 | 6,48 | 5,14 |
| Sprint 03 | 90 | 5,4 | 4,29 |
| Sprint 04 | 90 | 5,4 | 4,29 |
| Sprint 05 | 90 | 5,4 | 4,29 |
| Sprint 06 | 90 | 5,4 | 4,29 |
| Sprint 07 | 90 | 5,4 | 4,29 |
| Sprint 08 | 90 | 5,4 | 4,29 |
| Sprint 09 | 90 | 5,4 | 4,29 |
-| **Total** | **1566** | **93,96** | **74,22** |


### Planejamento de Custos do périodo pré-sprints

**Este planejadmento do périodo pré-sprints que foi de 20/07 a 01/09, foi feito com base no EVM, a partir do dia 01/09 que começamos a desenvolver e ter sprints no GitHub com issues e histórias de usuário o cálculo dos gastos foi feito utilizando o agile EVM que se encontra detalhado mais abaixo.** 

### EVM (*Earned value management*)**

Gerenciamento de valor agregado, do Inglês, *Earned value management * (EVM) é uma metodologia de gerenciamento de projeto que integra cronograma, custos e escopo para medir o desempenho do projeto com base em valores planejados e reais, prevendo o futuro ao permiir que os gerentes de projeto se ajustem de acordo.

O EVM se concentra no uso de dados em análises de tendências e previsões, sendo uma função de gerenciamento de projeto, ou seja, buscando lidar tanto com os dados em si quanto com as ações tomadas com base nesses dados.

Para controle dos dados de planejamento de gastos foram utilizados elementos do EVM tradicional bem como influências do Agile EVM.


| Semanas | Horas Por Membro | Total de Membros | Total de Horas | Custo Por Hora (R$) | Custo Total périodo 20/07 a 01/09 (R$) |
| --- | --- | --- | --- | --- | --- |
| Semana 01 | 5 | 9 | 30 | 18,75 | 5062.5 |
| Semana 02 | 5 | 9 | 30 | 18,75 | 5062.5 |
| Semana 03 | 5 | 9 | 30 | 18,75 | 5062.5 |
| Semana 04 | 5 | 9 | 30 | 18,75 | 5062.5 |
| Semana 05| 5 | 9 | 30 | 18,75 | 5062.5 |
| Semana 06 | 5 | 9 | 30 | 18,75 | 5062.5 |
| **Total** | **180** | **9** | **1620** | **18,75** | **30375** |


## Agile EVM 

O Agile EVM é uma adaptação do modelo tradicional, cujo foco está em mapear por pontos relevantes da estrutura de desenvolvimento ágil, principalmente quanto à *Release*, proporcionando um panorama geral de como cada gasto é destinado e mapeado por Sprint, permitindo até mesmo compreender o impacto do valor agregado das pontuações de histórias de usuário.

Para o mapeamento dos custos do projeto atual, foram utilizadas estruturas de divisão dos gastos por Sprint, com recorrentes atualizações para se adaptar à realidade de custos do projeto em continuidade, como a adição dos gastos por Release.

No agile evm temos algumas definições cruciais necessárias para o cálculo dos custos:

## Parâmetros iniciais das releases

| Nome | Definição | 
| --- | --- |
| BAC | O valor de orçado para ser gasto a cada release | 
| L | A duração de cada Sprint | 
| PS | Número total de sprints planejado para o lançamento da release | 
| SD | Data de inicio da release | 
| PRP | Total de pontos planejados por release | 

Os dados da tabela acima são utilizados para calcular as métricas do agile evm.

## Pontos de dados das Sprints

| Nome | Definição | 
| --- | --- |
| n | Número de sprints comeando a partir da 1 | 
| PC | Pontos completados - Os pontos de trabalho completados do backlog durante a sprint | 
| PA | Pontos Adicionados -  Os pontos adicionados ou subtraidos do backlog durante a sprint | 
| SC | Custo da sprint - quanto foi gasto | 

Esse documento está em constante evolução já que nossas sprint tem tempo de duração de 7 dias, e ao longo desta vários pr's são fechados e vários pontos são completados, a adição ou subtração no meio da sprint é algo que não ocorre muito, porém estas devem ser levadas em conta.

## Definições do agileEVM

| Nome | Definição | 
| --- | --- |
| PRP | Pontos planejados para a release | 
| RPC | Pontos completados por release | 
| APC | Porcentagem atual de completude da release - Essa é a proporção de pontos planejados para pontos completados | 
| PPC | Porcentagem de planejamento finalizada |
| SC | Custo de Sprint |
| PA| Pontos Adicionados |
| PC | Pontos finalizados |



## Padrões do EVM e definições de equações

| Equação | Definição | 
| --- | --- |
| BAC | Custo orçado na conclusão - Este é o orçamento inicial para o lançamento | 
| AC | Custo Atual - custos orçado em PV para a release | 
| PV = PPC * BAC | Valor Planejado | 1 | 
| EV = APC * BAC | Valor Ganho | 2 |
| CV = EV - AC | Variação de Custo | 3 |
| SV = EV - PV | Variação de Cronograma | 4 |
| CPI = EV / AC | Indice de desempenho de custo | 5 |
| SPI = EV / PV | Indice do cronograma de desempenho | 6 |
| ETC = 1/CPI * (BAC - EV) | Estimativa para completar | 7 |
| EAC = AC + ETC | Estimativa ao Commpletar | 8 |

# Equação geral da Data da Release

No artigo que usamos como referência para a elaboração do agileEVM temos uma explicação bem detalhada da correlação das métricas do scrum com as métricas do EVM assim como temo também a explicação da seguinte equção que é usada para calcular a data da release:

- RD = Data da Release  
- SD = Data de Inicio
- N = Número de Sprints (Assumindo que todas as sprints tem o mesmo tamanho) 
- L = Tamanho da Sprint

**RDm = SD + N . L**
**RDm = f(N)**

Logo RDm é uma função linear de N.

Levando em conta a equação acima podemos agora definir uma equação de RD a partir da velocidade média de pontos que fechamos por sprint, seja v a média de trabalho concluído por sprint, e W o total de pontos planejados para serem feitos na release para v>0 temos:

N = W / v

Para a sprint n, onde n >= 1 

N = n + n'

onde n' são as sprints estimadas após n, alem disso W' é o trabalho a ser feito em n' sprints, então:

n' = W' / v

Combinando as equações acima temos>

RDv = SD + L . (n + W'/v)

Dados todos estes conceitos que também pode ser encontrado [neste](https://github.com/fga-eps-mds/A-Disciplina-MDS-EPS/blob/master/Agil_material/AgileEVM_-_Earned_Value_Management_in_Scrum_Projects.pdf) artigo que também está disponível no repositório da disciplina, refizemos os cálculos do agileEVM usando como base as releases majors do nosso produto. Nós também geramos os gráficos de PV x EV afim de compararmos as diferenças entre valor agregado x valor planejado, os gráficos podem ser vistos na tabela abaixo e temos um gráfico por release major. Para uma melhor visualização da tabela e dos gráficos basta clicar [aqui](https://docs.google.com/spreadsheets/d/1Oju43xFm7xHWWqyWjFO0Ff0pJ15AsrFh4_NmgdKmLr0/edit?usp=sharing).

<iframe src="https://docs.google.com/spreadsheets/d/1Oju43xFm7xHWWqyWjFO0Ff0pJ15AsrFh4_NmgdKmLr0/edit?usp=sharing" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

Através dos gráficos (que se encontram na segunda página da tabela acima) é possível notar as diferenças e os picos que ocorrem do PV para o EV, na primeira tabela deste documento podemos ver o cálculo do BAC baseado nos custos de horas trabalhadas, consumo de energia, máquinas para deploy, equipamento para os desenvolvedores e número de sprints. Ao todo o nosso BAC = R$ 62.058,68. Nesta página podemos ver também os gráficos de SPI x CPI que nos mostra a relação entre os indices de Desempenho X Custo.  

A partir deste calcúlos podemos realizar todos os outros como o PV que é o valor planejado do projeto e dado pela formúla PV = PPC * BAC, já legendada anteriormente. 

Além do cálculo do BAC e do PV, realizamos o cálculo do PPC, do APC, RPC, SC, PA, PC e todos os outros citados nas tabelas e legendas acima.

É possível ver que os cálculos se aproxima bastante da realidade do projeto e nos dão até mesmo a data que deve ocorrer o lançamento das releases.

**SPI (Indice de perfomace por cronograma):** O cálculo do SPI é dado por SPI = EV / PV e ele nos mostra o progresso do projeto em relação ao que foi estabelecido no cronograma (Pontuação de issue, definições de histórias etc). Para analisarmos temos as seguintes definições

Maior que 1: O projeto está adiantado ao cronograma.
Menor que 1 : O projeto está atrasado.
Igual a 1: O andamento do projeto está alinhado ao cronograma.

**CPI (Indice de perfomace por custo):** O cálculo do CPI é dado por CPI = EV / AC e ele nos mostra a relação entre valor agregado e custo atual do projeto, sua interpretção se parece com o SPI:

Maior que 1: O projeto está acima do orçamento.
Menor que 1 : O projeto está abaixo do orçamento.
Igual a 1: O andamento do projeto dentro do orçamento.


# Intepretando os gráficos 

**Periodo pré-desenvolvimento** - Esta sprint não houve desenvolvimento, entretanto já estavamos trabalhando na elicitação de requisitos e no lean incepction, desenvolvento os artefatos necessários como documento de visão, documento de arquitetura, backlog do produto, etc. Nesse período o cálculo de custo foi feito a partir das horas trabalhadas.

## Release Major 0.0.1

### Valor Agregado X Valor Planejado

 **Sprint 1** - Primeira sprint de desenvolvimento com pontos planejados, é possível notar um grande salto do PV para o EV nesta Sprint já que planejamos uma quantidade pontos muito grande e muitas funcionalidades foram implementadas, cada funcionalidade tem seu custo e seu tempo de trabalho, sendo assim o tempo trabalhado foi maior que o estimado, também houveram reuniões de treinamento e curva de aprendizagem nesa etapa do projeto, o que também agrega valor já que o tempo e o escopo aumentaram.

 **Requisitos Relacionados as alterações ocorridas na Sprint 1**
 
- **US's relacionadas:**  [US01](https://github.com/fga-eps-mds/2021.1-cartografia-social-docs/issues/34),[US11](https://github.com/fga-eps-mds/2021.1-cartografia-social-docs/issues/44), [US36](https://github.com/fga-eps-mds/2021.1-cartografia-social-docs/issues/69)

- **Lista de issues feitas na sprint 1:** [Sprint1](https://github.com/fga-eps-mds/2021.1-Cartografia-social-docs#workspaces/20211-cartografia-social-612be6d060341500126ba800/reports/burndown?milestoneId=7136302&entity=milestones)

**Sprint 2** -  Na sprint dois já conseguimos equilibra melhor o PV com o EV justamente porque conseguimos equilibrar melhor a quantidade de pontos a serem entregues (PRP) com o (PCP), entretanto ainda houve valor agreado deivido a tempo.

 **Requisitos Relacionados as alterações ocorridas na Sprint 2**
 
- **US's relacionadas:**  [US01](https://github.com/fga-eps-mds/2021.1-cartografia-social-docs/issues/34),[US11](https://github.com/fga-eps-mds/2021.1-cartografia-social-docs/issues/44), [US36](https://github.com/fga-eps-mds/2021.1-cartografia-social-docs/issues/69)

- **Lista de issues feitas na sprint 1:** [Sprint1](https://github.com/fga-eps-mds/2021.1-Cartografia-social-docs#workspaces/20211-cartografia-social-612be6d060341500126ba800/reports/burndown?milestoneId=7136302&entity=milestones)

**Sprint 3** - Já na sprint 3 temos um comportamento contrário ao que ocorreu nas sprints passadas, ou seja o EV foi menor que o Valor planejado, isto ocorre pois as entregas que foram feitas e planejadas para o escopo dessa sprint teve uma queda, e muitos pontos foram adicionados devido a dividas técnicas, ocorreu também nessa sprint um problema relacionado a tempo já que essa sprint foi maior devido a uma adpatação que o time fez para que pudessemos render mais no nosso trabalho, essa adaptação foi a mudança no dia do fechamento e planning da sprint.

**Sprint 4** - Na sprint 4 também houve uma queda consideravel no EV devido as divídas técnicas e não finalização de pontos planejados.

### CPI X SPI 

Na primeira release é possível notar através do CPI e do SPI que houveram atrasos no cronograma de custo e de escopo e não foram entregues todas as funcionalidades previstas.

### CV X SV


## **Release Major MVP**

Sprint 5 -  A release de MVP teve apenas uma sprint e todo o escopo planejado foi cumprido, sendo assim essa teve seu PV, igual ao EV.gráficos

**CPI e SPI:** Na release do MVP todas as funcionalidades previstas foram entregues, ou seja o cronograma foi executado.

## **Release Major 1.0**

**Sprint 6** - Na sprint 6 houve um salto do PV para o EV devido a complexidade das features que foram entregadas, apesar de APC ter sido de 85%.gráficos

**Sprint 7** - Na sprint 7 todo o escopo planejado foi entregado e não houveram custos adicionais apesar da divida técnica, essa foi contabilizada na Sprint passada.gráficos

**CPI e SPI:** Na release 1.0 todas as funcionalidades previstas foram entregues, ou seja o cronograma foi executado.

## **Release Major 2.0**

**Sprint 8 e 9** - Na sprint 8 e 9 nós basicamente temos o mesmo comportamento do gráfico PV x EV em ambos houve uma subida justamente pq precisamos adicionar pontos para melhorar e arredondar o produto, apesar do planejamento ser maior que o nosso escópo houveram problemas com a cliente por conta da definição do escopo e do MVP.

**CPI e SPI:** Na release do 2.0 apesar de termos executado todo o cronograma planejado por nós até o momento os cálculos não condizem com a realidade e precisarão ser refeitos ao final da entrega do produto.

## Referências

* [**Informações técnicas de** ***Notebooks Check***](https://www.notebookcheck.net/The-best-laptops-for-Q2-2021-80-laptops-in-review.549940.0.html)

* [**Preço por hora de trabalho de desenvolvimento no Brasil**](https://www.payscale.com/research/BR/Job=Software_Developer/Salary)

* [**Dados Tarifários da NeoEnergia (Brasília)**](https://www.neoenergiabrasilia.com.br/residencial-e-rural/Paginas/tarifas.aspx)

* [**Definições do EVM Tradicional**](https://www.ecosys.net/knowledge/earned-value-management-basics/#:~:text=Earned%20value%20management%20(EVM)%20is,project%20managers%20to%20adjust%20accordingly.)

* [**EVM em Projetos de Desenvolvimento Ágil**](https://files.mtstatic.com/site_8189/60/0?Expires=1631658634&Signature=mo21Tk8w4GT2Chm5Am8JT-z~Jcj5gQVpX3h-p~j~JEFg1IbyRnqh3fRZq~jyD5u4-rfAhRp8p7r3lNLK6rav~tky4eZrvQZMsF8CWlpCR8DLAhzshZJ3Yq-TyQhZoqXJGxCywR-9OEOiLTG7O8xr-DmEwWcZtZqNsxXOCdtMLxA_&Key-Pair-Id=APKAJ5Y6AV4GI7A555NA)
More
* [**AgileEVM - Earnerd Value Management in Scrum Projects**](https://github.com/fga-eps-mds/A-Disciplina-MDS-EPS/blob/master/Agil_material/AgileEVM_-_Earned_Value_Management_in_Scrum_Projects.pdf)