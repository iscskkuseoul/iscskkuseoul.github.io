/* ═══════════════════════════════════════════════════════════════
   ISC SKKU Seoul 홈페이지 공용 동작 (모든 페이지가 함께 씁니다)

   ▶ 매주 바꾸실 것은 news.txt 와 jubo 폴더의 PDF 두 가지뿐입니다.
     이 파일은 손대지 않으셔도 됩니다.
   ▶ 문구(한국어·중국어·영어)를 고치실 때는 아래 "1. 다국어 사전"의 글자만 바꾸시면 됩니다.
     고친 뒤에는 각 페이지 <head> 의 site.js?v=날짜 를 새 날짜로 바꿔 주세요.
   ▶ 기능마다 따로 보호해 두었습니다. 한 기능에 문제가 생겨도 나머지는 그대로 동작합니다.
   ═══════════════════════════════════════════════════════════════ */

/* ═══ 1. 다국어 사전 ═══ */
/* ▶ 번역을 고치시려면 작은따옴표 안의 글자만 바꾸시면 됩니다.
   ▶ 한 언어를 고치면 나머지 두 언어도 같은 줄(같은 이름)을 함께 고쳐 주세요. */
var I18N = {
ko:{
 'foot.sub':'성균관대 유학생교회 · Since 2020',
 'foot.tag':'캠퍼스에서 만난 유학생 한 사람이 예수님을 만나고, 본국으로 돌아가 복음을 전하기까지 함께 걷습니다.',
 'w2.short':'기도회',
 'foot.prayer':'수요일 저녁 6:00',
 'foot.rights':'© 2026 ISC SKKU Seoul · 성균관대 유학생교회',
 'fv.title':'교회가 처음이신가요?',
 'fv.desc':'오시기 전에 알아두시면 좋은 것들을 짧게 정리해 두었습니다.',
 'fv.go':'안내 보기',
 'fv.close':'닫기',
 'nav.first':'처음 오셨나요?',
 'first.eyebrow':'FIRST VISIT',
 'first.title':'처음 오셨나요?',
 'first.sub':'교회가 처음이셔도, 한국어가 서툴러도 괜찮습니다. 오시는 순간부터 저희가 함께하겠습니다.',
 's1.t':'도착',
 's1.d':'주일 오후 2시 50분까지 오시면 넉넉합니다. 명륜길 22 건물 2층으로 올라오세요.',
 's2.t':'환영',
 's2.d':'입구에서 맞아 드립니다. “처음 왔어요”라고 말씀해 주시면 자리까지 안내해 드립니다.',
 's3.t':'예배',
 's3.d':'오후 3시에 시작해 약 한 시간입니다. 찬양과 말씀을 한국어와 중국어로 함께 나눕니다.',
 's4.t':'교제',
 's4.d':'예배 후 셀 모임과 다과가 있습니다. 부담되시면 먼저 돌아가셔도 괜찮습니다.',
 'faq.title':'자주 묻는 질문',
 'q1':'교회가 처음인데 괜찮을까요?',
 'a1':'물론입니다. 저희 교회에 오시는 유학생 대부분이 교회가 처음이었습니다. 아무것도 모르셔도 괜찮으니 편한 마음으로 오세요.',
 'q2':'무엇을 입고 가야 하나요?',
 'a2':'평소 편한 옷차림이면 충분합니다. 정장을 갖춰 입으실 필요는 전혀 없습니다.',
 'q3':'한국어를 잘 못하는데 괜찮을까요?',
 'a3':'예배는 한국어와 중국어로 함께 드립니다. 중국어로 도와드릴 분들이 늘 함께 있으니 걱정하지 않으셔도 됩니다.',
 'q4':'헌금을 꼭 해야 하나요?',
 'a4':'아닙니다. 헌금은 각자의 마음으로 드리는 것이며, 처음 오신 분께는 전혀 부담을 드리지 않습니다.',
 'q5':'혼자 가도 괜찮을까요?',
 'a5':'대부분 혼자 오십니다. 오시면 자연스럽게 인사를 나누고 함께 앉으실 수 있도록 도와드립니다.',
 'q6':'꼭 등록해야 하나요?',
 'a6':'아닙니다. 여러 번 예배에 참석해 보시고, 마음이 편해지셨을 때 결정하시면 됩니다.',
 'first.cta1':'새가족 등록하기',
 'first.cta2':'오시는 길 보기',
 'copy.btn':'계좌번호 복사',
 'copy.done':'복사되었습니다',
 'meta.title':'ISC SKKU Seoul | 성균관대 유학생교회',
 'nav.about':'교회 소개',
 'nav.worship':'예배 안내',
 'nav.ministry':'사역',
 'nav.news':'교회 소식',
 'nav.visit':'오시는 길',
 'nav.register':'새가족 등록',
 'hero.eyebrow':'환영합니다 · 성균관대 유학생교회',
 'hero.title':'캠퍼스에서 열방으로,<br>유학생과 함께 걷는 교회',
 'hero.lead':'ISC SKKU Seoul은 성균관대학교에 재학 중인 외국인 유학생, 특히 중국인 유학생에게 예수 그리스도의 복음을 전하고, 참된 그리스도인으로 살아가도록 돕는 유학생 선교 공동체입니다.',
 'hero.verse':'“너희가 내 안에 거하고 내 말이 너희 안에 거하면 무엇이든지 원하는 대로 구하라 그리하면 이루리라”',
 'hero.verseRef':'요한복음 15:7 · 2026년 교회 비전 “그리스도와의 연합: 예수님 안에, 말씀 안에 거하는 삶”',
 'hero.cta1':'예배 안내 보기',
 'hero.cta2':'오시는 길',
 'strip.service':'주일예배',
 'strip.serviceVal':'매주 일요일 오후&nbsp;3:00',
 'strip.place':'장소',
 'strip.placeVal':'서울 종로구 명륜길 22, 2층',
 'strip.founded':'설립',
 'strip.foundedVal':'2020년 3월 15일',
 'about.eyebrow':'ABOUT US',
 'about.title':'교회 소개',
 'about.p1':'ISC SKKU Seoul(성균관대 유학생교회)은 예배, 교육, 훈련, 양육, 교제를 통해 유학생들의 신앙 성장을 지원하며, 유학생들이 겪는 영적·생활적 어려움을 함께 나누고 사랑으로 섬기는 공동체입니다.',
 'about.p2':'특히 유학생들이 졸업 후 본국으로 귀국하더라도 복음을 증거하는 선교적 제자로 살아갈 수 있도록 준비시키는 것을 중요한 사명으로 삼고 있습니다. 예배는 한국어와 중국어로 함께 드리며, 중국으로 귀국한 졸업생들도 온라인으로 계속 참여하고 있습니다.',
 'about.p3':'한국에 온 지 얼마 되지 않으셨어도, 교회가 처음이셔도 괜찮습니다. 언제든지 편하게 찾아와 주세요.',
 'vision.1':'예배(말씀·기도·찬양)를 사모하는 교회',
 'vision.2':'복음 증거와 고백이 있는 교회',
 'vision.3':'유학생 선교사를 양육하는 교회',
 'team.eyebrow':'OUR TEAM',
 'team.title':'섬기는 사람들',
 'team.leadRole':'담임목사',
 'team.leadName':'정종현 목사',
 'team.greet':'ISC SKKU Seoul을 담임하며 캠퍼스에서 만난 유학생 한 사람 한 사람을 말씀과 기도로 섬기고 있습니다.',
 'cv.1a':'한세대학교 신학대학원',
 'cv.1b':'졸업 (M.Div.)',
 'cv.2a':'퍼듀대학교',
 'cv.2b':'사회학 박사 (Ph.D.)',
 'cv.3a':'성균관대학교',
 'cv.3b':'사회학과 부교수',
 'cv.4a':'창동성결교회',
 'cv.4b':'협동목사',
 'team.missionary':'선교사',
 'team.evangelist':'전도사',
 'worship.eyebrow':'WORSHIP',
 'worship.title':'예배와 모임',
 'worship.sub':'현장 예배와 Zoom 온라인 예배를 함께 드립니다. 처음 오시는 분도 언제든지 환영합니다.',
 'w1.t':'주일예배',
 'w1.time':'매주 일요일 오후 3:00',
 'w1.d':'말씀 선포, 찬양, 기도, 나눔. 예배 후 셀 모임과 격주 애찬 교제가 이어집니다.',
 'w2.t':'교두보 기도회 (BPM)',
 'w2.time':'매주 수요일 저녁 6:00~9:00',
 'w2.d':'교회 부흥과 영적 각성을 위한 집중 기도의 시간입니다.',
 'w3.t':'셀 모임',
 'w3.time':'주일예배 후',
 'w3.d':'말씀을 나누고 서로의 삶을 위해 기도하는 소그룹 모임입니다.',
 'w4.t':'샬롬 라운지',
 'w4.time':'평일 상시 개방',
 'w4.d':'학습 공간과 커피·차가 준비된 유학생들의 영적·학업적 쉼터입니다.',
 'ministry.eyebrow':'MINISTRY',
 'ministry.title':'주요 사역',
 'ministry.sub':'유학생 한 사람이 예수님을 만나고, 제자로 자라며, 본국으로 돌아가 복음을 전하기까지 함께 걷습니다.',
 'm1.t':'세례 교육과 세례식',
 'm1.d':'정기적인 세례 교육과 세례식을 통해 새 생명들이 그리스도 안에서 거듭나고 있습니다.',
 'm2.t':'제자양육 프로그램',
 'm2.d':'유학생의 제한된 체류 기간을 고려한 집중적이고 체계적인 양육: 심화 성경공부, 리더십 훈련, 신앙 기초 확립.',
 'm3.t':'유학생 리더 훈련',
 'm3.d':'차세대 유학생 사역 리더를 세우기 위한 리더십 개발, 섬김 훈련, 사역 실습.',
 'm4.t':'소그룹 성경공부',
 'm4.d':'교재 「복음의 기초」로 유학생 리더와 교수진이 함께하는 소그룹 성경공부를 진행합니다.',
 'photos.eyebrow':'GALLERY',
 'photos.title':'함께한 순간들',
 'news.eyebrow':'NEWS &amp; BULLETIN',
 'news.title':'교회 소식 · 주보',
 'news.thisWeek':'이번 주 소식',
 'news.loading':'소식을 불러오는 중입니다.',
 'news.more':'소식 전체 보기',
 'news.less':'소식 접기',
 'news.archive':'지난 소식 모두 보기',
 'news.fail':'소식을 불러오지 못했습니다.',
 'jubo.title':'이번 주 주보',
 'jubo.desc':'매주 주보를 온라인으로 바로 보실 수 있습니다.',
 'jubo.btn':'주보 온라인으로 보기 ›',
 'jubo.archive':'지난 주보 모두 보기',
 'jubo.zoom':'클릭하면 크게 보기 ⤢',
 'jubo.wait':'주보 미리보기를 준비하고 있습니다',
 'jubo.suffix':'주보',
 'cal.dow':'일요일,월요일,화요일,수요일,목요일,금요일,토요일',
 'cal.mon':'1월,2월,3월,4월,5월,6월,7월,8월,9월,10월,11월,12월',
 'yt.eyebrow':'ONLINE WORSHIP',
 'yt.title':'온라인 예배 · YouTube',
 'yt.sub':'주일예배 실황과 설교 영상은 유튜브 채널에서 보실 수 있습니다. 아래 목록은 새 영상을 올리면 자동으로 갱신됩니다.',
 'yt.link':'▶ 유튜브 채널 바로가기 (@iscskku2020)',
 'visit.eyebrow':'VISIT US',
 'visit.title':'오시는 길 · 연락처',
 'visit.addr':'주소',
 'visit.addrVal':'서울 종로구 명륜길 22, 2층',
 'visit.addrSub':'성균관대학교 서울(인문사회)캠퍼스 인근',
 'visit.transit':'대중교통',
 'visit.transitVal':'지하철 4호선 혜화역 4번 출구',
 'visit.transitSub':'성균관대학교 방면 도보 약 10분 · 마을버스 종로08 이용 가능',
 'visit.service':'주일예배',
 'visit.serviceVal':'매주 일요일 오후 3:00',
 'visit.serviceSub':'현장 예배 + Zoom 온라인 동시 진행',
 'visit.email':'이메일',
 'visit.offering':'온라인 헌금',
 'visit.offeringSub':'예금주: ISCSKKU 교회',
 'visit.naver':'네이버 지도로 길찾기',
 'visit.google':'구글 지도로 보기',
 'map.sub':'성균관대 유학생교회',
 'qk.service':'주일예배',
 'qk.bulletin':'이번 주 주보',
 'sub.team':'섬기는 사람들',
 'sub.times':'예배와 모임',
 'sub.ministries':'주요 사역',
 'sub.gallery':'함께한 순간들',
 'nav.expand':'하위 메뉴 열기',
 'bc.home':'홈',
 'sub.intro':'공동체 소개',
 'sub.vision':'비전',
 'sub.online':'온라인 예배',
 'sub.first':'처음 오신 분',
 'sub.bulletin':'주보',
 'sub.map':'찾아오시는 길',
 'sub.contact':'연락처',
 'sub.offering':'온라인 헌금',
 'meta.about':'교회 소개 | ISC SKKU Seoul 성균관대 유학생교회',
 'meta.worship':'예배 안내 | ISC SKKU Seoul 성균관대 유학생교회',
 'meta.ministry':'사역 | ISC SKKU Seoul 성균관대 유학생교회',
 'meta.news':'교회 소식 · 주보 | ISC SKKU Seoul 성균관대 유학생교회',
 'meta.visit':'오시는 길 | ISC SKKU Seoul 성균관대 유학생교회',
 'qk.bulletinVal':'PDF로 바로 보기',
 'qk.juboOf':'{d} 주보 보기',
 'qk.video':'예배 영상',
 'qk.visitVal':'명륜길 22, 2층',
 'home.moreItems':'소식 {n}건 더 보기',
 'home.worshipMore':'예배 안내 자세히 보기',
 'home.aboutMore':'교회 소개 더 보기',
 'home.ministryMore':'주요 사역 보기',
 'home.visitMore':'오시는 길 자세히 보기',
 'cal.monShort':'1월,2월,3월,4월,5월,6월,7월,8월,9월,10월,11월,12월',
 'map.exit':'혜화역 4번 출구',
 'map.walk':'도보 약 10분',
 'map.walkShort':'약 10분',
 'map.campus':'성균관대학교',
 'map.open':'네이버 지도에서 크게 보기',
 'map.naver':'네이버 지도',
 'map.google':'구글 지도'
},
zh:{
 'foot.sub':'成均馆大学留学生教会 · Since 2020',
 'foot.tag':'陪伴在校园中遇见的每一位留学生，从认识耶稣，到回国传扬福音。',
 'w2.short':'祷告会',
 'foot.prayer':'周三晚上 6:00',
 'foot.rights':'© 2026 ISC SKKU Seoul · 成均馆大学留学生教会',
 'fv.title':'第一次来教会吗?',
 'fv.desc':'我们把第一次来之前值得先了解的事，简单整理好了。',
 'fv.go':'查看指南',
 'fv.close':'关闭',
 'nav.first':'第一次来?',
 'first.eyebrow':'FIRST VISIT',
 'first.title':'第一次来教会吗?',
 'first.sub':'第一次进教会、韩语还不熟练，都完全没关系。从你踏进门的那一刻起，我们会一直陪着你。',
 's1.t':'抵达',
 's1.d':'主日下午两点五十分前到达即可。请上明伦街 22 号建筑二楼。',
 's2.t':'迎接',
 's2.d':'门口有人迎接你。只要说一句"我是第一次来"，就会有人带你入座。',
 's3.t':'崇拜',
 's3.d':'下午三点开始，约一小时。赞美与讲道用韩语和中文一同进行。',
 's4.t':'团契',
 's4.d':'崇拜后有小组聚会与茶点。如果觉得不方便，先回去也完全没关系。',
 'faq.title':'常见问题',
 'q1':'我从没去过教会，可以吗?',
 'a1':'当然可以。来我们教会的留学生，大多数都是第一次进教会。什么都不懂也没关系，放轻松来就好。',
 'q2':'需要穿什么衣服?',
 'a2':'平时的便装就可以，完全不需要正装。',
 'q3':'韩语不太好，可以吗?',
 'a3':'崇拜用韩语和中文一同进行，也一直有能用中文帮助你的同工在，完全不用担心。',
 'q4':'一定要奉献吗?',
 'a4':'不需要。奉献是各人心意，我们绝不会让第一次来的朋友有任何负担。',
 'q5':'一个人去会不会尴尬?',
 'a5':'大部分人都是一个人来的。到了以后自然会有人打招呼，也会帮你找位子一起坐。',
 'q6':'一定要登记吗?',
 'a6':'不需要。可以先来参加几次崇拜，等心里觉得舒服了再决定。',
 'first.cta1':'新朋友登记',
 'first.cta2':'查看交通指引',
 'copy.btn':'复制账号',
 'copy.done':'已复制',
 'meta.title':'ISC SKKU Seoul | 成均馆大学留学生教会',
 'nav.about':'教会介绍',
 'nav.worship':'崇拜信息',
 'nav.ministry':'事工',
 'nav.news':'教会消息',
 'nav.visit':'交通指引',
 'nav.register':'新朋友登记',
 'hero.eyebrow':'欢迎来到 · 成均馆大学留学生教会',
 'hero.title':'从校园走向万邦，<br>与留学生同行的教会',
 'hero.lead':'ISC SKKU Seoul 是一间向成均馆大学的外国留学生，特别是中国留学生传扬耶稣基督福音、帮助他们成为真正基督徒的留学生宣教群体。',
 'hero.verse':'“你们若常在我里面，我的话也常在你们里面，凡你们所愿意的，祈求就给你们成就。”',
 'hero.verseRef':'约翰福音 15:7 · 2026年教会异象「与基督联合：住在耶稣里、住在话语里的生活」',
 'hero.cta1':'查看崇拜信息',
 'hero.cta2':'交通指引',
 'strip.service':'主日崇拜',
 'strip.serviceVal':'每周日下午&nbsp;3:00',
 'strip.place':'地点',
 'strip.placeVal':'首尔钟路区明伦街 22号 2层',
 'strip.founded':'建立',
 'strip.foundedVal':'2020年3月15日',
 'about.eyebrow':'ABOUT US',
 'about.title':'教会介绍',
 'about.p1':'ISC SKKU Seoul（成均馆大学留学生教会）通过崇拜、教育、训练、栽培与团契，支持留学生的信仰成长，一同分担留学生在属灵与生活上的难处，以爱彼此服侍。',
 'about.p2':'我们特别看重装备留学生，使他们即使毕业回国后，仍能作传扬福音的宣教门徒。崇拜以韩语和中文一同进行，已回到中国的毕业生也持续在线参与。',
 'about.p3':'我们是一个以中国留学生为主的校园教会，用中文和韩文一起敬拜。无论你来韩国多久、是否去过教会，都欢迎你来！',
 'vision.1':'渴慕崇拜（话语·祷告·赞美）的教会',
 'vision.2':'有福音见证与告白的教会',
 'vision.3':'培育留学生宣教士的教会',
 'team.eyebrow':'OUR TEAM',
 'team.title':'服侍同工',
 'team.leadRole':'主任牧师',
 'team.leadName':'郑锺贤 牧师',
 'team.greet':'牧养 ISC SKKU Seoul，以话语和祷告服侍在校园中遇见的每一位留学生。',
 'cv.1a':'韩世大学神学研究院',
 'cv.1b':'毕业（道学硕士 M.Div.）',
 'cv.2a':'普渡大学',
 'cv.2b':'社会学博士（Ph.D.）',
 'cv.3a':'成均馆大学',
 'cv.3b':'社会学系副教授',
 'cv.4a':'仓洞圣洁教会',
 'cv.4b':'协同牧师',
 'team.missionary':'宣教士',
 'team.evangelist':'传道',
 'worship.eyebrow':'WORSHIP',
 'worship.title':'崇拜与聚会',
 'worship.sub':'现场崇拜与 Zoom 在线崇拜同时进行。第一次来的朋友，随时欢迎你！',
 'w1.t':'主日崇拜',
 'w1.time':'每周日下午 3:00',
 'w1.d':'证道、赞美、祷告与分享。崇拜后有小组聚会，每两周一次爱筵团契。',
 'w2.t':'桥头堡祷告会（BPM）',
 'w2.time':'每周三晚 6:00~9:00',
 'w2.d':'为教会复兴与属灵苏醒专一祷告的时间。',
 'w3.t':'小组聚会',
 'w3.time':'主日崇拜后',
 'w3.d':'一同分享话语、彼此代祷的小组聚会。',
 'w4.t':'Shalom 休息室',
 'w4.time':'平日常时开放',
 'w4.d':'备有学习空间与咖啡茶点，是留学生属灵与学业的歇息之处。',
 'ministry.eyebrow':'MINISTRY',
 'ministry.title':'主要事工',
 'ministry.sub':'陪伴每一位留学生，从遇见耶稣、成长为门徒，直到回国传扬福音。',
 'm1.t':'洗礼教育与洗礼式',
 'm1.d':'透过定期的洗礼教育与洗礼式，新生命在基督里重生。',
 'm2.t':'门徒栽培课程',
 'm2.d':'考虑留学生有限的居留时间，进行密集而有系统的栽培：深入查经、领袖训练、信仰根基建立。',
 'm3.t':'留学生领袖训练',
 'm3.d':'为培育新一代留学生事工领袖而设的领导力开发、服侍训练与事工实习。',
 'm4.t':'小组查经',
 'm4.d':'以《福音的基础》为教材，由留学生领袖与教授团队一同带领小组查经。',
 'photos.eyebrow':'GALLERY',
 'photos.title':'一同走过的时光',
 'news.eyebrow':'NEWS &amp; BULLETIN',
 'news.title':'教会消息 · 周报',
 'news.thisWeek':'本周消息',
 'news.loading':'正在载入消息。',
 'news.more':'查看全部消息',
 'news.less':'收起消息',
 'news.archive':'查看往期消息',
 'news.fail':'消息载入失败。',
 'jubo.title':'本周周报',
 'jubo.desc':'每周周报可以直接在线阅读，无需下载。',
 'jubo.btn':'在线查看周报 ›',
 'jubo.archive':'查看往期周报',
 'jubo.zoom':'点击可放大 ⤢',
 'jubo.wait':'正在准备周报预览',
 'jubo.suffix':'周报',
 'cal.dow':'星期日,星期一,星期二,星期三,星期四,星期五,星期六',
 'cal.mon':'1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月',
 'yt.eyebrow':'ONLINE WORSHIP',
 'yt.title':'在线崇拜 · YouTube',
 'yt.sub':'主日崇拜实况与讲道影片可在 YouTube 频道观看。下方列表会在上传新影片后自动更新。',
 'yt.link':'▶ 前往 YouTube 频道 (@iscskku2020)',
 'visit.eyebrow':'VISIT US',
 'visit.title':'交通指引 · 联系方式',
 'visit.addr':'地址',
 'visit.addrVal':'首尔特别市钟路区明伦街 22号 2层',
 'visit.addrSub':'邻近成均馆大学首尔（人文社会）校区',
 'visit.transit':'交通',
 'visit.transitVal':'地铁 4 号线惠化站 4 号出口',
 'visit.transitSub':'往成均馆大学方向步行约 10 分钟 · 可乘社区巴士 钟路08',
 'visit.service':'主日崇拜',
 'visit.serviceVal':'每周日下午 3:00',
 'visit.serviceSub':'现场崇拜 + Zoom 在线同步进行',
 'visit.email':'邮箱',
 'visit.offering':'在线奉献',
 'visit.offeringSub':'户名：ISCSKKU 教会',
 'visit.naver':'用 Naver 地图导航',
 'visit.google':'用谷歌地图查看',
 'map.sub':'成均馆大学留学生教会',
 'qk.service':'主日崇拜',
 'qk.bulletin':'本周周报',
 'sub.team':'服侍同工',
 'sub.times':'崇拜与聚会',
 'sub.ministries':'主要事工',
 'sub.gallery':'活动相册',
 'nav.expand':'展开子菜单',
 'bc.home':'首页',
 'sub.intro':'教会简介',
 'sub.vision':'异象',
 'sub.online':'在线崇拜',
 'sub.first':'新朋友指南',
 'sub.bulletin':'周报',
 'sub.map':'交通指引',
 'sub.contact':'联系方式',
 'sub.offering':'在线奉献',
 'meta.about':'教会介绍 | ISC SKKU Seoul 成均馆大学留学生教会',
 'meta.worship':'崇拜信息 | ISC SKKU Seoul 成均馆大学留学生教会',
 'meta.ministry':'事工 | ISC SKKU Seoul 成均馆大学留学生教会',
 'meta.news':'教会消息 · 周报 | ISC SKKU Seoul 成均馆大学留学生教会',
 'meta.visit':'交通指引 | ISC SKKU Seoul 成均馆大学留学生教会',
 'qk.bulletinVal':'在线查看',
 'qk.juboOf':'{d} 周报',
 'qk.video':'崇拜影片',
 'qk.visitVal':'明伦街 22号 2层',
 'home.moreItems':'还有 {n} 条消息',
 'home.worshipMore':'查看崇拜详情',
 'home.aboutMore':'更多教会介绍',
 'home.ministryMore':'查看主要事工',
 'home.visitMore':'查看交通指引详情',
 'cal.monShort':'1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月',
 'map.exit':'惠化站 4 号出口',
 'map.walk':'步行约 10 分钟',
 'map.walkShort':'约 10 分钟',
 'map.campus':'成均馆大学',
 'map.open':'在 Naver 地图中查看',
 'map.naver':'Naver 地图',
 'map.google':'谷歌地图'
},
en:{
 'foot.sub':'SKKU International Student Church · Since 2020',
 'foot.tag':'We walk with each student we meet on campus, from meeting Jesus to carrying the gospel home.',
 'w2.short':'Prayer',
 'foot.prayer':'Wednesdays 6:00 PM',
 'foot.rights':'© 2026 ISC SKKU Seoul · SKKU International Student Church',
 'fv.title':'First time here?',
 'fv.desc':'We have put together a few things worth knowing before you visit.',
 'fv.go':'Take a look',
 'fv.close':'Dismiss',
 'nav.first':'First Visit',
 'first.eyebrow':'FIRST VISIT',
 'first.title':'Is This Your First Time?',
 'first.sub':'It is completely fine if you have never been to a church, or if your Korean is limited. From the moment you arrive, you will not be on your own.',
 's1.t':'Arrive',
 's1.d':'Arriving by 2:50 PM on Sunday gives you plenty of time. Come up to the 2nd floor at 22 Myeongnyun-gil.',
 's2.t':'Welcome',
 's2.d':'Someone will greet you at the door. Just say “It’s my first time” and we will walk you to a seat.',
 's3.t':'Worship',
 's3.d':'The service begins at 3:00 PM and lasts about an hour, with praise and preaching in both Korean and Chinese.',
 's4.t':'Fellowship',
 's4.d':'Cell groups and refreshments follow the service. If you would rather head home first, that is perfectly fine.',
 'faq.title':'Frequently Asked Questions',
 'q1':'I have never been to a church. Is that okay?',
 'a1':'Absolutely. Most of the students who come to us had never been to a church before either. You do not need to know anything in advance.',
 'q2':'What should I wear?',
 'a2':'Whatever you normally wear is fine. There is no need to dress formally.',
 'q3':'My Korean is not very good. Will I manage?',
 'a3':'The service runs in both Korean and Chinese, and there are always people who can help you in Chinese. There is nothing to worry about.',
 'q4':'Am I expected to give an offering?',
 'a4':'No. Giving is a personal matter of the heart, and we never place any expectation on first-time visitors.',
 'q5':'Can I come on my own?',
 'a5':'Most people do come alone. You will be greeted naturally, and someone will help you find a seat.',
 'q6':'Do I have to register?',
 'a6':'No. You are welcome to join us several times and decide only when you feel comfortable.',
 'first.cta1':'Register as a Newcomer',
 'first.cta2':'How to Find Us',
 'copy.btn':'Copy account number',
 'copy.done':'Copied',
 'meta.title':'ISC SKKU Seoul | SKKU International Student Church',
 'nav.about':'About',
 'nav.worship':'Worship',
 'nav.ministry':'Ministry',
 'nav.news':'News',
 'nav.visit':'Visit',
 'nav.register':'New Here?',
 'hero.eyebrow':'WELCOME · SKKU INTERNATIONAL STUDENT CHURCH',
 'hero.title':'From Campus to the Nations,<br>Walking Together with Students',
 'hero.lead':'ISC SKKU Seoul is a mission community that shares the gospel of Jesus Christ with international students at Sungkyunkwan University, especially Chinese students, and helps them live as true Christians.',
 'hero.verse':'“If you remain in me and my words remain in you, ask whatever you wish, and it will be done for you.”',
 'hero.verseRef':'John 15:7 · Vision 2026 “Union with Christ: Abiding in Jesus, Abiding in His Word”',
 'hero.cta1':'Worship Times',
 'hero.cta2':'How to Find Us',
 'strip.service':'SUNDAY WORSHIP',
 'strip.serviceVal':'Every Sunday 3:00&nbsp;PM',
 'strip.place':'LOCATION',
 'strip.placeVal':'22 Myeongnyun-gil, Jongno-gu, Seoul (2F)',
 'strip.founded':'FOUNDED',
 'strip.foundedVal':'March 15, 2020',
 'about.eyebrow':'ABOUT US',
 'about.title':'About Our Church',
 'about.p1':'ISC SKKU Seoul supports the spiritual growth of international students through worship, education, training, discipleship and fellowship, sharing their spiritual and everyday struggles and serving one another in love.',
 'about.p2':'We consider it a central calling to prepare students so that even after they graduate and return home, they may live as missional disciples who bear witness to the gospel. Services are held in Korean and Chinese together, and graduates who have returned to China continue to join us online.',
 'about.p3':'We are a campus church made up mostly of Chinese international students, worshipping in both Chinese and Korean. However long you have been in Korea, and whether or not you have been to church before, you are welcome here.',
 'vision.1':'A church that longs for worship: the Word, prayer and praise',
 'vision.2':'A church of gospel witness and confession',
 'vision.3':'A church that raises up student missionaries',
 'team.eyebrow':'OUR TEAM',
 'team.title':'Those Who Serve',
 'team.leadRole':'Senior Pastor',
 'team.leadName':'Rev. Jonghyun Jung',
 'team.greet':'Serving as senior pastor of ISC SKKU Seoul, caring for each student he meets on campus through the Word and prayer.',
 'cv.1a':'Hansei University Graduate School of Theology',
 'cv.1b':'M.Div.',
 'cv.2a':'Purdue University',
 'cv.2b':'Ph.D. in Sociology',
 'cv.3a':'Sungkyunkwan University',
 'cv.3b':'Associate Professor of Sociology',
 'cv.4a':'Changdong Holiness Church',
 'cv.4b':'Associate Pastor',
 'team.missionary':'Missionary',
 'team.evangelist':'Evangelist',
 'worship.eyebrow':'WORSHIP',
 'worship.title':'Worship & Gatherings',
 'worship.sub':'We worship both on site and online via Zoom. First-time visitors are always welcome.',
 'w1.t':'Sunday Worship',
 'w1.time':'Every Sunday 3:00 PM',
 'w1.d':'Preaching, praise, prayer and sharing. Cell groups follow the service, with fellowship meals every other week.',
 'w2.t':'Bridgehead Prayer Meeting (BPM)',
 'w2.time':'Wednesdays 6:00~9:00 PM',
 'w2.d':'A focused time of prayer for revival and spiritual awakening in the church.',
 'w3.t':'Cell Group',
 'w3.time':'After Sunday Worship',
 'w3.d':'A small group where we share the Word and pray for one another.',
 'w4.t':'Shalom Lounge',
 'w4.time':'Open on weekdays',
 'w4.d':'A place of rest for students, with study space, coffee and tea.',
 'ministry.eyebrow':'MINISTRY',
 'ministry.title':'Our Ministries',
 'ministry.sub':'We walk with each student from meeting Jesus, to growing as a disciple, to carrying the gospel home.',
 'm1.t':'Baptism Class & Baptism',
 'm1.d':'Through regular baptism classes and services, new lives are being born again in Christ.',
 'm2.t':'Discipleship Program',
 'm2.d':'Focused, systematic discipleship designed around students’ limited time in Korea: in-depth Bible study, leadership training and foundations of faith.',
 'm3.t':'Student Leader Training',
 'm3.d':'Leadership development, training in servanthood and hands-on ministry to raise the next generation of student leaders.',
 'm4.t':'Small Group Bible Study',
 'm4.d':'Small group Bible study using “Foundations of the Gospel,” led together by student leaders and faculty.',
 'photos.eyebrow':'GALLERY',
 'photos.title':'Moments We Have Shared',
 'news.eyebrow':'NEWS &amp; BULLETIN',
 'news.title':'Church News & Bulletin',
 'news.thisWeek':'This Week',
 'news.loading':'Loading news...',
 'news.more':'Read all announcements',
 'news.less':'Show less',
 'news.archive':'See past announcements',
 'news.fail':'Could not load the news.',
 'jubo.title':'This Week’s Bulletin',
 'jubo.desc':'You can read each week’s bulletin online, no download needed.',
 'jubo.btn':'Read the bulletin ›',
 'jubo.archive':'See past bulletins',
 'jubo.zoom':'Click to enlarge ⤢',
 'jubo.wait':'Preparing the bulletin preview',
 'jubo.suffix':'Bulletin',
 'cal.dow':'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
 'cal.mon':'January,February,March,April,May,June,July,August,September,October,November,December',
 'yt.eyebrow':'ONLINE WORSHIP',
 'yt.title':'Online Worship · YouTube',
 'yt.sub':'Sunday services and sermons are available on our YouTube channel. The list below updates automatically when new videos are posted.',
 'yt.link':'▶ Visit our YouTube channel (@iscskku2020)',
 'visit.eyebrow':'VISIT US',
 'visit.title':'How to Find Us',
 'visit.addr':'ADDRESS',
 'visit.addrVal':'2F, 22 Myeongnyun-gil, Jongno-gu, Seoul',
 'visit.addrSub':'Near SKKU Seoul (Humanities & Social Sciences) Campus',
 'visit.transit':'GETTING HERE',
 'visit.transitVal':'Line 4, Hyehwa Station, Exit 4',
 'visit.transitSub':'About a 10 minute walk toward SKKU · Village bus Jongno 08',
 'visit.service':'SUNDAY WORSHIP',
 'visit.serviceVal':'Every Sunday 3:00 PM',
 'visit.serviceSub':'On site and on Zoom at the same time',
 'visit.email':'EMAIL',
 'visit.offering':'ONLINE OFFERING',
 'visit.offeringSub':'Account holder: ISCSKKU Church',
 'visit.naver':'Directions on Naver Map',
 'visit.google':'View on Google Maps',
 'map.sub':'SKKU International Student Church',
 'qk.service':'Sunday Worship',
 'qk.bulletin':'Weekly Bulletin',
 'sub.team':'Our Team',
 'sub.times':'Services',
 'sub.ministries':'Ministries',
 'sub.gallery':'Gallery',
 'nav.expand':'Show submenu',
 'bc.home':'Home',
 'sub.intro':'Who We Are',
 'sub.vision':'Our Vision',
 'sub.online':'Online Worship',
 'sub.first':'First Visit',
 'sub.bulletin':'Bulletin',
 'sub.map':'Directions',
 'sub.contact':'Contact',
 'sub.offering':'Online Offering',
 'meta.about':'About | ISC SKKU Seoul',
 'meta.worship':'Worship | ISC SKKU Seoul',
 'meta.ministry':'Ministry | ISC SKKU Seoul',
 'meta.news':'News & Bulletin | ISC SKKU Seoul',
 'meta.visit':'Visit | ISC SKKU Seoul',
 'qk.bulletinVal':'Read online',
 'qk.juboOf':'{d} · PDF',
 'qk.video':'Service Videos',
 'qk.visitVal':'22 Myeongnyun-gil, 2F',
 'home.moreItems':'{n} more announcements',
 'home.worshipMore':'Worship details',
 'home.aboutMore':'More about us',
 'home.ministryMore':'Our ministries',
 'home.visitMore':'Directions & contact',
 'cal.monShort':'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec',
 'map.exit':'Hyehwa Stn. Exit 4',
 'map.walk':'10 min walk',
 'map.walkShort':'10 min',
 'map.campus':'SKKU',
 'map.open':'Open in Naver Map',
 'map.naver':'Naver Map',
 'map.google':'Google Maps'
}
};

