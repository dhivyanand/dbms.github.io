!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="https://cdn2.editmysite.com/js/",e.p="https://"+window.ASSETS_BASE+"/js/"||e.p,e(0)}({0:function(t,e,i){t.exports=i(219)},219:function(t,e){!function(t,e){function i(i){var n=a.element[0];n.style.setProperty("height",a.getHeight()+"px","important"),n.style.setProperty("position","absolute","important"),n.style.setProperty("bottom","0","important"),n.style.setProperty("left","0","important"),n.style.setProperty("right","0","important");var o="display:block !important; visibility:visible !important;",r="display:inline-block !important; visibility:visible !important;",l=a.element.find("*");l.push(n),l.each(function(){var e=t(this),i=e.attr("style");!e.hasClass("weebly-icon")||i&&i.indexOf(r)!==-1?i&&i.indexOf(o)!==-1||e.attr("style",o+("undefined"!=typeof i?i:"")):e.attr("style",r+("undefined"!=typeof i?i:""))});var m=p.css("paddingBottom"),c=a.element.outerHeight(!0)+"px";if(m!==c&&document.body.style.setProperty("padding-bottom",c,"important"),e.showV2Footer){var d=t("#weebly-footer-signup-container");n.style.setProperty("position","fixed","important"),n.style.setProperty("width","312px","important"),n.style.setProperty("left","10px","important"),n.style.setProperty("z-index","20","important"),s()&&(n.style.setProperty("width","100%","important"),n.style.setProperty("height","90px","important"),n.style.setProperty("left","0px","important"),t("img.footer-ab-published-toast-image").css("display","none","important"),t("span.footer-ab-published-toast-text").css("display","none","important"));var u=t(".header"),h=0,y=setInterval(function(){h++,u.hasClass("stuck")?(u.css("padding","10px 40px 60px"),clearInterval(y)):s()?d.css("left","0px"):d.css("left","10px"),5===h&&clearInterval(y)},200)}window.container=a}function n(){var t,e=a.element.parent().css("color").match(/[\d\.]+/g);return!(e.length<3)&&(t=o(e[0],e[1],e[2]),t[2]<.57)}function o(t,e,i){t/=255,e/=255,i/=255;var n=Math.max(t,e,i),o=Math.min(t,e,i),r,s,a=(n+o)/2;if(n==o)r=s=0;else{var p=n-o;switch(s=a>.5?p/(2-n-o):p/(n+o),n){case t:r=(e-i)/p+(e<i?6:0);break;case e:r=(i-t)/p+2;break;case i:r=(t-e)/p+4}r/=6}return[r,s,a]}function r(o,r,l){var m="https://"+l+"/footer_signup.php?lang="+e.siteLang;if(t('#wsite-base-style, link[href^="//'+o+'/css/sites.css"]').length||t('<link href="//'+o+"/css/sites.css?buildtime="+r+'" rel="stylesheet">').appendTo("head"),a.element=t("#weebly-footer-signup-container"),p.hasClass("splash-page"))return void a.element.remove();a.iframe=t("#weebly-footer-signup-iframe"),n()&&a.element.addClass("light"),p.css({minHeight:"100%",position:"relative"}),document.body.style.setProperty("height","auto","important"),p.append(a.element);var c=a.element.find(".signup-container-header"),d="trigger-signup";if(c.click(function(){var e="https://www.weebly.com",i="utm_source=internal&utm_medium=footer&utm_campaign=3";t(this).hasClass(d)&&(e+="/signup"),e+="/?"+i,window.open(e,"_blank")}),e.showV2Footer){window.$signupContainer=t("#weebly-footer-signup-container");var u;t(".signup-container-header").hover(function(){u=setTimeout(function(){var t="288px";s()&&(t="132px"),window.$signupContainer.animate({height:t},600)},250)},function(){clearTimeout(u);var t="62px";s()&&(t="45px"),window.$signupContainer.animate({height:t})})}a.element.find(".powered-by").hover(function(){c.removeClass(d)},function(){c.addClass(d)});var h=setTimeout(i,300);t(window).on({resize:i,scroll:function(){clearTimeout(h),h=setTimeout(i,300)}})}var s=function(){var t=window.matchMedia("(max-width: 480px)");return!t||t.matches},a={height:62,mobileHeight:124,getHeight:function(){return s()?a.mobileHeight:a.height}},p=t("body");e.footer={setupContainer:r}}(window.jQuery,window.Weebly)}});