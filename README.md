[![Latest stable version]][packagist] [![Total downloads]][packagist] [![License]][packagist] [![GitHub forks]][fork] [![GitHub stars]][stargazers] [![GitHub watchers]][subscription]

# Carbon.Image Package for Neos CMS

This package provides some fusion helper for images based on [Sitegeist.Kaleidoscope]; you have
to create the node type for yourself. Here you see an example of an implementation: [Jonnitto.ImagesInARow]

## Installation

Most of the time you have to make small adjustments to a package (e.g. [configuration] in `Settings.yaml`).
Because of that, it is important to add the corresponding package to the composer from your theme package.
Mostly this is the site packages located under `Packages/Sites/`.
To install it correctly go to your theme package (e.g.`Packages/Sites/Foo.Bar`) and run following command:

```bash
composer require carbon/image --no-update
```

The `--no-update` command prevent the automatic update of the dependencies. After the package was added
to your theme `composer.json`, go back to the root of the Neos installation and run `composer update`.
Et voilà! Your desired package is now installed correctly.

## Abstract node types

Below a list of which abstract node types (a.k.a. mixins) you can use in your projects:

| Name                             | Description                                                                                                                         |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [`Carbon.Image:Image`]           | Creates the property `image`, the label and the icon                                                                                |
| [`Carbon.Image:AlternativeText`] | Creates an input field in the inspector for the property `alternativeText`                                                          |
| [`Carbon.Image:BackendLabel`]    | Create the label in the backend based on the properties `title`, `alternativeText`, `caption` and `text`                            |
| [`Carbon.Image:Caption`]         | Creates an input field in the inspector for the property `caption`. This is used togehter with `lightbox`                           |
| [`Carbon.Image:Lightbox`]        | Creates a checkbox in the inspector for the property `lightbox`                                                                     |
| [`Carbon.Image:Link`]            | Creates a link editor in the inspector for the property `link`                                                                      |
| [`Carbon.Image:Title`]           | Creates an input field in the inspector for the property `title`                                                                    |
| [`Carbon.Image:Group`]           | This is a mixins to create the group `image` in the inspector. This is used by all mixons, except by [`Carbon.Image:BackendLabel`]. |

## Fusion

### Presentational components

#### [`Carbon.Image:Component.Presentation.Case`]

You can set `type` to `picture` or `image`. Based on that value, either an [image][`carbon.image:component.presentation.image`]
or an [picture][`carbon.image:component.presentation.picture`] will be rendered.

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

You can set `type` to `picture` or `image`. Based on that value, either an [image][`carbon.image:component.image`]
or an [picture][`carbon.image:component.picture`] will be rendered.

#### [`Carbon.Image:Component.Image`] and [`Carbon.Image:Component.Picture`]

You can pass any value from `Carbon.Image:Component.Presentation.Image` / `Carbon.Image:Component.Presentation.Picture`.
To keep it a bit shorter those are not listed.

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

### Helper

#### [`Carbon.Image:Helper.Link.Attributes`]

> This prototype is used by the integrational components  
> [`Carbon.Image:Component.Image`] and [`Carbon.Image:Component.Picture`].

It takes properties like `link`, `lightbox` and their options and return the attributes.
If nothing is set it will return `false`.

#### [`Carbon.Image:Helper.Link.Options`]

> This prototype is used by the integrational components  
> [`Carbon.Image:Component.Image`] and [`Carbon.Image:Component.Picture`].

You can set options related to `Neos.Neos:ConvertUris` and `Neos.Neos:NodeUri`.

#### [`Carbon.Image:Helper.AlternativeText`]

> This prototype is used by the integrational components  
> [`Carbon.Image:Component.Image`] and [`Carbon.Image:Component.Picture`].

The idea behind this prototype is to return an alternative text based on the media fields.

<details>
    <summary>How to implement</summary>

If `alternativeText` is passed (e.g. from an property) this value is returned. Otherwise, if
`property` (`title`, `caption` or `copyrightNotice`) is set, it read the field of the asset.
Per default, the property is set to `caption` (based on the setting `Carbon.Image.alternativeText.property`),
but you can it override with your own `Settings.yaml` or via Fusion:

```elm
prototype(Carbon.Image:Helper.AlternativeText) {
    property = 'title'
}
```

