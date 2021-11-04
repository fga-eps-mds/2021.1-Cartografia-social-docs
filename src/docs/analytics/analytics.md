## Análise de métricas de Maintainability e Reliability dos Repositórios da Cartografia Social

Métricas de software são medidas quantitativas de atributos que um sistema de sotware possui, esses atributos ou parâmetros afetam  o desenvolvimento de um software o por isso devem ser análisados. 

Existem várias atividades que englobam a prática de coleta de metricas de software, essas atividades envolvem coleta de dados, modelos e medidadas de qualidade, modelos e medidas de estimativa de custo e esforço etc.

Durante o projeto nós aplicamos algumas dessas práticas no desenvolvimento do produto coletando métricas de manutenibilidade e confiabilidade do nosso produto através de uma ferramenta de coleta de métricas chamada SonarQube, ele inspeciona o código de cada um dos nossos repositórios de forma contínua e detecta diversos aspectos acerca do nosso código como bugs, complexidade de código, densidade, cobertura de código e outros.

A cada release gerada nos repositórios é disponibilizado um arquivo .json que nos retorna alguns aspectos do nosso código feito para aquela release. A partir desses arquivos nós geramos um dataset e o manipulamos para realizarmos uma análise das métricas utilizando algumas ferramentas do pyhton com as bibliotecas pandas, numpy e outras.

As seguintes métricas foram coletadas a cada release gerada e salvas num arquivo json da release, cada repositório contém um diretório com todos os arquivos das releases:

metric_list = ['files',
               'functions',
               'complexity',
               'comment_lines_density',
               'duplicated_lines_density',
               'coverage',
               'ncloc',
               'security_rating',
               'tests',
               'test_success_density',
               'test_execution_time',
               'reliability_rating']

Essas métricas foram colhetadas para todos os repositórios e salvas num csv chamado result2.csv.

Após colhermos os dados fizemos as seguintes análises para cada repositório.

## Análise de estatistica descritiva (média, moda, mediana, desvio padrão, variância, mínimo, máximo )

- Realiza o cálculo de dados estatísticos de medidas de tendência central, como média, mediana, moda e percentis. Já as medidas de dispersão são o mínimo, máximo, desvio padrão e variância.Esta fase é a fase inicial da nossa análise de dados para descrever e resumir os nossos dados análisados.

Interpretando os dados:

- Média: Média dos valores do conjunto de dados
- Mediana: A mediana é o valor da váriavel que ocupa posição central do conjunto de dados ordenado. Na tabela de análise descritiva o valor 50% é o valor da mediana, e os valores de 75% e 25% são os percentis superiores e inferiores respectivamente, para uma melhor visualização ao fim da tabela foi adicionado um campo chamado mediana, porém o mesmo é igual ao valor de 50% já apresentado.
- Moda: Valor mais recorrente do conjunto de dados.
- Máximo: Maior valor do conjunto de dados
- Desvio padrão (std): Indica a dispersão do conjunto de dados, quanto mais próximo esse valor estiver de 0 mais homogêneo é o conjunto.
- Variância: Menor valor do conjunto de dados.
- Percentis: Os percentis incluidos na saída estão entre 0 e 1 e retornam o percentis de 25%, 50% e 75%


## Percentis

Medida que divide uma amostra de dados ordenados de forma crescente em 100 partes. Calculamos o percentis de 0% a 99% da amostra para cada métrica pois assim poderemos analisar por exemplo em quantos porcento determinado tempo é levado para executar a build de teses. 

## Matriz de Correlação

* Duas estátisticas estão correlacionadas quando existe qualquer associação estatística entre elas, essa correlação pode ser o quão porximas duas váriavéis estão de ter uma relação linear entre si. Aqui usamos a correlação de Pearson onde os valores de r vão de -1 a 1, essa correlação é positiva quando r > 0, isso significa que ambas as váriaveis se movem na mesmas direção, ou essa correlação pode ser negativa (r < 0), que é quando as váriaveis andam em direções opostas.

- Correlação positiva: ambas as variáveis mudam na mesma direção. (r > 0)
 - Correlação Nula: Nenhuma relação na mudança das variáveis. (r = 0 ou Nulo)
- Correlação Negativa: as variáveis mudam em direções opostas. (r < 0)

* Pela fórmula a correlação é um número entre -1 e 1 e interpretamos da seguinte maneira: quanto mais o r estiver próximo de 1 ou -1 mais forte será a correlação.

https://rstudio-pubs-static.s3.amazonaws.com/437792_df39a5ff0a55491fb71f0f4a0f5cd0bf.html


## Gráfico boxplot

Nos ajuda a observar a variação das métricas coletadas por meio do quartis, ous seja dos percentis inferiores e superiores juntamente com a mediana, na tabela de análise descritiva podemos ver o percentil inferior representado pelo valor 25%, a mediana 50%, e o percentis superior como 75%. Além do quartis temos nesses gráficos também os outliers representados por bolinhas, que são os valores descrepantes plotados como pontos individuais, esses pontos são os pontos que ultrapassam os limites inferiores e superiores dos nossos dados. 

## Gráfico de Dispersão


## Gráfico de Histograma

