-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vendas
-- ------------------------------------------------------
-- Server version	5.6.26

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
-- Table structure for table `tb_produto`
--

DROP TABLE IF EXISTS `tb_produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_produto` (
  `id_produto` int(11) NOT NULL AUTO_INCREMENT,
  `nme_produto` varchar(500) NOT NULL,
  `dsc_produto` varchar(2000) NOT NULL,
  `preco_produto` decimal(10,2) NOT NULL,
  `dta_cad_produto` datetime NOT NULL,
  `dta_mod_produto` datetime NOT NULL,
  PRIMARY KEY (`id_produto`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_produto`
--

LOCK TABLES `tb_produto` WRITE;
/*!40000 ALTER TABLE `tb_produto` DISABLE KEYS */;
INSERT INTO `tb_produto` VALUES (28,'Processador AMD Ryzen 5 5600X','Processador AMD Ryzen 5 5600X Jogue com os melhores 6 núcleos incríveis para quem quer apenas jogar. Imbatível no jogo Obtenha o desempenho de jogos de alta velocidade do melhor processador de desktop do mundo. AMD Ryzen para criadores Codifique mais rápido. Renderize mais rápido. Repita mais rápido. Crie mais e mais rápido com os processadores AMD Ryzen™. Desempenho de próximo nível para arquitetos, engenheiros e profissionais criativos Imagine o que você pode fazer com o processador mais avançado do mundo. Garanta já o seu processador AMD Ryzen 5 5600X no KaBuM!',1809.90,'2022-02-13 19:32:52','2022-02-13 19:39:25'),(29,'Placa-Mãe Asus ROG Strix X570-F Gaming','A placa-mãe ROG Strix X570-F Gaming oferece a experiência ROG com uma combinação atraente de recursos, opções de refrigeração abrangentes e estilo inegável que fornecem a base ideal para a criação de um poderoso sistema de jogos ATX. Com uma nova estética de design futurista e iluminação RGB integrada e um padrão de texto cibernético, o ROG Strix X570-F Gaming fornece tudo o que você precisa para construir uma arma formidável para superar os demais.',2659.90,'2022-02-13 19:34:47','2022-02-13 19:34:47'),(30,'Zotac NVIDIA GeForce RTX 3090 Trinity','Placa de Vídeo Zotac NVIDIA GeForce RTX 3090 Trinity The Ultimate Play A placa de vídeo GeForce RTX™ 3090 conta com a tecnologia Ampere — a 2ª geração da arquitetura RTX da NVIDIA. Desenvolvida com RT Cores e Tensor Cores avançados, novos multiprocessadores de streaming e uma memória G6 de alta velocidade, ela oferece a potência necessária para você detonar nos games mais exigentes. Ray Tracing O Ray Tracing é o santo graal dos gráficos nos games, simulando o comportamento físico da luz para proporcionar uma renderização em tempo real e com qualidade cinematográfica — até mesmo nos games mais visualmente intensos. Vitória medida em milissegundos O NVIDIA Reflex oferece a melhor vantagem competitiva, a latência mais baixa e o menor tempo de resposta com a tecnologia das placas de vídeo GeForce RTX Série 30 e dos monitores NVIDIA® G-SYNC®. Identifique alvos na hora, reaja mais rápido e aumente a precisão de mira com um pacote revolucionário de tecnologias criadas para medir e otimizar a latência do sistema nos games competitivos. Desenvolva sua criatividade Leve seus projetos criativos a um nível totalmente novo com as placas de vídeo GeForce RTX Série 30. Elas garantem a aceleração por AI nas principais aplicações de criação. da plataforma de drivers dedicados NVIDIA Studio e de ferramentas exclusivas. Além disso, foram criadas para oferecer o melhor desempenho em tempo recorde. Seja renderizando cenas 3D complexas, editando vídeos em 8K ou fazendo lives com a melhor codificação e qualidade de imagem, as placas de vídeo GeForce RTX oferecem o desempenho necessário para realizar seus melhores projetos. Garanta já a sua Placa de Vídeo Zotac NVIDIA GeForce RTX 3090 Trinity no KaBuM!',16999.90,'2022-02-13 19:36:10','2022-02-13 19:36:10'),(31,'Monitor Gamer Zowie LED 24.5 Widescreen','Monitor Gamer Zowie LED 24.5 Widescreen\nA tecnologia exclusiva BenQ ZOWIE - \"Dynamic Accuracy\" mantém uma notável claridade visual durante o movimento no jogo, permitindo que os jogadores vejam rapidamente e atingam os alvos. Ações com movimentos rápidos da tela, como a spray de armas, serão mais beneficiadas pelo DyAc, pois a capacidade de enxergar com mais clareza pode ajudar no controle de recoil.\n\n \n\nTaxa de Atualização Nativa de 240Hz - Evolução da Suavidade\nCapte todos os detalhes do movimento e desfrute da jogabilidade mais fluida do monitor nativo de taxa de atualização 240Hz BenQ ZOWIE, que garante uma visualização perfeita de movimento rápido de forma consistente em todos os momentos. (Por favor, certifique-se de que o desempenho do PC está no mesmo nível para ativar totalmente 240Hz).\n\n \n\nShield - Ajuda Você a se Concentrar no Jogo com Resolução Full HD\nShield - revela o caminho para se concentrar nos jogos. O ângulo ajustável e o design removível permitem que o Escudo (shield) adote vários ambientes de acordo com as preferências. Apenas se concentre em ganhar o jogo. Nunca seja vítima de um camper escondido em um canto escuro novamente. Black eQualizer aumenta a visibilidade em cenas escuras sem a superexposição das áreas claras.',3899.90,'2022-02-13 19:37:28','2022-02-13 19:37:28');
/*!40000 ALTER TABLE `tb_produto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-18 17:57:24
