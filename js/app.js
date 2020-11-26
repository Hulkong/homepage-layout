'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('intro', 'intro.html'),
            new Route('data-service', 'data-service.html'),
            new Route('estate-service', 'estate-service.html'),
            new Route('welfare', 'welfare.html'),
        ]);
    }
    init();
}());
