<?php

namespace CeresBaseline\Containers;

use Plenty\Plugin\Templates\Twig;

class CeresBaselineScript
{
    public function call(Twig $twig):string
    {
        return $twig->render('CeresBaseline::CeresBaselineScript');
    }
}
