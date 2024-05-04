<script setup>
import Master from '@/views/Master.vue'
</script>
<script>
export default {
  mounted() {
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
        } else if (
          checkElement.is(".treeview-menu") &&
          !checkElement.is(":visible")
        ) {
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
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Popover
    var popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  }
};
</script>


<template>
  <Master />
</template>

<style scoped>

</style>
<style>
.main-container {
  background: #28256d!important;
}
a.router-link-active {
  color: #fff!important;
  background: #383588!important;
  border-left-color: #d63384!important;
}
.my-primary-btn {
  background: #28256d;
  border-color: #28256d;
  font-weight: 500;
  font-size: 14px;
}
.my-primary-btn:hover {
  background: #28256d;
  border-color: #28256d;
}
</style>
