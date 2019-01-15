<?php

namespace CeresBaseline\Containers;

use Plenty\Plugin\Templates\Twig;

class CeresBaselineStyle
{
    public function call(Twig $twig):string
    {
        return $twig->render('CeresBaseline::CeresBaselineStyle');
    }
}