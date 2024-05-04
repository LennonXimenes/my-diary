-- 1 Inserção de dados:
INSERT INTO "users"
	("name", "email", "password", "age", "profile_picture", "admin", "created_at", "updated_at", "last_login")
VALUES
	('Lennon', 'lennon@mail.com', '12345', '31', 'aaaa', 'false', '2024/05/04', '2024/05/04', '2024/05/04');
	
-- 1.1 Inserção de múltiplos dados e retornar os dados inseridos:
INSERT INTO "users"
	("name", "email", "password", "age", "profile_picture", "admin", "created_at", "updated_at", "last_login")
VALUES
	('Lorena', 'lorena@mail.com', '12345', '30', 'aaaa', 'false', '2024/05/04', '2024/05/04', '2024/05/04'),
	('Mirene', 'mirene@mail.com', '12345', '53', 'aaaa', 'false', '2024/05/04', '2024/05/04', '2024/05/04'),
	('Vauni', 'vauni@mail.com', '12345', '63', 'aaaa', 'false', '2024/05/04', '2024/05/04', '2024/05/04')
RETURNING *;
	

-- 2 Seleção de dados:
SELECT * FROM "users";

-- 2.1 Filtrando dados:
SELECT * FROM "users"
WHERE "created_at" = '2024/05/04';

-- 2.2 Filtrando dados por múltiplos critérios:
SELECT * FROM "users"
WHERE "created_at" = '2024/05/04'
AND "age" = '31'; -- Ou OR ao invés de AND

-- 2.3 Selecionando apenas algumas colunas:
SELECT "name", "admin" FROM "users";


-- 3 Atualização de dados:
UPDATE "users"
SET "admin" = 'false';

-- 3.1 Atualização de dados por critério:
UPDATE "users"
SET "admin" = 'true'
WHERE "age" > '40';

-- 3.2 Atualização de dados por múltiplos critérios:
UPDATE "users"
SET "admin" = 'true'
WHERE "age" > '40'
AND "name" = 'Vauni';

-- 3.3 Atualização de múltiplas colunas:
-- Forma 1:
UPDATE "users"
SET 
	"admin" = 'true',
	"password" = '12345'
WHERE "age" > '40';

-- Forma 2:
UPDATE "users"
SET 
	("email", "admin") = ROW('vauni@mail.com', 'true')
WHERE "name" = 'Vauni';


-- 4 Deleção de dados:
-- DELETE é para deleção de dados
-- DELETE é para deleção de tabela, banco de dados e usuários
DELETE FROM "users";

-- 4.1 Deleção de dados por critério:
DELETE FROM "users"
WHERE "name" = 'Lennon';

-- 4.2 Deleção de dados por múltiplos critérios:
DELETE FROM "users"
WHERE 
	"name" = 'Lennon'
AND "email" = 'lennon@mail.com';