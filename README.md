[![Latest stable version]][packagist] [![Total downloads]][packagist] [![License]][packagist] [![GitHub forks]][fork] [![GitHub stars]][stargazers] [![GitHub watchers]][subscription]

# Carbon.Image Package for Neos CMS

This package provides some fusion helper for images; you have to create the node type for yourself. Here you see an example of an implementation: [Jonnitto.Image] or [Jonnitto.ImagesInARow]

## Installation

Most of the time you have to make small adjustments to a package (e.g. configuration in `Settings.yaml`). Because of that, it is important to add the corresponding package to the composer from your theme package. Mostly this is the site packages located under `Packages/Sites/`. To install it correctly go to your theme package (e.g.`Packages/Sites/Foo.Bar`) and run following command:

```
composer require carbon/image --no-update
```

The `--no-update` command prevent the automatic update of the dependencies. After the package was added to your theme `composer.json`, go back to the root of the Neos installation and run `composer update`. Et voilà! Your desired package is now installed correctly.

## NodeTypes

Below a list of which NodeTypes Mixins you can use in your projects:

### [`Carbon.Image:Image`]

This abstract node type (a.k.a. mixin) create the property and the inspector group `image`.

### [`Carbon.Image:Title`]

This mixin create a input field in the inspector for the property named `title`.

### [`Carbon.Image:AlternativeText`]

This mixin create a input field in the inspector for the property named `alternativeText`.

### [`Carbon.Image:Lightbox`]

This mixin create a checkbox to enlarge picture with a click. The name of the property is `lightbox`. Works great with [Jonnitto.PhotoSwipe].

### [`Carbon.Image:Caption`]

This mixin create a input field in the inspector for the property named `caption`.

### [`Carbon.Image:Link`]

This mixin with the property named `link` create a link editor in the inspector where you can add external and internal links and also links to assets.

### [`Carbon.Image:BackendLabel`]

This mixin don't create a property. It is just here to create the label for the backend in the structure tree

[packagist]: https://packagist.org/packages/carbon/image
[latest stable version]: https://poser.pugx.org/carbon/image/v/stable
[total downloads]: https://poser.pugx.org/carbon/image/downloads
[license]: https://poser.pugx.org/carbon/image/license
[github forks]: https://img.shields.io/github/forks/CarbonPackages/Carbon.Image.svg?style=social&label=Fork
[github stars]: https://img.shields.io/github/stars/CarbonPackages/Carbon.Image.svg?style=social&label=Stars
[github watchers]: https://img.shields.io/github/watchers/CarbonPackages/Carbon.Image.svg?style=social&label=Watch
[fork]: https://github.com/CarbonPackages/Carbon.Image/fork
[stargazers]: https://github.com/CarbonPackages/Carbon.Image/stargazers
[subscription]: https://github.com/CarbonPackages/Carbon.Image/subscription
[jonnitto.image]: https://github.com/jonnitto/Jonnitto.Image
[jonnitto.imagesinarow]: https://github.com/jonnitto/Jonnitto.ImagesInARow
[jonnitto.photoswipe]: https://github.com/jonnitto/Jonnitto.PhotoSwipe
[`carbon.image:image`]: Configuration/NodeTypes.Image.yaml
[`carbon.image:title`]: Configuration/NodeTypes.Title.yaml
[`carbon.image:alternativetext`]: Configuration/NodeTypes.AlternativeText.yaml
[`carbon.image:lightbox`]: Configuration/NodeTypes.Lightbox.yaml
[`carbon.image:caption`]: Configuration/NodeTypes.Caption.yaml
[`carbon.image:link`]: Configuration/NodeTypes.Link.yaml
[`carbon.image:backendlabel`]: Configuration/NodeTypes.BackendLabel.yaml
[`settings.yaml`]: Configuration/Settings.yaml
