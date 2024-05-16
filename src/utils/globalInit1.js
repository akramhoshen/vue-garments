export default function globalInit() {
    $.sidebarMenu = function (menu) {
        var animationSpeed = 300;

        $(menu).on("click", "li a", function (e) {
            var $this = $(this);
            var checkElement = $this.next();

            if (checkElement.is(".treeview-menu") && checkElement.is(":visible")) {
                checkElement.slideUp(animationSpeed, function () {
                    checkElement.removeClass("menu-open");
                });
                checkElement.parent("li").removeClass("active");
            } else if (checkElement.is(".treeview-menu") && !checkElement.is(":visible")) {
                var parent = $this.parents("ul").first();
                var ul = parent.find("ul:visible").slideUp(animationSpeed);
                ul.removeClass("menu-open");
                var parent_li = $this.parent("li");

                checkElement.slideDown(animationSpeed, function () {
                    checkElement.addClass("menu-open");
                    parent.find("li.active").removeClass("active");
                    parent_li.addClass("active");
                });
            }
            if (checkElement.is(".treeview-menu")) {
                e.preventDefault();
            }
        });
    };
    $.sidebarMenu($(".sidebar-menu"));

    // Custom Sidebar JS
    jQuery(function ($) {
        $("#toggle-sidebar").on("click", function () {
            $(".page-wrapper").toggleClass("toggled");
        });

        $("#pin-sidebar").on("click", function () {
            if ($(".page-wrapper").hasClass("pinned")) {
                $(".page-wrapper").removeClass("pinned");
                $("#sidebar").unbind("hover");
            } else {
                $(".page-wrapper").addClass("pinned");
                $("#sidebar").hover(
                    function () {
                        $(".page-wrapper").addClass("sidebar-hovered");
                    },
                    function () {
                        $(".page-wrapper").removeClass("sidebar-hovered");
                    }
                );
            }
        });

        $(function () {
            $(".page-wrapper").hasClass("pinned");
            $("#sidebar").hover(
                function () {
                    $(".page-wrapper").addClass("sidebar-hovered");
                },
                function () {
                    $(".page-wrapper").removeClass("sidebar-hovered");
                }
            );
        });

        $("#overlay").on("click", function () {
            $(".page-wrapper").toggleClass("toggled");
        });

        $(function () {
            $(window).resize(function () {
                if ($(window).width() <= 768) {
                    $(".page-wrapper").removeClass("pinned");
                }
            });
            $(window).resize(function () {
                if ($(window).width() >= 768) {
                    $(".page-wrapper").removeClass("toggled");
                }
            });
        });
    });

    // Tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Popover
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
};