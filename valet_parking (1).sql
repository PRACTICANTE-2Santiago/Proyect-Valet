-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-02-2022 a las 19:17:37
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `valet_parking`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

CREATE TABLE `administradores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `paterno` varchar(250) NOT NULL,
  `materno` varchar(250) NOT NULL,
  `correo_electronico` varchar(50) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `contrasenia` varchar(100) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `estatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `automovil`
--

CREATE TABLE `automovil` (
  `id` int(11) NOT NULL,
  `id_valet` int(11) NOT NULL,
  `placas` varchar(16) COLLATE utf8_bin NOT NULL,
  `descripcion` varchar(300) COLLATE utf8_bin NOT NULL,
  `foto1` varchar(100) COLLATE utf8_bin NOT NULL,
  `foto2` varchar(100) COLLATE utf8_bin NOT NULL,
  `foto3` varchar(100) COLLATE utf8_bin NOT NULL,
  `id_registro` int(11) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `id_ubicacion` int(11) NOT NULL,
  `latitud` varchar(500) COLLATE utf8_bin NOT NULL,
  `longitud` varchar(500) COLLATE utf8_bin NOT NULL,
  `comentarios` varchar(500) COLLATE utf8_bin NOT NULL,
  `fecha_ubicacion` datetime NOT NULL,
  `fecha_pedir` datetime NOT NULL,
  `id_entrega` int(11) NOT NULL,
  `fecha_entregado` datetime NOT NULL,
  `comentarios_entregado` varchar(500) COLLATE utf8_bin NOT NULL,
  `fecha_notificado` datetime NOT NULL,
  `comentarios_cliente` varchar(500) COLLATE utf8_bin NOT NULL,
  `token` varchar(250) COLLATE utf8_bin NOT NULL,
  `condiciones` int(11) NOT NULL,
  `estatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `choferes`
--

CREATE TABLE `choferes` (
  `id` int(11) NOT NULL,
  `id_valet` int(11) NOT NULL,
  `usuario` varchar(100) COLLATE utf8_bin NOT NULL,
  `contrasenia` varchar(100) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `nombre` varchar(100) COLLATE utf8_bin NOT NULL,
  `apellido_paterno` varchar(100) COLLATE utf8_bin NOT NULL,
  `apellido_materno` varchar(100) COLLATE utf8_bin NOT NULL,
  `ine` varchar(100) COLLATE utf8_bin NOT NULL,
  `licencia` varchar(100) COLLATE utf8_bin NOT NULL,
  `telefono` int(10) NOT NULL,
  `correo_electronico` varchar(100) COLLATE utf8_bin NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `token` varchar(500) COLLATE utf8_bin NOT NULL,
  `estatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chofer_lugares`
--

CREATE TABLE `chofer_lugares` (
  `id` int(11) NOT NULL,
  `id_comercios` int(11) NOT NULL,
  `id_chofer` int(11) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `estatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comercios`
--

CREATE TABLE `comercios` (
  `id` int(11) NOT NULL,
  `id_valet` int(11) NOT NULL,
  `nombre` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `calle` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `codigo_postal` int(11) NOT NULL,
  `telefono` int(10) NOT NULL,
  `correo_electronico` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `logotipo` varchar(100) COLLATE utf8_bin NOT NULL,
  `representante` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `tarifa` varchar(500) COLLATE utf8_bin NOT NULL,
  `estatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contador`
--

CREATE TABLE `contador` (
  `id` int(11) NOT NULL,
  `id_valet` int(11) NOT NULL,
  `id_creditos` int(11) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `total` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `estatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `creditos`
--

CREATE TABLE `creditos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_bin NOT NULL,
  `costo` varchar(500) COLLATE utf8_bin NOT NULL,
  `servicios` varchar(500) COLLATE utf8_bin NOT NULL,
  `aviso` varchar(500) COLLATE utf8_bin NOT NULL,
  `cancelaciones` varchar(500) COLLATE utf8_bin NOT NULL,
  `estatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `id_valet` int(11) NOT NULL,
  `usuario` varchar(100) COLLATE utf8_bin NOT NULL,
  `contrasena` varchar(100) COLLATE utf8_bin NOT NULL,
  `nombre` varchar(100) COLLATE utf8_bin NOT NULL,
  `apellido_paterno` varchar(100) COLLATE utf8_bin NOT NULL,
  `apellido_materno` varchar(100) COLLATE utf8_bin NOT NULL,
  `calle` varchar(500) COLLATE utf8_bin NOT NULL,
  `num_ext` int(11) NOT NULL,
  `num_int` int(11) NOT NULL,
  `colonia` varchar(500) COLLATE utf8_bin NOT NULL,
  `municipio` varchar(500) COLLATE utf8_bin NOT NULL,
  `estado` varchar(500) COLLATE utf8_bin NOT NULL,
  `pais` varchar(500) COLLATE utf8_bin NOT NULL,
  `codigo_postal` int(11) NOT NULL,
  `telefono` int(10) NOT NULL,
  `correo_electronico` varchar(100) COLLATE utf8_bin NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `estatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valet`
--

CREATE TABLE `valet` (
  `id` int(11) NOT NULL,
  `id_creditos` int(11) NOT NULL,
  `id_pin` varchar(100) COLLATE utf8_bin NOT NULL,
  `nombre` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `telefono` int(10) NOT NULL,
  `correo_electronico` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `representante` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `estatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `automovil`
--
ALTER TABLE `automovil`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_valet` (`id_valet`);

--
-- Indices de la tabla `choferes`
--
ALTER TABLE `choferes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_valet` (`id_valet`);

--
-- Indices de la tabla `chofer_lugares`
--
ALTER TABLE `chofer_lugares`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_comercios` (`id_comercios`),
  ADD KEY `id_chofer` (`id_chofer`);

--
-- Indices de la tabla `comercios`
--
ALTER TABLE `comercios`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `id_valet` (`id_valet`);

--
-- Indices de la tabla `contador`
--
ALTER TABLE `contador`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_valet` (`id_valet`),
  ADD KEY `id_creditos` (`id_creditos`);

--
-- Indices de la tabla `creditos`
--
ALTER TABLE `creditos`
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_valet` (`id_valet`);

--
-- Indices de la tabla `valet`
--
ALTER TABLE `valet`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `automovil`
--
ALTER TABLE `automovil`
  ADD CONSTRAINT `automovil_ibfk_1` FOREIGN KEY (`id_valet`) REFERENCES `valet` (`id`);

--
-- Filtros para la tabla `choferes`
--
ALTER TABLE `choferes`
  ADD CONSTRAINT `choferes_ibfk_1` FOREIGN KEY (`id_valet`) REFERENCES `valet` (`id`);

--
-- Filtros para la tabla `chofer_lugares`
--
ALTER TABLE `chofer_lugares`
  ADD CONSTRAINT `chofer_lugares_ibfk_1` FOREIGN KEY (`id_comercios`) REFERENCES `comercios` (`id`),
  ADD CONSTRAINT `chofer_lugares_ibfk_2` FOREIGN KEY (`id_chofer`) REFERENCES `choferes` (`id`);

--
-- Filtros para la tabla `comercios`
--
ALTER TABLE `comercios`
  ADD CONSTRAINT `comercios_ibfk_1` FOREIGN KEY (`id_valet`) REFERENCES `valet` (`id`);

--
-- Filtros para la tabla `contador`
--
ALTER TABLE `contador`
  ADD CONSTRAINT `contador_ibfk_1` FOREIGN KEY (`id_valet`) REFERENCES `valet` (`id`),
  ADD CONSTRAINT `contador_ibfk_2` FOREIGN KEY (`id_creditos`) REFERENCES `creditos` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_valet`) REFERENCES `valet` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
