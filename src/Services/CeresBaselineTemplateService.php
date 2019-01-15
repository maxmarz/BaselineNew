<?php

namespace CeresBaseline\Services;

use Plenty\Modules\Item\DataLayer\Contracts\ItemDataLayerRepositoryContract;
use Plenty\Plugin\Log\Loggable;
/**
 * Class CeresBaselineTemplateService
 * @package CeresBaseline\Services
 */
class CeresBaselineTemplateService
{
	use Loggable;

	public static $currentTemplate = "";

	private $itemRepository;

	public function __construct(ItemDataLayerRepositoryContract $itemRepository)
	{
		$this->itemRepository = $itemRepository;
	}


	public function getStoreSpecial(int $shopAction):array
	{

		$itemColumns = [
			'ItemBase' => [
				'id'
			],
			'itemDescription' => [
				'itemId',
				'name1',
				'description'
			],
			'variationBase' => [
				'id'
			],
			'variationRetailPrice' => [
				'price'
			],
			'variationImageList' => [
				'path',
				'cleanImageName'
			]
		];

		$itemFilter = [
			'itemBase.isStoreSpecial' => [
				'shopAction' => [$shopAction]
			]
		];

		$itemParams = [
			'language' => 'de'
		];

		$resultItems = $this->itemRepository
			->search($itemColumns, $itemFilter, $itemParams);

		$items = array();
		foreach ($resultItems as $item)
		{
			$items[] = $item;
		}
		$templateData = array(
			'resultCount' => $resultItems->count(),
			'currentItems' => $items
		);
		//$this->getLogger("CeresBaselineTemplateService_getGlobals")->debug('CeresBaseline::CeresBaselineTemplateService.getGlobals', $templateData);
		return $templateData;
	}
}

