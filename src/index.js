// import _ from 'lodash';
var _ = require('lodash');
import './style.css';
import './hello.scss';
//commonJS 스펙의 가져오기 => es6 named import
import {area, circumference} from './js/circle.js';
//es6 default improt : {} 필요없고 이름을 마음대로 정의할 수 있다.
import aaa from './js/cubic';git


function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack!11!'], ' ');

    return element;
}

document.body.appendChild(component());


console.log('area: ' , area(5));
console.log('circumference: ' , circumference(5));
console.log('aaa: ' , aaa(5));



