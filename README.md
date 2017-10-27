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


[NodeTypes](Configuration/NodeTypes.Mixin.yaml)
-----------------------------------------------
Below a list of which NodeTypes Mixins you can use in your projects:

### `Carbon.Image:Image`
This abstract node type (a.k.a. mixin) create the property and the inspector group `image`.

### `Carbon.Image:Title`
This mixin create a input field in the inspector for the property named `title`.

### `Carbon.Image:AlternativeText`
This mixin create a input field in the inspector for the property named `alternativeText`.

### `Carbon.Image:Lightbox`
This mixin create a [checkbox](https://neos.readthedocs.io/en/stable/References/PropertyEditorReference.html#property-type-boolean-booleaneditor-checkbox-editor) to enlarge picture with a click. The name of the property is `lightbox`. Works great with [Jonnitto.PhotoSwipe](https://github.com/jonnitto/Jonnitto.PhotoSwipe)

### `Carbon.Image:Caption`
This mixin create a input field in the inspector for the property named `caption`.

### `Carbon.Image:Link`
This mixin with the property named `link` create a [link editor](https://neos.readthedocs.io/en/stable/References/PropertyEditorReference.html#property-type-boolean-booleaneditor-checkbox-editor) in the inspector where you can add external and internal links and also links to assets.

### `Carbon.Image:BackendLabel`
This mixin don't create a property. It is just here to create the label for the backend in the [structure tree](https://neos.readthedocs.io/en/stable/UserGuide/UserInterfaceBasics.html#the-structure-tree)


[Settings](Configuration/Settings.yaml)
---------------------------------------
TBD


[Fusion](Resources/Private/Fusion)
----------------------------------
TBD


License
-------

Licensed under MIT, see [LICENSE](LICENSE)
