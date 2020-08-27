SET NAMES UTF8;
DROP DATABASE IF EXISTS movie;
CREATE DATABASE movie CHARSET=UTF8;
USE movie;
-- 电影表
CREATE TABLE movies(
  mid INT PRIMARY KEY AUTO_INCREMENT,
  mName VARCHAR(32),
  pic VARCHAR(128),
  score CHAR(3),
  intro VARCHAR(32),
  showTime CHAR(10),
  watcher INT,
  hot TINYINT,
  lanType VARCHAR(8),
  duration SMALLINT,
  mType VARCHAR(8),
  mPhoto VARCHAR(512),
  story VARCHAR(512),
  director VARCHAR(16),
  actor VARCHAR(32),
  video VARCHAR(256),
  sType VARCHAR(64)
);

-- 影城表
CREATE TABLE cinemas(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  cityId INT,
  cName VARCHAR(32),
  loca VARCHAR(64),
  telephone VARCHAR(16),
  pic VARCHAR(512),
  map VARCHAR(64),
  bus VARCHAR(256),
  hall VARCHAR(32)
);

-- 用户表
CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  phone CHAR(11),
  sex TINYINT,
  upwd VARCHAR(32),
  want VARCHAR(128)
);

-- 订单表
CREATE TABLE orders(
  oId INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  mid INT,
  cid INT,
  date VARCHAR(32),
  time VARCHAR(32),
  roomid SMALLINT,
  price INT,
  choiceSeat VARCHAR(512),
  showSeat VARCHAR(512),
  productList VARCHAR(512)
);

-- 小吃零食表
CREATE TABLE foods(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fName VARCHAR(12),
  fType VARCHAR(8),
  sale decimal(3,1),
  price decimal(3,1),
  tid INT,
  fpic VARCHAR(64)
);

-- 轮播表
CREATE TABLE carousel(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(512)
);

-- 插入电影信息
INSERT INTO movies VALUES (1,"爱宠大机密2","movie_img/aichong/1.jpg","8.9","主人不在家 爱宠冒险再出发","2019-07-05",1406,1,"英文 3D",86,"动画","movie_img/aichong/2.jpg&movie_img/aichong/3.jpg&movie_img/aichong/4.jpg&movie_img/aichong/5.jpg&movie_img/aichong/6.jpg&movie_img/aichong/7.jpg&movie_img/aichong/8.jpg&movie_img/aichong/9.jpg&movie_img/aichong/10.jpg","《爱宠大机密2》将延续2016年夏天轰动一时的《爱宠大机密》的故事，讲述宠物在我们每天离家工作或上学后的生活。照明娱乐创始人兼首席执行官克里斯·梅勒丹德利和他长久以来的合作伙伴珍娜·海莉将共同制作这部续集。《爱宠大机密》是当时开画成绩最好的原创电影，不论是动画片还是其他类型。《爱宠大机密2》继续由布莱恩·林奇（《小黄人大眼萌》）编剧，并再一次由克里斯·雷纳德（《神偷奶爸》系列，《老雷斯的故事》）执导。","克里斯·雷纳德","帕顿·奥斯瓦尔特 ; 凯文·哈特","http://img.cgv.com.cn/img/mov/2019/10003272/trailer/201906111801521522906.mp4","movie_img/4dx.png");

INSERT INTO movies VALUES (null,"何以为家","movie_img/heyiwejia/1.jpg","9.3","愿每一个孩子都被温柔以待","2019-04-29",423,1,"英文 2D",86,"剧情","movie_img/heyiwejia/2.jpg&movie_img/heyiwejia/3.jpg&movie_img/heyiwejia/4.jpg&movie_img/heyiwejia/5.jpg&movie_img/heyiwejia/6.jpg&movie_img/heyiwejia/7.jpg&movie_img/heyiwejia/8.jpg&movie_img/heyiwejia/9.jpg","法庭上，十二岁的男孩赞恩向法官状告他的亲生父母，原因是，他们给了他生命。是什么样的经历让一个孩子做出如此不可思议的举动？故事中，赞恩的父母在无力抚养和教育的状况下依然不停生育，作为家中的长子赞恩，弱小的肩膀承担了无数生活的重压。当妹妹被强行卖给商贩为妻时，赞恩愤怒离家，之后遇到一对没有合法身份的母子，相互扶持勉强生活。然而生活并没有眷顾赞恩，重重磨难迫使他做出了令人震惊的举动……","娜丁·拉巴基","赞恩·阿尔·拉菲亚","http://img.cgv.com.cn/img/mov/2019/10003130/trailer/2019041717583458348265.mp4",null);

