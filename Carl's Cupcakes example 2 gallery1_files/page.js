define("page",["jquery","unveil"],function(a,b){a(document).ready(function(){a("img").unveil(400,function(){a(this).load(function(){this.style.opacity=1})});if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){window.setTimeout(function(){a("img").trigger("unveil")},250)}});return{}});