/* 이 파일이 실행되었다는 표시 (늦게 도착했으면 안전 모드를 풀어 줍니다) */
window.__isc = 1;
var __lateJS = document.documentElement.classList.contains('js-fail');
document.documentElement.classList.remove('js-fail');

var HTML_LANG = {ko:'ko', zh:'zh-CN', en:'en'};
var lang = 'ko';
var PAGE = (document.body && document.body.getAttribute('data-page')) || 'home';
var ON_LANG = [];   /* 언어가 바뀔 때 다시 그려야 하는 기능들이 여기에 등록됩니다 */

function t(key){ return (I18N[lang] && I18N[lang][key]) || I18N.ko[key] || ''; }
function tf(key, map){
  var s = t(key);
  for(var k in map){ if(map.hasOwnProperty(k)) s = s.split('{' + k + '}').join(map[k]); }
  return s;
}
function mod(name, fn){
  try{ fn(); }catch(e){ if(window.console && console.warn) console.warn('[ISC] ' + name, e); }
}

/* 선택된 언어 뒤로 초록 알약이 미끄러지듯 따라갑니다 */
function movePill(){
  var seg = document.getElementById('langSeg'), pill = document.getElementById('langPill');
  if(!seg || !pill) return;
  var b = seg.querySelector('button[data-lang="' + lang + '"]');
  if(!b) return;
  pill.style.width = b.offsetWidth + 'px';
  pill.style.transform = 'translateX(' + (b.offsetLeft - 3) + 'px)';
}
window.addEventListener('resize', function(){ movePill(); });
window.addEventListener('load', function(){ movePill(); });
if(document.fonts && document.fonts.ready){ document.fonts.ready.then(function(){ movePill(); }); }
(function(){
  /* 글꼴이 늦게 도착하면 언어 알약을 글자 폭에 맞춰 한 번 더 맞춥니다 */
  if(!document.fonts || !document.fonts.addEventListener) return;
  var ft;
  document.fonts.addEventListener('loadingdone', function(){ clearTimeout(ft); ft = setTimeout(movePill, 250); });
})();

