CREATE TABLE IF NOT EXISTS despesas(
  id UUID NOT NULL,
  valor decimal(10,2) NOT NULL,
  data_compra date NOT NULL,
  descricao_despesas varchar(255) NOT NULL,
  tipo_pagamento_id integer NOT NULL,
  categoria_id UUID NOT NULL,
  endereco_id UUID NOT NULL
);

CREATE TABLE IF NOT EXISTS categorias(
  id_categorias UUID NOT NULL,
  nome varchar(255) NOT NULL,
  descricao varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS tipo_pagamentos(
  id_tipo_pagamentos serial NOT NULL,
  tipo varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS enderecos(
  id_enderecos UUID NOT NULL,
  cep varchar(255) NOT NULL,
  logradouro varchar(255) NOT NULL,
  numero integer NOT NULL,
  bairro varchar(255) NOT NULL,
  cidade varchar(255) NOT NULL,
  estado varchar(255) NOT NULL
);

ALTER TABLE ONLY despesas
  ADD CONSTRAINT despesas_pkey PRIMARY KEY (id);

ALTER TABLE ONLY categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id_categorias);

ALTER TABLE ONLY tipo_pagamentos
    ADD CONSTRAINT tipo_pagamentos_pkey PRIMARY KEY (id_tipo_pagamentos);

ALTER TABLE ONLY enderecos
    ADD CONSTRAINT enderecos_pkey PRIMARY KEY (id_enderecos);

ALTER TABLE ONLY despesas
    ADD CONSTRAINT despesas_endereco_id_fkey FOREIGN KEY (endereco_id) REFERENCES enderecos(id_enderecos);

ALTER TABLE ONLY despesas
    ADD CONSTRAINT despesas_categoria_id_fkey FOREIGN KEY (categoria_id) REFERENCES categorias(id_categorias);

ALTER TABLE ONLY despesas
    ADD CONSTRAINT despesas_tipo_pagamento_id_fkey FOREIGN KEY (tipo_pagamento_id) REFERENCES tipo_pagamentos(id_tipo_pagamentos);

