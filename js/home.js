/**
 * @description 메인페이지 컨트롤 객체
 */
let home = {

    id: 'home', // selector

    // 카운트 변수배열
    countArr: [{
        id: "count01",
        data: 128
    },
    {
        id: "count02",
        data: 209
    },
    {
        id: "count03",
        data: 149
    }
    ],

    doYouSeeCountDOM: false,

    /**
     * @description 초기화 메소드
     */
    init: function () {

        let self = this;

        // 슬릭 라이브러리 초기화
        slickInit({
            autoplay: true
        });

        // rending image 랜덤 설정
        // $('#home ._rending_image').css('background-image', 'url(img/home/rending0' + rand(1, 2) + '.jpg');

        // 하단 이동 버튼 클릭
        $('._add').click(function () {
            let dom = document.getElementById('layout_2');
            let scrollTop = dom.scrollHeight;

            $('html, body').animate({
                scrollTop: scrollTop - 60
            }, 600);
        });

        // 카운트업 엘리먼트가 보일 경우 로직 진행
        $(window).on('scroll.count', _.throttle(function () {
            if (isScrolledIntoView(document.getElementById('count01'))) {

                if (self.doYouSeeCountDOM) return;

                for (let i = 0; i < self.countArr.length; i++) {
                    let id = self.countArr[i]['id'];
                    let data = self.countArr[i]['data'];
                    let numAnim = new countUp.CountUp(id, data);
                    numAnim.start();
                }

                self.doYouSeeCountDOM = true;
            } else {
                self.doYouSeeCountDOM = false;
            }
        }, 300))
    },
}