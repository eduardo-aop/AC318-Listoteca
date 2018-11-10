-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 10, 2018 at 06:52 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ac318`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

CREATE TABLE `answer` (
  `id` int(11) NOT NULL,
  `answer` varchar(200) NOT NULL,
  `exerciseId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answer`
--

INSERT INTO `answer` (`id`, `answer`, `exerciseId`) VALUES
(105, 'qer', 61),
(106, 'qwer', 61),
(107, 'qwerqw', 61),
(108, 'erqwer', 61),
(109, 'qer', 62),
(110, 'qwer', 62),
(111, 'qwerqw', 62),
(112, 'erqwer', 62),
(113, 'asdasdsd', 63),
(114, 'qwer', 63),
(115, 'qwerqw', 63),
(116, 'erqwer', 63),
(117, 'qerasdas', 64),
(118, 'qwer', 64),
(119, 'qwerqw', 64),
(120, 'erqwer', 64);

-- --------------------------------------------------------

--
-- Table structure for table `exercise`
--

CREATE TABLE `exercise` (
  `id` int(11) NOT NULL,
  `question` varchar(200) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `theme` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `exercise`
--

INSERT INTO `exercise` (`id`, `question`, `subject`, `theme`) VALUES
(35, 'aaaaa', 'Programação Orientada a Objetos', 'ACID'),
(36, 'qqqq', 'Banco de Dados', 'Herança'),
(37, 'qqqq', 'Banco de Dados', 'Herança'),
(38, 'qqqq', 'Banco de Dados', 'Herança'),
(39, 'qqqq', 'Banco de Dados', 'Herança'),
(40, 'qqqq', 'Banco de Dados', 'Herança'),
(41, 'qqqq', 'Banco de Dados', 'Herança'),
(42, 'qqqq', 'Banco de Dados', 'Herança'),
(43, 'qqqq', 'Banco de Dados', 'Herança'),
(44, 'qqqq', 'Sistema Operacional', 'Regex'),
(45, 'qqqq', 'Sistema Operacional', 'Regex'),
(46, 'qqqq', 'Sistema Operacional', 'Regex'),
(47, 'qqqq', 'Sistema Operacional', 'Regex'),
(48, 'qqqq', 'Sistema Operacional', 'Regex'),
(49, 'qqqq', 'Sistema Operacional', 'Regex'),
(50, 'qqqq', 'Sistema Operacional', 'Regex'),
(51, 'qqqq', 'Sistema Operacional', 'Regex'),
(52, 'qqqq', 'Sistema Operacional', 'Regex'),
(53, 'qqqq', 'Sistema Operacional', 'Regex'),
(54, 'qqqq', 'Sistema Operacional', 'Regex'),
(55, 'qqqq', 'Sistema Operacional', 'Regex'),
(56, 'qqqq', 'Sistema Operacional', 'Regex'),
(57, 'qqqq', 'Sistema Operacional', 'Regex'),
(58, 'qqqq', 'Sistema Operacional', 'Regex'),
(59, 'qqqq', 'Sistema Operacional', 'Regex'),
(60, 'qqqq', 'Sistema Operacional', 'Regex'),
(61, 'qqqq', 'Sistema Operacional', 'Regex'),
(62, 'qqqq', 'Sistema Operacional', 'Regex'),
(63, 'qqqq', 'Sistema Operacional', 'Regex'),
(64, 'qqqq', 'Sistema Operacional', 'Regex'),
(65, 'oloco mey sera que vai?', 'Compiladores', 'Regex'),
(66, 'oloco mey sera que vai?', 'Compiladores', 'Regex'),
(67, 'oloco mey sera que vai?', 'Compiladores', 'Regex'),
(68, 'aaaaaaaeeee', 'Compiladores', 'ACID'),
(69, 'aaaaaaaeeee', 'Compiladores', 'ACID'),
(70, 'qqwqwqwqwq', 'Compiladores', 'Herança'),
(71, 'reer', 'ere', 'erer'),
(72, 'reer', 'ere', 'erer'),
(73, 'reer', 'ere', 'erer'),
(74, 'reer', 'ere', 'erer'),
(75, 'reer', 'ere', 'erer'),
(76, 'reer', 'ere', 'erer'),
(77, 'reer', 'ere', 'erer'),
(78, 'reer', 'ere', 'erer'),
(79, 'yyyy', 'yyyyyy', 'yyyy'),
(80, 'rrrrrrrrrrrrrrrr', 'Banco de Dados', 'rrrrrrrrrrrrr'),
(81, '44', '44', '44'),
(82, 'qeqw', 'qwe', 'eqw'),
(83, 'qeqw', 'qwe', 'eqw'),
(84, 'qeqw', 'qwe', 'eqw'),
(85, 'qeqw', 'qwe', 'eqw'),
(86, 'qeqw', 'qwe', 'eqw'),
(87, 'qeqw', 'qwe', 'eqw'),
(88, 'qeqw', 'qwe', 'eqw'),
(89, 'qeqw', 'qwe', 'eqw'),
(90, 'aaaa', 'aa', 'aa'),
(91, '123', '123', '123'),
(92, '123', '123', '123'),
(93, '123', '123', '123'),
(94, 'rttr', 'trtrt', 'rtrtr'),
(95, 'yyy', 'yyy', 'yyy'),
(96, 'pppp', 'pp', 'pp'),
(97, 'pppp', 'pp', 'pp'),
(98, 'pppp', 'pp', 'pp'),
(99, '3333', '333', '33'),
(100, 't', 't', 't'),
(101, 'y', 'y', 'y'),
(102, 'vv', 'vv', 'vv'),
(103, 'r', 'r', 'r'),
(104, 'hj', 'hj', 'hj'),
(105, 'hh', 'hh', 'hh'),
(106, 'hh2', 'hh', 'hh'),
(107, '123', '123', '123'),
(108, 'as', 'a', 's'),
(109, '978', '7897', '789'),
(110, 'a', 'a', 'a'),
(111, 'ee', 'e', 'e'),
(112, 'e', 'e', 'e'),
(113, '5', '5', '5'),
(114, 'e', 'e', 'e'),
(115, 'e', 'e', 'e'),
(116, 'd', 'd', 'd'),
(117, 't', 't', 't'),
(118, 'y', 'y', 'y'),
(119, 's', 's', 's'),
(120, 'u', 'u', 'u'),
(121, 'e', 'e', 'e'),
(122, 'h', 'g', 'jh'),
(123, 'h', 'g', 'jh'),
(124, 't', 't', 't'),
(125, 't', 't', 't'),
(126, 's', 's', 's'),
(127, 'y', 'y', 'y'),
(128, 't', 't', 't'),
(129, 's', 's', 's'),
(130, 'p', 'pp', 'p'),
(131, 'h', 'h', 'h'),
(132, 's', 's', 's'),
(133, 'f', 'f', 'f'),
(134, 'd', 'd', 'd'),
(135, 's', 's', 's'),
(136, 's', 's', 's'),
(137, 'aaaaa', 'Programação Orientada a Objetos', 'asd'),
(138, 'sssss', 'Programação Orientada a Objetos', 'asdd');

-- --------------------------------------------------------

--
-- Table structure for table `list`
--

CREATE TABLE `list` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `theme` varchar(50) DEFAULT NULL,
  `teacherId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `list`
