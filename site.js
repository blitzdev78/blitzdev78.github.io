(function(){
  var d=document, html=d.documentElement; html.classList.remove('no-js');
  function goal(name){ try{ if(typeof ym==='function' && window.YM_COUNTER){ ym(window.YM_COUNTER,'reachGoal',name); } }catch(e){} }
  // меню на мобильных
  var btn=d.querySelector('.menu-btn'), nav=d.getElementById('site-nav');
  if(btn&&nav){ btn.addEventListener('click',function(){ var o=nav.classList.toggle('open'); btn.setAttribute('aria-expanded',o); }); }
  d.querySelectorAll('.sub-toggle').forEach(function(b){ b.addEventListener('click',function(){ var li=b.parentNode, o=li.classList.toggle('open'); b.setAttribute('aria-expanded',o); }); });
  // цели Метрики
  d.addEventListener('click',function(e){
    var a=e.target.closest('a'); if(!a) return;
    if(a.classList.contains('js-phone')) goal('zvonok');
    else if(a.classList.contains('js-msg')) goal('messenger');
    else if(a.classList.contains('js-book')) goal('knopka_zapis');
  });
  // форма записи
  d.querySelectorAll('.js-form').forEach(function(f){
    f.addEventListener('submit',function(e){
      e.preventDefault(); if(!f.checkValidity()){ f.reportValidity(); return; }
      goal('zayavka');
      var data=new FormData(f), lines=[]; data.forEach(function(v,k){ if(k!=='agree') lines.push(k+': '+v); });
      f.querySelector('.form-ok').hidden=false; f.querySelector('button[type=submit]').disabled=true;
      window.location.href='mailto:info@example.com?subject='+encodeURIComponent('Заявка с сайта')+'&body='+encodeURIComponent(lines.join('\n'));
    });
  });
  // cookie-уведомление
  var c=d.querySelector('.cookie'), ok=false; try{ ok=localStorage.getItem('cookie-ok')==='1'; }catch(e){}
  if(c&&!ok){ c.hidden=false; c.querySelector('button').addEventListener('click',function(){ c.hidden=true; try{localStorage.setItem('cookie-ok','1');}catch(e){} }); }
})();
