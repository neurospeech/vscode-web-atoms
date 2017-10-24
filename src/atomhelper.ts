import * as vscode from "vscode";

export type AtomProperty = {
	camelName: string,
	name: string
};

export type AtomComponent = {
	name: string,
	properties?: AtomProperty[],
	attributes?: string
};

export class AtomHelper {

	private static _instance: AtomHelper;

	public static get instance():AtomHelper {
		return AtomHelper._instance || (AtomHelper._instance = new AtomHelper());
	}

	private cache: any = null;

	private cacheAll: any = null;

	resolve(name: string, items: vscode.CompletionItem[], existing: any ): void {

		if(!this.cache) {
			this.cache = {};
			for(var a of this.components) {
				this.cache[a.name] =
					a.properties.map(x => new vscode.CompletionItem(x.name, vscode.CompletionItemKind.Property));
			}
		}
		for(var item of this.cache[name]) {
			if(!existing[item.label]) {
				items.push(item);
			}
		}
	}

	private controls: vscode.CompletionItem[] = null;
	resolveControls(items: vscode.CompletionItem[]): void {
		if(!this.controls) {
			this.controls = this.components.map( x => new vscode.CompletionItem(x.name, vscode.CompletionItemKind.Class) );
		}
		for(var item of this.controls) {
			items.push(item);
		}
	}

