$(function(){sliderHighlight="",sliderBestseller="",sliderLatest="",sliderPromotion="";var t,e;$(".product-detail-right").offset();t=0<$('ul[class^="col-pl-"]').length?(t=(t=$("body").find("#product-list").attr("class")).replace("col-pl-",""),parseInt(t)):4,configSliderHome={pager:!1,infiniteLoop:!1,hideControlOnEnd:!0,autoReload:!0,slideMargin:12,prevText:'<span class="icon-prev"></span>',nextText:'<span class="icon-next"></span>',breaks:[{screen:0,slides:t}]},$(document).on("click",".icon-shopping-cart",function(e){e.preventDefault(),$("body").addClass("cart-open")}),$(document).on("click",".close-cart",function(){$("body").removeClass("cart-open")}),$("body").hasClass("pagina-home")&&($(".element-content").appendTo("#vitrine"),$("#vitrine").find("#product-list").each(function(){var e=$(this).closest('div[class^="element"]');$(".element-banner-shop").insertAfter(e)}),$(".element-highlight").find("#product-list").each(function(){var e=$(this),n=$(e).children().length;t<n&&(sliderHighlight=$(e).bxSlider(configSliderHome))}),$(".element-bestseller").find("#product-list").each(function(){var e=$(this),n=$(e).children().length;t<n&&(sliderBestseller=$(e).bxSlider(configSliderHome))}),$(".element-latest").find("#product-list").each(function(){var e=$(this),n=$(e).children().length;t<n&&(sliderLatest=$(e).bxSlider(configSliderHome))}),$(".element-promotion").find("#product-list").each(function(){var e=$(this),n=$(e).children().length;t<n&&(sliderPromotion=$(e).bxSlider(configSliderHome))}),$(".element-tags-vitrine").find('div[class^="wrapper-tag"]').each(function(){$(this).find("#product-list").each(function(){var e=$(this),n=$(e).children().length;t<n&&$(e).bxSlider(configSliderHome)})}),$(".element-highlight").find(".title-secundary").text("nossos destaques"),$(".element-bestseller").find(".title-secundary").text("nossos mais vendidos"),$(".element-latest").find(".title-secundary").text("nossas novidades"),$(".element-promotion").find(".title-secundary").text("nossas promoções"),0<$(".sidebar").length&&$(".sidebar").each(function(){1==$(this).children().length&&$(".sidebar").children().each(function(){"element-filter"==$(this).attr("class")&&s()})})),$(".shopping-cart-total-price").each(function(){0==$(this).text()&&$(this).text("R$ 0,00")}),0<$("#banner-main").length&&$("#banner-main").each(function(){var e=$(this).children().length;bannerMainConfig={auto:!0,pager:!1,pause:1e4,autoReload:!0,prevText:'<span class="icon-prev"></span>',nextText:'<span class="icon-next"></span>',breaks:[{screen:0,slides:1}],useCSS:!1},1<e&&(BannerMainslider=$("#banner-main").bxSlider(bannerMainConfig))}),$(".element-product-related").find("#product-list").each(function(){4<$(this).children().length&&$(".element-product-related #product-list").bxSlider({pager:!1,infiniteLoop:!1,hideControlOnEnd:!0,autoReload:!0,slideMargin:12,prevText:'<span class="icon-prev"></span>',nextText:'<span class="icon-next"></span>',breaks:[{screen:0,slides:4}]})}),0!=$(".menu-sidebar-list").length&&(e=window.location.pathname,$(".menu-sidebar-list").find('li a[href$="'+e+'"]').each(function(){$(this).parents("li").addClass("current")})),$(".element-categories .menu-sidebar-list > li").find("ul").each(function(){$(this).prev("a").parent("li").addClass("has-submenu")});var n={captions:!1,auto:!0,controls:!0,pager:!1,responsive:!0,autoReload:!0,slideMargin:20,prevText:'<span class="icon-prev"></span>',nextText:'<span class="icon-next"></span>',breaks:[{screen:0,slides:6}]};function i(e,n){var t=e,n=n;$(t).find(n).each(function(){0==$(this).children().length&&$(t).remove()})}function a(e){var n=e;$(n).find('ul[class$="brand-list"]').each(function(){0==$(this).children().length&&$(n).remove()})}function s(){$("#content-main").removeClass("content-main-cols-2").removeClass("has-sidebar-left").removeClass("has-sidebar-right").addClass("content-main-cols-1"),$(".sidebar").remove()}$(".element-brands-nav").find(".nav-brand-list").each(function(){6<$(this).children().length&&$(".nav-brand-list").bxSlider(n)}),$(".element-brands-bottom").find(".nav-bottom-brand-list").each(function(){6<$(this).children().length&&$(".nav-bottom-brand-list").bxSlider(n)}),$(".element-brand-left").find(".brand-sidebar-list").each(function(){6<$(this).children().length&&$(".brand-sidebar-list").bxSlider({minSlides:6,maxSlides:6,mode:"vertical",captions:!1,auto:!0,controls:!0,pager:!1,responsive:!0,autoReload:!0,slideMargin:20,prevText:'<span class="icon-prev-up"></span>',nextText:'<span class="icon-next-down"></span>'})}),$(".element-name-cnpj").each(function(){var e=$(this).find("p:first-child").text(),n=$(this).find("p:last-child").text(),t=(t=new Date).getFullYear();$(this).html('<div class="name-cnpj-inner"><p>'+t+" - Todos os direitos reservados - "+e+" © "+t+"<span>"+n+"</span></p></div>")}),$(".product-list-item").each(function(){$(this).find(".product-info");var e=$(this).find(".product-image"),n=$(this).find(".product-name"),t=$(this).find(".product-parcelled-price");$('<div class="wrapper-label"></div>').appendTo(e);e=$(this).find(".wrapper-label");$(this).find(".label-promo").appendTo(e),$(this).find(".label-launch").appendTo(e),$(this).find(".product-cash-price").insertAfter(t),$(this).find(".product-rating").insertAfter(n)}),$('<div class="header-box-content"><span class="title-secundary">nossas marcas</span></div>').insertBefore(".nav-bottom-brand"),$("#footer-main .element-certificates").find(".title-footer").text("Segurança"),$(window).on("load resize",function(){var e=$(".element-menu-main").length?$(".element-menu-main"):$(".element-menu-category"),n=(n=$(window).width())/2;$(e).find('ul[class^="menu"]').children("li").each(function(){var e=(e=$(this).offset()).left;n<e?$(this).addClass("menu-right"):$(this).addClass("menu-left")})}),$(".pagina-categoria, .pagina-busca, .pagina-marca, .pagina-tag").each(function(){$(this).find(".element-content").each(function(){var e=$(this).closest("#content-main");$('<div class="header-section"><div class="container-12"><div class="grid-12"><div class="header-section-inner"></div></div></div></div>').prependTo(e);e=$(this).closest("#content-main").find(".header-section-inner");$(this).find(".header-box-content").prependTo(e),$(this).find(".element-breadcrumb").prependTo(e)})}),$(".pagina-produto").each(function(){s()}),i(".element-banner-main","#banner-main"),i(".element-banner-stripe","#banner-stripe"),i(".element-banner-shop","#banner-shop"),i(".element-banner-bottom","#banner-bottom"),a(".element-brands-nav"),a(".element-brands-bottom"),$("#nav-main").find(".clear").remove()});