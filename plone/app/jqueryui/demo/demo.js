jQuery(function(){
    // Accordion
    jq("#accordion").accordion({ header: "h3" });
    // Autocomplete
    jq("#autocomplete").autocomplete({
        source: ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby", "python", "c", "scala", "groovy", "haskell", "perl"]
    });
    // Button
    jq("#button").button();
    jq("#radioset").buttonset();
    // Tabs
    jq('#tabs').tabs();
    // Dialog
    jq('#dialog').dialog({
        autoOpen: false,
        width: 600,
        buttons: {
            "Ok": function() {
                jq(this).dialog("close");
            },
            "Cancel": function() {
                jq(this).dialog("close");
            }
        }
    });
    // Dialog Link
    jq('#dialog_link').click(function(){
        jq('#dialog').dialog('open');
        return false;
    });
    // Datepicker
    jq('#datepicker').datepicker({
        inline: true
    });
    // Slider
    jq('#slider').slider({
        range: true,
        values: [17, 67]
    });
    // Progressbar
    jq("#progressbar").progressbar({
        value: 20
    });
    //hover states on the static widgets
    jq('#dialog_link, ul#icons li').hover(
        function() { jq(this).addClass('ui-state-hover'); },
        function() { jq(this).removeClass('ui-state-hover'); }
    );
});