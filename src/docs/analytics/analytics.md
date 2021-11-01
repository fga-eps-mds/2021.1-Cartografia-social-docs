## Análise de métricas de Maintainability e Reliability dos Repositórios da Cartografia Social

Métricas de software são medidas quantitativas de atributos que um sistema de sotware possui, esses atributos ou parâmetros afetam  o desenvolvimento de um software o por isso devem ser análisados. 

Existem várias atividades que englobam a prática de coleta de metricas de software, essas atividades envolvem coleta de dados, modelos e medidadas de qualidade, modelos e medidas de estimativa de custo e esforço etc.

Durante o projeto nós aplicamos algumas dessas práticas no desenvolvimento do produto coletando métricas de manutenibilidade e confiabilidade do nosso produto através de uma ferramenta de coleta de métricas chamada SonarQube, ele inspeciona o código de cada um dos nossos repositórios de forma contínua e detecta diversos aspectos acerca do nosso código como bugs, complexidade de código, densidade, cobertura de código e outros.

A cada release gerada nos repositórios é disponibilizado um arquivo .json que nos retorna alguns aspectos do nosso código feito para aquela release. A partir desses arquivos nós geramos um dataset e o manipulamos para realizarmos uma análise das métricas utilizando algumas ferramentas do pyhton com as bibliotecas pandas, numpy e outras.

As seguintes métricas foram coletadas a cada release gerada e salvas num arquivo json da release:

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

