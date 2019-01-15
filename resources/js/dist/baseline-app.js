(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({},{},[]);

(function($)
{

    var CeresBaselineMain = function()
{

        $(document).ready(function()
{
            // === Moblie Menu Layout ===
            var $Menu = $(".mobile-menu");
            var $ActiveLink = $Menu.find("li").has("ul").children("a");
            var $MenuChildUl = $Menu.find("li ul");

            // Prevent default action of link href="#"

            // Active menu when click link on li
            $ActiveLink.on("click", function()
{
                $(this).closest("li").addClass("active");
                $(this).closest("ul").addClass("active");
                $(".ul-node.active").scrollTop(0);
            });

            // Add event to back button
            $MenuChildUl.find(".__back a").on("click", function(event)
{
                event.preventDefault();
                $(this).closest("li.active").removeClass("active");
                $(this).closest("ul.active").removeClass("active");
            });

            $(".menu-toggle").click(function(event)
{
                event.preventDefault();
                if ($("body").hasClass("left-sidebar-open"))
{
                    $(this).removeClass("left-sidebar-open");
                }
                $("body").toggleClass("left-sidebar-open");
                $(".menu-toggle .nav-icon").toggleClass("open");
            });

            $(".search-trigger").click(function(event)
{
                // event.preventDefault();

                $("#simple-search-modal-wrapper #search").modal("show");
                // $("#simple-search-modal-wrapper #search .search-input").focus();
                // return false;
            });

            $("#simple-search-modal-wrapper #search").on("shown.bs.modal", function()
{
               // $("#simple-search-modal-wrapper #search .search-input").focus();
            });
            $("#simple-search-modal-wrapper #search").on("hide.bs.modal", function()
{
                $(".autocomplete-suggestions").css("display", "none");
            });

            $(".smooth-scroll").click(function(event)
{
                event.preventDefault();
                var target = $(this).attr("href");

                $("html, body").animate({scrollTop: $(target).offset().top}, 2000);
            });

            Swiper("#home-slider", {
                pagination: ".swiper-pagination",
                nextButton: ".swiper-button-next",
                prevButton: ".swiper-button-prev",
                paginationClickable: true,
                spaceBetween: 30,
                loop: false,
                centeredSlides: true
            });

            Swiper(".product-slider", {
                slidesPerView: 4,
                loop: false,
                paginationClickable: true,
                nextButton: ".swiper-button-next",
                prevButton: ".swiper-button-prev",
                spaceBetween: 14,
                lazyLoading: true,
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        spaceBetweenSlides: 10
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetweenSlides: 15
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetweenSlides: 15
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetweenSlides: 15
                    }

                }
            });
            $("#closeBasketPreview").click(function()
{
                $("#toggleBasketPreview").click();
            });

        });
    };

    CeresBaselineMain();

})(jQuery, window);

//# sourceMappingURL=baseline-app.js.map
