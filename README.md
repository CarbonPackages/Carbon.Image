[![Latest stable version]][packagist] [![Total downloads]][packagist] [![License]][packagist] [![GitHub forks]][fork] [![GitHub stars]][stargazers] [![GitHub watchers]][subscription]

# Carbon.Image Package for Neos CMS

This package provides some fusion helper for images based on [Sitegeist.Kaleidoscope]; you have to create the node type for yourself. Here you see an example of an implementation: [Jonnitto.ImagesInARow]

## Installation

Most of the time you have to make small adjustments to a package (e.g. [configuration] in `Settings.yaml`). Because of that, it is important to add the corresponding package to the composer from your theme package. Mostly this is the site packages located under `Packages/Sites/`. To install it correctly go to your theme package (e.g.`Packages/Sites/Foo.Bar`) and run following command:

```bash
composer require carbon/image --no-update
```

The `--no-update` command prevent the automatic update of the dependencies. After the package was added to your theme `composer.json`, go back to the root of the Neos installation and run `composer update`. Et voilà! Your desired package is now installed correctly.

## Abstract node types

Below a list of which abstract node types (a.k.a. mixins) you can use in your projects:

| Name                             | super types            | Description                                                                                               |
| -------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------- |
| [`Carbon.Image:Image`]           | [`Carbon.Image:Group`] | Creates the property `image`, the label and the icon                                                      |
| [`Carbon.Image:AlternativeText`] | [`Carbon.Image:Group`] | Creates an input field in the inspector for the property `alternativeText`                                |
| [`Carbon.Image:BackendLabel`]    |                        | Create the label in the backend based on the properties `title`, `alternativeText`, `caption` and `text`  |
| [`Carbon.Image:Caption`]         | [`Carbon.Image:Group`] | Creates an input field in the inspector for the property `caption`. This is used togehter with `lightbox` |
| [`Carbon.Image:Lightbox`]        | [`Carbon.Image:Group`] | Creates a checkbox in the inspector for the property `lightbox`                                           |
| [`Carbon.Image:Link`]            | [`Carbon.Image:Group`] | Creates a link editor in the inspector for the property `link`                                            |
| [`Carbon.Image:Title`]           | [`Carbon.Image:Group`] | Creates an input field in the inspector for the property `title`                                          |
| [`Carbon.Image:Group`]           |                        | This is a mixins to create the group `image` in the inspector                                             |

## Fusion

### Presentational components

#### [`Carbon.Image:Component.Presentation.Case`]

You can set `type` to `picture` or `image`. Based on that value, either an [image][`carbon.image:component.presentation.image`] or an [picture][`carbon.image:component.presentation.picture`] will be rendered.

#### [`Carbon.Image:Component.Presentation.Image`] and [`Carbon.Image:Component.Presentation.Picture`]

Outputs an image.

| Property            | Image | Picture | Description                                                                                                                     | Type                                                    | Default value            | Read setting                  |
| ------------------- | :---: | :-----: | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------ | ----------------------------- |
| `imageSource`       |   ✓   |    ✓    |                                                                                                                                 | [ImageSource FusionObject]                              | `null`                   |                               |
| `thumbnailPreset`   |   ✓   |    ✓    | Set width and/or height via named thumbnail preset from setting `Neos.Media.thumbnailPresets`                                   | `string`                                                | `null`                   |                               |
| `variantPreset`     |   ✓   |    ✓    | Select image variant via named variant preset, given as `IDENTIFIER::VARIANTNAME` keys from setting `Neos.Media.variantPresets` | `string` or `array`                                     | `null`                   |                               |
| `width`             |   ✓   |    ✓    | Set the intended width                                                                                                          | `integer`                                               | `null`                   |                               |
| `height`            |   ✓   |    ✓    | Set the intended height                                                                                                         | `integer`                                               | `null`                   |                               |
| `srcset`            |   ✓   |    ✓    | Media descriptors like `'1.5x'` or `'600w'` of the default image                                                                | `string` or `array`                                     | `null`                   |                               |
| `sizes`             |   ✓   |    ✓    | Sizes attribute                                                                                                                 | `string` or `array`                                     | `null`                   |                               |
| `additionalFormats` |       |    ✓    |                                                                                                                                 | `array` of `strings`                                    | `['webp']`               |                               |
| `sources`           |       |    ✓    | Array of source definitions that supports the following keys: `imageSource`, `srcset`, `sizes`, `media`, `type`                 | `array`                                                 | `null`                   |                               |
| `lazy`              |   ✓   |    ✓    | Enable lazyloading in usage with [lazysizes]. This is disabled in backend                                                       | `boolean`                                               | `false`                  | `Carbon.Image.lazy.enabled`   |
| `lazyClass`         |   ✓   |    ✓    | The CSS class to attach to the img-tags                                                                                         | `string`                                                | `'lazyload'`             | `Carbon.Image.lazy.class`     |
| `lazyWidth`         |   ✓   |    ✓    | The width of the thumbnail-src that is loaded first                                                                             | `integer`                                               | `null`                   | `Carbon.Image.lazy.lazyWidth` |
| `loading`           |   ✓   |    ✓    | Set the `loading` attribute. Can be `'auto'`, `'lazy'` or `'eager'`                                                             | `string`                                                | `null`                   |                               |
| `objectFit`         |   ✓   |    ✓    | Can be `'cover'` or `'contain'`                                                                                                 | `string`                                                | `null`                   |                               |
| `alternativeText`   |   ✓   |    ✓    | Set the `alt` attribute                                                                                                         | `string`                                                | `null`                   |                               |
| `title`             |   ✓   |    ✓    | Set the `title` attribute                                                                                                       | `string`                                                | `null`                   |                               |
| `class`             |   ✓   |    ✓    | Set the `class` attribute                                                                                                       | `string` or `array`                                     | `null`                   |                               |
| `id`                |   ✓   |    ✓    | Set the `id` attribute                                                                                                          | `string`                                                | `null`                   |                               |
| `style`             |   ✓   |    ✓    | Set the `style` attribute                                                                                                       | `string`                                                | `null`                   |                               |
| `figureTagName`     |   ✓   |    ✓    | Set tag name of the wrapping tag. If it set to `null`, the wrapping tag will not be written.                                    | `string`                                                | `'figure'`               |                               |
| `figureAttributes`  |   ✓   |    ✓    | Set the attributes for the `figureTagName`                                                                                      | `Neos.Fusion:Attributes` or `Neos.Fusion:DataStructure` | `Neos.Fusion:Attributes` |                               |
| `content`           |   ✓   |    ✓    | If set and `figureTagName` is `'figure'`, a `figcaption` is rendered                                                            | `string`                                                | `null`                   |                               |
| `linkAttributes`    |   ✓   |    ✓    | If set, the `<img>` is wrapped with an link with this attributes                                                                | `Neos.Fusion:Attributes` or `Neos.Fusion:DataStructure` | `null`                   |                               |

