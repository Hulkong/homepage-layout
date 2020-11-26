/**
 * @description 데이터서비스 컨트롤 객체
 */
let dataService = {

    id: 'dataService', // selector

    customers: [{
            id: "0",
            image: "img/data_service/customer/DS_client_1-1.png",
            name: "계양구"
        },
        {
            id: "1",
            image: "img/data_service/customer/DS_client_1-2.png",
            name: "고양시"
        },
        {
            id: "3",
            image: "img/data_service/customer/DS_client_1-3.png",
            name: "광주광역시"
        },
        {
            id: "4",
            image: "img/data_service/customer/DS_client_1-4.png",
            name: "대구광역시"
        },
        {
            id: "5",
            image: "img/data_service/customer/DS_client_1-5.png",
            name: "대전광역시"
        },
        {
            id: "6",
            image: "img/data_service/customer/DS_client_2-1.png",
            name: "동해시"
        },
        {
            id: "7",
            image: "img/data_service/customer/DS_client_2-2.png",
            name: "보은군"
        },
        {
            id: "8",
            image: "img/data_service/customer/DS_client_2-3.png",
            name: "서천군"
        },
        {
            id: "9",
            image: "img/data_service/customer/DS_client_2-4.png",
            name: "송파구"
        },
        {
            id: "10",
            image: "img/data_service/customer/DS_client_2-5.png",
            name: "안동시"
        },
        {
            id: "11",
            image: "img/data_service/customer/DS_client_3-1.png",
            name: "여주시"
        },
        {
            id: "12",
            image: "img/data_service/customer/DS_client_3-2.png",
            name: "연천군"
        },
        {
            id: "13",
            image: "img/data_service/customer/DS_client_3-3.png",
            name: "영도구"
        },
        {
            id: "14",
            image: "img/data_service/customer/DS_client_3-4.png",
            name: "음성군"
        },
        {
            id: "15",
            image: "img/data_service/customer/DS_client_3-5.png",
            name: "인천"
        },
        {
            id: "16",
            image: "img/data_service/customer/DS_client_4-1.png",
            name: "중구"
        },
        {
            id: "17",
            image: "img/data_service/customer/DS_client_4-2.png",
            name: "증평군"
        },
        {
            id: "18",
            image: "img/data_service/customer/DS_client_4-3.png",
            name: "통영"
        },
        {
            id: "19",
            image: "img/data_service/customer/DS_client_4-4.png",
            name: "함양군"
        }
    ],

    copyDOM: undefined,

    init: function () {

        let self = this;
        let selector = $('#' + self['id']);

        slickInit();
        self.copyDOM = selector.find('#layout_2 ._customer_item').first().clone();
        selector.find('#layout_2 ._customer_item').remove();
        // self.make5Customers(0, 10);
        self.make5Customers(0, self.customers.length);


        // 더 보기 click event
        selector.find('._button._plus').click(function () {

            let index = selector.find('#layout_2 ._customer_item').last().attr('data-index');
            let nextIndex = Number(index) + 1;
            let cloneDOMArr = [];

            if (nextIndex + 5 >= self.customers.length) {
                self.toggleButton('fold');
            }

            self.make5Customers(nextIndex, nextIndex + 5)
            selector.find('#layout_5 ._add').before(cloneDOMArr);
        });

        // 접기 click event
        selector.find('._button._fold').click(function () {
            selector.find('#layout_2 ._customer_item').remove();
            self.make5Customers(0, 10);
            self.toggleButton('plus');
            let DOM = document.getElementById('layout_2')
            scrollTo(0, DOM.offsetTop);
        });

        // 서비스 바로가기 click event
        selector.find('._go ._site').click(function () {

            let url = $(this).attr('url');
            let serviceNm = '';

            if (url.indexOf('trend-on') >= 0) {
                serviceNm = '트렌드온';
            } else if (url.indexOf('safe-on') >= 0) {
                serviceNm = '세이프온';
            } else if (url.indexOf('smart-on') >= 0) {
                serviceNm = '스마트온';
            }

            if (device === 'mobile') {
                selector.find('._modal').css('visibility', 'visible');
                selector.find('._modal_download').css('display', 'none');
                selector.find('._modal_service').css('display', 'block');
                selector.find('._modal_title ._service_name').text(serviceNm);
                selector.find('._modal').attr('url', url)
                document.documentElement.style.overflowY = "hidden";
            } else {
                window.open(url);
            }
        });

        // 서비스 소개자료 click event
        selector.find('._go ._pdf').click(function () {

            let url = $(this).attr('url');

            if (device === 'mobile') {
                selector.find('._modal').css('visibility', 'visible');
                selector.find('._modal_download').css('display', 'block');
                selector.find('._modal_service').css('display', 'none');
                selector.find('._modal').attr('url', url)
                document.documentElement.style.overflowY = "hidden";
            } else {
                window.open(url);
            }
        });

        // 모달창 취소버튼 click event
        selector.find('._modal ._cancel').click(function () {
            selector.find('._modal').css('visibility', 'hidden');
            document.documentElement.style.overflowY = "auto";
        });

        // 모달창 확인버튼 click event
        selector.find('._modal ._confirm').click(function () {
            selector.find('._modal').css('visibility', 'hidden');
            document.documentElement.style.overflowY = "auto";
            window.open(selector.find('._modal').attr('url'));
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
            selector.find('._button._plus').css('display', 'block');
            selector.find('._button._fold').css('display', 'none');
            // 접기일 경우
        } else if (wantToshow === 'fold') {
            selector.find('._button._plus').css('display', 'none');
            selector.find('._button._fold').css('display', 'block');
        }
    },

    /**
     * @description make 5 customer item
     * @param {*} start 
     * @param {*} last 
     */
    make5Customers: function (start, last) {

        let self = this;
        let selector = $('#' + self['id']);

        let cloneDOMArr = [];

        // 한글 내림차순
        self.customers.sort(function (a, b) {
            return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });

        for (let i = start; i < last; i++) {
            if (i < self.customers.length) {
                cloneDOMArr.push(self.makeCustomer(self.customers[i], i));
            }
        }

        selector.find('#layout_2 ._customer_list').append(cloneDOMArr);
    },

    /**
     * @description make customer DOM
     * @param {*} item data 
     */
    makeCustomer: function (item, index) {
        let self = this;
        let cloneDOM = self.copyDOM.clone();

        cloneDOM.attr('data-index', index)
        cloneDOM.find('._image').css('background-image', 'url(' + item['image'] + ')');

        return cloneDOM;
    }
}