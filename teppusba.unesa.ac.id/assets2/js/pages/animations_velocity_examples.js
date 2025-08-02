/* ------------------------------------------------------------------------------
*
*  # Advanced Velocity.js examples
*
*  Specific JS code additions for extension_velocity_examples.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {


    // Animation options
    // ------------------------------

	// Properties animation
	$('.velocity-properties').on('click', function (e) {
		e.preventDefault();

		$(this).parent().next().find('.panel').velocity({
			marginLeft: 20,
			marginRight: 20,
			opacity: 0.5
		}).velocity('reverse', {
			delay: 1000,