INSERT INTO movies VALUES (null,"哪吒之魔童降世","movie_img/nezha/1.jpg","9.0","突破传统大胆塑造史上最“坏”哪吒","2019-07-13",155,1,"中文 3D",110,"动画","movie_img/nezha/2.jpg&movie_img/nezha/3.jpg&movie_img/nezha/4.jpg&movie_img/nezha/5.jpg&movie_img/nezha/6.jpg","《《哪吒降世》的导演饺子曾经推出过一部风靡网络的动画短片《打，打个大西瓜》，他称新作《哪吒降世》既会严谨按照原作，又会完全颠覆原作。","饺子"," ","http://img.cgv.com.cn/img/mov/2019/10003343/trailer/2019070811523952396686.mp4","movie_img/imax.png");

INSERT INTO movies VALUES (null,"千与千寻","movie_img/qinaxun/1.jpg","9.5","宫崎骏经典作品 奥斯卡最佳动画","2019-06-21",951,1,"日语 2D",125,"动画","movie_img/qinaxun/2.jpg&movie_img/qinaxun/3.jpg&movie_img/qinaxun/4.jpg&movie_img/qinaxun/5.jpg&movie_img/qinaxun/6.jpg&movie_img/qinaxun/7.jpg&movie_img/qinaxun/8.jpg&movie_img/qinaxun/9.jpg","千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道。远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多半透明的人。千寻仓皇逃出，一个叫小白的人救了他，千寻在小白的帮助下幸运地获得了一份在浴池打杂的工作。渐渐她不再被那些怪模怪样的人吓倒。一次，千寻发现小白被一群白色飞舞的纸人打伤，为了救受伤的小白，千寻又踏上了她的冒险之旅。","宫崎骏","入野自由 ; 柊瑠美","http://img.cgv.com.cn/img/mov/2019/10003252/trailer/2019061009392339236767.mp4",null);

INSERT INTO movies VALUES (null,"扫毒2天地对决","movie_img/saodu/1.jpg","8.8","时隔五年 经典再续","2019-07-05",695,1,"中文 2D",100,"警匪","movie_img/saodu/2.jpg&movie_img/saodu/3.jpg&movie_img/saodu/4.jpg&movie_img/saodu/5.jpg&movie_img/saodu/6.jpg&movie_img/saodu/7.jpg&movie_img/saodu/8.jpg","毒品市场维持四分天下的格局已久，但自从地藏与墨西哥大毒枭跨境合作扩展势力，再加上一连串黑吃黑的动作，毒界变得风声鹤唳。另一方面，因儿时亲眼目睹父亲被毒品所毁而嫉毒如仇的慈善家兼金融巨子余顺天，正悬赏一亿歼灭香港最大毒贩，此举在社会上引起轩然大波。警员林正风本致力搜证拘捕地藏，毒贩却因巨额悬赏导致人身安全受威胁，他在执行保护毒贩的任务时深感无奈，但又被余顺天的出价所诱惑，陷入黑白正邪的心理挣扎。原来，余顺天和地藏有不可告人的同门关系，一场天地对决一触即发。","邱礼涛","刘德华 / 古天乐 / 苗侨伟","http://img.cgv.com.cn/img/mov/2019/10003310/trailer/201906280901351359683.mp4","movie_img/4dx.png");

INSERT INTO movies VALUES (null,"狮子王","movie_img/shizi/1.jpg","9.0","小辛巴历尽艰辛 最后成长为森林之王","2019-07-11",3189,1,"英文 3D",118,"动画","movie_img/shizi/2.jpg&movie_img/shizi/3.jpg&movie_img/shizi/4.jpg&movie_img/shizi/5.jpg&movie_img/shizi/6.jpg&movie_img/shizi/7.jpg&movie_img/shizi/8.jpg","今年五月迪士尼宣布将把《小美人鱼》（The Little Mermaid）拍成真人电影的时候，曾有网站做过调查，结果显示观众最希望看到动画片《狮子王》（The Lion King）被改编成真人电影。现在，美梦成真了，因为迪士尼已经确定让《奇幻森林》导演乔·法弗洛（Jon Favreau）执导一部真人版的《狮子王》，而该片将使用《奇幻森林》（The Jungle Book）同样的技术。当然，《狮子王》真人版是不会出现人类的，这点和《奇幻森林》有所不同，不过原版动画片以及同名音乐剧里的歌曲应当还会被保留。","乔恩·费儒","唐纳德·格洛弗; 阿尔法·伍达德","http://img.cgv.com.cn/img/mov/2019/10003297/trailer/20190618100208286351.mp4","movie_img/imax_4dx.png");

