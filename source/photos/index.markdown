---
layout: page
title: "Photos"
comments: true
sharing: true
footer: true
---

Life is beautiful. I've learned to slow down to enjoy the moments as they slip away, and appreciate what I have.

This is why I love Instagram, as the best way to capture and share my daily discoveries. Below is a selection of my Instagram feed. I hope you will like them.

<ul id="ig-feed">
<li><em>Loading...</em></li>
</ul>

Check out the rest [here](http://instagram.com/scottcheng).


<script src='/javascripts/libs/jquery.min.js'></script>
<script>
$.noConflict();
jQuery(function($) {
  var photos = [
    { link: 'http://instagram.com/p/bOsns7N0Qx/', img: 'http://distilleryimage9.ak.instagram.com/3adfb29ee26911e2b20922000aeb0b52_7.jpg' },
    { link: 'http://instagram.com/p/RwE51wN0Q2/', img: 'http://distilleryimage2.s3.amazonaws.com/ff6feabe294811e280a722000a9e28dc_7.jpg' },
    { link: 'http://instagram.com/p/Plyp_jt0Za/', img: 'http://distilleryimage2.s3.amazonaws.com/790c14aaff1511e1afe522000a1c8934_7.jpg' },
    { link: 'http://instagram.com/p/O0c9ARt0QS/', img: 'http://distilleryimage6.s3.amazonaws.com/dae20806f00611e18e1522000a1ea03a_7.jpg' },
    { link: 'http://instagram.com/p/O0Xo4Jt0eH/', img: 'http://distilleryimage7.s3.amazonaws.com/5e1c3d7ef00011e1b55e22000a1e9610_7.jpg' },
    { link: 'http://instagram.com/p/Of2TlMN0ef/', img: 'http://distilleryimage11.s3.amazonaws.com/2da0753ce9bd11e18bc012313804ac71_7.jpg' },
    { link: 'http://instagram.com/p/Oa9atUt0Tg/', img: 'http://distilleryimage4.s3.amazonaws.com/3bed817ce83f11e18b6b22000a1ea025_7.jpg' },
    { link: 'http://instagram.com/p/Oa5EYft0SW/', img: 'http://distilleryimage2.s3.amazonaws.com/eceaa438e83911e183c1123138105975_7.jpg' },
    { link: 'http://instagram.com/p/ORp50et0Vt/', img: 'http://distilleryimage5.s3.amazonaws.com/49d38626e56811e1a64f22000a1e9e7e_7.jpg' },
    { link: 'http://instagram.com/p/OQaTcwt0S2/', img: 'http://distilleryimage2.s3.amazonaws.com/1efb5c82e50711e1914322000a1e9b9c_7.jpg' },
    { link: 'http://instagram.com/p/NybY5et0dW/', img: 'http://distilleryimage10.s3.amazonaws.com/b2161c08dbe011e195351231381b651f_7.jpg' },
    { link: 'http://instagram.com/p/OURiy3N0Xi/', img: 'http://distilleryimage6.s3.amazonaws.com/ed69de8ae63411e1959322000a1e953c_7.jpg' },
    { link: 'http://instagram.com/p/NV5SeYt0Sr/', img: 'http://distilleryimage3.s3.amazonaws.com/91b90db6d32b11e1a84922000a1e8bad_7.jpg' },
    { link: 'http://instagram.com/p/M5iDvnN0c7/', img: 'http://distilleryimage11.s3.amazonaws.com/b64c83c0ca8311e1985822000a1d011d_7.jpg' },
    { link: 'http://instagram.com/p/LxT6Ogt0UL/', img: 'http://distilleryimage11.s3.amazonaws.com/704e7538b47911e1b9f1123138140926_7.jpg' },
    { link: 'http://instagram.com/p/LfUWKFt0eK/', img: 'http://distilleryimage2.s3.amazonaws.com/b935637aaefb11e1989612313815112c_7.jpg' },
    { link: 'http://instagram.com/p/LfjcJ-N0Sw/', img: 'http://distilleryimage4.s3.amazonaws.com/26098078af0e11e180d51231380fcd7e_7.jpg' },
    { link: 'http://instagram.com/p/LZxq7PN0dx/', img: 'http://distilleryimage5.s3.amazonaws.com/c51dc5aead4a11e1abb01231382049c1_7.jpg' },
    { link: 'http://instagram.com/p/LGn7lNt0R_/', img: 'http://distilleryimage3.s3.amazonaws.com/812e31aea77211e19dc71231380fe523_7.jpg' },
    { link: 'http://instagram.com/p/KHnkUKN0TE/', img: 'http://distilleryimage0.s3.amazonaws.com/2fd5ed44943811e1989612313815112c_7.jpg' }
  ];
  $list = $('#ig-feed');
  $list.empty();
  photos.forEach(function(photo) {
    $('<li />')
      .append($('<a />', {
          href: photo.link,
          target: '_blank'
        }).append($('<img />', { src: photo.img })))
      .appendTo($list);
  });
  $list.find('img').click(function() {
    _gaq.push(['_trackEvent', 'Photos', 'Click', $(this).parent().attr('href')]);
  });
});
</script>