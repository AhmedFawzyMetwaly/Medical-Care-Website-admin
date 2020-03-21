$(document).on('click',"form .row .available_hours_container i.fa-plus",function() {
    console.log("Click Done");
    $($(this).parent().parent()).clone().insertAfter($(this).parent().parent());
});
$(document).on('click',"form .row .available_hours_container i.fa-times",function() {
    $(this).parent().parent().remove();
});