/* ── 뒤 화면 스크롤 잠금 (서랍·팝업 공용) ── */
var __locks = 0, __lockY = 0;
function lockScroll(on){
  var b = document.body;
  if(on){
    if(__locks === 0){
      __lockY = window.pageYOffset || document.documentElement.scrollTop || 0;
      var sbw = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty('--sbw', (sbw > 0 ? sbw : 0) + 'px');
      b.style.top = (-__lockY) + 'px';
      b.classList.add('scroll-lock');
    }
    __locks++;
  }else{
    __locks = Math.max(0, __locks - 1);
    if(__locks === 0){
      var el = document.documentElement;
      var prev = el.style.scrollBehavior;
      el.style.scrollBehavior = 'auto';
      b.classList.remove('scroll-lock');
      b.style.top = '';
      el.style.setProperty('--sbw', '0px');
      try{ window.scrollTo({top: __lockY, left: 0, behavior: 'instant'}); }
      catch(e){ window.scrollTo(0, __lockY); }
      if(window.requestAnimationFrame){ requestAnimationFrame(function(){ el.style.scrollBehavior = prev; }); }
      else{ el.style.scrollBehavior = prev; }
    }
  }
}

function applyLang(code){
  lang = I18N[code] ? code : 'ko';
  var root = document.documentElement;
  root.lang = HTML_LANG[lang];
  var mk = (PAGE === 'home') ? 'meta.title' : 'meta.' + PAGE;
  if(t(mk)) document.title = t(mk);
  var nodes = document.querySelectorAll('[data-i18n]');
  for(var i=0;i<nodes.length;i++){
    var v = t(nodes[i].getAttribute('data-i18n'));
    /* 이미 같은 글자면 건드리지 않습니다 (한국어 화면은 다시 그릴 필요가 없어 더 빨리 뜹니다) */
    if(v && nodes[i].innerHTML !== v) nodes[i].innerHTML = v;
  }
  var btns = document.querySelectorAll('[data-lang]');
  for(var j=0;j<btns.length;j++){
    btns[j].setAttribute('aria-current', btns[j].getAttribute('data-lang') === lang ? 'true' : 'false');
  }
  movePill();
  try{ localStorage.setItem('isc-lang', lang); }catch(e){}
  for(var k=0;k<ON_LANG.length;k++){ try{ ON_LANG[k](); }catch(e){} }
  root.classList.remove('i18n-wait');
}