	private get components(): AtomComponent[] {
		return [
			{
			  "name": "AtomApplication",
			  "properties": [
				{
				  "camelName": "busyMessage",
				  "name": "atom-busy-message"
				},
				{
				  "camelName": "contentWidth",
				  "name": "atom-content-width"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "progress",
				  "name": "atom-progress"
				},
				{
				  "camelName": "renderAsPage",
				  "name": "atom-render-as-page"
				},
				{
				  "camelName": "resizeOnChildResized",
				  "name": "atom-resize-on-child-resized"
				},
				{
				  "camelName": "title",
				  "name": "atom-title"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomAutoCompleteBox",
			  "properties": [
				{
				  "camelName": "allowMultipleSelection",
				  "name": "atom-allow-multiple-selection"
				},
				{
				  "camelName": "allowSelectFirst",
				  "name": "atom-allow-select-first"
				},
				{
				  "camelName": "autoOpen",
				  "name": "atom-auto-open"
				},
				{
				  "camelName": "autoScrollToSelection",
				  "name": "atom-auto-scroll-to-selection"
				},
				{
				  "camelName": "autoSelectOnClick",
				  "name": "atom-auto-select-on-click"
				},
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "defaultValue",
				  "name": "atom-default-value"
				},
				{
				  "camelName": "displayLabel",
				  "name": "atom-display-label"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "filter",
				  "name": "atom-filter"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "isPopupOpen",
				  "name": "atom-is-popup-open"
				},
				{
				  "camelName": "itemTemplate",
				  "name": "atom-item-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "itemsUrl",
				  "name": "atom-items-url"
				},
				{
				  "camelName": "keyPressed",
				  "name": "atom-key-pressed"
				},
				{
				  "camelName": "labelPath",
				  "name": "atom-label-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "placeholder",
				  "name": "atom-placeholder"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "selectAll",
				  "name": "atom-select-all"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "selectedItem",
				  "name": "atom-selected-item"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "selectedText",
				  "name": "atom-selected-text"
				},
				{
				  "camelName": "sortPath",
				  "name": "atom-sort-path"
				},
				{
				  "camelName": "uiVirtualize",
				  "name": "atom-ui-virtualize"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "valuePath",
				  "name": "atom-value-path"
				},
				{
				  "camelName": "valueSeparator",
				  "name": "atom-value-separator"
				}
			  ]
			},
			{
			  "name": "AtomAutoPostForm",
			  "properties": [
				{
				  "camelName": "clearData",
				  "name": "atom-clear-data"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "errorTemplate",
				  "name": "atom-error-template"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "isBusy",
				  "name": "atom-is-busy"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "mergeData",
				  "name": "atom-merge-data"
				},
				{
				  "camelName": "mergeResult",
				  "name": "atom-merge-result"
				},
				{
				  "camelName": "method",
				  "name": "atom-method"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postError",
				  "name": "atom-post-error"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "result",
				  "name": "atom-result"
				},
				{
				  "camelName": "successMessage",
				  "name": "atom-success-message"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomBinding",
			  "properties": []
			},
			{
			  "name": "AtomButton",
			  "properties": [
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "sendData",
				  "name": "atom-send-data"
				},
				{
				  "camelName": "validationRoot",
				  "name": "atom-validation-root"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomCalendar",
			  "properties": [
				{
				  "camelName": "allowMultipleSelection",
				  "name": "atom-allow-multiple-selection"
				},
				{
				  "camelName": "allowSelectFirst",
				  "name": "atom-allow-select-first"
				},
				{
				  "camelName": "autoScrollToSelection",
				  "name": "atom-auto-scroll-to-selection"
				},
				{
				  "camelName": "autoSelectOnClick",
				  "name": "atom-auto-select-on-click"
				},
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "currentYear",
				  "name": "atom-current-year"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "defaultValue",
				  "name": "atom-default-value"
				},
				{
				  "camelName": "endYear",
				  "name": "atom-end-year"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "filter",
				  "name": "atom-filter"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "itemTemplate",
				  "name": "atom-item-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "labelPath",
				  "name": "atom-label-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "month",
				  "name": "atom-month"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "selectAll",
				  "name": "atom-select-all"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "selectedItem",
				  "name": "atom-selected-item"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "sortPath",
				  "name": "atom-sort-path"
				},
				{
				  "camelName": "startYear",
				  "name": "atom-start-year"
				},
				{
				  "camelName": "uiVirtualize",
				  "name": "atom-ui-virtualize"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "valuePath",
				  "name": "atom-value-path"
				},
				{
				  "camelName": "valueSeparator",
				  "name": "atom-value-separator"
				},
				{
				  "camelName": "visibleDate",
				  "name": "atom-visible-date"
				},
				{
				  "camelName": "year",
				  "name": "atom-year"
				}
			  ]
			},
			{
			  "name": "AtomCheckBoxList",
			  "properties": [
				{
				  "camelName": "allowMultipleSelection",
				  "name": "atom-allow-multiple-selection"
				},
				{
				  "camelName": "allowSelectFirst",
				  "name": "atom-allow-select-first"
				},
				{
				  "camelName": "autoScrollToSelection",
				  "name": "atom-auto-scroll-to-selection"
				},
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "defaultValue",
				  "name": "atom-default-value"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "filter",
				  "name": "atom-filter"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "itemTemplate",
				  "name": "atom-item-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "labelPath",
				  "name": "atom-label-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "selectAll",
				  "name": "atom-select-all"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "selectedItem",
				  "name": "atom-selected-item"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "sortPath",
				  "name": "atom-sort-path"
				},
				{
				  "camelName": "uiVirtualize",
				  "name": "atom-ui-virtualize"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "valuePath",
				  "name": "atom-value-path"
				},
				{
				  "camelName": "valueSeparator",
				  "name": "atom-value-separator"
				}
			  ]
			},
			{
			  "name": "AtomCKEditor",
			  "properties": [
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomComboBox",
			  "properties": [
				{
				  "camelName": "allowMultipleSelection",
				  "name": "atom-allow-multiple-selection"
				},
				{
				  "camelName": "allowSelectFirst",
				  "name": "atom-allow-select-first"
				},
				{
				  "camelName": "autoScrollToSelection",
				  "name": "atom-auto-scroll-to-selection"
				},
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "defaultValue",
				  "name": "atom-default-value"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "filter",
				  "name": "atom-filter"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "itemTemplate",
				  "name": "atom-item-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "labelPath",
				  "name": "atom-label-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "selectAll",
				  "name": "atom-select-all"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "selectedItem",
				  "name": "atom-selected-item"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "sortPath",
				  "name": "atom-sort-path"
				},
				{
				  "camelName": "uiVirtualize",
				  "name": "atom-ui-virtualize"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "valuePath",
				  "name": "atom-value-path"
				},
				{
				  "camelName": "valueSeparator",
				  "name": "atom-value-separator"
				}
			  ]
			},
			{
			  "name": "AtomComponent",
			  "properties": []
			},
			{
			  "name": "AtomControl",
			  "properties": [
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomDataPager",
			  "properties": [
				{
				  "camelName": "currentPage",
				  "name": "atom-current-page"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "itemsPath",
				  "name": "atom-items-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "pageSize",
				  "name": "atom-page-size"
				},
				{
				  "camelName": "pages",
				  "name": "atom-pages"
				},
				{
				  "camelName": "total",
				  "name": "atom-total"
				},
				{
				  "camelName": "totalPath",
				  "name": "atom-total-path"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomDateControl",
			  "properties": [
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "endYear",
				  "name": "atom-end-year"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "startYear",
				  "name": "atom-start-year"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomDateField",
			  "properties": [
				{
				  "camelName": "currentYear",
				  "name": "atom-current-year"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "endYear",
				  "name": "atom-end-year"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "isOpen",
				  "name": "atom-is-open"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "month",
				  "name": "atom-month"
				},
				{
				  "camelName": "monthList",
				  "name": "atom-month-list"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "startYear",
				  "name": "atom-start-year"
				},
				{
				  "camelName": "time",
				  "name": "atom-time"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "visibleDate",
				  "name": "atom-visible-date"
				},
				{
				  "camelName": "year",
				  "name": "atom-year"
				}
			  ]
			},
			{
			  "name": "AtomDateListBox",
			  "properties": [
				{
				  "camelName": "currentYear",
				  "name": "atom-current-year"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "endYear",
				  "name": "atom-end-year"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "month",
				  "name": "atom-month"
				},
				{
				  "camelName": "monthList",
				  "name": "atom-month-list"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "startYear",
				  "name": "atom-start-year"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "visibleDate",
				  "name": "atom-visible-date"
				},
				{
				  "camelName": "year",
				  "name": "atom-year"
				}
			  ]
			},
			{
			  "name": "AtomDeleteButton",
			  "properties": [
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "mergeData",
				  "name": "atom-merge-data"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postError",
				  "name": "atom-post-error"
				},
				{
				  "camelName": "postResult",
				  "name": "atom-post-result"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "sendData",
				  "name": "atom-send-data"
				},
				{
				  "camelName": "validationRoot",
				  "name": "atom-validation-root"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomDispatcher",
			  "properties": []
			},
			{
			  "name": "AtomDockPanel",
			  "properties": [
				{
				  "camelName": "contentWidth",
				  "name": "atom-content-width"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "resizeOnChildResized",
				  "name": "atom-resize-on-child-resized"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomEnumerator",
			  "properties": []
			},
			{
			  "name": "AtomForm",
			  "properties": [
				{
				  "camelName": "clearData",
				  "name": "atom-clear-data"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "errorTemplate",
				  "name": "atom-error-template"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "mergeData",
				  "name": "atom-merge-data"
				},
				{
				  "camelName": "mergeResult",
				  "name": "atom-merge-result"
				},
				{
				  "camelName": "method",
				  "name": "atom-method"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "result",
				  "name": "atom-result"
				},
				{
				  "camelName": "successMessage",
				  "name": "atom-success-message"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomFormField",
			  "properties": [
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "fieldClass",
				  "name": "atom-field-class"
				},
				{
				  "camelName": "fieldId",
				  "name": "atom-field-id"
				},
				{
				  "camelName": "fieldVisible",
				  "name": "atom-field-visible"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "label",
				  "name": "atom-label"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "required",
				  "name": "atom-required"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomFormGridLayout",
			  "properties": [
				{
				  "camelName": "cellSpacing",
				  "name": "atom-cell-spacing"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "label",
				  "name": "atom-label"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "minLabelWidth",
				  "name": "atom-min-label-width"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomFormLayout",
			  "properties": [
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "minLabelWidth",
				  "name": "atom-min-label-width"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomFormNoLayout",
			  "properties": [
				{
				  "camelName": "clearData",
				  "name": "atom-clear-data"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "errorTemplate",
				  "name": "atom-error-template"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "mergeData",
				  "name": "atom-merge-data"
				},
				{
				  "camelName": "mergeResult",
				  "name": "atom-merge-result"
				},
				{
				  "camelName": "method",
				  "name": "atom-method"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "result",
				  "name": "atom-result"
				},
				{
				  "camelName": "successMessage",
				  "name": "atom-success-message"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomFormTab",
			  "properties": [
				{
				  "camelName": "cellSpacing",
				  "name": "atom-cell-spacing"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "label",
				  "name": "atom-label"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "minLabelWidth",
				  "name": "atom-min-label-width"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomFormVerticalLayout",
			  "properties": [
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "minLabelWidth",
				  "name": "atom-min-label-width"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomFrameView",
			  "properties": [
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "previousIndex",
				  "name": "atom-previous-index"
				},
				{
				  "camelName": "removeOnBack",
				  "name": "atom-remove-on-back"
				},
				{
				  "camelName": "replaceUrl",
				  "name": "atom-replace-url"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "swipeDirection",
				  "name": "atom-swipe-direction"
				},
				{
				  "camelName": "url",
				  "name": "atom-url"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomItemsControl",
			  "properties": [
				{
				  "camelName": "allowMultipleSelection",
				  "name": "atom-allow-multiple-selection"
				},
				{
				  "camelName": "allowSelectFirst",
				  "name": "atom-allow-select-first"
				},
				{
				  "camelName": "autoScrollToSelection",
				  "name": "atom-auto-scroll-to-selection"
				},
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "defaultValue",
				  "name": "atom-default-value"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "filter",
				  "name": "atom-filter"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "itemTemplate",
				  "name": "atom-item-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "labelPath",
				  "name": "atom-label-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "selectAll",
				  "name": "atom-select-all"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "selectedItem",
				  "name": "atom-selected-item"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "sortPath",
				  "name": "atom-sort-path"
				},
				{
				  "camelName": "uiVirtualize",
				  "name": "atom-ui-virtualize"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "valuePath",
				  "name": "atom-value-path"
				},
				{
				  "camelName": "valueSeparator",
				  "name": "atom-value-separator"
				}
			  ]
			},
			{
			  "name": "AtomLayout",
			  "properties": []
			},
			{
			  "name": "AtomLinkBar",
			  "properties": [
				{
				  "camelName": "allowMultipleSelection",
				  "name": "atom-allow-multiple-selection"
				},
				{
				  "camelName": "allowSelectFirst",
				  "name": "atom-allow-select-first"
				},
				{
				  "camelName": "autoScrollToSelection",
				  "name": "atom-auto-scroll-to-selection"
				},
				{
				  "camelName": "autoSelectOnClick",
				  "name": "atom-auto-select-on-click"
				},
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "defaultValue",
				  "name": "atom-default-value"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "filter",
				  "name": "atom-filter"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "itemTemplate",
				  "name": "atom-item-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "itemsPath",
				  "name": "atom-items-path"
				},
				{
				  "camelName": "labelPath",
				  "name": "atom-label-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "menuDirection",
				  "name": "atom-menu-direction"
				},
				{
				  "camelName": "menuTemplate",
				  "name": "atom-menu-template"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "selectAll",
				  "name": "atom-select-all"
				},
				{
				  "camelName": "selectCurrent",
				  "name": "atom-select-current"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "selectedItem",
				  "name": "atom-selected-item"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "showTabs",
				  "name": "atom-show-tabs"
				},
				{
				  "camelName": "sortPath",
				  "name": "atom-sort-path"
				},
				{
				  "camelName": "targetPath",
				  "name": "atom-target-path"
				},
				{
				  "camelName": "uiVirtualize",
				  "name": "atom-ui-virtualize"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "valuePath",
				  "name": "atom-value-path"
				},
				{
				  "camelName": "valueSeparator",
				  "name": "atom-value-separator"
				}
			  ]
			},
			{
			  "name": "AtomListBox",
			  "properties": [
				{
				  "camelName": "allowMultipleSelection",
				  "name": "atom-allow-multiple-selection"
				},
				{
				  "camelName": "allowSelectFirst",
				  "name": "atom-allow-select-first"
				},
				{
				  "camelName": "autoScrollToSelection",
				  "name": "atom-auto-scroll-to-selection"
				},
				{
				  "camelName": "autoSelectOnClick",
				  "name": "atom-auto-select-on-click"
				},
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "defaultValue",
				  "name": "atom-default-value"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "filter",
				  "name": "atom-filter"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "itemTemplate",
				  "name": "atom-item-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "labelPath",
				  "name": "atom-label-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "selectAll",
				  "name": "atom-select-all"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "selectedItem",
				  "name": "atom-selected-item"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "sortPath",
				  "name": "atom-sort-path"
				},
				{
				  "camelName": "uiVirtualize",
				  "name": "atom-ui-virtualize"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "valuePath",
				  "name": "atom-value-path"
				},
				{
				  "camelName": "valueSeparator",
				  "name": "atom-value-separator"
				}
			  ]
			},
			{
			  "name": "AtomMaskedPhone",
			  "properties": [
				{
				  "camelName": "countries",
				  "name": "atom-countries"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomMultiButtonList",
			  "properties": [
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "isRadio",
				  "name": "atom-is-radio"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "labelPath",
				  "name": "atom-label-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "options",
				  "name": "atom-options"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "valuePath",
				  "name": "atom-value-path"
				}
			  ]
			},
			{
			  "name": "AtomNavigatorList",
			  "properties": [
				{
				  "camelName": "allowMultipleSelection",
				  "name": "atom-allow-multiple-selection"
				},
				{
				  "camelName": "allowSelectFirst",
				  "name": "atom-allow-select-first"
				},
				{
				  "camelName": "autoScrollToSelection",
				  "name": "atom-auto-scroll-to-selection"
				},
				{
				  "camelName": "autoSelectOnClick",
				  "name": "atom-auto-select-on-click"
				},
				{
				  "camelName": "autoShowDetail",
				  "name": "atom-auto-show-detail"
				},
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "currentPage",
				  "name": "atom-current-page"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "defaultValue",
				  "name": "atom-default-value"
				},
				{
				  "camelName": "detailUrl",
				  "name": "atom-detail-url"
				},
				{
				  "camelName": "displayMode",
				  "name": "atom-display-mode"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "filter",
				  "name": "atom-filter"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "itemTemplate",
				  "name": "atom-item-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "labelPath",
				  "name": "atom-label-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "newItem",
				  "name": "atom-new-item"
				},
				{
				  "camelName": "newUrl",
				  "name": "atom-new-url"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "pageSize",
				  "name": "atom-page-size"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "selectAll",
				  "name": "atom-select-all"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "selectedItem",
				  "name": "atom-selected-item"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "sortPath",
				  "name": "atom-sort-path"
				},
				{
				  "camelName": "uiVirtualize",
				  "name": "atom-ui-virtualize"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "valuePath",
				  "name": "atom-value-path"
				},
				{
				  "camelName": "valueSeparator",
				  "name": "atom-value-separator"
				}
			  ]
			},
			{
			  "name": "AtomNumberComboBox",
			  "properties": [
				{
				  "camelName": "allowMultipleSelection",
				  "name": "atom-allow-multiple-selection"
				},
				{
				  "camelName": "allowSelectFirst",
				  "name": "atom-allow-select-first"
				},
				{
				  "camelName": "autoScrollToSelection",
				  "name": "atom-auto-scroll-to-selection"
				},
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "defaultValue",
				  "name": "atom-default-value"
				},
				{
				  "camelName": "endNumber",
				  "name": "atom-end-number"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "filter",
				  "name": "atom-filter"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "itemTemplate",
				  "name": "atom-item-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "labelPath",
				  "name": "atom-label-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "selectAll",
				  "name": "atom-select-all"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "selectedItem",
				  "name": "atom-selected-item"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "showPrompt",
				  "name": "atom-show-prompt"
				},
				{
				  "camelName": "sortPath",
				  "name": "atom-sort-path"
				},
				{
				  "camelName": "startNumber",
				  "name": "atom-start-number"
				},
				{
				  "camelName": "step",
				  "name": "atom-step"
				},
				{
				  "camelName": "uiVirtualize",
				  "name": "atom-ui-virtualize"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "valuePath",
				  "name": "atom-value-path"
				},
				{
				  "camelName": "valueSeparator",
				  "name": "atom-value-separator"
				}
			  ]
			},
			{
			  "name": "AtomPhoneControl",
			  "properties": [
				{
				  "camelName": "countries",
				  "name": "atom-countries"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "required",
				  "name": "atom-required"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomPostButton",
			  "properties": [
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "mergeData",
				  "name": "atom-merge-data"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postError",
				  "name": "atom-post-error"
				},
				{
				  "camelName": "postResult",
				  "name": "atom-post-result"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "sendData",
				  "name": "atom-send-data"
				},
				{
				  "camelName": "validationRoot",
				  "name": "atom-validation-root"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomRadioButtonList",
			  "properties": [
				{
				  "camelName": "allowMultipleSelection",
				  "name": "atom-allow-multiple-selection"
				},
				{
				  "camelName": "allowSelectFirst",
				  "name": "atom-allow-select-first"
				},
				{
				  "camelName": "autoScrollToSelection",
				  "name": "atom-auto-scroll-to-selection"
				},
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "defaultValue",
				  "name": "atom-default-value"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "filter",
				  "name": "atom-filter"
				},
				{
				  "camelName": "groupName",
				  "name": "atom-group-name"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "itemTemplate",
				  "name": "atom-item-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "labelPath",
				  "name": "atom-label-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "selectAll",
				  "name": "atom-select-all"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "selectedItem",
				  "name": "atom-selected-item"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "sortPath",
				  "name": "atom-sort-path"
				},
				{
				  "camelName": "uiVirtualize",
				  "name": "atom-ui-virtualize"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "valuePath",
				  "name": "atom-value-path"
				},
				{
				  "camelName": "valueSeparator",
				  "name": "atom-value-separator"
				}
			  ]
			},
			{
			  "name": "AtomScope",
			  "properties": []
			},
			{
			  "name": "AtomSortableColumn",
			  "properties": [
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "defaultDirection",
				  "name": "atom-default-direction"
				},
				{
				  "camelName": "direction",
				  "name": "atom-direction"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "label",
				  "name": "atom-label"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "sortField",
				  "name": "atom-sort-field"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomTabButtonBar",
			  "properties": [
				{
				  "camelName": "allowMultipleSelection",
				  "name": "atom-allow-multiple-selection"
				},
				{
				  "camelName": "allowSelectFirst",
				  "name": "atom-allow-select-first"
				},
				{
				  "camelName": "autoScrollToSelection",
				  "name": "atom-auto-scroll-to-selection"
				},
				{
				  "camelName": "autoSelectOnClick",
				  "name": "atom-auto-select-on-click"
				},
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "defaultValue",
				  "name": "atom-default-value"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "filter",
				  "name": "atom-filter"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "itemTemplate",
				  "name": "atom-item-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "itemsPath",
				  "name": "atom-items-path"
				},
				{
				  "camelName": "labelPath",
				  "name": "atom-label-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "menuDirection",
				  "name": "atom-menu-direction"
				},
				{
				  "camelName": "menuTemplate",
				  "name": "atom-menu-template"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "selectAll",
				  "name": "atom-select-all"
				},
				{
				  "camelName": "selectCurrent",
				  "name": "atom-select-current"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "selectedItem",
				  "name": "atom-selected-item"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "showTabs",
				  "name": "atom-show-tabs"
				},
				{
				  "camelName": "sortPath",
				  "name": "atom-sort-path"
				},
				{
				  "camelName": "targetPath",
				  "name": "atom-target-path"
				},
				{
				  "camelName": "uiVirtualize",
				  "name": "atom-ui-virtualize"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "valuePath",
				  "name": "atom-value-path"
				},
				{
				  "camelName": "valueSeparator",
				  "name": "atom-value-separator"
				}
			  ]
			},
			{
			  "name": "AtomTabControl",
			  "properties": [
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomTableLayout",
			  "properties": []
			},
			{
			  "name": "AtomTimeEditor",
			  "properties": [
				{
				  "camelName": "ap",
				  "name": "atom-ap"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "hours",
				  "name": "atom-hours"
				},
				{
				  "camelName": "hours24",
				  "name": "atom-hours24"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "minutes",
				  "name": "atom-minutes"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "time",
				  "name": "atom-time"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomTimePicker",
			  "properties": [
				{
				  "camelName": "allowMultipleSelection",
				  "name": "atom-allow-multiple-selection"
				},
				{
				  "camelName": "allowSelectFirst",
				  "name": "atom-allow-select-first"
				},
				{
				  "camelName": "autoOpen",
				  "name": "atom-auto-open"
				},
				{
				  "camelName": "autoScrollToSelection",
				  "name": "atom-auto-scroll-to-selection"
				},
				{
				  "camelName": "autoSelectOnClick",
				  "name": "atom-auto-select-on-click"
				},
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "defaultValue",
				  "name": "atom-default-value"
				},
				{
				  "camelName": "displayLabel",
				  "name": "atom-display-label"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "filter",
				  "name": "atom-filter"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "isPopupOpen",
				  "name": "atom-is-popup-open"
				},
				{
				  "camelName": "itemTemplate",
				  "name": "atom-item-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "itemsUrl",
				  "name": "atom-items-url"
				},
				{
				  "camelName": "keyPressed",
				  "name": "atom-key-pressed"
				},
				{
				  "camelName": "labelPath",
				  "name": "atom-label-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "placeholder",
				  "name": "atom-placeholder"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "selectAll",
				  "name": "atom-select-all"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "selectedItem",
				  "name": "atom-selected-item"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "selectedText",
				  "name": "atom-selected-text"
				},
				{
				  "camelName": "sortPath",
				  "name": "atom-sort-path"
				},
				{
				  "camelName": "uiVirtualize",
				  "name": "atom-ui-virtualize"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "valuePath",
				  "name": "atom-value-path"
				},
				{
				  "camelName": "valueSeparator",
				  "name": "atom-value-separator"
				}
			  ]
			},
			{
			  "name": "AtomToggleButtonBar",
			  "properties": [
				{
				  "camelName": "allowMultipleSelection",
				  "name": "atom-allow-multiple-selection"
				},
				{
				  "camelName": "allowSelectFirst",
				  "name": "atom-allow-select-first"
				},
				{
				  "camelName": "autoScrollToSelection",
				  "name": "atom-auto-scroll-to-selection"
				},
				{
				  "camelName": "autoSelectOnClick",
				  "name": "atom-auto-select-on-click"
				},
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "defaultValue",
				  "name": "atom-default-value"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "filter",
				  "name": "atom-filter"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "itemTemplate",
				  "name": "atom-item-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "labelPath",
				  "name": "atom-label-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "selectAll",
				  "name": "atom-select-all"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "selectedItem",
				  "name": "atom-selected-item"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "showTabs",
				  "name": "atom-show-tabs"
				},
				{
				  "camelName": "sortPath",
				  "name": "atom-sort-path"
				},
				{
				  "camelName": "uiVirtualize",
				  "name": "atom-ui-virtualize"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "valuePath",
				  "name": "atom-value-path"
				},
				{
				  "camelName": "valueSeparator",
				  "name": "atom-value-separator"
				}
			  ]
			},
			{
			  "name": "AtomUIComponent",
			  "properties": [
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomUploadButton",
			  "properties": [
				{
				  "camelName": "accept",
				  "name": "atom-accept"
				},
				{
				  "camelName": "capture",
				  "name": "atom-capture"
				},
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "fileTypes",
				  "name": "atom-file-types"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "mergeData",
				  "name": "atom-merge-data"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postError",
				  "name": "atom-post-error"
				},
				{
				  "camelName": "postResult",
				  "name": "atom-post-result"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "progress",
				  "name": "atom-progress"
				},
				{
				  "camelName": "sendData",
				  "name": "atom-send-data"
				},
				{
				  "camelName": "validationRoot",
				  "name": "atom-validation-root"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomUploader",
			  "properties": [
				{
				  "camelName": "accept",
				  "name": "atom-accept"
				},
				{
				  "camelName": "allowMultipleSelection",
				  "name": "atom-allow-multiple-selection"
				},
				{
				  "camelName": "allowSelectFirst",
				  "name": "atom-allow-select-first"
				},
				{
				  "camelName": "autoScrollToSelection",
				  "name": "atom-auto-scroll-to-selection"
				},
				{
				  "camelName": "capture",
				  "name": "atom-capture"
				},
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "defaultValue",
				  "name": "atom-default-value"
				},
				{
				  "camelName": "dropZone",
				  "name": "atom-drop-zone"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "fileTypes",
				  "name": "atom-file-types"
				},
				{
				  "camelName": "filter",
				  "name": "atom-filter"
				},
				{
				  "camelName": "finished",
				  "name": "atom-finished"
				},
				{
				  "camelName": "flashPath",
				  "name": "atom-flash-path"
				},
				{
				  "camelName": "headers",
				  "name": "atom-headers"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "itemTemplate",
				  "name": "atom-item-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "labelPath",
				  "name": "atom-label-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "maxFileSize",
				  "name": "atom-max-file-size"
				},
				{
				  "camelName": "maxFiles",
				  "name": "atom-max-files"
				},
				{
				  "camelName": "maxFilesErrorMessage",
				  "name": "atom-max-files-error-message"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "multiple",
				  "name": "atom-multiple"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "selectAll",
				  "name": "atom-select-all"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "selectedItem",
				  "name": "atom-selected-item"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "sortPath",
				  "name": "atom-sort-path"
				},
				{
				  "camelName": "uiVirtualize",
				  "name": "atom-ui-virtualize"
				},
				{
				  "camelName": "uploadHost",
				  "name": "atom-upload-host"
				},
				{
				  "camelName": "uploadUrl",
				  "name": "atom-upload-url"
				},
				{
				  "camelName": "urlPath",
				  "name": "atom-url-path"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "valuePath",
				  "name": "atom-value-path"
				},
				{
				  "camelName": "valueSeparator",
				  "name": "atom-value-separator"
				}
			  ]
			},
			{
			  "name": "AtomValidator",
			  "properties": []
			},
			{
			  "name": "AtomVideo",
			  "properties": [
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "poster",
				  "name": "atom-poster"
				},
				{
				  "camelName": "url",
				  "name": "atom-url"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomViewBox",
			  "properties": [
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomViewBoxLayout",
			  "properties": []
			},
			{
			  "name": "AtomViewStack",
			  "properties": [
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "previousIndex",
				  "name": "atom-previous-index"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "swipeDirection",
				  "name": "atom-swipe-direction"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomWindow",
			  "properties": [
				{
				  "camelName": "cancelNext",
				  "name": "atom-cancel-next"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "isOpen",
				  "name": "atom-is-open"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "opener",
				  "name": "atom-opener"
				},
				{
				  "camelName": "openerData",
				  "name": "atom-opener-data"
				},
				{
				  "camelName": "title",
				  "name": "atom-title"
				},
				{
				  "camelName": "url",
				  "name": "atom-url"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "windowHeight",
				  "name": "atom-window-height"
				},
				{
				  "camelName": "windowTemplate",
				  "name": "atom-window-template"
				},
				{
				  "camelName": "windowUrl",
				  "name": "atom-window-url"
				},
				{
				  "camelName": "windowWidth",
				  "name": "atom-window-width"
				}
			  ]
			},
			{
			  "name": "AtomWizard",
			  "properties": [
				{
				  "camelName": "buttons",
				  "name": "atom-buttons"
				},
				{
				  "camelName": "canMoveBack",
				  "name": "atom-can-move-back"
				},
				{
				  "camelName": "canMoveNext",
				  "name": "atom-can-move-next"
				},
				{
				  "camelName": "contentWidth",
				  "name": "atom-content-width"
				},
				{
				  "camelName": "currentStep",
				  "name": "atom-current-step"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "finishLabel",
				  "name": "atom-finish-label"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "isLastStep",
				  "name": "atom-is-last-step"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "nextClass",
				  "name": "atom-next-class"
				},
				{
				  "camelName": "nextLabel",
				  "name": "atom-next-label"
				},
				{
				  "camelName": "prevLabel",
				  "name": "atom-prev-label"
				},
				{
				  "camelName": "resizeOnChildResized",
				  "name": "atom-resize-on-child-resized"
				},
				{
				  "camelName": "steps",
				  "name": "atom-steps"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "AtomYesNoControl",
			  "properties": [
				{
				  "camelName": "allowMultipleSelection",
				  "name": "atom-allow-multiple-selection"
				},
				{
				  "camelName": "allowSelectFirst",
				  "name": "atom-allow-select-first"
				},
				{
				  "camelName": "autoScrollToSelection",
				  "name": "atom-auto-scroll-to-selection"
				},
				{
				  "camelName": "autoSelectOnClick",
				  "name": "atom-auto-select-on-click"
				},
				{
				  "camelName": "confirm",
				  "name": "atom-confirm"
				},
				{
				  "camelName": "confirmMessage",
				  "name": "atom-confirm-message"
				},
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "defaultValue",
				  "name": "atom-default-value"
				},
				{
				  "camelName": "errorNext",
				  "name": "atom-error-next"
				},
				{
				  "camelName": "filter",
				  "name": "atom-filter"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "itemTemplate",
				  "name": "atom-item-template"
				},
				{
				  "camelName": "items",
				  "name": "atom-items"
				},
				{
				  "camelName": "labelPath",
				  "name": "atom-label-path"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "postData",
				  "name": "atom-post-data"
				},
				{
				  "camelName": "postUrl",
				  "name": "atom-post-url"
				},
				{
				  "camelName": "selectAll",
				  "name": "atom-select-all"
				},
				{
				  "camelName": "selectedIndex",
				  "name": "atom-selected-index"
				},
				{
				  "camelName": "selectedItem",
				  "name": "atom-selected-item"
				},
				{
				  "camelName": "selectedItems",
				  "name": "atom-selected-items"
				},
				{
				  "camelName": "showTabs",
				  "name": "atom-show-tabs"
				},
				{
				  "camelName": "sortPath",
				  "name": "atom-sort-path"
				},
				{
				  "camelName": "uiVirtualize",
				  "name": "atom-ui-virtualize"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				},
				{
				  "camelName": "valuePath",
				  "name": "atom-value-path"
				},
				{
				  "camelName": "valueSeparator",
				  "name": "atom-value-separator"
				}
			  ]
			},
			{
			  "name": "AtomYesNoCustom",
			  "properties": [
				{
				  "camelName": "data",
				  "name": "atom-data"
				},
				{
				  "camelName": "hasValue",
				  "name": "atom-has-value"
				},
				{
				  "camelName": "innerTemplate",
				  "name": "atom-inner-template"
				},
				{
				  "camelName": "layout",
				  "name": "atom-layout"
				},
				{
				  "camelName": "loadNext",
				  "name": "atom-load-next"
				},
				{
				  "camelName": "merge",
				  "name": "atom-merge"
				},
				{
				  "camelName": "next",
				  "name": "atom-next"
				},
				{
				  "camelName": "placeholder",
				  "name": "atom-placeholder"
				},
				{
				  "camelName": "value",
				  "name": "atom-value"
				}
			  ]
			},
			{
			  "name": "dispatcher",
			  "properties": []
			},
			{
			  "name": "PageSetup",
			  "properties": []
			}
		  ];
	}

}