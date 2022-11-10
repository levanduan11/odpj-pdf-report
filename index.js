var data = {
  no: 1,
  name: 'nguyen van a',
  email: 'vanA@gmail.com',
  address: 'hanoi'
}
function fake() {
  var fakeData = [];
  for (i = 0; i < 3; i++) {
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
  var table = Table(props);
  var thead = Thead();
  var tbody = Tbody();
  var tr = Tr();
  thead.appendChild(tr);
  for (var key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      var value = object[key];
      if (key === 'head') {
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; i++) {
            var th = Th(value[i]);
            tr.appendChild(th);
          }
        }
        continue;
      }
      if (key === 'body') {
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; i++) {
            var tr = Tr();
            var obTr = value[i];
            for (var key in obTr) {
              if (Object.hasOwnProperty.call(obTr, key)) {
                var element = obTr[key];
                var td = Td({ child: element, className: 'tac' });
                tr.appendChild(td);
              }
            }
            tbody.appendChild(tr);
            console.log(value[i]);
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
function Table(props) {
  return buildElement('table', props);
}
function Thead(props) {
  return buildElement('thead', props);
}
function Tbody(props) {
  return buildElement('tbody', props);
}
function Tr(props) {
  return buildElement('tr', props);
}
function Th(props) {
  return buildElement('th', props);
}
function Td(props) {
  return buildElement('td', props);
}

