document.addEventListener("DOMContentLoaded", function(event){
    document.querySelector('body style').remove();
    let box = document.getElementsByClassName('box')[0];
    let navEl = document.createElement('nav');
    navEl.className = 'navbar';
    let navList = '';
    

    let containers = Array.from(document.getElementsByClassName('item'));
    let prefix = 'goecharts_';
    let groups = [];
    for (i = 0; i < containers.length; i++) {
        if (i > 1){
            let group = containers[i].id.split('v')[0];
            if (!groups.includes(group)){
                groups.push(group);
                navList += '<li><a href="#' + containers[i].id + '"><span style="position: fixed">' + group + '</span></a></li>\n'
            }
            eval(prefix + containers[i].id + '.group = "' + group + '";');
        }
    }
    groups.forEach(g => echarts.connect(g));

    navEl.innerHTML = `
    <ul>
      <li><a class="active" href="#ALLvParallel">ALL</a></li>
      `+ navList +`
    </ul>
    `.trim();
    box.insertBefore(navEl, box.firstChild);

    document.querySelector('.navbar').addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() === 'a') {
          document.querySelectorAll('.navbar a').forEach(e => e.classList.remove('active'));
          e.target.classList.add('active');
      }
  });
});
