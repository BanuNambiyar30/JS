function onImage()
{
    var image1=document.getElementById('imgid1');
    var image2=document.getElementById('imgid2');
    var buttonColor1=document.getElementById('but2');
    var buttonColor2=document.getElementById('but1');
    image1.src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png';
    image1.style.height='150px';
    image1.style.width='150px';
    image2.src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png';
    image2.style.height='200px';
    image2.style.width='200px';
    buttonColor1.style.backgroundColor='green';
    buttonColor2.style.backgroundColor='whitesmoke';
    }
function offImage()
{
    var image1=document.getElementById('imgid1');
    var image2=document.getElementById('imgid2');
    var buttonColor1=document.getElementById('but1');
    var buttonColor2=document.getElementById('but2');
    image1.src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png';
    image1.style.height='150px';
    image1.style.width='150px';
    image2.src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png';
    image2.style.height='200px';
    image2.style.width='200px';
    buttonColor1.style.backgroundColor='red';
    buttonColor2.style.backgroundColor='whitesmoke';
    }