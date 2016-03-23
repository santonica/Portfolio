/**
 * Created by Santon on 11/8/2015.
 *
 * This is the main application file. This will add all javascript behaviors required at the application level.
 */

(function () {

	$(document).ready(function () {
		/*Fix conflict between jQueryUI and bootstrap. This allows jQueryUI dialog to display
		 its UI without bootstrap classes conflicting and overriding styles
		 Refer: https://github.com/twbs/bootstrap/issues/6094
		 */
		$.fn.bootstrapBtn = $.fn.button.noConflict();

		/*Register on-click handler for the navbar dropdown items*/
		$(".dropdown-menu a").on("click", function (event) {
			openSimpleConfirmDialog(this.innerHTML);
		});
	});
	/**
	 * @description <p>Opens a jQuery UI dialog to display information</p>
	 * @param message The message to be displayed in the body of the dialog
	 * @returns true on completion
	 */
	function openSimpleConfirmDialog(message) {
		$("#dialog").dialog({
			autoOpen     : false,
			height       : 200,
			width        : 350,
			modal        : true,
			buttons      : [
				{
					text : "Ok",
					icons: {
						primary: "ui-icon-heart"
					},
					click: function () {
						$(this).dialog("close");
					}
				}
			],
			closeOnEscape: true
		});

		$("#dialog #message").html(message + " - Placeholder for future");
		$("#dialog").dialog("instance").open();
		return true;
	}
}());