INSERT INTO movies VALUES (null,"未来机器城","movie_img/weilaijiqiren/1.jpg","0","改编自王尼玛创作的漫画《7723》","2019-07-19",85,0,"中文 3D",107,"动画","movie_img/weilaijiqiren/2.jpg&movie_img/weilaijiqiren/3.jpg&movie_img/weilaijiqiren/4.jpg&movie_img/weilaijiqiren/5.jpg&movie_img/weilaijiqiren/6.jpg&movie_img/weilaijiqiren/7.jpg","一个即将被用于拯救人类的新型机器人7723，因缘际会遇上了热爱足球的调皮少女苏小麦。而看似顽劣的小麦生长在一个不算完整的家庭里，父亲为追梦离家，使得小麦的成长也受到了影响，性格冷漠孤僻。7723的出现也使得这对欢喜冤家逐渐在相爱相杀中成为了一对挚友。然而好景不长，心怀毁灭人类之梦的庞老板（冯远征 配音）追踪到了7723的下落，然而那些印刻着小麦名字的温柔颜色和绚烂时光早已在他的生命里留下了不可磨灭的痕迹……","安恪温 / 龙子乔","韩莹棣; 郑海音","http://img.cgv.com.cn/img/mov/2019/10003353/trailer/201907111805295292682.mp4",null);

INSERT INTO movies VALUES (null,"小Q","movie_img/xiaoQ/1.jpg","0","导盲犬小Q的故事再度来袭","2019-07-25",145,0,"中文 2D",107,"剧情","movie_img/xiaoQ/2.jpg&movie_img/xiaoQ/3.jpg&movie_img/xiaoQ/4.jpg","电影《小Q》改编自小说《再见了，可鲁》，讲述了聪明可爱的小Q在训练师悉心照料和训练过程中成长为一只合格的导盲犬，并遇到了主人李宝庭（任达华饰）——中年失明、孤僻又坏脾气的天才糕点师。他们共同生活的日子里，小Q逐渐融化并走入了宝庭的心里，温情的陪伴令处于低谷期的宝庭有了新生活，一人一犬，深深的羁绊，他们谁也无法再失去彼此。","罗永昌","任达华 ; 梁咏琪","http://img.cgv.com.cn/img/mov/2019/10003347/trailer/2019071010103110316337.mp4",null);

INSERT INTO movies VALUES (null,"银河补习班","movie_img/yinhe/1.jpg","0","白宇与邓超演绎温暖父子情","2019-07-26",1183,0,"中文 2D",147,"剧情","movie_img/yinhe/2.jpg&movie_img/yinhe/3.jpg&movie_img/yinhe/4.jpg&movie_img/yinhe/5.jpg&movie_img/yinhe/6.jpg&movie_img/yinhe/7.jpg&movie_img/yinhe/8.jpg","浩瀚太空，航天员意外失联，生命最大的绝境中，他回忆起自己那个最了不起的爸爸。一对父子跨越漫长的时光，守护爱和亲情，故事充满了欢乐、温暖、泪水与奇观。","邓超 / 俞白眉","邓超 / 白宇","http://img.cgv.com.cn/img/mov/2019/10003298/trailer/2019061809424742478108.mp4","movie_img/imax.png");

INSERT INTO movies VALUES (null,"回到过去拥抱你","movie_img/yongbao/1.jpg","0","侯明昊彭昱畅打造校园回忆","2019-07-26",75,0,"中文 2D",91,"爱情","movie_img/yongbao/2.jpg&movie_img/yongbao/3.jpg&movie_img/yongbao/4.jpg&movie_img/yongbao/5.jpg&movie_img/yongbao/6.jpg&movie_img/yongbao/7.jpg&movie_img/yongbao/8.jpg&movie_img/yongbao/9.jpg","讲述了三个从小一起长大感情深厚的好朋友，其中一个任性离世，而一袋神奇的 魔法银币，让他们重逢在过去与未来的时光里，共同经历一段奇幻的青春，在领悟与成长中 创造出只属于他们的完美记忆...","花明","侯明昊 / 彭昱畅; 盖玥希","http://img.cgv.com.cn/img/mov/2019/10003347/trailer/2019071010103110316337.mp4",null);