(function initLang(){
  var saved = null;
  try{ saved = localStorage.getItem('isc-lang'); }catch(e){}
  if(!saved){
    /* 중국어 브라우저만 자동으로 맞춰 주고, 그 밖에는 한국어를 기본으로 둡니다.
       (검색엔진 로봇이 한국어 페이지를 읽도록 하기 위해서입니다) */
    var n = (navigator.language || 'ko').toLowerCase();
    saved = n.indexOf('zh') === 0 ? 'zh' : 'ko';
  }
  lang = I18N[saved] ? saved : 'ko';
})();


/* ═══ 2. 언어 단추 ═══ */
mod('lang', function(){
  var seg = document.getElementById('langSeg');
  if(!seg) return;
  seg.addEventListener('click', function(e){
    var b = e.target.closest('button[data-lang]');
    if(b) applyLang(b.getAttribute('data-lang'));
  });
});


/* ═══ 3. 큰 메뉴 (넓은 화면에서 펼쳐지는 메가메뉴) ═══ */
mod('gnb', function(){
  var hd = document.getElementById('siteHeader');
  var gnb = document.getElementById('gnb');
  if(!hd || !gnb) return;

  /* 지금 보고 있는 페이지의 메뉴에 표시 */
  var items = gnb.querySelectorAll('.gnb-item');
  for(var i=0;i<items.length;i++){
    if(items[i].getAttribute('data-sec') === PAGE){
      items[i].querySelector('.gnb-top').setAttribute('aria-current', 'page');
    }
  }

  var subs = gnb.querySelectorAll('.gnb-sub');
  var megaBg = hd.querySelector('.mega-bg');
  var closeT = null, hush = false;

  function measure(){
    var h = 0;
    for(var i=0;i<subs.length;i++){ h = Math.max(h, subs[i].offsetHeight); }
    var intro = hd.querySelector('.mega-intro');
    if(intro && intro.offsetHeight) h = Math.max(h, intro.offsetHeight + 52);
    if(h > 0) hd.style.setProperty('--mega-h', Math.ceil(h) + 'px');
  }
  function hot(item){
    for(var i=0;i<items.length;i++){ items[i].classList.toggle('hot', items[i] === item); }
  }
  function open(){
    clearTimeout(closeT);
    if(hd.classList.contains('is-mega')) return;
    measure();
    hd.classList.add('is-mega');
  }
  function close(){
    clearTimeout(closeT);
    hd.classList.remove('is-mega');
    hot(null);
  }
  function later(){ clearTimeout(closeT); closeT = setTimeout(close, 160); }

  /* 마우스가 있는 기기에서만 "올리면 펼침" (터치 기기에서는 누르면 바로 그 페이지로 이동) */
  var fine = !!(window.matchMedia && window.matchMedia('(hover:hover) and (pointer:fine)').matches);
  if(fine){
    hd.addEventListener('mouseover', function(e){
      var it = e.target.closest ? e.target.closest('.gnb-item') : null;
      if(it && gnb.contains(it)){ open(); hot(it); return; }
      if(megaBg && megaBg.contains(e.target)){ clearTimeout(closeT); return; }
      if(hd.classList.contains('is-mega')) later();
    });
    hd.addEventListener('mouseleave', later);
  }
  /* 키보드: Tab 으로 메뉴에 들어오면 펼치고, 메뉴 밖으로 나가면 접습니다 */
  gnb.addEventListener('focusin', function(e){
    if(hush) return;
    open();
    var it = e.target.closest('.gnb-item');
    if(it) hot(it);
  });
  document.addEventListener('focusin', function(e){
    if(hd.classList.contains('is-mega') && !gnb.contains(e.target)) close();
  });
  document.addEventListener('keydown', function(e){
    if((e.key === 'Escape' || e.key === 'Esc') && hd.classList.contains('is-mega')){
      var a = document.activeElement;
      close();
      if(a && gnb.contains(a)){
        var top = a.closest('.gnb-item').querySelector('.gnb-top');
        if(top && top !== a){ hush = true; try{ top.focus(); }catch(err){} hush = false; }
      }
    }
  });
  gnb.addEventListener('click', function(e){ if(e.target.closest('a')) close(); });
  window.addEventListener('resize', function(){ if(hd.classList.contains('is-mega')) measure(); });
  ON_LANG.push(function(){ if(hd.classList.contains('is-mega')) measure(); });
});


