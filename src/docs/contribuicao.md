# Política de contribuição.

Para contribuir com esse projeto:

1 - Clone o repositorio 

    https://github.com/fga-eps-mds/2021.1-Cartografia-social-docs

2- Para adicionar novas funcionalidades ou corrigir bugs siga a política de criação de branch.

3- Commite as mudanças seguindo a política de commits.

5- Certifique-se de que todos os testes estejam passando.

4- Crie um pull request seguindo a política de pull request.

# Branches Policy
A criação das branchs do projeto deve seguir o seguinte padrão:

_tipo de issue_/_numero da issue_-_breve descrição_

Tipo de issue:
- feature : Adicionar ou melhorar features
- hotfix : Para correção de bugs.

O número da issue é o número dado pelo github a issue. Concatene usando "-" e adicione uma breve descrição da issue.

## branch flow

O projeto adotará o uso do git flow, contendo as seguintes branchs:

main: Contem o código ambiente de produção.

develop: Concentra todas as funcionalidades do projeto.

feature: Branch utilizada para adicionar ou melhorar funcionalidade.

hotfix: Branch para concertar bugs.

Deve-se utilizar o git flow para criar uma nova branch, exemplo:

    git flow feature start <numero da issue>-<breve descricao>

Agora, comece a comitar na branch utilizando a politica de commit. Quando acabar, use o comando a seguir e abra o pull request.

    git flow feature publish <nome da feature>

Uma imagem com os principais comando disponíveis está descrito a seguir:

![git flow image]( ../images/git-flow-commands.png)

Cada branch deve resolver uma única issue, depois de publicada deve ser aberto um pull request para a branch develop, aprovado o pull request e gerada uma nova release, a branch deve ser deletada.

Para atualizar o ambiente de produção, deve ser aberto um pull request da develop para a main. 

# Politica de commits
Os commits do projeto devem icluir as seguintes especificações:

- Devem ser escritos em inglês.
- Devem começar com um verbo (added, refactored, etc ...)
- Devem conter uma breve descrição do que foi feito.

Exemplo: added readme

Use o co-authored para adicionar mais de um contribuidor no corpo da menssagem do commit.
Exemplo: 
added login

Co-authored-by: Fulano <funalo@outlook.com>

# Politicas de Pull Request
Para criar um pull request considere a seguinte situação hipotética. Criando um pr de uma branch feature/3-login para a develop.

1) Clique em pull request
2) Clique em novo pull request
3) Selecione a base como develop
4) Selecione a feature/3-login para comparar.
5) Clique em criar pull request.
6) Adicione o titulo
7) Preencha a descrição com o template oficial.
8) Adicione no mínimo 1 review.
9) Assine a tarefa
10) Adicione as labels
11) Link a issue
12) Crie o pull request
13) Resolva os conflitos se necessário
14) Aguarda a revisão
15) Corrija se necessário
16) Faça o merge quando aprovado
17) Delete a branch.