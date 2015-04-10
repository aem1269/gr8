var pending_lookup;
$(".course-row").click(function() {
    window.location = "/course/" + this.id;
});

function update_course_name(code, id) {
	$.ajax({
		url: '/ajax/lookup_code',
		dataType: 'json',
		data: {
			code: code
		},
		success: function(response) {
			$("#" + id).html(response.name);
		}
	});
}

document.getElementById('id_code').addEventListener("keyup", function() {
	clearTimeout(pending_lookup); // wait until the user is finished typing.
	pending_lookup = setTimeout(function() {update_course_name($("#id_code").val(), 'found-course-name');}, 1000);
});