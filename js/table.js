var text_description = document.getElementById('text-description');
var table_description = document.getElementById('table-description');
var read_more_btn = document.getElementById('read-more-btn');

var count = 0;

function change_div() {
    if (count % 2 == 0) {
        text_description.style.display = "none";
        table_description.style.display = "block";
        table_description.style.opacity = 1;        
        read_more_btn.firstChild.data = "Back";
    } else {
        table_description.style.display = "none";
        text_description.style.display = "block";
        read_more_btn.firstChild.data = "Read More";        
    }
    count++;
}