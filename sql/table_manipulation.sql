-- MANIPULAÇÃO DE TABELA:
-- Adicionando outra coluna:
ALTER TABLE "users"
ADD COLUMN
	IF NOT EXISTS "nova_coluna" TEXT;
	
-- Atualizando nome de uma coluna:
ALTER TABLE "users"
RENAME "nova_coluna"
	TO "nome_att";
	
-- Deleção de coluna:
ALTER TABLE "users"
DROP "nome_att";