# CI/CD

## Backend 

A integração contínua funciona em todos os commits to tipo "push" e "pull_request". O pipeline consiste em:

- Instalar as dependências
- Executar o lint para verificar se o código está de acordo com a folha de estilo
- Executar a suite de testes e o coverage
- Executar o Coveralls para pegar o coverage
- Executar o sonar cloud

Para o back end, caso o commit seja realizado nas branches develop ou main, o deploy é realizado nos servidores da Digital Ocean.

Por fim, ao se gerar uma tag, uma release é gerada de forma automática, com base no número da tag. Nela são salvos o código fonte do repositório e o json com as métricas coletadas do sonar cloud.


|Projeto|Builds Com sucesso|Builds com falha|Total de builds| N Releases|
|--|--|--|--|--|
|users|37|2|39|2|
|comunidades|119|21|141|9|
|mapas|76|13|89|5|
|midia|51|10|61|3|
|gateway|215|32|251|13|
|front|335|270|609|21|