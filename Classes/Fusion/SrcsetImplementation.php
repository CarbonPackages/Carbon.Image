<?php
namespace Carbon\Image\Fusion;


use Neos\Flow\Annotations as Flow;
use Neos\Media\Domain\Model\AssetInterface;
use Neos\Fusion\FusionObjects\AbstractFusionObject;
use Carbon\Image\Service\SrcsetService;

/**
 * Render the srcset attribute with responsive images. Accepts mostly the same parameters as the uri.image ViewHelper of the Neos.Media package:
 * asset, maximumWidth, maximumHeight, allowCropping, ratio.
 *
 */
class SrcsetImplementation extends AbstractFusionObject
{

    /**
     * @Flow\Inject
     * @var SrcsetService
     */
    protected $srcsetService;

    /**
     * Asset
     *
     * @return AssetInterface
     */
    public function getAsset()
    {
        return $this->fusionValue('asset');
    }

    /**
     * Sizes
     *
     * @return array
     */
    public function getSizes()
    {
        return $this->fusionValue('sizes');
    }

    /**
     * Ratio
     *
     * @return float
     */
    public function getRatio()
    {
        return $this->fusionValue('ratio');
    }

    /**
     * MaximumWidth
     *
     * @return integer
     */
    public function getMaximumWidth()
    {
        return $this->fusionValue('maximumWidth');
    }

    /**
     * MaximumHeight
     *
     * @return integer
     */
    public function getMaximumHeight()
    {
        return $this->fusionValue('maximumHeight');
    }

    /**
     * AllowCropping
     * Implicitly activated on fixed ratio
     *
     * @return boolean
     */
    public function getAllowCropping()
    {
        if ($this->getRatio()) {
            return true;
        }

        return $this->fusionValue('allowCropping');
    }

    public function getQuality()
    {
        return $this->fusionValue('quality');
    }

    public function getAsync()
    {
        return $this->fusionValue('async');
    }

    /**
     * Returns a processed image path
     *
     * @return string
     * @throws \Exception
     */
    public function evaluate()
    {
        $asset = $this->getAsset();
        $ratio = $this->getRatio();
        $maximumWidth = $this->getMaximumWidth();
        $maximumHeight = $this->getMaximumHeight();
        $allowCropping = $this->getAllowCropping();
        $quality = $this->getQuality();
        $sizes = $this->getSizes();
        $async = $this->getAsync();
        $request = $this->getRuntime()->getControllerContext()->getRequest();

        return $this->srcsetService->getSrcsetAttribute($asset, $ratio, $maximumWidth, $maximumHeight, $allowCropping, $async, $quality, $sizes, $request);
    }
}
