var $p = $('.multilineEllipsis p');
var divh = $('.multilineEllipsis').height();
while ($p.outerHeight() > divh) {
    $p.text(function (index, text) {
        return text.replace(/\W*\s(\S)*$/, '...');
    });
}