/* ═══ 4. 서랍 메뉴 (좁은 화면) ═══ */
mod('drawer', function(){
  var hd   = document.getElementById('siteHeader'),
      hamb = document.getElementById('hamb'),
      mm   = document.getElementById('mMenu'),
      back = document.getElementById('mBack');
  if(!hamb || !mm || !back) return;

  /* 지금 페이지의 묶음은 처음부터 펼쳐 둡니다 */
  var groups = mm.querySelectorAll('.m-group');
  for(var i=0;i<groups.length;i++){
    var g = groups[i], cur = g.getAttribute('data-sec') === PAGE;
    var tog = g.querySelector('.m-tog'), sub = g.querySelector('.m-sub');
    if(cur){
      g.querySelector('.m-row>a').setAttribute('aria-current', 'page');
      if(tog && sub){ tog.setAttribute('aria-expanded', 'true'); sub.hidden = false; }
    }
  }
  mm.addEventListener('click', function(e){
    var tog = e.target.closest('.m-tog');
    if(tog){
      var sub = document.getElementById(tog.getAttribute('aria-controls'));
      var openIt = tog.getAttribute('aria-expanded') !== 'true';
      tog.setAttribute('aria-expanded', openIt ? 'true' : 'false');
      if(sub) sub.hidden = !openIt;
      return;
    }
    if(e.target.closest('a')) setMenu(false);
  });

  function setMenu(open){
    var wasOpen = mm.classList.contains('open');
    if(open === wasOpen) return;
    lockScroll(open);
    mm.classList.toggle('open', open);
    back.classList.toggle('open', open);
    hamb.classList.toggle('on', open);
    if(hd) hd.classList.toggle('is-menu', open);
    hamb.setAttribute('aria-expanded', open ? 'true' : 'false');
    mm.setAttribute('aria-hidden', open ? 'false' : 'true');
    if(open){
      var first = mm.querySelector('a');
      if(first) setTimeout(function(){ try{ first.focus(); }catch(e){} }, 340);
    }else if(wasOpen){
      try{ hamb.focus(); }catch(e){}
    }
  }
  hamb.addEventListener('click', function(){ setMenu(!mm.classList.contains('open')); });
  back.addEventListener('click', function(){ setMenu(false); });
  document.addEventListener('keydown', function(e){
    if((e.key === 'Escape' || e.key === 'Esc') && mm.classList.contains('open')) setMenu(false);
  });
  window.addEventListener('resize', function(){
    /* 햄버거가 사라지는 폭(1060px)과 같은 기준으로 서랍을 닫습니다 */
    if(window.innerWidth > 1060 && mm.classList.contains('open')) setMenu(false);
  });
});


/* ═══ 5. 오른쪽 아래 (위로 가기 · 바닥글 근처에서 비켜 주기) ═══ */
mod('dock', function(){
  var tb = document.getElementById('topBtn');
  if(tb){
    tb.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });
    var onScroll = function(){ tb.classList.toggle('on', (window.pageYOffset || 0) > 600); };
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }
  var dock = document.querySelector('.dock'), foot = document.querySelector('footer');
  if(dock && foot && window.IntersectionObserver){
    var io = new IntersectionObserver(function(en){
      dock.classList.toggle('at-foot', en[0].isIntersecting);
    }, {rootMargin:'0px 0px -40px 0px'});
    io.observe(foot);
    /* 휴대폰에서 첫 화면의 바로가기 네 칸을 가리지 않도록, 그 칸이 보이는 동안 알약을 잠시 숨깁니다 */
    var quick = document.querySelector('.quick');
    if(quick){
      var io2 = new IntersectionObserver(function(en){
        dock.classList.toggle('at-quick', en[0].isIntersecting);
      });
      io2.observe(quick);
    }
  }
});


/* ═══ 6. 처음 오셨나요 팝업 (모든 페이지에서 같은 내용) ═══ */
mod('modal', function(){
  var ICONS = [
    '<svg viewBox="0 0 24 24"><path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M12 20.5c4-2.6 7-5.4 7-9a3.6 3.6 0 0 0-7-1.3A3.6 3.6 0 0 0 5 11.5c0 3.6 3 6.4 7 9z"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M12 3.5v17M7 9h10"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M4.5 8h13v6a5 5 0 0 1-5 5h-3a5 5 0 0 1-5-5z"/><path d="M17.5 9.5h1.6a2.4 2.4 0 0 1 0 4.8h-1.6"/><path d="M7 4.5v1.6M11 4v2M15 4.5v1.6"/></svg>'
  ];
  function span(key, tag){ tag = tag || 'span'; return '<' + tag + ' data-i18n="' + key + '">' + t(key) + '</' + tag + '>'; }

  var modal = document.getElementById('firstModal');
  if(!modal){
    var steps = '';
    for(var i=1;i<=4;i++){
      steps += '<div class="vstep">' + ICONS[i-1] + '<span class="vnum">' + i + '</span>' +
               span('s' + i + '.t', 'h3') + span('s' + i + '.d', 'p') + '</div>';
    }
    var faq = '';
    for(var q=1;q<=6;q++){
      faq += '<details><summary>' + span('q' + q) + '</summary><div class="ans" data-i18n="a' + q + '">' + t('a' + q) + '</div></details>';
    }
    modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'firstModal';
    modal.hidden = true;
    modal.innerHTML =
      '<div class="modal-back" data-close></div>' +
      '<div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="firstTitle">' +
        '<button class="modal-x" type="button" data-close aria-label="Close">✕</button>' +
        '<div class="modal-scroll">' +
          '<div class="sec-head">' + span('first.eyebrow', 'p').replace('<p ', '<p class="eyebrow" ') +
            '<h2 id="firstTitle" data-i18n="first.title">' + t('first.title') + '</h2>' +
            span('first.sub', 'p').replace('<p ', '<p class="sub" ') + '</div>' +
          '<div class="steps">' + steps + '</div>' +
          span('faq.title', 'p').replace('<p ', '<p class="faq-head" ') +
          '<div class="faq">' + faq + '</div>' +
          '<div class="first-cta">' +
            '<a class="btn btn-pine" href="https://docs.google.com/forms/d/e/1FAIpQLSemEMyyCe5RWVgskzFCWCxmG2h9F5PjEDzOOx1raUHlOfolew/viewform?usp=publish-editor" target="_blank" rel="noopener" data-i18n="first.cta1">' + t('first.cta1') + '</a>' +
            '<a class="btn btn-line" href="visit.html#map" data-i18n="first.cta2">' + t('first.cta2') + '</a>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);
  }
  var box = modal.querySelector('.modal-box');
  var opener = null;

  function open(from){
    opener = from || null;
    modal.hidden = false;
    lockScroll(true);
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        modal.classList.add('on');
        var sc = modal.querySelector('.modal-scroll');
        if(sc) sc.scrollTop = 0;
      });
    });
    var x = modal.querySelector('.modal-x');
    if(x) setTimeout(function(){ try{ x.focus(); }catch(e){} }, 60);
  }
  function close(){
    if(modal.hidden) return;
    modal.classList.remove('on');
    lockScroll(false);
    setTimeout(function(){ modal.hidden = true; }, 300);
    if(opener && !document.body.contains(opener)) opener = document.querySelector('.fv-pill');
    if(opener){ try{ opener.focus(); }catch(e){} opener = null; }
  }
  document.addEventListener('click', function(e){
    var tr = e.target.closest('[data-first]');
    if(tr){ e.preventDefault(); open(tr); return; }
    if(e.target.closest('[data-close]')){ close(); return; }
    if(!modal.hidden && e.target.closest('.modal-box a')) close();
  });
  document.addEventListener('keydown', function(e){
    if((e.key === 'Escape' || e.key === 'Esc') && !modal.hidden){ close(); return; }
    /* 팝업이 열려 있는 동안 Tab 키가 팝업 안에서만 돌도록 */
    if(e.key !== 'Tab' || modal.hidden || !box) return;
    var all = box.querySelectorAll('a[href],button:not([disabled]),summary,[tabindex]:not([tabindex="-1"])');
    var list = [];
    for(var i=0;i<all.length;i++){ if(all[i].offsetWidth || all[i].offsetHeight) list.push(all[i]); }
    if(!list.length) return;
    var first = list[0], last = list[list.length-1], cur = document.activeElement;
    var inside = box.contains(cur);
    if(e.shiftKey && (cur === first || !inside)){ e.preventDefault(); last.focus(); }
    else if(!e.shiftKey && (cur === last || !inside)){ e.preventDefault(); first.focus(); }
  });
});