But this is kind of critcal if you multiple languages on a website. This is where the option
`languageMapping` comes in. With this you can split (based on the setting
`Carbon.Image.alternativeText.splitCharacter`, defaults to `||`) a string into the needed language.
The easiest way to enable this, is to set the configuration `Carbon.Image.alternativeText.languageMapping`
in your `Settings.yaml` like this:

```yaml
Carbon:
    Image:
        alternativeText:
            languageMapping:
                en: 0
                de: 1
                fr: 2
```

but of course you can set this also via Fusion:

```elm
prototype(Carbon.Image:Helper.AlternativeText) {
    languageMapping = Neos.Fusion:DataStructure {
        en = 0
        de = 1
        fr = 2
    }
}
```

With this kind of setting, you can write the alternative text in the media field like this:
`A cat || Eine Katze || Un chat`

To override the label in the media field you can a file called `MediaBrowser.xlf`
in you translation folder:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xliff xmlns="urn:oasis:names:tc:xliff:document:1.2" version="1.2">
    <file original="Main" product-name="Neos.Media.Browser" source-language="en" datatype="plaintext" target-language="de">
        <body>
            <trans-unit id="field.caption" xml:space="preserve" approved="yes">
                <source>Caption ( English || German || French)</source>
                <target state="final">Beschriftung (Englisch || Deutsch || Französisch)</target>
            </trans-unit>
        </body>
    </file>
</xliff>
```

You can override the current language by set the property `language`.
Otherwise the current dimension `language` is used.

</details>

The string is always trimmed and all tags are stripped out.
It no alternative text can be extraced, the Fusion will return `false`.

#### [`Carbon.Image:Helper.ImageSource`]

With this helper you can pass any value (with the propery `image`) and you will
get the corresponding image source from Kaleidoscope.

If `image` is an instance of an `Neos\Media\Domain\Model\ImageInterface` you will get a `Sitegeist.Kaleidoscope:AssetImageSource`.  
If `image` is a string and starts with `resource` or `package` is set, you will get a `Sitegeist.Kaleidoscope:ResourceImageSource`.  
If `image` is a string and starts with `http` is set, you will get a `Sitegeist.Kaleidoscope:UriImageSource`.  
Otherwise, if `outputDummy` is set (defaults to `node.context.inBackend`), you will get `Sitegeist.Kaleidoscope:DummyImageSource`.

#### [`Carbon.Image:Helper.LightboxImageSource`]

> This prototype inherits from [`Carbon.Image:Helper.ImageSource`] and it is used by the  
> integrational components [`Carbon.Image:Component.Image`] and [`Carbon.Image:Component.Picture`].

It reads the configuration from `Carbon.Image.lightbox` but can be overriden via Fusion, if needed.
In the integrational components the image is passed to this prototype.

#### [`Carbon.Image:Helper.MinMaxImageSize`]

> This prototype is used by the presentational components [`Carbon.Image:Component.Presentation.Image`]
> and [`Carbon.Image:Component.Presentation.Picture`].

This prototype takes a value and returns a string for the `srcset` (e.g. `150w, 300w, 450w, 600w`)

| Property        | Description                                                                                                 | Type                | Default value                     |
| --------------- | ----------------------------------------------------------------------------------------------------------- | ------------------- | --------------------------------- |
| `size`          | The basis size (width or height)                                                                            | `integer`           | `${value}`                        |
| `min`           | The minimal width of an image                                                                               | `integer`           | `300`                             |
| `max`           | The maximal width of an image                                                                               | `integer`           | `3900`                            |
| `step`          | If you set this to null, the steps generation gets deactivated, otherwise every step an image get generated | `integer`           | `150`                             |
| `multiplicator` | Besides the steps, also these sizes get generated (`size` × `item` in `multiplicator`)                      | `array of integers` | `${[2, 1.5, 1, 0.75, 0.5, 0.25]}` |

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
[`carbon.image:helper.link.attributes`]: Resources/Private/Fusion/Helper/Link/Attributes.fusion
[`carbon.image:helper.link.options`]: Resources/Private/Fusion/Helper/Link/Options.fusion
[`carbon.image:helper.alternativetext`]: Resources/Private/Fusion/Helper/AlternativeText.fusion
[`carbon.image:helper.imagesource`]: Resources/Private/Fusion/Helper/ImageSource.fusion
[`carbon.image:helper.lightboximagesource`]: Resources/Private/Fusion/Helper/LightboxImageSource.fusion
[`carbon.image:helper.minmaximagesize`]: Resources/Private/Fusion/Helper/MinMaxImageSize.fusion