--

INSERT INTO `list` (`id`, `name`, `subject`, `theme`, `teacherId`) VALUES
(13, 'qweqweqwe', 'Sistema Operacional', 'Regex', 0),
(14, 'ddddd', 'Banco de Dados', 'Herança', 0),
(15, 'asdasdasdas', 'Sistema Operacional', 'Regex', 0),
(16, 'so lista top', 'Banco de Dados', 'Herança', 0);

-- --------------------------------------------------------

--
-- Table structure for table `listHasExercise`
--

CREATE TABLE `listHasExercise` (
  `id` int(11) NOT NULL,
  `listId` int(11) NOT NULL,
  `exerciseId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `listHasExercise`
--

INSERT INTO `listHasExercise` (`id`, `listId`, `exerciseId`) VALUES
(21, 13, 50),
(22, 13, 55),
(23, 13, 56),
(24, 13, 57),
(25, 13, 58),
(26, 13, 60),
(27, 13, 61),
(28, 13, 62),
(29, 13, 63),
(30, 13, 64),
(31, 14, 36),
(32, 14, 37),
(33, 14, 38),
(34, 14, 39),
(35, 14, 40),
(36, 14, 41),
(37, 14, 42),
(38, 14, 43),
(39, 15, 44),
(40, 15, 45),
(41, 15, 46),
(42, 15, 49),
(43, 15, 51),
(44, 15, 52),
(45, 15, 53),
(46, 15, 54),
(47, 15, 59),
(48, 15, 61),
(49, 16, 36),
(50, 16, 37),
(51, 16, 38),
(52, 16, 39),
(53, 16, 40),
(54, 16, 41),
(55, 16, 42),
(56, 16, 43);

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`id`, `name`, `email`, `userName`, `password`) VALUES
(0, 'Administrador', 'admin@listoteca.br', 'admin', '123456'),
(1, 'joazin', 'jaozin@inatel.br', 'jaozin', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `exercise_id` (`exerciseId`);

--
-- Indexes for table `exercise`
--
ALTER TABLE `exercise`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `teacher_id` (`teacherId`);

--
-- Indexes for table `listHasExercise`
--
ALTER TABLE `listHasExercise`
  ADD PRIMARY KEY (`id`),
  ADD KEY `list_id` (`listId`,`exerciseId`),
  ADD KEY `exercise_id` (`exerciseId`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answer`
--
ALTER TABLE `answer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT for table `exercise`
--
ALTER TABLE `exercise`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;

--
-- AUTO_INCREMENT for table `list`
--
ALTER TABLE `list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `listHasExercise`
--
ALTER TABLE `listHasExercise`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answer`
--
ALTER TABLE `answer`
  ADD CONSTRAINT `answer_ibfk_1` FOREIGN KEY (`exerciseId`) REFERENCES `exercise` (`id`);

--
-- Constraints for table `list`
--
ALTER TABLE `list`
  ADD CONSTRAINT `list_ibfk_1` FOREIGN KEY (`teacherId`) REFERENCES `teacher` (`id`);

--
-- Constraints for table `listHasExercise`
--
ALTER TABLE `listHasExercise`
  ADD CONSTRAINT `listHasExercise_ibfk_1` FOREIGN KEY (`exerciseId`) REFERENCES `exercise` (`id`),
  ADD CONSTRAINT `listHasExercise_ibfk_2` FOREIGN KEY (`listId`) REFERENCES `list` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
