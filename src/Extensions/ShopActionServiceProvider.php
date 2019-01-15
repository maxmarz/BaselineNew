<?php

namespace CeresBaseline\Extensions;

use CeresBaseline\Services\CeresBaselineTemplateService;
use Plenty\Plugin\Templates\Extensions\Twig_Extension;
use Plenty\Modules\Category\Contracts\CategoryRepositoryContract;
/**
 * Provide services and helper functions to twig engine
 * Class TopItemsServiceProvider
 * @package IO\Extensions
 */
class ShopActionServiceProvider extends Twig_Extension
{
	/**
	 * @var CategoryRepositoryContract
	 */
	protected $categoryRepo;
	public function __construct(CategoryRepositoryContract $categoryRepo)
	{
		$this->categoryRepo    = $categoryRepo;
	}
	/**
	 * Return the name of the extension. The name must be unique.
	 *
	 * @return string The name of the extension
	 */
	public function getName():string
	{
		return "CeresBaseline_Extension_ShopActionServiceProvider";
	}
	/**
	 * Return a list of filters to add.
	 *
	 * @return array The list of filters to add.
	 */
	public function getFilters():array
	{
		return [];
	}
	/**
	 * Return a list of functions to add.
	 *
	 * @return array the list of functions to add.
	 */
	public function getFunctions():array
	{
		return [];
	}
	/**
	 * Return a map of global helper objects to add.
	 *
	 * @return array the map of helper objects to add.
	 */
	public function getGlobals():array
	{
		return [
			"baselineservices" => [
				"storespecials"      => pluginApp( CeresBaselineTemplateService::class )
			]
		];
	}
}