var v1 = document.querySelector('#v1');
var v2 = document.querySelector('#v2');
var btn = document.querySelector('#btn');
var res = document.querySelector('#res');

require('../static/css/site.css');
require('../static/css/site1.scss');
require('../static/css/site2.less');

import addObj from './calc'

btn.onclick = function () {
    var v1value = parseFloat(v1.value);
    var v2value = parseFloat(v2.value);

    // var add = require('./calc');
    res.value = addObj.add(v1value, v2value);
}