function getData(e) {
    const outputUl = $(".output");
    const api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
    const param = "&format=json&callback=?";
    let searchTtemVal = $("#search-item").val();
    let url = api + searchTtemVal + param;

    $.ajax({
        type: "GET",
        url: url,
        async: false,
        dataType: "json",
        success: function (data) {
            document.body.style.height = 'auto';
            document.body.style.paddingTop = '20px';

            outputUl.html('');
            for (let i = 0; i < data[1].length; i++) {
                outputUl.prepend("<li><a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "+</p></li>");
            }
        },
        error: function (errorMessage) {
            console.log(errorMessage)
        }
    })
    e.preventDefault();
}

$("#search").on("click", getData);