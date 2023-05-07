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
-- Table structure for table `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoan` (
  `MaTK` varchar(10) NOT NULL,
  `TenDangNhap` varchar(10) NOT NULL,
  `MatKhau` varchar(20) DEFAULT NULL,
  `MaQuyen` varchar(10) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Sdt` varchar(20) NOT NULL,
  PRIMARY KEY (`MaTK`),
  KEY `fk_tk_pq_idx` (`MaQuyen`),
  KEY `fk_tk_nv_idx` (`TenDangNhap`),
  CONSTRAINT `fk-tk_nv` FOREIGN KEY (`TenDangNhap`) REFERENCES `nhanvien` (`MaNV`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `fk_tk_kh` FOREIGN KEY (`TenDangNhap`) REFERENCES `khachhang` (`MaKH`),
  CONSTRAINT `fk_tk_pq` FOREIGN KEY (`MaQuyen`) REFERENCES `phanquyen` (`MaQuyen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
INSERT INTO `taikhoan` VALUES ('1','admin','123456','1','admin@gmail.com','0123456789'),('20','admin12','123456','1','employee@gmail.com','0123456789'),('21','admin13','123456','1','employee@gmail.com','0123456789'),('25','customer12','123456','3','employee@gmail.com','0123456789'),('26','customer0','123456','3','customer@gmail.com','0123456789'),('3','customer','123456','3','customer@gmail.com','0123456789'),('30','employ21','123456','2','thi734@nkh.com','0123456756'),('31','employ22','123456','2','na734@nkh.com','0123456756'),('32','employ24','123456','2','bi734@nkh.com','0123456756'),('33','employ25','123456','2','vi734@nkh.com','0123456756'),('50','customer3','123456','3','b@gmail.com','0123456789'),('51','customer4','123456','3','c@gmail.com','0123456789'),('52','customer5','123456','3','t@gmail.com','0123456789'),('53','customer6','123456','3','l@gmail.com','0123456789'),('54','customer7','123456','3','l@gmail.com','0123456789'),('customer11','customer11','123456','3','huydeptrai@gmail.com','0123456789'),('customer50','customer50','1234567','3','huydeptrai@gmail.com','0123456789'),('customer88','customer88','123456','3','khoa@gmail.com','01234567898'),('customer89','customer89','123456','3','l@gmail.com','0123456789'),('customer90','customer90',NULL,'3','hoavo@gmail.com','01234567899'),('employ26','employ26','1234567','2','thi734@nkh.com','0123456756'),('employee50','employee50','123456','2','datne@gmail.com','0123456789');
/*!40000 ALTER TABLE `taikhoan` ENABLE KEYS */;
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