INSERT INTO movies VALUES (null,"游戏人生 零","movie_img/youxi/1.jpg","0","改编自榎宫祐同名小说作品","2019-07-19",148,0,"日语 2D",107,"动画","movie_img/youxi/2.jpg&movie_img/youxi/3.jpg&movie_img/youxi/4.jpg&movie_img/youxi/5.jpg&movie_img/youxi/6.jpg&movie_img/youxi/7.jpg&movie_img/youxi/8.jpg","这是一个禁止一切争端、一切皆由游戏决定的“盘上世界”被创造出来以前的故事。围绕着一统世界的唯一神的宝座，看不到尽头的大战延续的时代。天地割裂，甚至连繁星都被毁灭殆尽的凄惨战争，毫无还手之力的人类在战争中一个个死去。被拥有强大力量的各个种族逼入绝境，人类濒临存亡，此时率领着人类的年轻领袖名叫里克，他在被弃置的森精种的都城遇到了机凯种少女休比，被同伴抛弃的休比，为了修复故障，而拜托里克把“人类的心”告诉自己，但…… ","石塚敦子","松冈祯丞 ; 茅野爱衣","http://img.cgv.com.cn/img/mov/2019/10003353/trailer/201907111805295292682.mp4","movie_img/4dx.png");

INSERT INTO movies VALUES (null,"蜘蛛侠：英雄远征","movie_img/zhizhu/1.jpg","9.3","《复联4》之后 小蜘蛛欧洲环游记","2019-06-27",2372,1,"英文 3D",127,"科幻","movie_img/zhizhu/2.jpg&movie_img/zhizhu/3.jpg&movie_img/zhizhu/4.jpg&movie_img/zhizhu/5.jpg&movie_img/zhizhu/6.jpg&movie_img/zhizhu/7.jpg&movie_img/zhizhu/8.jpg&movie_img/zhizhu/9.jpg","最受关注的漫威超级英雄大片《蜘蛛侠：英雄远征》依旧由导演乔·沃茨执导，汤姆·赫兰德继续饰演蜘蛛侠彼得·帕克。此次蜘蛛侠将前往欧洲展开新的征程，并将对抗由杰克·吉伦哈尔加盟饰演的大反派神秘客，赞达亚、雅各布·巴特朗、托尼·雷沃罗利等原班人马也将悉数回归。本片将于2019年7月5日北美上映，经历了第一部的成长经历后，蜘蛛侠又会面临怎样的危机？敬请期待。","乔·沃茨","汤姆·赫兰德 ; 赞达亚","http://img.cgv.com.cn/img/mov/2019/10003281/trailer/2019061714355535557971.mp4","movie_img/imax_4dx_scre.png");

INSERT INTO movies VALUES (null,"灰猴","movie_img/huihou/1.jpg","0","荒诞离奇的犯罪型喜剧故事","2019-07-18",53,0,"中文 2D",100,"剧情","movie_img/huihou/2.jpg&movie_img/huihou/3.jpg&movie_img/huihou/4.jpg&movie_img/huihou/5.jpg&movie_img/huihou/6.jpg","电影《黄花梁上的灰猴们》讲述了一个荒诞离奇的犯罪型喜剧故事。影片通过一件“古陶坛子”为 引子，从而引出了一系列形形色色的人物：大智若愚的小饭店老板、见利忘义的无良商人、深明大义的老者、利欲熏心的小人、善良淳朴的朴实女孩、拜金风骚的妙龄女郎。种种风格迥异的角色加之各种棘手的麻烦事件，与“古陶坛子”这个主线巧妙结合在一起。张璞导演选择多角度的叙述手法，让故事情节环环相扣，先将悬疑抛出，再把线索一点一点如抽丝剥茧般呈现给观众，耐人寻味。","张璞","王大治 / 高峰","http://img.cgv.com.cn/img/mov/2019/10003343/trailer/2019070811523952396686.mp4",null);


