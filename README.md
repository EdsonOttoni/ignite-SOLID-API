## Carros
  ### Requisitos
    - É possível cadastrar um carro.
      - É possível cadastrar uma especificações pra um carro.

    - É possível listar todos os carros disponíveis.
      - É possível listar as especificações. 
      - É possível listar todas as categorias.

    - É possível listar todos os carros.
      - É possível listar todos os carros disponíveis pelo nome da categoria.
      - É possível listar todos os carros disponíveis pelo nome da marca.
      - É possível listar todos os carros disponíveis pelo nome do carro.
    
    - É possível cadastrar a imagem do carro.

    - É possível cadastrar um aluguel
  
  ### Requisito não funcional
    - Utiliza o multer para upload dos arquivos.

  ### Regras de negócios
    - Não é possível cadastrar um carro com a placa já existente.
    - Não é possível alterar a placa de um carro já cadastrado.
    - Não é possível cadastrar uma especificação para um carro não cadastrado
    - Não é possível cadastrar uma especificação já existente para o mesmo carro

    - O carro é cadastrado com disponibilidade por padrão.
    - O Usuário responsável pelo cadastro de um carro é um usuário administrador.
    - O Usuário responsável pelo cadastro de um especificação é um usuário administrador.
    - O Usuário pode cadastrar mais de uma imagem para o mesmo carro.

    - O aluguel tem duração mínima de 24 hora.
    - Ao realizar um aluguel, o status do carro deve ser alterado para indisponível.
    - Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
    - Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
    - Ao realizar a devolução, deverá ser calculado o toral do aluguel.
    - Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcionou aos dias de atraso.
    - Caso haja multa, deverá ser somado ao total do aluguel.
    - Não é possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
    - Não é possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.

    - O usuário não precisa estar logado no sistema para listar os carros.

