CREATE TABLE country (
    id INT PRIMARY KEY AUTOINCREMENT,
    code VARCHAR NOT NULL,
    name VARCHAR(255) NOT NULL,
    emoji VARCHAR(255) NOT NULL,
    continent VARCHAR(255) NOT NULL,
)

INSERT INTO country (code, name, emoji, continent) VALUES 
('FR', 'France', '🇲🇫', 'Europe'),
('JP', 'Japan', '🇯🇵', 'Asia'),
('USA', 'United States', '🇺🇲', 'America'),
('TUN', 'Tunisia', '🇹🇳', 'Africa'),
('IT', 'Italia', '🇮🇹', 'Europe');

SELECT * FROM country;