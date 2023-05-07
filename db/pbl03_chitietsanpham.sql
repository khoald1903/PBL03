-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: pbl03
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chitietsanpham`
--

DROP TABLE IF EXISTS `chitietsanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietsanpham` (
  `id` int NOT NULL,
  `MaSP` varchar(10) NOT NULL,
  `MaKC` varchar(10) NOT NULL,
  `MaMau` varchar(10) NOT NULL,
  `Gia` int DEFAULT NULL,
  `SoLuong` int DEFAULT NULL,
  `HinhAnh` varchar(45) DEFAULT NULL,
  `TrangThai` tinyint DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_ctsp_sp_idx` (`MaSP`),
  KEY `fk_ctsp_mau_idx` (`MaMau`),
  KEY `fk_ctsp_kc_idx` (`MaKC`),
  CONSTRAINT `fk_ctsp_kc` FOREIGN KEY (`MaKC`) REFERENCES `kichco` (`MaKC`),
  CONSTRAINT `fk_ctsp_mau` FOREIGN KEY (`MaMau`) REFERENCES `mau` (`MaMau`),
  CONSTRAINT `fk_ctsp_sp` FOREIGN KEY (`MaSP`) REFERENCES `sanpham` (`MaSP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietsanpham`
--

LOCK TABLES `chitietsanpham` WRITE;
/*!40000 ALTER TABLE `chitietsanpham` DISABLE KEYS */;
INSERT INTO `chitietsanpham` VALUES (1,'HANGDEP','KC37','M1',0,50,'giay10.png',0),(2,'HANGDEP','KC38','M1',10000,50,'giay10.png',0),(3,'HANGDEP','KC39','M1',20000,50,'giay10.png',0),(4,'OF18','KC37','M1',0,50,'giay10.png',0),(5,'OF18','KC38','M1',10000,50,'giay10.png',0),(6,'OF18','KC39','M1',30000,60,'giay10.png',1),(7,'OF20','KC37','M1',0,50,'giay10.png',1),(8,'OF20','KC38','M1',10000,50,'giay4.png',1),(9,'OF20','KC39','M1',20000,50,'giay10.png',1),(10,'OF26','KC37','M1',0,50,'giay10.png',1),(11,'OF26','KC38','M1',10000,50,'giay10.png',1),(12,'OF26','KC39','M1',20000,50,'giay10.png',1),(13,'OF31','KC37','M1',0,50,'giay4.png',1),(14,'OF31','KC38','M1',10000,50,'giay10.png',1),(15,'OF31','KC39','M1',20000,50,'giay10.png',1),(16,'VN00JFJ','KC37','M1',0,50,'giay10.png',1),(17,'VN00JFJ','KC38','M1',10000,50,'giay4.png',1),(18,'VN00JFJ','KC39','M1',20000,50,'giay10.png',1),(19,'VN0D5Y','KC37','M1',0,50,'giay10.png',1),(20,'VN0D5Y','KC38','M1',10000,50,'giay10.png',1),(21,'VN0D5Y','KC39','M1',20000,50,'giay10.png',1),(202,'OF18','KC37','M3',0,50,'giay10.png',1),(203,'OF18','KC37','M4',10000,50,'giay10.png',1),(204,'OF20','KC37','M4',20000,50,'giay10.png',1),(252,'VN0D5Y','KC40','M5',10000,50,'giay7.jpg',1),(302,'SP15','KC37','M1',9000,10,'giay5.png',1),(352,'SP16','KC37','M1',5000,50,'JAMES_OXFORD_OF31.webp',1),(353,'SP16','KC38','M1',5000,50,'giay6.jpg',1),(354,'SP16','KC40','M2',6000,50,'giay4.png',1),(402,'HANGDEP','KC40','M1',30000,60,'ET21967B_TrangDo.jpg',1);
/*!40000 ALTER TABLE `chitietsanpham` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-07 13:40:28
