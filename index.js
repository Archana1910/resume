/********************************************************************
 * @author:      Kaven
 * @email:       kaven@wuwenkai.com
 * @website:     http://blog.kaven.xyz
 * @file:        [React Course] /javascript/index.js
 * @create:      2022-07-12 16:44:57.055
 * @modify:      2022-07-12 16:49:14.253
 * @version:     
 * @times:       4
 * @lines:       25
 * @copyright:   Copyright © 2022 Kaven. All Rights Reserved.
 * @description: [description]
 * @license:     [license]
 ********************************************************************/

function reverse(str){
    if(str === ""){
        return "";
    }
    else {
        return reverse(str.substr(1)) + str.charAt(0)
    }
}

console.log(reverse('hello meri jaan'))