/* ═══ 7. 처음 오셨나요 안내 위젯 ═══
   평소에는 작은 알약으로만 있고, 처음 방문하신 분에게만 6초쯤 뒤 한 번 카드로 펼쳐 보여 드립니다. */
mod('fv', function(){
  var box = document.getElementById('fvBox');
  if(!box) return;
  var SEEN = 'isc-fv-seen';
  function seen(){ try{ return localStorage.getItem(SEEN) === '1'; }catch(e){ return true; } }
  function markSeen(){ try{ localStorage.setItem(SEEN, '1'); }catch(e){} }
  var ICON = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/>' +
             '<path d="M9.6 9.4a2.5 2.5 0 0 1 4.7 1.1c0 1.7-2.3 2-2.3 3.4"/>' +
             '<circle cx="12" cy="17" r=".6" fill="currentColor" stroke="none"/></svg>';
  function pill(){
    box.innerHTML = '<button class="fv-pill" type="button" data-first>' + ICON +
                    '<span data-i18n="nav.first">' + t('nav.first') + '</span></button>';
  }
  function card(){
    box.innerHTML =
      '<div class="fv-card">' +
        '<button class="fv-x" type="button" id="fvX" aria-label="' + t('fv.close') + '">✕</button>' +
        '<div class="fv-ic">' + ICON + '</div>' +
        '<h4 data-i18n="fv.title">' + t('fv.title') + '</h4>' +
        '<p data-i18n="fv.desc">' + t('fv.desc') + '</p>' +
        '<button class="fv-go" type="button" data-first data-i18n="fv.go">' + t('fv.go') + '</button>' +
      '</div>';
    document.getElementById('fvX').addEventListener('click', function(){ markSeen(); pill(); });
  }
  document.addEventListener('click', function(e){
    if(e.target.closest('[data-first]')){ markSeen(); setTimeout(pill, 0); }
  });
  ON_LANG.push(function(){ if(box.querySelector('.fv-card')) card(); else pill(); });
  if(!seen()){
    setTimeout(function(){
      var m = document.getElementById('firstModal');
      if(m && !m.hidden) return;
      if(box.querySelector('.fv-card')) return;
      card();
    }, 6000);
  }
});


/* ═══ 8. 첫 화면 배경 사진 넘김 (홈) ═══ */
function swipe(el, onLeft, onRight){
  if(!el) return;
  var x0 = null, y0 = null;
  el.addEventListener('touchstart', function(e){ var p = e.touches[0]; x0 = p.clientX; y0 = p.clientY; }, {passive:true});
  el.addEventListener('touchend', function(e){
    if(x0 === null) return;
    var p = e.changedTouches[0], dx = p.clientX - x0, dy = p.clientY - y0;
    if(Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4){ if(dx < 0) onLeft(); else onRight(); }
    x0 = null;
  }, {passive:true});
}
mod('hero', function(){
  var box = document.getElementById('heroBg');
  var slides = box ? box.querySelectorAll('.slide') : [];
  var dotsBox = document.getElementById('heroDots');
  if(slides.length < 2 || !dotsBox) return;
  var idx = 0, timer = null, FADE = 1800;
  /* 두 번째·세 번째 사진은 첫 화면이 뜬 뒤에 내려받습니다 */
  function preload(){
    for(var i=0;i<slides.length;i++){
      var src = slides[i].getAttribute('data-bg');
      if(src){
        if(slides[i].style.backgroundImage.indexOf(src) < 0) slides[i].style.backgroundImage = "url('" + src + "')";
        slides[i].removeAttribute('data-bg');
      }
    }
  }
  if(document.readyState === 'complete') setTimeout(preload, 300);
  else window.addEventListener('load', function(){ setTimeout(preload, 300); });
  for(var i=0;i<slides.length;i++){
    (function(i){
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Slide ' + (i+1));
      if(i === 0) b.className = 'on';
      b.onclick = function(){ preload(); go(i); restart(); };
      dotsBox.appendChild(b);
    })(i);
  }
  var dots = dotsBox.querySelectorAll('button');
  function zoom(el){ el.classList.remove('kb'); void el.offsetWidth; el.classList.add('kb'); }
  function go(i){
    var prev = idx;
    idx = (i + slides.length) % slides.length;
    if(idx === prev) return;
    slides[prev].classList.remove('active'); dots[prev].classList.remove('on');
    slides[idx].classList.add('active');     dots[idx].classList.add('on');
    zoom(slides[idx]);
    setTimeout(function(){ if(!slides[prev].classList.contains('active')) slides[prev].classList.remove('kb'); }, FADE + 120);
  }
  function restart(){ clearInterval(timer); timer = setInterval(function(){ preload(); go(idx + 1); }, 7000); }
  /* 첫 사진의 천천히 확대되는 효과는 HTML 에 미리 넣어 두었습니다 (class="kb"). 화면이 뜬 뒤 다시 시작하지 않습니다. */
  if(!slides[0].classList.contains('kb')) zoom(slides[0]);
  document.addEventListener('visibilitychange', function(){ if(document.hidden) clearInterval(timer); else restart(); });
  swipe(box, function(){ go(idx + 1); restart(); }, function(){ go(idx - 1); restart(); });
  restart();
});


/* ═══ 9. 사진 캐러셀 ═══ */
mod('carousel', function(){
  var box = document.getElementById('carousel');
  if(!box) return;
  var slides = box.querySelectorAll('.slide');
  var dotsBox = document.getElementById('dots');
  if(!slides.length || !dotsBox) return;
  var idx = 0, timer;
  for(var i=0;i<slides.length;i++){
    (function(i){
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Photo ' + (i+1));
      if(i === 0) b.className = 'on';
      b.onclick = function(){ go(i); restart(); };
      dotsBox.appendChild(b);
    })(i);
  }
  var dots = dotsBox.querySelectorAll('button');
  function go(i){
    slides[idx].classList.remove('active'); dots[idx].classList.remove('on');
    idx = (i + slides.length) % slides.length;
    slides[idx].classList.add('active'); dots[idx].classList.add('on');
  }
  function restart(){ clearInterval(timer); timer = setInterval(function(){ go(idx + 1); }, 4500); }
  var pb = box.querySelector('.c-prev'), nb = box.querySelector('.c-next');
  if(pb) pb.addEventListener('click', function(){ go(idx - 1); restart(); });
  if(nb) nb.addEventListener('click', function(){ go(idx + 1); restart(); });
  box.addEventListener('mouseenter', function(){ clearInterval(timer); });
  box.addEventListener('mouseleave', restart);
  document.addEventListener('visibilitychange', function(){ if(document.hidden) clearInterval(timer); else restart(); });
  swipe(box, function(){ go(idx + 1); restart(); }, function(){ go(idx - 1); restart(); });
  restart();
});


/* ═══ 9-1. 유튜브 영상: 화면에 들어왔을 때만 플레이어를 불러옵니다 ═══
   (처음 화면을 열 때 무거운 유튜브 파일을 받지 않아 첫 화면이 빨리 뜹니다.
    영상 칸이 첫 화면 바로 아래에 있으므로, 첫 화면을 다 그린 뒤에 준비를 시작합니다) */
mod('youtube', function(){
  var boxes = document.querySelectorAll('[data-yt]');
  if(!boxes.length) return;
  function load(box){
    if(box.getAttribute('data-yt-done')) return;
    box.setAttribute('data-yt-done', '1');
    var f = document.createElement('iframe');
    f.title = 'ISC SKKU Seoul YouTube';
    f.setAttribute('loading', 'lazy');
    f.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    f.setAttribute('allowfullscreen', '');
    /* 플레이어가 다 준비되면 부드럽게 보여 줍니다 (8초가 지나도 소식이 없으면 그냥 보여 줍니다) */
    box.classList.add('yt-fade');
    var shown = false;
    function show(){ if(shown) return; shown = true; box.classList.add('yt-ready'); }
    f.addEventListener('load', show);
    setTimeout(show, 8000);
    f.src = box.getAttribute('data-yt');
    box.appendChild(f);
  }
  var started = false;
  function start(){
    if(started) return;
    started = true;
    /* 휴대폰의 '데이터 절약' 모드에서는 플레이어를 자동으로 불러오지 않습니다 (영상 칸의 유튜브 바로가기는 그대로) */
    try{ if(navigator.connection && navigator.connection.saveData) return; }catch(e){}
    if(!window.IntersectionObserver){ for(var i=0;i<boxes.length;i++) load(boxes[i]); return; }
    var io = new IntersectionObserver(function(en){
      for(var j=0;j<en.length;j++){ if(en[j].isIntersecting){ load(en[j].target); io.unobserve(en[j].target); } }
    }, {rootMargin:'0px 0px 40px 0px'});
    for(var k=0;k<boxes.length;k++) io.observe(boxes[k]);
  }
  if(document.readyState === 'complete') start();
  else{
    window.addEventListener('load', start);
    setTimeout(start, 5000);   /* 페이지가 아주 늦게 끝나도 5초 뒤에는 준비합니다 */
  }
});


