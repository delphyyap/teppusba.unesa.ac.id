/* ------------------------------------------------------------------------------
*
*  # Modal dialogs and extensions
*
*  Specific JS code additions for components_modals.html page
*
*  Version: 1.1
*  Latest update: Jul 5, 2016
*
* ---------------------------------------------------------------------------- */

$(function() {


    // Basic modals
    // ------------------------------

    // Load remote content
    $('#modal_remote').on('show.bs.modal', function() {
        $(this).find('.modal-body').load('assets/demo_data/wizard/education.html', function() {

            // Init Select2 when loaded
            $('.select').select2({
                minimumResultsForSearch: Infinity
            });
        });
    });
