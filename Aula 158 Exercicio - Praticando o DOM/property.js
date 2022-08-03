/* -Uma corretora solicitou um sistema onde ela pudesse cadastrar imóveis para serem exibidos aos seus clientes
-Para cadastrar um imóvel, é necessário passar as seguintes informações: informar o tipo (se é casa ou apartamento) a área e se está alugado
-Após o cadastro do imóvel, o formulário deve ser limpo para o próximo cadastro.
-Abaixo deste formulário, deve haver uma lista com os imóveis que já foram cadastrados e esta lista deve ser atualizada assim que o imóvel é criado no formulário deve ser
-Nesta lista, os imóveis alugados devem estar com a marcação "alugado" antes da primeira informação, com fundo vermelho e letras brancas
-A corretora também deseja poder remover um imóvel cadastrado previamente clicando num botão na lista de imóveis
*/

class Property {
    constructor(tipo, area, alugado) {
      this.tipo = tipo
      this.area = area
      this.alugado = alugado
    }
  }