INSERT INTO movies VALUES (null,"碟仙","movie_img/diexian/1.jpg","8.5","真正碟仙绝版归来 久经酝酿破碟而出","2019-06-21",0,1,"中文 2D",83,"惊悚","movie_img/diexian/2.jpg&movie_img/diexian/3.jpg&movie_img/diexian/4.jpg&movie_img/diexian/5.jpg&movie_img/diexian/6.jpg&movie_img/diexian/7.jpg&movie_img/diexian/8.jpg","以网络直播为业的单亲妈妈梦瑶（黄奕 饰）带着上幼儿园的女儿雯雯住进了一栋便宜的学区房，然而，屋里的诡异氛围，与不时散发的奇怪恶臭，令梦瑶感到不安。某夜，雯雯竟然在梦游中，玩了前租客遗留的“碟仙”游戏。传说只要玩过的人，七日内必会被碟仙夺命！紧接着，屋内接连发生令人毛骨悚然的怪事。七日大限将至，眼看爱女危在旦夕，为了解开碟仙诅咒，夺回女儿，绝望的妈妈不惜做出了惊人的举动…","廉涛","范逸臣 ; 黄奕 ;","http://img.cgv.com.cn/img/mov/2019/10003343/trailer/2019070811523952396686.mp4",null);

-- 插入影城信息
INSERT INTO cinemas VALUES (null,18,"杭州滨江天街","浙江省杭州市滨江区江汉路1515号龙湖滨江天街5楼","0571-87751515","cinema_img/hz_tianjie/1.jpg&cinema_img/hz_tianjie/2.jpg&cinema_img/hz_tianjie/3.jpg&cinema_img/hz_tianjie/4.jpg&cinema_img/hz_tianjie/5.jpg&cinema_img/hz_tianjie/6.jpg",'{"lng":120.210731,"lat":30.206723}',"公交107路、172路、355路、地铁1号线至滨和路下车","[1,2,3]");