### Integrational components

#### [`Carbon.Image:Component.Case`]

You can set `type` to `picture` or `image`. Based on that value, either an [image][`carbon.image:component.image`] or an [picture][`carbon.image:component.picture`] will be rendered.

#### [`Carbon.Image:Component.Image`] and [`Carbon.Image:Component.Picture`]

You can pass any value from `Carbon.Image:Component.Presentation.Image` / `Carbon.Image:Component.Presentation.Picture`. To keep it a bit shorter those are not listed.

| Property                  | Description                                                                                                             | Type                                                     | Default value                      |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------- |
| `outputDummy`             |                                                                                                                         | `boolean`                                                | `node.context.inBackend`           |
| `image`                   |                                                                                                                         | `string` or `'Neos\Media\Domain\Model\ImageInterface'`   | `null`                             |
| `imageSourceSettings`     | You can pass all properties from [`Carbon.Image:Helper.ImageSource`]                                                    | `array`                                                  | `null`                             |
| `link`                    | Pass a node or a string. The link gets processed with `ConvertUris`. It will have no effect if `linkAttributes` is set. | `string` or `'Neos\ContentRepository\Domain\Model\Node'` | `null`                             |
| `linkOptions`             |                                                                                                                         | `array`                                                  | `Carbon.Image:Helper.Link.Options` |
| `linkAdditonalAttributes` | Pass any additional attributes to the link. You can even override `href`.                                               | `array`                                                  | `Neos.Fusion:DataStructure`        |
| `lightbox`                | If set, the link for the lightbox gets generated. It will have no effect if `link` or `linkAttributes` is set.          | `boolean`                                                | `Neos.Fusion:DataStructure`        |
| `lightboxConfiguration`   | The configuration array for the lightbox                                                                                | `array`                                                  | [Lightbox settings]                |
| `lightboxImage`           | Override the lightbox image                                                                                             | `string` or `'Neos\Media\Domain\Model\ImageInterface'`   | `this.image`                       |
| `lightboxCaption`         | The caption for the lightbox                                                                                            | `string` or `'Neos\Media\Domain\Model\ImageInterface'`   | `this.image`                       |
| `linkAttributes`          | If set, it will override `lightbox` and `link`                                                                          | `Neos.Fusion:Attributes` or `Neos.Fusion:DataStructure`  | `null`                             |

## The lightbox

The markup is optimized to use this togehter with [Jonnitto.PhotoSwipe], but you can use any lightbox you want.

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
[jonnitto.imagesinarow]: https://github.com/jonnitto/Jonnitto.ImagesInARow
[jonnitto.photoswipe]: https://github.com/jonnitto/Jonnitto.PhotoSwipe
[`carbon.image:alternativetext`]: Configuration/NodeTypes.AlternativeText.yaml
[`carbon.image:backendlabel`]: Configuration/NodeTypes.BackendLabel.yaml
[`carbon.image:caption`]: Configuration/NodeTypes.Caption.yaml
[`carbon.image:group`]: Configuration/NodeTypes.Group.yaml
[`carbon.image:image`]: Configuration/NodeTypes.Image.yaml
[`carbon.image:lightbox`]: Configuration/NodeTypes.Lightbox.yaml
[`carbon.image:link`]: Configuration/NodeTypes.Link.yaml
[`carbon.image:title`]: Configuration/NodeTypes.Title.yaml
[configuration]: Configuration
[`carbon.image:component.presentation.case`]: Resources/Private/Fusion/Component/Presentation/Case.fusion
[`carbon.image:component.presentation.image`]: Resources/Private/Fusion/Component/Presentation/Image.fusion
[`carbon.image:component.presentation.picture`]: Resources/Private/Fusion/Component/Presentation/Picture.fusion
[`carbon.image:component.case`]: Resources/Private/Fusion/Component/Integration/Case.fusion
[`carbon.image:component.image`]: Resources/Private/Fusion/Component/Integration/Image.fusion
[`carbon.image:helper.imagesource`]: Resources/Private/Fusion/Helper/ImageSource.fusion
[`carbon.image:component.picture`]: Resources/Private/Fusion/Component/Integration/Picture.fusion
[lazysizes]: https://github.com/aFarkas/lazysizes
[sitegeist.kaleidoscope]: https://github.com/sitegeist/Sitegeist.Kaleidoscope
[imagesource fusionobjects]: https://github.com/sitegeist/Sitegeist.Kaleidoscope#imagesource-fusionobjects
[lightbox settings]: Configuration/Settings.Carbon.yaml#L18-L25