/* ═══ 10. 스크롤 등장 효과 ═══ */
mod('reveal', function(){
  var els = document.querySelectorAll('.reveal');
  if(!window.IntersectionObserver || __lateJS){
    for(var i=0;i<els.length;i++) els[i].classList.add('in');
    return;
  }
  var io = new IntersectionObserver(function(en){
    en.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {rootMargin:'0px 0px -60px 0px'});
  /* 첫 화면에 조금이라도 보이는 것은 바로 보여 줍니다 (화면 아래 끝이 빈칸으로 남지 않도록) */
  var vh = window.innerHeight || document.documentElement.clientHeight;
  for(var j=0;j<els.length;j++){
    var r = els[j].getBoundingClientRect();
    if(r.top < vh && r.bottom > 0) els[j].classList.add('in');
    else io.observe(els[j]);
  }
});


/* ═══ 11. 사진이 없을 때 조용히 숨기기 (webp 가 없으면 jpg 로 다시 시도) ═══ */
mod('img', function(){
  function onFail(e){
    var img = e.target, p = img.parentNode;
    if(p && p.tagName === 'PICTURE'){
      var srcs = p.getElementsByTagName('source');
      if(srcs.length){
        while(srcs.length) p.removeChild(srcs[0]);
        var u = img.getAttribute('src');
        img.removeAttribute('src');
        img.setAttribute('src', u);
        return;
      }
    }
    img.style.display = 'none';
  }
  var imgs = document.getElementsByTagName('img');
  for(var i=0;i<imgs.length;i++){
    imgs[i].addEventListener('error', onFail);
    if(imgs[i].complete && imgs[i].naturalWidth === 0 && imgs[i].getAttribute('src')) onFail({target: imgs[i]});
  }
});


/* ═══ 12. 하위 페이지 탭: 지금 보고 있는 부분 표시 ═══ */
mod('subnav', function(){
  var nav = document.querySelector('.subnav');
  if(!nav) return;
  var ul = nav.querySelector('ul');
  var links = nav.querySelectorAll('a[href^="#"]');
  var map = {}, secs = [];
  for(var i=0;i<links.length;i++){
    var id = links[i].getAttribute('href').slice(1), el = document.getElementById(id);
    if(el){ map[id] = links[i]; secs.push(el); }
  }
  if(!secs.length) return;
  var current = null, lockUntil = 0;
  function mark(id){
    if(id === current) return;
    current = id;
    for(var k in map){ if(map.hasOwnProperty(k)) map[k].classList.toggle('on', k === id); }
    var a = map[id];
    if(a && ul && ul.scrollWidth > ul.clientWidth + 2){
      var left = a.offsetLeft - (ul.clientWidth - a.offsetWidth) / 2;
      try{ ul.scrollTo({left: left, behavior: 'smooth'}); }catch(e){ ul.scrollLeft = left; }
    }
  }
  /* 머리글과 탭 바로 아래 선을 기준으로, 그 선을 지난 마지막 구역을 "지금 보는 곳"으로 봅니다 */
  function update(){
    if(Date.now() < lockUntil) return;
    var line = nav.getBoundingClientRect().bottom + 48;
    var pick = secs[0];
    for(var s=0;s<secs.length;s++){ if(secs[s].getBoundingClientRect().top <= line) pick = secs[s]; }
    var doc = document.documentElement;
    if(window.innerHeight + (window.pageYOffset || doc.scrollTop) >= doc.scrollHeight - 4) pick = secs[secs.length - 1];
    mark(pick.id);
  }
  var ticking = false;
  window.addEventListener('scroll', function(){
    if(ticking) return;
    ticking = true;
    (window.requestAnimationFrame || setTimeout)(function(){ ticking = false; update(); });
  }, {passive:true});
  window.addEventListener('resize', update);
  nav.addEventListener('click', function(e){
    var a = e.target.closest('a[href^="#"]');
    if(!a) return;
    mark(a.getAttribute('href').slice(1));
    lockUntil = Date.now() + 900;          /* 부드럽게 이동하는 동안에는 표시가 흔들리지 않게 */
    setTimeout(update, 950);
  });
  update();
});


/* ═══ 13. 헌금 계좌번호 복사 ═══ */
mod('copy', function(){
  var b = document.getElementById('copyBtn');
  if(!b) return;
  var NUM = '1005-303-895466';           /* ▶ 계좌번호가 바뀌면 이 줄과 visit.html 의 숫자를 함께 고치세요 */
  function done(){
    b.textContent = t('copy.done');
    b.classList.add('ok');
    setTimeout(function(){ b.textContent = t('copy.btn'); b.classList.remove('ok'); }, 1800);
  }
  function fallback(){
    var ta = document.createElement('textarea');
    ta.value = NUM; ta.setAttribute('readonly', '');
    ta.style.position = 'fixed'; ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select(); ta.setSelectionRange(0, NUM.length);
    try{ document.execCommand('copy'); done(); }catch(e){}
    document.body.removeChild(ta);
  }
  b.addEventListener('click', function(){
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(NUM).then(done).catch(fallback);
    }else{ fallback(); }
  });
});


/* ═══════════════════════════════════════════════════════════════
   14. 교회 소식 · 주보 (수정하실 필요 없는 부분입니다)
       news.txt 를 읽어 홈의 "이번 주 소식"과 교회 소식 페이지를 자동으로 만듭니다.
       소식 파일은 언어별로 나눌 수 있습니다.
         news.txt      (기본, 한국어)
         news_zh.txt   (중국어)  ← 만들어 올리면 중국어 화면에서 이 파일을 씁니다
         news_en.txt   (영어)    ← 없으면 한국어 파일을 그대로 보여 줍니다
   ═══════════════════════════════════════════════════════════════ */
