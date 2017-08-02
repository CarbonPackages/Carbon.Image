Carbon.Image Package for Neos CMS
=================================

[![Latest Stable Version](https://poser.pugx.org/carbon/image/v/stable)](https://packagist.org/packages/carbon/image)
[![Total Downloads](https://poser.pugx.org/carbon/image/downloads)](https://packagist.org/packages/carbon/image)
[![License](https://poser.pugx.org/carbon/image/license)](https://packagist.org/packages/carbon/image)

This package provides some fusion helper for images.


Installation
------------

Most of the time you have to make small adjustments to a package (e.g. configuration in `Settings.yaml`). Because of that, it is important to add the corresponding package to the composer from your theme package. Mostly this is the site packages located under `Packages/Sites/`. To install it correctly go to your theme package (e.g.`Packages/Sites/Foo.Bar`) and run following command:
```
composer require carbon/image --no-update
```

The `--no-update` command prevent the automatic update of the dependencies. After the package was added to your theme `composer.json`, go back to the root of the Neos installation and run `composer update`. Et voilà! Your desired package is now installed correctly.


License
-------

Licensed under MIT, see [LICENSE](LICENSE)
