/**
 * @param  {Enumerator} color
 * blue orange green pink purple red
 */
function changeFavicon (color) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    //Añadido CV al link de public porque github pages me obliga a poner CV delante
    link.href = `/CV/favicons/favicon${color}.ico`;
  }

export default changeFavicon;