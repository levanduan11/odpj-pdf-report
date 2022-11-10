var data = {
  no: 1,
  name: 'nguyen van a',
  email: 'vanA@gmail.com',
  address: 'hanoi'
}
function fake() {
  var fakeData = [];
  for (i = 0; i <100; i++) {
    var obj = {};
    Object.assign(obj, data);
    obj.no = i + 1;
    fakeData.push(obj);
  }
  return fakeData;
}
var object = {
  head: [
    {
      child: 'no',
      className: ['tac']
    },
    {
      child: ['top name', 'bottom name'],
      className: ['tac']
    },
    {
      child: 'email',
      className: ['tac']
    },
    {
      child: 'address',
      className: ['tac']
    }

  ],
  body: fake()
}

function buildNormalTable(props) {
  var div = buildElement('div', { className: ['mod-table_wrap'] });
  var table = cTable(props);
  var thead = cThead();
  var tbody = cTbody();
  var tr = cTr();
  thead.appendChild(tr);
  for (var key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      var value = object[key];
      if (key === 'head') {
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; i++) {
            var th = cTh(value[i]);
            tr.appendChild(th);
          }
        }
        continue;
      }
      if (key === 'body') {
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; i++) {
            var tr = cTr();
            var obTr = value[i];
            for (var key in obTr) {
              if (Object.hasOwnProperty.call(obTr, key)) {
                var element = obTr[key];
                var td = cTd({ child: element, className: 'tac' });
                tr.appendChild(td);
              }
            }
            tbody.appendChild(tr);
          }
        }
      }
    }
  }
  table.appendChild(thead);
  table.appendChild(tbody);
  div.appendChild(table);
  return div;
}

function buildElement(type, props) {
  var element = document.createElement(type);
  if (props) {
    for (var key in props) {
      if (Object.hasOwnProperty.call(props, key)) {
        var value = props[key];
        if (key === 'className') {
          if (Array.isArray(value)) {
            for (var i = 0; i < value.length; i++) {
              element.classList.add(value[i]);
            }
          } else {
            element.classList.add(value);
          }
          continue;
        }
        if (key === 'child') {
          if (Array.isArray(value)) {
            element.innerHTML = value.join('<br>');
          } else {
            element.innerHTML = value;
          }
          continue;
        }
        element[key] = props[key];
      }
    }
  }
  return element;
}
function cTable(props) {
  return buildElement('table', props);
}
function cThead(props) {
  return buildElement('thead', props);
}
function cTbody(props) {
  return buildElement('tbody', props);
}
function cTr(props) {
  return buildElement('tr', props);
}
function cTh(props) {
  return buildElement('th', props);
}
function cTd(props) {
  return buildElement('td', props);
}
