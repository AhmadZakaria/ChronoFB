// This snippet is licensed under a Creative Commons Attribution 3.0 License.
// Author: Ahmed Abdelkader
javascript:{
    var mall = document.getElementById('pagelet_group_mall');
    var flist = mall.children[0];
    var far = new Array();
    var dates = {};
    while(flist.children.length) {
        var abbrs = flist.children[0].getElementsByTagName('abbr');
        if (abbrs.length)
            dates[flist.children[0].id] = new Date(abbrs[0].getAttribute('data-date')).getTime();
        else
            dates[flist.children[0].id] = new Date().getTime();
        far.push(flist.children[0]);
        flist.removeChild(flist.children[0]);
    }
    far.sort(function(a, b){return dates[b.id] - dates[a.id];});
    for (var i = 0; far.length - i; ++i)
        flist.appendChild(far[i]);
    void(0);
}
