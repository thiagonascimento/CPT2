-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 23/12/2021 às 19:21
-- Versão do servidor: 10.4.22-MariaDB
-- Versão do PHP: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `CPTBD`
--
CREATE DATABASE IF NOT EXISTS `CPTBD` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `CPTBD`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Formulario`
--

CREATE TABLE `Formulario` (
  `idCliente` int(255) NOT NULL,
  `Nome` varchar(255) NOT NULL,
  `Telefone` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Pais` text NOT NULL,
  `Assunto` text NOT NULL,
  `Mensagem` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `Paises`
--

CREATE TABLE `Paises` (
  `id` int(11) NOT NULL,
  `paises` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `Paises`
--

INSERT INTO `Paises` (`id`, `paises`) VALUES
(1, 'Brasil'),
(2, 'Alemanha'),
(3, 'Canada'),
(4, 'Argentina');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `Formulario`
--
ALTER TABLE `Formulario`
  ADD PRIMARY KEY (`idCliente`);

--
-- Índices de tabela `Paises`
--
ALTER TABLE `Paises`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `Formulario`
--
ALTER TABLE `Formulario`
  MODIFY `idCliente` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
