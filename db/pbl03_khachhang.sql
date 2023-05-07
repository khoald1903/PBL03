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
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khachhang` (
  `MaKH` varchar(10) NOT NULL,
  `TenKH` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `GioiTinh` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Email` varchar(30) NOT NULL,
  `DiaChi` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Sdt` varchar(20) NOT NULL,
  PRIMARY KEY (`MaKH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
INSERT INTO `khachhang` VALUES ('customer','Nguyễn Văn A','Nam','a@gmail.com','đường mương','0123456789'),('customer11','Pham Huy','Nam','huydeptrai@gmail.com','Quang Nam','0123456789'),('customer12','Pham Huy','Nam','huyne@gmail.com','Da Nang','0123456789'),('customer15','Pham Huy','Nam','huyne11@gmail.com','Quang Nam','0123456789'),('customer3','Nguyễn Văn B','Nam','b@gmail.com','đường Nguyễn Huy Trứ','0123456789'),('customer4','Nguyễn Văn C','Nam','c@gmail.com','đường Nguyễn Huy Trứ','0123456789'),('customer5','Nguyễn Văn Tâm','Nam','t@gmail.com','đường Nguyễn Huy Trứ','0123456789'),('customer50','Nguyen Van Tam','Nam','huydeptrai@gmail.com','Quang Nam','0123456789'),('customer6','Lê Thị Lệ','Nữ','l@gmail.com','Nguyễn Huy Tưởng','0123456789'),('customer7','Lê Thị Lệ','Nữ','l@gmail.com','Nguyễn Huy Tưởng','0123456789'),('customer77','duc khoa`','nam','khoa@gmail.com','quang nam','0123456789'),('customer88','Le Khoa','Nam','khoa@gmail.com','quang nam','01234567898'),('customer89','Lê Thị Lệ','Nữ','l@gmail.com','Nguyễn Huy Tưởng','0123456789'),('customer90','Võ Đức Hoà','Nam','hoavo@gmail.com','Huế','01234567899');
/*!40000 ALTER TABLE `khachhang` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-07 13:40:30
