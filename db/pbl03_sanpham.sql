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
-- Table structure for table `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sanpham` (
  `MaSP` varchar(10) NOT NULL,
  `TenSP` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `MaMH` varchar(10) NOT NULL,
  `MaNH` varchar(10) NOT NULL,
  `MaKM` varchar(10) NOT NULL,
  `HinhAnh` varchar(999) NOT NULL,
  `MoTa` varchar(999) NOT NULL,
  `GiaBan` int DEFAULT NULL,
  PRIMARY KEY (`MaSP`),
  KEY `fk_sp_nh_idx` (`MaNH`),
  KEY `fk_sp_km_idx` (`MaKM`),
  KEY `fk_sp_mh_idx` (`MaMH`),
  CONSTRAINT `fk_sp_km` FOREIGN KEY (`MaKM`) REFERENCES `khuyenmai` (`MaKM`),
  CONSTRAINT `fk_sp_mh` FOREIGN KEY (`MaMH`) REFERENCES `mathang` (`MaMH`),
  CONSTRAINT `fk_sp_nh` FOREIGN KEY (`MaNH`) REFERENCES `nhanhieu` (`MaNH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sanpham`
--

LOCK TABLES `sanpham` WRITE;
/*!40000 ALTER TABLE `sanpham` DISABLE KEYS */;
INSERT INTO `sanpham` VALUES ('HANGDEP','DDK HENRY GIBSON PENNY LOAFER - LFF08','MH1','NH1','KM10','ET24257B.jpg','giày đẹp',2750000),('OF18','VIP CLASSIC CAMBRIDGE - CAM 18','MH1','NH2','KM10','giay2.png','Đơn thuần là một sắc đen từ phần thân đến phần đế, VANS có thật sự liều lĩnh khi tung ra thiết kế quá đơn giản như vậy của mình ra thị trường vốn đang có nhiều thay đổi và sự chuyển biến tích cực? VANS CLASSIC AUTHENTIC BLACK/BLACK là một sản phẩm đặc trưng cho sự đơn giản đến lạ lùng khi tất cả đều được bao bọc bởi màu đen huyền bí và cá tính.',60000),('OF20','CLASSIC WHOLECUT OXFORD - OF20','MH1','NH4','KM10','giay3.png','Đơn thuần là một sắc đen từ phần thân đến phần đế, VANS có thật sự liều lĩnh khi tung ra thiết kế quá đơn giản như vậy của mình ra thị trường vốn đang có nhiều thay đổi và sự chuyển biến tích cực? VANS CLASSIC AUTHENTIC BLACK/BLACK là một sản phẩm đặc trưng cho sự đơn giản đến lạ lùng khi tất cả đều được bao bọc bởi màu đen huyền bí và cá tính.',30000),('OF26','CLASSIC CHISEL TOE OXFORD - OF26','MH1','NH4','KM10','giay4.png','Đơn thuần là một sắc đen từ phần thân đến phần đế, VANS có thật sự liều lĩnh khi tung ra thiết kế quá đơn giản như vậy của mình ra thị trường vốn đang có nhiều thay đổi và sự chuyển biến tích cực? VANS CLASSIC AUTHENTIC BLACK/BLACK là một sản phẩm đặc trưng cho sự đơn giản đến lạ lùng khi tất cả đều được bao bọc bởi màu đen huyền bí và cá tính.',70000),('OF31','LEBRON JAMES AMES OXFORD - OF31','MH1','NH4','KM10','giay5.png','Đơn thuần là một sắc đen từ phần thân đến phần đế, VANS có thật sự liều lĩnh khi tung ra thiết kế quá đơn giản như vậy của mình ra thị trường vốn đang có nhiều thay đổi và sự chuyển biến tích cực? VANS CLASSIC AUTHENTIC BLACK/BLACK là một sản phẩm đặc trưng cho sự đơn giản đến lạ lùng khi tất cả đều được bao bọc bởi màu đen huyền bí và cá tính.',50000),('SP15','SUPER SHOE ON THE WORLD','MH1','NH1','KM10','giay2.png','giày vip trên thế giới, mại zo nè',9000000),('SP16','CON CUA','MH1','NH1','KM10','giay1.jpg','ok',50000),('VN00JFJ','VANS CANVAS OLD SKOOL CLASSIC TRUE WHITE','MH1','NH3','KM10','giay6.jpg','Đơn thuần là một sắc đen từ phần thân đến phần đế, VANS có thật sự liều lĩnh khi tung ra thiết kế quá đơn giản như vậy của mình ra thị trường vốn đang có nhiều thay đổi và sự chuyển biến tích cực? VANS CLASSIC AUTHENTIC BLACK/BLACK là một sản phẩm đặc trưng cho sự đơn giản đến lạ lùng khi tất cả đều được bao bọc bởi màu đen huyền bí và cá tính.',90000),('VN0D5Y','VANS SK8-HI CLASSIC NAVY/WHITE','MH1','NH1','KM10','giay8.png','Đơn thuần là một sắc đen từ phần thân đến phần đế, VANS có thật sự liều lĩnh khi tung ra thiết kế quá đơn giản như vậy của mình ra thị trường vốn đang có nhiều thay đổi và sự chuyển biến tích cực? VANS CLASSIC AUTHENTIC BLACK/BLACK là một sản phẩm đặc trưng cho sự đơn giản đến lạ lùng khi tất cả đều được bao bọc bởi màu đen huyền bí và cá tính.',70000);
/*!40000 ALTER TABLE `sanpham` ENABLE KEYS */;
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
