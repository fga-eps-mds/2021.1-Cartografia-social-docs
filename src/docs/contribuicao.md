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


Cada branch deve resolver uma única issue, depois de aprovado o pull request e gerada uma nova release, a branch deve ser deletada.
