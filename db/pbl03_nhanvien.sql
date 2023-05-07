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
-- Table structure for table `nhanvien`
--

DROP TABLE IF EXISTS `nhanvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvien` (
  `MaNV` varchar(10) NOT NULL,
  `TenNV` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `GioiTinh` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `NgaySinh` datetime NOT NULL,
  `DiaChi` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `Sdt` varchar(20) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Luong` int NOT NULL,
  PRIMARY KEY (`MaNV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien`
--

LOCK TABLES `nhanvien` WRITE;
/*!40000 ALTER TABLE `nhanvien` DISABLE KEYS */;
INSERT INTO `nhanvien` VALUES ('admin','Nguyễn Văn Ông Chủ','Nam','1990-03-03 00:00:00','123 Hai Bà Trưng','0123456777','chu@gmail.com',500000),('admin12','Nguyễn Văn Bánh','Nam','1990-03-03 00:00:00','125 Hai Bà Trưng','0123456889','chua@gmail.com',900000),('admin13','Nguyễn Văn Trái','Nam','1990-03-03 00:00:00','125 Hai Bà Trưng','0123456889','chua@gmail.com',900000),('customer0','Nguyễn Văn Trái','Nam','1990-03-03 00:00:00','125 Hai Bà Trưng','0123456889','chua@gmail.com',900000),('customer12','Nguyễn Văn Trái','Nam','1990-03-03 00:00:00','125 Hai Bà Trưng','0123456889','chua@gmail.com',900000),('employ0','Nguyễn Thị Hoàng','Nữ','1990-03-03 00:00:00','125 Hai Bà Nhị','0123456888','chu@gmail.com',900000),('employ1','Nguyễn Thị Huệ','Nữ','1990-03-03 00:00:00','125 Hai Bà Nhị','0123456888','chu@gmail.com',900000),('employ122','Nguyễn Thị Nhân','Nữ','1990-03-03 00:00:00','125 Hai Bà Nhị','0123456888','chu@gmail.com',900000),('employ13','Nguyễn Thị Chuối','Nữ','1990-03-03 00:00:00','125 Hai Bà Đen','0123456888','chu@gmail.com',900000),('employ16','Nguyễn Thị Bánh','Nữ','1990-03-03 00:00:00','125 Hai Bà Trưng','0123456889','chua@gmail.com',900000),('employ17','Phạm Đình Huy','Nam','1990-03-03 00:00:00','125 Kinh Dương Vương','0123457654','huy34@gmail.com',900000),('employ19','Võ Thị Na','Nam','1995-04-03 00:00:00','521 Kinh Dương Vương','0123457978','na734@gmail.com',900000),('employ2','Võ Thị Nữ','Nam','1995-04-03 00:00:00','522 Kinh Dương Vương','0123457978','nu734@gmail.com',900000),('employ21','Lê Thi','Nữ','1995-04-03 00:00:00','522 Kinh Dương Vương','0123457978','thi734@gmail.com',900000),('employ22','Lê Na','Nữ','1995-04-03 00:00:00','522 Kinh Dương Vương','0123457978','na734@gmail.com',900000),('employ23','Lê Ni','Nữ','1995-04-03 00:00:00','523 Kinh Dương Vương','0123457978','na734@gmail.com',900000),('employ24','Lê Bi','Nữ','1995-04-03 00:00:00','524 Kinh Dương Vương','0123457978','bi734@gmail.com',900000),('employ25','Lê Vi','Nữ','1995-04-03 00:00:00','525 Kinh Dương Vương','0123457978','vi734@gmail.com',900000),('employ26','Lê Thị Hợi','Nữ','1995-04-03 00:00:00','522 Kinh Dương Vương','0123457978','thi734@gmail.com',600000),('employee','Nguyễn Thị Nhân Viên','Nữ','1990-03-03 00:00:00','125 Hai Bà Trưng','0123456888','chu@gmail.com',900000),('employee50','Đạt Võ Thế','Nam','2023-05-04 09:12:00','Đà Nẵng','0123456789','datne@gmail.com',8000000);
/*!40000 ALTER TABLE `nhanvien` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-07 13:40:29
