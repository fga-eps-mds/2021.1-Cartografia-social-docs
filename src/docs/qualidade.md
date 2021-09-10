# Documento de Planejamento de Qualidade

Os modelos de qualidade visam avaliar a qualidade de um produto de software de acordo com alguns aspectos baseados na visão do usuário e também do ponto de vista de qualidade externa e interna do produto. Algumas caractéristicas descrevem o que um produto precisa ter para que ele seja considerado um produto de qualidade visando tanto a qualidade de uso, quanto a qualidade interna e externa. Abordaremos aqui esses apectos que conferem qualidade ao produto que vamos desenvolver, através de uma análise dos requisitos levantados anteriormente.

Abaixo temos as subcaracterísticas de qualidade relacionadas a cada aspecto de qualidade e temos também as histórias de usuário e os requisitos relacionados a cada subcaracterísticas deste aspecto.

## Funcionalidade 

Esse aspecto é dado pela capacidade de um produto de software de prover funcionalidades que satisfaçam o usuário de acordo com suas necessidades. 

**Adequação: Capacidade do produto de software de prover um conjunto apropriado de funções para tarefas e objetivos do usuário especificados.**

O mapeamento de terras de povos originários é um processo que atualmente é feito manualmente, o que acaba gerando uma grande carga de documentos e dificulta a centralização e tratamento dos dados obtidos, sendo assim a adequação é uma subcaractrística que faz parte da principal ideia de se criar um app para a cartográfia social.

**US's  relacionadas a adequação:**
<a href="#US06">**[US06]**</a>, <a href="#US07">**[US07]**</a>, <a href="#US08">**[US08]**</a>, <a href="#US11">**[US11]**</a>, <a href="#US12">**[US12]**</a>, <a href="#US21">**[US21]**</a>, <a href="#US23">**[US23]**</a>, <a href="#US24">**[US24]**</a>

**Segurança de acesso - Capacidade do produto de software de proteger os dados, de forma que pessoas não autorizadas não possam lê-los nem modificalos.**

A subcaractrística de segurança é fundamental para a cartografia social já que é de suma importância proteger os dados dos povos tradicionais para que esses dados não sejam utilizados por pessoas mal intencionadas, sendo assim temos diversas US's voltadas para esta subcaracterística.

**US's  relacionadas a segurança:** 
<a href="#US03">**[US03]**</a>, <a href="#US05">**[US05]**</a>, <a href="#US028">**[US028]**</a>, <a href="#US029">**[US029]**</a>, <a href="#US30">**[US30]**</a>, <a href="#US32">**[US32]**</a>, <a href="#US13">**[US13]**</a>, <a href="#US18">**[US18]**</a>, <a href="#US19">**[US19]**</a>, <a href="#US20">**[US20]**</a>

## Confiabilidade 

A capacidade que o produto tem de se manter no nível de desempenho nas condições estabelecidas. 

**Disponibilidade:** O produto deve estar disponível 24/7  (24 horas por dia, 7 dias por semana), para isso precisamo de alguns recursos como internet, luz, servidores estáveis rodando 24/7, sendo assim uma forma que encontramos de manter a aplicação 24/7 vai ser alugar máquinas de algum grande servidor. (Amazon, Digital Ocean ou semelhante.)

**Conformidade: Capacidade do produto de software de estar de acordo com normas, convenções ou regulamentações relacionadas à confiabilidade.**

Além de disponibilidade 24/7, nós também precisamos de uma aplicação que funcione offline já que nem sempre o usuário terá acesso a internet devido as áreas remotas onde podem ocorrer o mapeamento. 

**US's  relacionadas a conformidade:** 
<a href="#US04">**[US04]**</a>, <a href="#US08">**[US08]**</a>, <a href="#US024">**[US024]**</a>

## Usabilidade

O aspecto de usabilidade diz respeito sobre a o grau de complexidade que um software tem para ser aprendido, operado e antraente, no ponto de vista do usuário.

**Intelegibilidade: Capacidade de um produto de software de fazer com que o usuário entenda o software.**

Como o aplicativo é bem ninchado e o processo de mapeamento já os usuário finais dessa aplicação já entendem sua finalidade, entretanto toda a interface e até mesmo o nome do produto são pensados para que o usuário possa entender para o que serve a aplicação.


**Apreensibilidade: Capacidade do produto de possibilitar ao usuário uma facilidade de aprendizado para a utilização desse software.**

Com a criação do aplicativo, os pesquisadores terão que mostrar para os membros da comunidade como é o funcionamento da aplicação. Entretanto queremos criar um tutorial de como se utilizar a aplicação e também pretendemos criar um modo de navegação experimental onde o usuário poderá conhecer o aplicativo e suas funcionalidades sem que ele esteja cadastrado.

**US's  relacionadas a apreensibilidade:** 
<a href="#US10">**[US10]**</a>, <a href="#US34">**[US34]**</a>

## Manutenibilidade

Esse aspecto diz respeito a facilidade de modificarmos um produto de software.

**Analisabilidade: identifica a facilidade em se diagnosticar eventuais problemas e identificar as causas das deficiências ou falhas**

Uma das formas que iremos aplicar esse princípio no nosso projeto será através da coleta de métricas de análise estática de código junto com a cobertura de testes que será feita utilizando ferramentas como SonarCloud e Coveralls (ou alguma outra ferramenta semelhante). Além disso para que uma nova feature seja adicionada em produção será necessário que ela passe por todos as métricas de aceitação de CI/CD e coverage.

**Testabilidade: representa a capacidade de se testar o sistema modificado, tanto quanto as novas funcionalidades quanto as não afetadas diretamente pela modificação**

Para que possamos manter o nosso produto testável, realizaremos testes unitários e de integração utilizando ferramentas adequadas para tal.

## Portabilidade    

**Adaptabilidade: representando a capacidade do software se adaptar a diferentes ambientes sem a necessidade de ações adicionais (configurações)**

**Capacidade para ser Instalado: Identifica a facilidade com que pode se instalar o sistema em um novo ambiente**

**Coexistência: mede o quão facilmente um software convive com outros instalados no mesmo ambiente**

Todos os aspectos citados acima são atendidos no nosso projeto com a utilização de containers Docker que isolam os ambientes da aplicação e simplificam o processo de instalação, build e execução, além disso como os containers isolam parte do sistema operacional do root, não há risco de que as configurações de um container se choquem com configurações de outros processos que estão rodando na mesma máquina.

## Referências
---

1. **[NBR ISO/IEC 9126-1]** Engenharia de software - Qualidade de
produto. <a href="https://jkolb.com.br/wp-content/uploads/2014/02/NBR-ISO_IEC-9126-1.pdf">**https://jkolb.com.br/wp-content/uploads/2014/02/NBR-ISO_IEC-9126-1.pdf**</a> (último acesso:
2019)

***

## Versionamento de edições desta página
---

| Data | Autor | Descrição | Versão |
|------|-------|-----------|--------|
| 08/09/2021 | Lorrany e Mikhaelle | Criação da página e dos textos descritivos, adição de algumas referências| 0.1 |
