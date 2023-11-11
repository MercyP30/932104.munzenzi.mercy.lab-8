function add() {
    var ulist = document.getElementById("unorderedList");
    var li = document.createElement("li");
    li.className = 'list';

    for (var i = 0; i < 5; i++) {
        var block = document.createElement("input");
        block.setAttribute('type', i === 0 || i === 1 ? 'text' : 'button');
        block.setAttribute('class', i === 0 ? 'input1' : i === 1 ? 'input2' : '');
        block.setAttribute('onclick', i === 2 ? 'type1()' : i === 3 ? 'type2()' : i === 4 ? 'type3()' : '');
        block.setAttribute('value', i === 2 ? ' ↑ ' : i === 3 ? ' ↓ ' : i === 4 ? ' x ' : '');
        li.appendChild(block);
    }
    ulist.appendChild(li);
}
function save() {
    var list = '';
    var len = document.querySelector('#unorderedList').children.length;
    for (var i = 0; i < len; i++) {
        var enterl1 = document.getElementsByClassName('input1')[i].value;
        var enterl2 = document.getElementsByClassName('input2')[i].value;
        list += '\"' + enterl1 + '\"' + ':' + '\"' + enterl2 + '\"' + ',';
    }
    list = list.slice(0, -1);
    list = '{' + list + '}';
    var D = document.getElementById("print");
    D.textContent = list;
    document.body.appendChild(D);
}
function type1() {
    var ulist = document.getElementById("unorderedList");
    var y = event.currentTarget.parentElement;
    return ulist.insertBefore(y, y.previousElementSibling);
}
function type2() {
    var ulist = document.getElementById("unorderedList");
    var y = event.currentTarget.parentNode;
    return ulist.insertBefore(y.nextElementSibling, y);
}
function type3() {
    event.currentTarget.parentElement.remove();
}