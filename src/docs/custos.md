# Gerenciamento de Custos

## Histórico de revisões

|Data|Versão|Descrição|Autor|
|:---:|:---:|:---:|:---:|
|09/09/2021 |1.0| Adição da Tabela de Custos do Projeto |[Lorrany dos Santos](https://github.com/lorryaze)|
|09/09/2021|1.1|Adição de descrições do gerenciamento de custos|[Alexandre Miguel](https://github.com/aleronupe) e [Lorrany dos Santos](https://github.com/lorryaze)|
|10/09/2021|1.2|Adição de descrições acerca de EVM e Agile EVM|[Alexandre Miguel](https://github.com/aleronupe)|

## Tabela Geral de Custos do Projeto

Para o planejamento de custos do Projeto, foi realizada uma análise de diversos fatores mercadológicos para a construção da seguinte tabela, sumarizando os diversos aspectos que geram custos para o projeto como um todo. A seguinte tabela se encontra [aqui](https://docs.google.com/spreadsheets/d/1tsxEeGRkSujDorQhbVZn12We2zhT1jF9ugV597QH_uk/edit?usp=sharing). Este planejamento foi o nosso planejamento e estimativas iniciais, uma tabela de evm mais detalhada será mostrada abaixo.

<iframe src="https://docs.google.com/spreadsheets/d/1tsxEeGRkSujDorQhbVZn12We2zhT1jF9ugV597QH_uk/edit?usp=sharing" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## Custos Por Categoria
### Desenvolvimento

Para o custo médio de desenvolvimento foi estimado a quantidade de horas de trabalho total por membro do projeto, por sprint, para um custeio embasado na obtenção dos [dados de um salário médio de um desenvolvedor](https://www.payscale.com/research/BR/Job=Software_Developer/Salary) em nível de experiência médio, adequado às experiências dos membros, permitindo dispor os dados conforme a seguinte tabela:

| Sprints | Horas Por Membro | Total de Membros | Total de Horas | Custo Por Hora (R$) | Custo Total (R$) |
| --- | --- | --- | --- | --- | --- |
| 00 | 10 | 9 | 90 | 39,38 | 3.544,20 |
| 01 | 12 | 9 | 108 | 39,38 | 4.253,04 |
| 02 | 12 | 9 | 108 | 39,38 | 4.253,04 |
| 03 | 10 | 9 | 90 | 39,38 | 3.544,20 |
| 04 | 10 | 9 | 90 | 39,38 | 3.544,20 |
| 05 | 10 | 9 | 90 | 39,38 | 3.544,20 |
| 06 | 10 | 9 | 90 | 39,38 | 3.544,20 |
| 07 | 10 | 9 | 90 | 39,38 | 3.544,20 |
| 08 | 10 | 9 | 90 | 39,38 | 3.544,20 |
| 09 | 10 | 9 | 90 | 39,38 | 3.544,20 |
| 10 | 10 | 9 | 90 | 39,38 | 3.544,20 |
| 11 | 10 | 9 | 90 | 39,38 | 3.544,20 |
| 12 | 12 | 9 | 108 | 39,38 | 4.253,04 |
| 13 | 12 | 9 | 108 | 39,38 | 4.253,04 |
| 14 | 14 | 9 | 126 | 39,38 | 4.961,88 |
| 15 | 12 | 9 | 108 | 39,38 | 4.253,04 |
| **Total** | **174** | **9** | **1566** | **39,38** | **61.669,08** |

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
| 00 | 90 | 5,4 | 4,29 |
| 01 | 108 | 6,48 | 5,14 |
| 02 | 108 | 6,48 | 5,14 |
| 03 | 90 | 5,4 | 4,29 |
| 04 | 90 | 5,4 | 4,29 |
| 05 | 90 | 5,4 | 4,29 |
| 06 | 90 | 5,4 | 4,29 |
| 07 | 90 | 5,4 | 4,29 |
| 08 | 90 | 5,4 | 4,29 |
| 09 | 90 | 5,4 | 4,29 |
| 10 | 90 | 5,4 | 4,29 |
| 11 | 90 | 5,4 | 4,29 |
| 12 | 108 | 6,48 | 5,14 | 
| 13 | 108 | 6,48 | 5,14 | 
| 14 | 126 | 7,56 | 6,00 | 
| 15 | 108 | 6,48 | 5,14 | 
| **Total** | **1566** | **93,96** | **74,22** |

### Planejamento de Custos por Sprint

Com os dados anteriores, foi possível mapear os gastos por Sprint conforme a seguinte tabela:

| Sprint | Gastos de Aquisições (R$) | Gasto por Desenvolvimento (R$) | Gasto de Custeio (R$) | Gasto Total (R$) |
| --- | --- | --- | --- | --- |
| 00 | 38.509,20 | 3.544,20 | 4,29 | 42.057,69 |
| 01 | - | 4.253,04 | 5,14 | 4.258,18 |
| 02 | - | 4.253,04 | 5,14 | 4.258,18 |
| 03 | - | 3.544,20 | 394,29 | 3.938,49 |
| 04 | - | 3.544,20 | 4,29 | 3.558,49 |
| 05 | - | 3.544,20 | 4,29 | 3.558,49 |
| 06 | - | 3.544,20 | 4,29 | 3.558,49 |
| 07 | - | 3.544,20 | 394,29 | 3.938,49 |
| 08 | - | 3.544,20 | 4,29 | 3.558,49 |
| 09 | - | 3.544,20 | 4,29 | 3.558,49 |
| 10 | - | 3.544,20 | 4,29 | 3.558,49 |
| 11 | - | 3.544,20 | 394,29 | 3.938,49 |
| 12 | - | 4.253,04 | 5,14 | 4.258,18 |
| 13 | - | 4.253,04 | 5,14 | 4.258,18 |
| 14 | - | 4.961,88 | 6,00 | 4.967,88 |
| 15 | - | 4.253,04 | 395,14 | 4.648,18 |
| **Total** | **38.509,20** | **61.669,08** | **74,22** | **103.446,72** |

## EVM (*Earned value management*)

Gerenciamento de valor agregado, do Inglês, *Earned value management * (EVM) é uma metodologia de gerenciamento de projeto que integra cronograma, custos e escopo para medir o desempenho do projeto com base em valores planejados e reais, prevendo o futuro ao permiir que os gerentes de projeto se ajustem de acordo.

O EVM se concentra no uso de dados em análises de tendências e previsões, sendo uma função de gerenciamento de projeto, ou seja, buscando lidar tanto com os dados em si quanto com as ações tomadas com base nesses dados.

Para controle dos dados de planejamento de gastos foram utilizados elementos do EVM tradicional bem como influências do Agile EVM.

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

## Referências

* [**Informações técnicas de** ***Notebooks Check***](https://www.notebookcheck.net/The-best-laptops-for-Q2-2021-80-laptops-in-review.549940.0.html)

* [**Preço por hora de trabalho de desenvolvimento no Brasil**](https://www.payscale.com/research/BR/Job=Software_Developer/Salary)

* [**Dados Tarifários da NeoEnergia (Brasília)**](https://www.neoenergiabrasilia.com.br/residencial-e-rural/Paginas/tarifas.aspx)

* [**Definições do EVM Tradicional**](https://www.ecosys.net/knowledge/earned-value-management-basics/#:~:text=Earned%20value%20management%20(EVM)%20is,project%20managers%20to%20adjust%20accordingly.)

* [**EVM em Projetos de Desenvolvimento Ágil**](https://files.mtstatic.com/site_8189/60/0?Expires=1631658634&Signature=mo21Tk8w4GT2Chm5Am8JT-z~Jcj5gQVpX3h-p~j~JEFg1IbyRnqh3fRZq~jyD5u4-rfAhRp8p7r3lNLK6rav~tky4eZrvQZMsF8CWlpCR8DLAhzshZJ3Yq-TyQhZoqXJGxCywR-9OEOiLTG7O8xr-DmEwWcZtZqNsxXOCdtMLxA_&Key-Pair-Id=APKAJ5Y6AV4GI7A555NA)
