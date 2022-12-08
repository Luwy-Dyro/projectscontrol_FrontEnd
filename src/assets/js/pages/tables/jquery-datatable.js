$(function () {
    $('.js-basic-example').DataTable({
        responsive: true
    });

    //Exportable table
    $('.js-exportable').DataTable({
//        dom: 'Bfrtip',
//        responsive: true,
//        buttons: [
//            'copy', 'csv', 'excel', 'pdf', 'print'
//        ]
        dom: 'Bfrtip',
        responsive: true,
        buttons: [
            {
                extend: 'copyHtml5',
                exportOptions: {
                    columns: [0, ':visible']
                }
            },
            {
                extend: 'excelHtml5',
                exportOptions: {
                    columns: ':visible'
                }
            },
            {
                extend: 'pdfHtml5',
                exportOptions: {
                    columns: [0, 1, 2, 5]
                }
            },
            'colvis'
        ]
    });
});