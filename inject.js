/**
 *  on page init, inject the candycrusher into the app iframe
 *  @author tkivari
 */

function getLife() {
    console.log('getting new life');
    location.assign("javascript:giveAdLife_NewWay();void(0)");
}

getLife();
intr = 150 * 1000; // 2.5 minute interval
setInterval('getLife()',intr);