mod('news', function(){
  var homeList = document.getElementById('hNewsList');
  var fullList = document.getElementById('newsList');
  var juboCard = document.getElementById('juboCard');
  var qJubo    = document.getElementById('qJubo');
  if(!homeList && !fullList && !juboCard && !qJubo) return;

  var esc = function(s){
    return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; });
  };
  var pad = function(n){ return ('0' + n).slice(-2); };

  function fmtDate(s, withDow){
    var p = s.split('-'), y = +p[0], m = +p[1], d = +p[2];
    var mn = t('cal.mon').split(',')[m-1];
    var dow = t('cal.dow').split(',')[new Date(y, m-1, d).getDay()];
    if(lang === 'en') return (withDow ? dow + ', ' : '') + mn + ' ' + d + ', ' + y;
    var base = (lang === 'ko') ? (y + '년 ' + m + '월 ' + d + '일') : (y + '年 ' + m + '月 ' + d + '日');
    return withDow ? base + ' ' + dow : base;
  }
  function fmtShort(s){
    var p = s.split('-'), m = +p[1], d = +p[2];
    if(lang === 'en') return t('cal.monShort').split(',')[m-1] + ' ' + d;
    if(lang === 'ko') return m + '월 ' + d + '일';
    return m + '月' + d + '日';
  }

  function parseNews(text){
    var lines = text.replace(/\r\n/g, '\n').split('\n');
    var weeks = [], cur = null, item = null;
    for(var i=0;i<lines.length;i++){
      var line = lines[i].replace(/\s+$/, '');
      var dm = line.match(/^\s*(\d{4})\s*\.\s*(\d{1,2})\s*\.\s*(\d{1,2})\s*\.?\s*$/);
      if(dm){ cur = {ymd: dm[1] + '-' + pad(+dm[2]) + '-' + pad(+dm[3]), items: []}; weeks.push(cur); item = null; continue; }
      if(!line.trim() || !cur) continue;
      var m = line.match(/^\s*(\d+)\s*\.\s*(.*)$/);
      if(m){ item = {head: m[2].trim(), rest: []}; cur.items.push(item); }
      else if(item){ item.rest.push(line.trim()); }
    }
    return weeks;
  }

  var newsCache = {};
  function loadNews(code){
    if(newsCache[code]) return newsCache[code];
    var file = (code === 'ko') ? 'news.txt' : 'news_' + code + '.txt';
    var pr = fetch(file, {cache:'no-cache'})
      .then(function(r){ if(!r.ok) throw 0; return r.text(); })
      .then(function(txt){
        var w = parseNews(txt);
        if(!w.length) throw 0;
        w.sort(function(a, b){ return a.ymd < b.ymd ? 1 : -1; });
        return w;
      })
      .catch(function(){
        delete newsCache[code];
        if(code === 'ko') throw 0;
        return loadNews('ko');            /* 번역 파일이 없으면 한국어로 */
      });
    newsCache[code] = pr;
    return pr;
  }

  var NEWS = [], juboWeeks = [], juboIdx = -1, juboArchList = null;

  /* 지난 목록을 연·월로 묶어 보여 주는 공용 도우미 */
  function buildArchive(box, list, makeRow, stateKey){
    if(!list.length) return;
    var tree = {};
    list.forEach(function(w){
      var y = w.ymd.slice(0, 4), m = w.ymd.slice(5, 7);
      (tree[y] = tree[y] || {});
      (tree[y][m] = tree[y][m] || []).push(w);
    });
    var years = Object.keys(tree).sort().reverse();
    var st = buildArchive[stateKey] || {};
    if(!st.y || !tree[st.y]){ st.y = years[0]; st.m = Object.keys(tree[st.y]).sort().reverse()[0]; }
    else if(!tree[st.y][st.m]){ st.m = Object.keys(tree[st.y]).sort().reverse()[0]; }
    buildArchive[stateKey] = st;
    function draw(){
      var months = Object.keys(tree[st.y]).sort().reverse();
      var mn = t('cal.mon').split(',');
      var html = '<div class="arch-nav">';
      if(years.length > 1){
        html += '<div class="arch-years">' + years.map(function(y){
          return '<button type="button" data-y="' + y + '" aria-current="' + (y === st.y) + '">' + y + '</button>';
        }).join('') + '</div>';
      }
      html += '<div class="arch-months">' + months.map(function(m){
        return '<button type="button" data-m="' + m + '" aria-current="' + (m === st.m) + '">' + mn[parseInt(m, 10)-1] + '</button>';
      }).join('') + '</div></div>';
      var rows = (tree[st.y][st.m] || []).slice().sort(function(a, b){ return a.ymd < b.ymd ? 1 : -1; });
      html += rows.length ? makeRow(rows) : '<p class="arch-empty">-</p>';
      box.innerHTML = html;
      var yb = box.querySelectorAll('.arch-years button');
      for(var i=0;i<yb.length;i++){
        yb[i].addEventListener('click', function(){
          st.y = this.getAttribute('data-y');
          st.m = Object.keys(tree[st.y]).sort().reverse()[0];
          draw();
        });
      }
      var mb = box.querySelectorAll('.arch-months button');
      for(var j=0;j<mb.length;j++){
        mb[j].addEventListener('click', function(){ st.m = this.getAttribute('data-m'); draw(); });
      }
    }
    draw();
  }

  function itemsHtml(items){
    return items.map(function(it){
      var s = '<li>' + esc(it.head);
      if(it.rest.length) s += '<em>' + it.rest.map(esc).join('<br>') + '</em>';
      return s + '</li>';
    }).join('');
  }

  /* ── 홈: 이번 주 소식 제목만 ── */
  var HOME_MAX = 8;
  function renderHome(){
    if(!homeList || !NEWS.length) return;
    var latest = NEWS[0];
    var hd = document.getElementById('hNewsDate');
    if(hd){ hd.textContent = fmtDate(latest.ymd, true); hd.removeAttribute('data-i18n'); }
    /* 제목 끝의 쌍점(:)은 목록에서는 떼고 보여 줍니다 */
    homeList.innerHTML = latest.items.slice(0, HOME_MAX).map(function(it){
      return '<li>' + esc(it.head.replace(/\s*[:：]\s*$/, '')) + '</li>';
    }).join('');
    var more = document.getElementById('hNewsMore');
    if(more){
      var extra = latest.items.length - HOME_MAX;
      if(extra > 0){ more.textContent = tf('home.moreItems', {n: extra}); more.removeAttribute('data-i18n'); more.hidden = false; }
      else more.hidden = true;
    }
  }

  /* ── 교회 소식 페이지: 이번 주 전체 + 지난 소식 ── */
  function renderFull(){
    if(!fullList || !NEWS.length) return;
    var latest = NEWS[0], past = NEWS.slice(1);
    var nd = document.getElementById('newsDate');
    if(nd){ nd.textContent = fmtDate(latest.ymd, true); nd.removeAttribute('data-i18n'); }
    fullList.innerHTML = itemsHtml(latest.items);
    var box = document.getElementById('newsArchiveBox'), el = document.getElementById('newsArchive');
    if(past.length && box && el){
      buildArchive(el, past, function(rows){
        return '<ul class="news-arch">' + rows.map(function(w){
          return '<li><details><summary><span>' + fmtDate(w.ymd, false) + '</span></summary><ul>' + itemsHtml(w.items) + '</ul></details></li>';
        }).join('') + '</ul>';
      }, 'newsState');
      var sum = box.querySelector('summary');
      sum.textContent = t('news.archive') + ' (' + past.length + ')';
      sum.removeAttribute('data-i18n');
      box.hidden = false;
    }
    syncHeight();
  }

  function renderJubo(){
    if(juboIdx < 0) return;
    var jd = document.getElementById('juboDate');
    if(jd){ jd.textContent = fmtDate(juboWeeks[juboIdx].ymd, false) + ' ' + t('jubo.suffix'); jd.removeAttribute('data-i18n'); }
    var ab = document.getElementById('juboArchiveBox');
    if(ab && juboArchList && juboArchList.length){
      var s = ab.querySelector('summary');
      s.textContent = t('jubo.archive') + ' (' + juboArchList.length + ')';
      s.removeAttribute('data-i18n');
      buildArchive(document.getElementById('juboArchive'), juboArchList, function(rows){
        return '<ul class="jubo-arch">' + rows.map(function(w){
          return '<li><a href="jubo/' + w.ymd + '.pdf" target="_blank" rel="noopener">' + fmtDate(w.ymd, false) + '<span>PDF ›</span></a></li>';
        }).join('') + '</ul>';
      }, 'juboState');
    }
  }
  function setQuick(){
    if(!qJubo || juboIdx < 0) return;
    var w = juboWeeks[juboIdx];
    qJubo.href = 'jubo/' + w.ymd + '.pdf';
    qJubo.target = '_blank';
    qJubo.rel = 'noopener';
    var v = document.getElementById('qJuboVal');
    if(v){ v.textContent = tf('qk.juboOf', {d: fmtShort(w.ymd)}); v.removeAttribute('data-i18n'); }
  }

  /* 지난 소식은 한 번에 한 주만 열리게 합니다 */
  (function(){
    var el = document.getElementById('newsArchive');
    if(!el) return;
    el.addEventListener('toggle', function(e){
      var dt = e.target;
      if(!dt || dt.tagName !== 'DETAILS' || !dt.open) return;
      var all = el.getElementsByTagName('details');
      for(var k=0;k<all.length;k++){ if(all[k] !== dt) all[k].open = false; }
    }, true);
  })();

  /* ── 소식 칸 높이를 주보 칸에 맞추기 (교회 소식 페이지) ── */
  var newsCard = document.getElementById('newsCard'),
      newsBody = document.getElementById('newsBody'),
      moreBtn  = document.getElementById('newsMore');
  var opened = false;
  function syncHeight(){
    if(!newsCard || !newsBody || !juboCard || !moreBtn) return;
    newsBody.style.maxHeight = '';
    newsCard.classList.remove('clipped');
    moreBtn.style.display = 'block';
    var full = newsBody.scrollHeight;
    var others = newsCard.offsetHeight - newsBody.offsetHeight;
    var limit = (window.innerWidth <= 900) ? 420 : (juboCard.offsetHeight - others);
    if(limit < 220) limit = 220;
    if(opened){ moreBtn.textContent = t('news.less'); return; }
    if(full <= limit + 24){ moreBtn.style.display = 'none'; return; }
    newsBody.style.maxHeight = limit + 'px';
    newsCard.classList.add('clipped');
    moreBtn.textContent = t('news.more');
  }
  if(moreBtn){
    moreBtn.addEventListener('click', function(){
      opened = !opened;
      syncHeight();
      if(!opened && newsCard.scrollIntoView){ try{ newsCard.scrollIntoView({behavior:'smooth', block:'start'}); }catch(e){} }
    });
    var rt;
    window.addEventListener('resize', function(){ clearTimeout(rt); rt = setTimeout(syncHeight, 200); });
  }

  /* ── 주보 미리보기 (PDF 첫 장을 그려서 보여 줌) ── */
  function drawThumb(url){
    var wrap = document.getElementById('juboThumb');
    if(!wrap) return;
    if(window.IntersectionObserver){
      var io = new IntersectionObserver(function(en){
        if(en[0].isIntersecting){ io.disconnect(); loadThumb(url); }
      }, {rootMargin:'400px'});
      io.observe(wrap);
    }else{ loadThumb(url); }
  }
  function loadThumb(url){
    var wrap = document.getElementById('juboThumb');
    var wait = document.getElementById('thumbWait');
    var zoom = wrap.querySelector('.zoom');
    function giveUp(){ wrap.hidden = true; syncHeight(); }
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/legacy/build/pdf.min.js';
    /* 보안: 받아 온 파일이 원본과 한 글자라도 다르면 실행하지 않습니다 (변조 방지) */
    s.integrity = 'sha384-OemFRmhjDZwhIKuUld0HJozkF2YErsgDaCL41trxGQZt4/WgnopJQqQl2DvDZ07Z';
    s.crossOrigin = 'anonymous';
    s.onerror = giveUp;
    s.onload = function(){
      try{
        var lib = window['pdfjs-dist/build/pdf'] || window.pdfjsLib;
        if(!lib) return giveUp();
        lib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/legacy/build/pdf.worker.min.js';
        /* 보안: isEvalSupported:false 는 pdf.js 보안 공지(CVE-2024-4367)가 권하는 설정입니다 */
        lib.getDocument({url: url, isEvalSupported: false}).promise.then(function(pdf){ return pdf.getPage(1); })
        .then(function(page){
          var base = page.getViewport({scale:1});
          var target = Math.min(860, Math.max(560, (wrap.clientWidth || 400) * 2));
          var vp = page.getViewport({scale: target / base.width});
          var cv = document.createElement('canvas');
          cv.width = Math.round(vp.width); cv.height = Math.round(vp.height);
          return page.render({canvasContext: cv.getContext('2d'), viewport: vp}).promise.then(function(){ return cv; });
        }).then(function(cv){
          if(wait && wait.parentNode) wait.parentNode.removeChild(wait);
          wrap.insertBefore(cv, zoom);
          wrap.classList.add('done');
          if(zoom) zoom.hidden = false;
          syncHeight();
        }).catch(giveUp);
      }catch(e){ giveUp(); }
    };
    document.head.appendChild(s);
  }

  ON_LANG.push(function(){
    loadNews(lang).then(function(weeks){ NEWS = weeks; }).catch(function(){})
      .then(function(){ renderHome(); renderFull(); renderJubo(); setQuick(); });
  });

  loadNews(lang).then(function(weeks){
    NEWS = weeks; juboWeeks = weeks;
    renderHome(); renderFull();
    function tryJubo(i){
      if(i >= weeks.length) return Promise.resolve(-1);
      return fetch('jubo/' + weeks[i].ymd + '.pdf', {method:'HEAD'})
        .then(function(r){ return r.ok ? i : tryJubo(i + 1); })
        .catch(function(){ return tryJubo(i + 1); });
    }
    tryJubo(0).then(function(idx){
      var th = document.getElementById('juboThumb');
      if(idx < 0){ if(th) th.hidden = true; syncHeight(); return; }
      juboIdx = idx;
      var url = 'jubo/' + weeks[idx].ymd + '.pdf';
      var jl = document.getElementById('juboLink');
      if(jl) jl.href = url;
      if(th) th.href = url;
      renderJubo();
      setQuick();
      if(th) drawThumb(url);
      var rest = weeks.slice(idx + 1);
      var archBox = document.getElementById('juboArchiveBox');
      if(!rest.length || !archBox) return;
      archBox.hidden = false;
      var loaded = false;
      archBox.addEventListener('toggle', function(){
        if(!archBox.open || loaded) return;
        loaded = true;
        Promise.all(rest.map(function(w){
          return fetch('jubo/' + w.ymd + '.pdf', {method:'HEAD'})
            .then(function(r){ return r.ok ? w : null; })
            .catch(function(){ return null; });
        })).then(function(list){
          juboArchList = list.filter(Boolean);
          if(!juboArchList.length){ archBox.hidden = true; return; }
          renderJubo();
        });
      });
    });
  }).catch(function(){
    if(fullList) fullList.innerHTML = '<li>' + t('news.fail') + '</li>';
  });
});


/* ═══ 마지막: 저장된 언어 적용 ═══ */
applyLang(lang);
