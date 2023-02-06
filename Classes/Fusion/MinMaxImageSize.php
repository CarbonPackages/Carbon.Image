<?php

namespace Carbon\Image\Fusion;

use Neos\Flow\Annotations as Flow;
use Neos\Fusion\FusionObjects\AbstractFusionObject;
use Neos\Media\Domain\Model\ImageInterface;

class MinMaxImageSize extends AbstractFusionObject
{
    public function getSize(): ?int
    {
        return $this->fusionValue('size');
    }

    public function getAsset()
    {
        return $this->fusionValue('asset');
    }

    public function getMin(): ?int
    {
        return $this->fusionValue('min');
    }

    public function getMax(): ?int
    {
        return $this->fusionValue('max');
    }

    public function getStep(): ?int
    {
        return $this->fusionValue('step');
    }

    public function getMultiplicator(): ?array
    {
        return $this->fusionValue('multiplicator');
    }

    public function evaluate(): string
    {
        $size = $this->getSize();
        $asset = $this->getAsset();
        $min = $this->getMin();
        $max = $this->getMax();
        $step = $this->getStep();
        $multiplicator = $this->getMultiplicator();

        if ($asset instanceof ImageInterface) {
            $width = $asset->getWidth();
            if ($width < $max) {
                $max = $width;
            }
        }
        if ($size) {
            $min = min($size, $min);
            $max = max($size, $max);
        }
        $steps = [];

        if ($multiplicator && $size) {
            foreach ($multiplicator as $value) {
                $value = round($size * $value);
                if ($value >= $min && $value <= $max) {
                    $steps[] = $value;
                }
            }
        }

        if ($step) {
            $steps[] = $min;
            $steps[] = $max;
            $items = range(1, round($max / $step));
            foreach ($items as $value) {
                $value = round($step * $value);
                if ($value >= $min && $value <= $max) {
                    $steps[] = $value;
                }
            }
        }

        $steps = array_unique($steps);
        sort($steps, SORT_NUMERIC);

        return implode('w,', $steps) . 'w';
    }
}
