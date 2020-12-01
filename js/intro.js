/**
 * @description 회사소개 컨트롤 객체
 */
let intro = {

	id: 'intro', // selector

	cards: [
		{
			id: "0"
			, type: "_type1"
			, title: "IT-DAILY"
			, subtitle: "오픈메이트온, 코로나19 영향 분석하는 '트렌드온' 출시"
			, originLink: "http://www.itdaily.kr/news/articleView.html?idxno=102805"
			, naverLink: "http://www.itdaily.kr/news/articleView.html?idxno=102805"
			, description: "오픈메이트온(대표 이은영)은 소비매출, 유동인구 빅데이터를 활용해 코로나19로 인한 지역경제 영향을 살펴볼 수 있는 '트렌드온' 서비스를 출시했다고 19일 밝혔다. 그동안 소비매출, 유동인구 빅데이터를 활용하려면... "
			, pubDate: "2020/10/19"
			, image: "img/intro/Article/Article_29.png"
		}
		, {
			id: "1"
			, type: "_type2"
			, title: "PLATUM"
			, subtitle: "빅데이터로 지역경제 상황을 바로 파악할 수 있는 서비스"
			, originLink: "https://platum.kr/archives/150535"
			, naverLink: "https://platum.kr/archives/150535"
			, description: "오픈메이트온이 소비매출, 유동인구 빅데이터를 활용해 지역경제 상황을 파악할 수 있는 서비스 ‘트렌드온’을 론칭했다. 트렌드온은 사용자가 원하는 기간만 클릭하면 최근 2년 동안의 일별 소비매출, 유동인구... "
			, pubDate: "2020/10/20"
			, image: "img/intro/Article/Article_28.png"
		}
		, {
			id: "2"
			, type: "_type3"
			, title: "IT-DAILY"
			, subtitle: "오픈메이트온, 제21대 국회의원 선거 결과 확인 서비스 제공"
			, originLink: "http://www.itdaily.kr/news/articleView.html?idxno=100873"
			, naverLink: "http://www.itdaily.kr/news/articleView.html?idxno=100873"
			, description: " 오픈메이트온(대표 이은영)은 제21대 국회의원 선거 결과를 한눈에 확인할 수 있는 서비스를 제공한다고 27일 밝혔다. '스마트-온(Smart-ON)' 서비스는 제21대 국회의원선거 결과를 PC와 모바일로 간편하게 파악할 수 있도록... "
			, pubDate: "2020/04/27"
			, image: "img/intro/Article/Article_27.png"
		}
		, {
			id: "3"
			, type: "_type1"
			, title: "에너지경제"
			, subtitle: "'21대 총선 후보자 정보 한눈에'…오픈메이트온, 스마트온 서비스 론칭"
			, originLink: "http://www.ekn.kr/news/article.html?no=493264"
			, naverLink: "http://www.ekn.kr/news/article.html?no=493264"
			, description: "응용소프트웨어 개발 및 공급업체 오픈메이트온(대표 이은영)은 제21대 국회의원 선거에 출마한 후보자들의 공약과 내가 살고 있는 지역의 상황을 한눈에 비교할 수 있는 검색 서비스를 출시했다. 오픈메이트온은 사회적... "
			, pubDate: "2020/04/10"
			, image: "img/intro/Article/Article_26.png"
		}
		, {
			id: "4"
			, type: "_type2"
			, title: "미래한국"
			, subtitle: "오픈메이트온, 21대 국회의원 선거 후보자 정보 및 공약 비교할 수 있는 서비..."
			, originLink: "http://www.futurekorea.co.kr/news/articleView.html?idxno=131719"
			, naverLink: "http://www.futurekorea.co.kr/news/articleView.html?idxno=131719"
			, description: "오픈메이트온(대표 이은영)은 내가 살고 있는 지역의 상황과 제21대 국회의원 선거에 출마한 후보자들의 공약을 한눈에 비교할 수 있는 검색 서비스를 론칭했다고 밝혔다. '스마트온(Smart-ON)'에서는 본인의 선거구를... "
			, pubDate: "2020/04/11"
			, image: "img/intro/Article/Article_25.png"
		}
		, {
			id: "5"
			, type: "_type3"
			, title: "PLATUM"
			, subtitle: "오픈메이트온, 21대 총선, 우리동네 후보자 검색 서비스 론칭"
			, originLink: "https://platum.kr/archives/139419"
			, naverLink: "https://platum.kr/archives/139419"
			, description: "오픈메이트온(대표 이은영)은 사용자가 살고 있는 지역의 상황과 21대 국회의원 선거에 출마한 후보자들의 공약을 한눈에 비교할 수 있는 검색 서비스 ‘스마트온’을 출시했다고 밝혔다. 스마트온에서 선거구를 선택하면... "
			, pubDate: "2020/04/09"
			, image: "img/intro/Article/Article_24.png"
		}
		, {
			id: "6"
			, type: "_type1"
			, title: "DAILYGRID"
			, subtitle: "오픈메이트온, 코로나19 발생현황 조회 기능 개발"
			, originLink: "http://www.dailygrid.net/news/articleView.html?idxno=359500"
			, naverLink: "http://www.dailygrid.net/news/articleView.html?idxno=359500"
			, description: "오픈메이트온이 스마트온(Smart-ON) 서비스 내 코로나19 발생현황 조회 기능을 추가했다고 밝혔다. 이번 코로나19 현황 메뉴는 도시를 진단하고 필요한 정책을 추천하고자 하는 스마트온 서비스의 목표 아래 현재 국내에서... "
			, pubDate: "2020/03/27"
			, image: "img/intro/Article/Article_23.png"
		}
		, {
			id: "7"
			, type: "_type2"
			, title: "파이낸셜뉴스"
			, subtitle: "오픈메이트온, '스마트온' 서비스 내 코로나19 현황 메뉴 추가"
			, originLink: "http://www.fnnews.com/news/202003251350368691"
			, naverLink: "https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=105&oid=014&aid=0004396217"
			, description: "확진자 현황 및 경로 정보를 신속하고 정확하게 제공 오픈메이트온(대표 이은영)이 코로나19 발생현황을 조회할 수 있는 서비스를 출시해 주목받고 있다. '스마트온(Smart-ON)'의 코로나19 현황 메뉴는 전국의 코로나19... "
			, pubDate: "2020/03/25"
			, image: "img/intro/Article/Article_22.png"
		}
		, {
			id: "8"
			, type: "_type3"
			, title: "이투데이"
			, subtitle: "오픈메이트온, 스마트온 서비스 내 코로나19 발생현황 조회 기능 추가해"
			, originLink: "http://www.etoday.co.kr/news/section/newsview.php?idxno=1874476"
			, naverLink: "http://www.etoday.co.kr/news/section/newsview.php?idxno=1874476"
			, description: "이투데이=최혜지 기자 | 오픈메이트온은 '스마트온(Smart-ON)' 서비스 코로나19 현황에서는 시/군/구 단위로 전국을 쉽게 조회할 수 있고 확진 환자의 동선을 PC 또는 모바일로 확인할 수 있다고 밝혔다. 스마트온 서비스는... "
			, pubDate: "2020/03/24"
			, image: "img/intro/Article/Article_21.png"
		}
		, {
			id: "9"
			, type: "_type1"
			, title: "IT-DAILY"
			, subtitle: "오픈메이트온, 스마트온 서비스에 코로나19 조회기능 추가"
			, originLink: "http://www.itdaily.kr/news/articleView.html?idxno=100395"
			, naverLink: "http://www.itdaily.kr/news/articleView.html?idxno=100395"
			, description: "오픈메이트온(대표 이은영)은 최근 '스마트온(Smart-ON)'서비스에 시/군/구별 코로나19발생현황을 조회할 수 있는 기능을 추가했다. '스마트온(www.smart-on.co.kr)'서비스 코로나19현황에서는 시/군/구 단위로 전국을 쉽게... "
			, pubDate: "2020/03/23"
			, image: "img/intro/Article/Article_20.png"
		}
		, {
			id: "10"
			, type: "_type2"
			, title: "IT-DAILY"
			, subtitle: "오픈메이트온, '스마트온' 서비스 출시"
			, originLink: "http://www.itdaily.kr/news/articleView.html?idxno=99972"
			, naverLink: "http://www.itdaily.kr/news/articleView.html?idxno=99972"
			, description: "오픈메이트온(대표 이은영)은 최근 빅데이터 &amp; 인공지능을 적용해 도시를 진단하고 정책을 제안할 수 있는 '스마트온(Smart-ON)' 서비스를 출시했다. '스마트온'은 누구나 쉽고 빠르게 도시의 예산, 지출, 인구, 산업 등과... "
			, pubDate: "2020/02/19"
			, image: "img/intro/Article/Article_19.png"
		}
		, {
			id: "11"
			, type: "_type3"
			, title: "venturesquare"
			, subtitle: "오픈메이트온, AI·빅데이터로 도시 정책 추천해준다"
			, originLink: "https://www.venturesquare.net/802667"
			, naverLink: "https://www.venturesquare.net/802667"
			, description: "오픈메이트온이 빅데이터와 AI로 도시를 진단하고 정책을 제안하는 스마트온 서비스를 출시했다. 스마트온은 누구나 쉽고 빠르게 도시 예산과 지출, 인구, 산업 등 빅데이터를 활용한 도시 현황과 AI가 추천하는 정책을... "
			, pubDate: "2020/02/17"
			, image: "img/intro/Article/Article_18.png"
		}
		, {
			id: "12"
			, type: "_type1"
			, title: "PLATUM"
			, subtitle: "오픈메이트온, 인공지능으로 도시 정책을 추천하는 ‘스마트온’ 출시"
			, originLink: "https://platum.kr/archives/136331"
			, naverLink: "https://platum.kr/archives/136331"
			, description: "오픈메이트온(대표 이은영)은 빅데이터과 인공지능으로 도시를 진단하고 정책을 제안하는 ‘스마트온(Smart-ON)’ 서비스를 출시했다고 밝혔다. 오픈메이트온은 사회적 가치창출과 혁신적인 기술력에 대한 가능성을... "
			, pubDate: "2020/02/17"
			, image: "img/intro/Article/Article_17.png"
		}
		, {
			id: "13"
			, type: "_type2"
			, title: "SBS CNBC"
			, subtitle: "오픈메이트온, AI가 도시 정책 제안하는 '스마트온' 출시"
			, originLink: "https://cnbc.sbs.co.kr/article_hub/10000972978?division=NAVER"
			, naverLink: "https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=101&oid=374&aid=0000205017"
			, description: "오픈메이트온은 빅데이터와 인공지능(AI)을 기반으로 도시를 진단하고 정책을 제안하는 '스마트온(Smart-ON)' 서비스를 출시했다고 오늘(14일) 밝혔다. 오픈메이트온은 스마트온에 대해 &quot;빅데이터를 활용해 도시의 예산... "
			, pubDate: "2020/02/14"
			, image: "img/intro/Article/Article_16.png"
		}
		, {
			id: "14"
			, type: "_type3"
			, title: "ASIA NEWS AGENCY"
			, subtitle: "오픈메이트온, AIㆍ빅데이터 활용한 도시 정책 추천 서비스 '스마트온' 출시"
			, originLink: "http://www.anewsa.com/detail.php?number=2064207&thread=19"
			, naverLink: "http://www.anewsa.com/detail.php?number=2064207&thread=19"
			, description: " 오픈메이트온이 빅데이터와 인공지능(AI)을 기반으로 도시를 진단하고 정책을 제안하는 '스마트온(Smart-ON)' 서비스를 출시해 화제를 모으고 있다. 오픈메이트온은 빅데이터 서비스ㆍ컨설팅 전문기업으로 사회적 가치... "
			, pubDate: "2020/02/13"
			, image: "img/intro/Article/Article_15.png"
		}
		, {
			id: "15"
			, type: "_type1"
			, title: "세계비즈"
			, subtitle: "오픈메이트온, 인공지능 활용한 도시 정책 제안 서비스 '스마트온' 론칭"
			, originLink: "http://www.segyebiz.com/newsView/20200212507461?OutUrl=naver"
			, naverLink: "http://www.segyebiz.com/newsView/20200212507461?OutUrl=naver"
			, description: "도시현황·도시진단·정책추천 서비스 제공 빅데이터 서비스·컨설팅 전문기업 오픈메이트온(대표 이은영)은 빅데이터와 인공지능으로 도시를 진단하고 정책을 제안하는 '스마트온(Smart-ON)' 서비스를 론칭했다고 12일... "
			, pubDate: "2020/02/12"
			, image: "img/intro/Article/Article_14.png"
		}
		, {
			id: "16"
			, type: "_type2"
			, title: "투데이코리아"
			, subtitle: "오픈메이트온, 빅데이터•인공지능으로 도시 정책 확인 가능한 '스마트온' 론..."
			, originLink: "http://www.todaykorea.co.kr/news/view.php?no=268209"
			, naverLink: "http://www.todaykorea.co.kr/news/view.php?no=268209"
			, description: "투데이코리아= | 오픈메이트온(대표 이은영)이 빅데이터•인공지능으로 도시를 진단하고 정책을 제안하는 '스마트온(Smart-ON)' 서비스를 론칭했다. '스마트온'은 누구나 쉽고 빠르게 도시의 예산, 지출, 인구, 산업 등... "
			, pubDate: "2020/02/11"
			, image: "img/intro/Article/Article_13.png"
		}
		, {
			id: "17"
			, type: "_type3"
			, title: "BIGDATAnews"
			, subtitle: "스마트온 통해 21대 국회의원 선거 후보자 정보·공약 비교할 수 있다"
			, originLink: "http://www.thebigdata.co.kr/view.php?ud=202004101453295074992c130dbe_23"
			, naverLink: "http://www.thebigdata.co.kr/view.php?ud=202004101453295074992c130dbe_23"
			, description: "오픈메이트온이 스마트온(Smart-ON) 서비스에 내가 살고 있는 지역의 상황과 제21대 국회의원 선거에 출마한 후보자들의 공약을 한눈에 비교할 수 있는 검색 서비스를 론칭했다고 12일 밝혔다. Smart-ON 서비스는 공공분야의... "
			, pubDate: "2020/04/12"
			, image: "img/intro/Article/Article_12.png"
		}
		, {
			id: "18"
			, type: "_type1"
			, title: "뉴스1"
			, subtitle: "스마트온 통해 코로나19 발생현황 조회할 수 있다"
			, originLink: "https://www.news1.kr/articles/?3886674"
			, naverLink: "https://news.naver.com/main/read.nhn?mode=LSD&mid=sec&sid1=105&oid=421&aid=0004545348"
			, description: "오픈메이트온이 스마트온(Smart-ON) 서비스에 코로나19 현황 메뉴를 추가했다고 밝혔다. Smart-ON 서비스는 공공분야의 집행 예산과 사업 현황을 파악하고, 빅데이터를 통해 도시를 진단하여 필요한 정책을 도출하기 위한... "
			, pubDate: "2020/03/26"
			, image: "img/intro/Article/Article_11.png"
		}
		, {
			id: "19"
			, type: "_type2"
			, title: "DATA NET"
			, subtitle: "오픈메이트온, 벤처기업인증 획득"
			, originLink: "http://www.datanet.co.kr/news/articleView.html?idxno=139847"
			, naverLink: "http://www.datanet.co.kr/news/articleView.html?idxno=139847"
			, description: " 빅데이터 서비스·컨설팅 전문기업 오픈메이트온(대표 이은영)은 지난 10월 기술보증기금으로부터 '벤처기업인증'을 획득했다고 29일 밝혔다. 벤처기업인증은 기술보증기금과 중소기업진흥공단으로부터 기업의... "
			, pubDate: "2019/11/29"
			, image: "img/intro/Article/Article_10.png"
		}
		, {
			id: "20"
			, type: "_type3"
			, title: "IT-DAILY"
			, subtitle: "오픈메이트온, '벤처기업인증' 획득 · '소셜임팩트 펀드' 투자 유치"
			, originLink: "http://www.itdaily.kr/news/articleView.html?idxno=98575"
			, naverLink: "http://www.itdaily.kr/news/articleView.html?idxno=98575"
			, description: "빅데이터 서비스 및 컨설팅 전문기업 오픈메이트온(대표 이은영)은 최근 기술보증기금으로부터 '벤처기업인증'을 획득했다. 벤처기업인증은 기술보증기금과 중소기업진흥공단으로부터 기업의 독자적인 기술 능력... "
			, pubDate: "2019/11/29"
			, image: "img/intro/Article/Article_9.png"
		}
		, {
			id: "21"
			, type: "_type1"
			, title: "IT-DAILY"
			, subtitle: "빅데이터 활용해 우리 지역 후보자 정보 및 공약 한눈에 보여준다"
			, originLink: "http://www.itdaily.kr/news/articleView.html?idxno=100670"
			, naverLink: "http://www.itdaily.kr/news/articleView.html?idxno=100670"
			, description: "오픈메이트온(대표 이은영)은 빅데이터와 인공지능으로 도시를 진단하고 정책을 제안하는 기존 스마트온(smart-on.co.kr) 서비스에 21대 총선 후보자 검색 서비스를 추가하고 4월 9일부터 서비스에 들어갔다. 이번에... "
			, pubDate: "2020/04/09"
			, image: "img/intro/Article/Article_8.png"
		}
		, {
			id: "22"
			, type: "_type2"
			, title: "YBS뉴스통신"
			, subtitle: "21대 총선 우리동네 딱 맞는 후보자 검색 서비스 론칭"
			, originLink: "http://www.ybsn.tv/news/articleView.html?idxno=9567"
			, naverLink: "http://www.ybsn.tv/news/articleView.html?idxno=9567"
			, description: "오픈메이트온(대표 이은영)은 내가 살고 있는 지역의 상황과 제21대 국회의원 선거에 출마한 후보자들의 공약을 한눈에 비교할 수 있는 검색 서비스를 출시했다고 밝혔다. '스마트온'에서는 본인의 선거구를 선택하면... "
			, pubDate: "2020/04/09"
			, image: "img/intro/Article/Article_7.png"
		}
		, {
			id: "23"
			, type: "_type3"
			, title: "DATA NET"
			, subtitle: "오픈메이트, 자회사 '오픈메이트온' 설립"
			, originLink: "http://www.datanet.co.kr/news/articleView.html?idxno=138762"
			, naverLink: "http://www.datanet.co.kr/news/articleView.html?idxno=138762"
			, description: " 오픈메이트는 빅데이터 시장에서의 사업 확장과 기업가치 제고를 위해 자회사 '오픈메이트온'을 설립했다고 1일 밝혔다. 새롭게 분할된 오픈메이트온은 공간 마케팅과 데이터 서비스 두 개 부문으로 구성되며, 각각... "
			, pubDate: "2019/11/01"
			, image: "img/intro/Article/Article_6.png"
		}
		, {
			id: "24"
			, type: "_type1"
			, title: "IT-DAILY"
			, subtitle: "오픈메이트, 자회사 '오픈메이트온' 설립"
			, originLink: "http://www.itdaily.kr/news/articleView.html?idxno=97926"
			, naverLink: "http://www.itdaily.kr/news/articleView.html?idxno=97926"
			, description: "오픈메이트가 빅데이터 관련 사업 확장과 기업가치 제고를 위해 자회사 '오픈메이트온을 설립했다. 오픈메이트에서 새롭게 분할된 오픈메이트온은 공간마케팅과 데이터서비스 두 개 부문으로 구성되며, 각각 '부동산... "
			, pubDate: "2019/10/31"
			, image: "img/intro/Article/Article_5.png"
		}
		, {
			id: "25"
			, type: "_type2"
			, title: "the bell"
			, subtitle: "[더벨]쿨리지코너인베, '코리아임팩트펀드' 투자 기지개"
			, originLink: "http://www.thebell.co.kr/front/free/contents/news/article_view.asp?key=202003301414238520102189"
			, naverLink: "http://www.thebell.co.kr/front/free/contents/news/article_view.asp?key=202003301414238520102189"
			, description: "△오픈메이트온(공공 빅데이터 분석 서비스) △써모랩코리아(친환경 냉장 포장재) △크립토스(유전체분석 기반 암 진단) △로앤컴퍼니(법률서비스 플랫폼) △젠트로피(전기이륜차 배터리 공유) 등이 대표적이다.... "
			, pubDate: "2020/03/31"
			, image: "img/intro/Article/Article_4.png"
		}
		, {
			id: "26"
			, type: "_type3"
			, title: "Blockchain Valley"
			, subtitle: "[9일 낙찰/계약 동향] 영광여자고등학교 급식실(식당)리모델링공사 감리용역,..."
			, originLink: "http://www.fintechpost.co.kr/news/articleView.html?idxno=98482"
			, naverLink: "http://www.fintechpost.co.kr/news/articleView.html?idxno=98482"
			, description: "▲ 낙찰업체 : 주식회사 오픈메이트온, 계약금액 : 20,100,000(원), 계약명 : 빅데이터 기반 지역경제 분석플랫폼 사용권 계약. 계약기관 : 경상북도 안동시, 계약일자 : 2020-01-02, 계약방법 : 수의계약, 발주처(수요기관)... "
			, pubDate: "2020/01/09"
			, image: "img/intro/Article/Article_3.png"
		}
		, {
			id: "27"
			, type: "_type1"
			, title: "Blockchain Valley"
			, subtitle: "[14일 낙찰/계약 동향] 2019학년도 선진직업교육탐방 국외연수 위탁용역, 강동..."
			, originLink: "http://www.fintechpost.co.kr/news/articleView.html?idxno=78252"
			, naverLink: "http://www.fintechpost.co.kr/news/articleView.html?idxno=78252"
			, description: "▲ 낙찰업체 : 주식회사 오픈메이트온, 계약금액 : 19,530,000(원), 계약명 : CCTV 설치 최적지 선정을 위한 빅데이터 분석 용역. 계약기관 : 충청북도 음성군, 계약일자 : 2019-10-01, 계약방법 : 수의계약, 발주처(수요기관)... "
			, pubDate: "2019/10/14"
			, image: "img/intro/Article/Article_2.png"
		}
		, {
			id: "28"
			, type: "_type2"
			, title: "Blockchain Valley"
			, subtitle: "[6일 낙찰/계약 동향] 자동차 운전면허 학과시험 출제프로그램 2차 개선, 제로..."
			, originLink: "http://www.fintechpost.co.kr/news/articleView.html?idxno=75854"
			, naverLink: "http://www.fintechpost.co.kr/news/articleView.html?idxno=75854"
			, description: "▲ 낙찰업체 : 주식회사 오픈메이트온, 계약금액 : 19,900,000(원), 계약명 : CCTV설치장소 빅데이터 분석자료 현행화 용역. 계약기관 : 경상북도 안동시, 계약일자 : 2019-09-23, 계약방법 : 수의계약, 발주처(수요기관)... "
			, pubDate: "2019/10/06"
			, image: "img/intro/Article/Article_1.png"
		}
	],

	copyDOM: undefined,

	/**
	 * @description initialize
	 */
	init: function () {

		let self = this;
		let selector = $('#' + self['id']);

		slickInit();
		self.copyDOM = selector.find('#layout_5 ._contents._type1').first().clone();
		selector.find('#layout_5 ._contents').remove();
		self.make3Cards(0, 3);

		// 더 보기 click event
		selector.find('._button._plus').click(function () {

			let index = selector.find('#layout_5 ._contents ._card').last().attr('data-index');
			let nextIndex = Number(index) + 1;
			let cloneDOMArr = [];

			if (nextIndex + 5 >= self.cards.length) {
				self.toggleButton('fold');
			}

			self.make3Cards(nextIndex, nextIndex + 3)
			selector.find('#layout_5 ._add').before(cloneDOMArr);

		});

		// 접기 click event
		selector.find('._button._fold').click(function () {
			selector.find('#layout_5 ._contents').remove();
			self.make3Cards(0, 3);
			self.toggleButton('plus');
			let DOM = document.getElementById('layout_5')
			scrollTo(0, DOM.offsetTop);

		});
	},

	/**
	 * @description 더보기 <-> 접기 버튼 토글
	 * @param {*} wantToshow 보이길 원하는 대상
	 */
	toggleButton: function (wantToshow) {

		let self = this;
		let selector = $('#' + self['id']);

		// 더보기일 경우
		if (wantToshow === 'plus') {
			selector.find('._button._plus').css('display', 'inline-block');
			selector.find('._button._fold').css('display', 'none');
			// 접기일 경우
		} else if (wantToshow === 'fold') {
			selector.find('._button._plus').css('display', 'none');
			selector.find('._button._fold').css('display', 'inline-block');
		}

	},

	/**
	 * @description make 3 card item
	 * @param {*} start 
	 * @param {*} last 
	 */
	make3Cards: function (start, last) {

		let self = this;
		let selector = $('#' + self['id']);

		let cloneDOMArr = [];

		for (let i = start; i < last; i++) {
			if (i < self.cards.length) {
				cloneDOMArr.push(self.makeCard(self.cards[i]));
			}
		}

		selector.find('#layout_5 ._add').before(cloneDOMArr);

		// 카드 click event
		selector.find('#layout_5 ._card').unbind('click');
		selector.find('#layout_5 ._card').click(function () {
			window.open($(this).attr('url'));
		})
	},

	/**
	 * @description make card DOM
	 * @param {*} item data 
	 */
	makeCard: function (item) {

		let self = this;
		let cloneDOM = self.copyDOM.clone();

		cloneDOM.removeClass('_type1');
		cloneDOM.attr('url', item['url']);
		cloneDOM.addClass(item['type']);
		cloneDOM.find('._card').attr('data-index', item['id'])
		cloneDOM.find('._card').attr('url', item['originLink']);
		cloneDOM.find('._image').css('background-image', 'url(' + item['image'] + ')');
		cloneDOM.find('._title').html(item['title']);
		cloneDOM.find('._detail').html(item['subtitle']);
		cloneDOM.find('._contents').html(item['description']);

		return cloneDOM;
	}
}