/**
 * @description 부동산서비스 컨트롤 객체
 */
let estateService = {

    id: 'estateService', // selector

    customers: [{
            id: "0",
            image: "img/estate_service/customer/RES_client_1-1.png",
            name: "공주대학교"
        },
        {
            id: "1",
            image: "img/estate_service/customer/RES_client_1-2.png",
            name: "danu"
        },
        {
            id: "2",
            image: "img/estate_service/customer/RES_client_1-3.png",
            name: "대우건설"
        },
        {
            id: "3",
            image: "img/estate_service/customer/RES_client_1-4.png",
            name: "동국대학교"
        },
        {
            id: "4",
            image: "img/estate_service/customer/RES_client_1-5.png",
            name: "meridien"
        },
        {
            id: "5",
            image: "img/estate_service/customer/RES_client_2-1.png",
            name: "문화체육관광부"
        },
        {
            id: "6",
            image: "img/estate_service/customer/RES_client_2-2.png",
            name: "벽산건설"
        },
        {
            id: "7",
            image: "img/estate_service/customer/RES_client_2-3.png",
            name: "부산광역시"
        },
        {
            id: "8",
            image: "img/estate_service/customer/RES_client_2-4.png",
            name: "삼성물산"
        },
        {
            id: "9",
            image: "img/estate_service/customer/RES_client_2-5.png",
            name: "서울특별시"
        },
        {
            id: "10",
            image: "img/estate_service/customer/RES_client_3-1.png",
            name: "sofitel"
        },
        {
            id: "11",
            image: "img/estate_service/customer/RES_client_3-2.png",
            name: "andaz"
        },
        {
            id: "12",
            image: "img/estate_service/customer/RES_client_3-3.png",
            name: "연세대학교"
        },
        {
            id: "13",
            image: "img/estate_service/customer/RES_client_3-4.png",
            name: "영조주택"
        },
        {
            id: "14",
            image: "img/estate_service/customer/RES_client_3-5.png",
            name: "kofic"
        },
        {
            id: "15",
            image: "img/estate_service/customer/RES_client_4-1.png",
            name: "welliv"
        },
        // {
        //     id: "16",
        //     image: "img/estate_service/customer/RES_client_4-2.png",
        //     name: "유안타저축은행"
        // },
        {
            id: "17",
            image: "img/estate_service/customer/RES_client_4-3.png",
            name: "zemablue"
        },
        {
            id: "18",
            image: "img/estate_service/customer/RES_client_4-4.png",
            name: "ten"
        },
        // {
        //     id: "19",
        //     image: "img/estate_service/customer/RES_client_4-5.png",
        //     name: "통일그룹"
        // },
        {
            id: "20",
            image: "img/estate_service/customer/RES_client_5-1.png",
            name: "lh"
        },
        {
            id: "21",
            image: "img/estate_service/customer/RES_client_5-2.png",
            name: "sbi저축은행"
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