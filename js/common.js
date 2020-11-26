/**
 * @description init slick library
 * @param {*} options 
 */
function slickInit(options) {

    let slickOption = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 5000
    }

    if (innerWidth >= 1025) slickOption['arrows'] = true;

    // slick 라이브러리 바인딩
    $('.slider').slick($.extend(slickOption, options));
}

/**
 * @description random number from 1 to 2
 * @param {*} start 
 * @param {*} end 
 */
function rand(start, end) {
    return Math.floor((Math.random() * (end - start + 1)) + start);
}

/**
 * @description Check the target on the currently displayed screen
 * @param {*} elem 
 */
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

/**
		 * @description querystring 생성 
		 * @param data
		 * @returns
		 */
function buildQuery(data) {

    // If the data is already a string, return it as-is
    if (typeof (data) === 'string') return data;

    // Create a query array to hold the key/value pairs
    var query = [];

    // Loop through the data object
    for (var key in data) {
        if (data.hasOwnProperty(key)) {

            // Encode each key and value, concatenate them into a string, and push them to the array
            query.push(key + '=' + data[key]);
        }
    }

    // Join each item in the array with a `&` and return the resulting string
    return query.join('&');
}