INSERT INTO cinemas VALUES (null,18,"杭州乐堤港","浙江省杭州市拱墅区丽水路58号","0571-88310988","cinema_img/hz_ledi/1.jpg&cinema_img/hz_ledi/2.jpg&cinema_img/hz_ledi/3.jpg&cinema_img/hz_ledi/4.jpg&cinema_img/hz_ledi/5.jpg&cinema_img/hz_ledi/6.jpg&cinema_img/hz_ledi/7.jpg&cinema_img/hz_ledi/8.jpg",'{"lng":120.148344,"lat":30.31021}',"134路，151路，307路，36路，57路环线，58路环线，77路，93路，游8线/Y8路，227路，251路公交线路 长乐路站下车
","[1,2,3]");

INSERT INTO cinemas VALUES (null,3,"CGV影城(嘉亭荟城市生活广场店)","上海市嘉定区墨玉南路1055号305室","021-69503456","cinema_img/shanghai_anting/1.jpg&cinema_img/shanghai_anting/2.jpg&cinema_img/shanghai_anting/3.jpg",'{"lng":121.167266,"lat":31.29425}',"公交：公交安亭站(安亭2路空调)；曹安路(墨玉南路)(陆安专线高速线)；
 地铁：安亭(地铁11号线)；安亭地铁站(安虹线;+安亭1路;+安亭7路)","[1,2,3]");

INSERT INTO cinemas VALUES (null,3,"星星上海大华","上海市宝山区大华路348号大华虎城嘉年华3层","021-36533773","cinema_img/shanghai_xingxing/1.jpg&cinema_img/shanghai_xingxing/2.jpg&cinema_img/shanghai_xingxing/3.jpg",'{"lng":121.420547,"lat":31.27603}',"公交：大华一路新沪路(547路)；大华一路新沪路(招呼站)(112路区间空调)；大华路大华二路(737路空调;+766路;+937路;+937路空调) 地铁：大华三路(地铁7号线)；新村路(地铁7号线)","[1,2,3]");

INSERT INTO cinemas VALUES (null,3,"CGV影城(上海七宝万科广场店)","上海七宝万科广场5层L501单元
","021-63895036","cinema_img/shanghai_qibao/1.jpg&cinema_img/shanghai_qibao/2.jpg&cinema_img/shanghai_qibao/3.jpg&cinema_img/shanghai_qibao/4.jpg&cinema_img/shanghai_qibao/5.jpg&cinema_img/shanghai_qibao/6.jpg",'{"lng":121.356204,"lat":31.160654}',"公交：巴士-七宝站 七宝2路.87路.91路.92路B线.186路.189路.196路 地铁：9号线七宝站2号口","[1,2,3]");

INSERT INTO cinemas VALUES (null,1,"CGV影城(天宫院凯德店)","北京市大兴区华佗路2号L6-11","010-89205278","cinema_img/beijing_tiangongyaun/1.jpg&cinema_img/beijing_tiangongyaun/2.jpg&cinema_img/beijing_tiangongyaun/3.jpg&cinema_img/beijing_tiangongyaun/4.jpg&cinema_img/beijing_tiangongyaun/5.jpg&cinema_img/beijing_tiangongyaun/6.jpg",'{"lng":116.325747,"lat":39.678418}',"地铁天宫院站A口出200米；公交842路 兴27路天宫院地铁站下车","[1,2,3]");

INSERT INTO cinemas VALUES (null,1,"CGV影城(五彩城购物中心店)","北京市海淀区清河中街68号华润五彩城购物中心L648号、L701","010-82816767","cinema_img/beijing_qinghe/1.jpg&cinema_img/beijing_qinghe/2.jpg&cinema_img/beijing_qinghe/3.jpg",'{"lng":116.341252,"lat":40.036133}',"公交：632、633、642路到“五彩城公交场站”站点下车。 公交清河小营桥西：328路;","[1,2,3]");

INSERT INTO cinemas VALUES (null,1,"星星北京颐堤港","北京市朝阳区酒仙桥路18号4、5层","010-84260800","cinema_img/beijng_yidigang/1.jpg&cinema_img/beijng_yidigang/2.jpg&cinema_img/beijng_yidigang/3.jpg",'{"lng":116.497352,"lat":39.975869}',"公交：将台路口西(408路; 420路; 571路; 656路; 701路; 847路; 967路快车; 983路; 运通107路)；将台路口北(401路; 402路; 418路; 445路; 621路; 688路; 909路; 946路; 955路; 976路; 988路; 991路)","[1,2,3]");

INSERT INTO cinemas VALUES (null,1,"星星北京奥体","北京市朝阳区湖景东路11号","010-84372280","cinema_img/beijing_xingxingaoti/1.jpg&cinema_img/beijing_xingxingaoti/2.jpg&cinema_img/beijing_xingxingaoti/3.jpg",'{"lng":116.403034,"lat":40.005408}',"公交：乘坐913/949/484/379/628/328/419/617/751/运通110，到洼里南口下车向南走600米下沉广场即可； 地铁：地铁8号线奥林匹克公园站下车出D口对面即是
","[1,2,3]");

INSERT INTO cinemas VALUES (null,13,"CGV影城(北京路店)","广州市越秀区北京路168号第【8】层B801铺","020-83522554","cinema_img/guangzhou_beijinglu/1.jpg&cinema_img/guangzhou_beijinglu/2.jpg&cinema_img/guangzhou_beijinglu/3.jpg&cinema_img/guangzhou_beijinglu/4.jpg",'{"lng":113.27646,"lat":23.125892}',"公交：1路，10路，13路，190路，219路，544路，夜1，夜8路。地铁：6号线北京路站","[1,2,3]");

INSERT INTO cinemas VALUES (null,13,"CGV影城(广州万胜围店)","广州市海珠区琶洲蟠龙新街2号自编C402,C502","020-89119354","cinema_img/guangzhou_wanshenwei/1.jpg&cinema_img/guangzhou_wanshenwei/2.jpg&cinema_img/guangzhou_wanshenwei/3.jpg&cinema_img/guangzhou_wanshenwei/4.jpg&cinema_img/guangzhou_wanshenwei/5.jpg&cinema_img/guangzhou_wanshenwei/6.jpg&cinema_img/guangzhou_wanshenwei/7.jpg",'{"lng":113.390067,"lat":23.104842}',"4号线/8号线万胜围地铁站、距离万胜围公交站218米","[1,2,3]");

INSERT INTO cinemas VALUES (null,13,"CGV影城(永旺梦乐城番禺广场店)","广州市番禺区大龙街亚运大道1号4001","020-23331500","cinema_img/guangzhou_yongwang/1.jpg&cinema_img/guangzhou_yongwang/2.jpg&cinema_img/guangzhou_yongwang/3.jpg&cinema_img/guangzhou_yongwang/4.jpg",'{"lng":113.394547,"lat":22.943387}',"地铁3号线直达，番禺广场站下车 C出口","[1,2,3]");


-- 插入小吃表
INSERT INTO foods VALUES(null,"中份薯条番茄味","爆米花类",26.0,22.1,1,"pimg/1chipsMd.png");
INSERT INTO foods VALUES(null,"双拼爆米花虾片","爆米花类",32.0,27.2,1,"pimg/1chipPop.png");
INSERT INTO foods VALUES(null,"大份现制爆米花","爆米花类",32.0,27.2,1,"pimg/1popLg.png");
INSERT INTO foods VALUES(null,"大份薯条番茄味","爆米花类",34.0,28.9,1,"pimg/1chipsLg.png");
INSERT INTO foods VALUES(null,"中份现制爆米花","爆米花类",22.1,26.0,1,"pimg/1popcornMd.png");
INSERT INTO foods VALUES(null,"双拼爆薯番茄味","爆米花类",32.0,27.2,1,"pimg/1chipPop.png");
INSERT INTO foods VALUES(null,"大份虾片","爆米花类",34.0,28.9,1,"pimg/1popLg.png");

INSERT INTO foods VALUES(null,"中杯现调芬达","现调饮料",14,11.9,2,"pimg/2fentaMd.png");
INSERT INTO foods VALUES(null,"中杯现调雪碧","现调饮料",14,11.9,2,"pimg/2fentaMd.png");
INSERT INTO foods VALUES(null,"中杯现调可乐","现调饮料",14,11.9,2,"pimg/2keleMd.png");
INSERT INTO foods VALUES(null,"雀巢热饮拿铁咖啡","现调饮料",18,15.3,2,"pimg/2tatte.png");
INSERT INTO foods VALUES(null,"雀巢热甜牛奶","现调饮料",18,15.3,2,"pimg/2mike.png");
INSERT INTO foods VALUES(null,"雀巢热饮果橙","现调饮料",18,15.3,2,"pimg/2guocheng.png");
INSERT INTO foods VALUES(null,"雀巢热饮港式奶茶","现调饮料",18,15.3,2,"pimg/2naicha.png");
INSERT INTO foods VALUES(null,"大杯现调可乐","现调饮料",16,13.6,2,"pimg/2keleLg.png");

INSERT INTO foods VALUES(null,"美汁源果粒橙","瓶装饮料",14,11.9,3,"pimg/3chengzhi.png");
INSERT INTO foods VALUES(null,"5100格桑矿泉水","瓶装饮料",14,11.9,3,"pimg/3water.png");
INSERT INTO foods VALUES(null,"台湾名屋果汁","瓶装饮料",18,15.3,3,"pimg/3tai.png");
INSERT INTO foods VALUES(null,"怡泉+C汽水","瓶装饮料",14,11.9,3,"pimg/3c.png");
INSERT INTO foods VALUES(null,"乳酸菌橙汁","瓶装饮料",28,23.8,3,"pimg/3ru.png");
INSERT INTO foods VALUES(null,"希克水","瓶装饮料",32,27.2,3,"pimg/3chengzhi.png");
INSERT INTO foods VALUES(null,"儿童酸奶","瓶装饮料",14,11.9,3,"pimg/3child.png");

INSERT INTO foods VALUES(null,"果维酥水果脆","热销小食",18,15.3,4,"pimg/4_1.png");
INSERT INTO foods VALUES(null,"单身狗粮薯片海盐味","热销小食",15,12.8,4,"pimg/4_2.png");
INSERT INTO foods VALUES(null,"吸吸果冻酸奶","热销小食",22,18.7,4,"pimg/4_4.png");
INSERT INTO foods VALUES(null,"海苔脆片原味","热销小食",16,13.6,4,"pimg/4_8.png");
INSERT INTO foods VALUES(null,"必品阁王饺子小份","热销小食",9,7.7,4,"pimg/4_7.png");
INSERT INTO foods VALUES(null,"必品阁王饺子大份","热销小食",16,13.6,4,"pimg/4_9.png");
INSERT INTO foods VALUES(null,"老爸豆腐干","热销小食",15,12,4,"pimg/4_3.png");
INSERT INTO foods VALUES(null,"酸奶布蕾椰子味","热销小食",26,22.1,4,"pimg/4_6.png");


INSERT INTO carousel VALUES(null,"carousel/header.jpg");
INSERT INTO carousel VALUES(null,"carousel/header2.jpg");
INSERT INTO carousel VALUES(null,"carousel/header3.jpg")






