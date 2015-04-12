var socket = io.connect("45.55.129.136");

document.getElementById('sendmessage').addEventListener('click', function(e) {
  var data = {
    'username': document.getElementById('username').value,
    'message': document.getElementById('message').value,
    'photo': document.getElementById('photo').value
  }
  socket.emit('message', data);
  e.preventDefault();
  document.getElementById('message').value = '';
  return false;
});

socket.on('new message', function (data) {
  var id = new Date().getTime();
  document.getElementById('messages').innerHTML += makeChatRow(data);
  var div = document.getElementById('messages');
  setTimeout(div.scrollTop = div.scrollHeight, 1);
});

socket.on('history', function(data) {
  var div = document.getElementById('messages');
  for (var i = 0, len = data.length; i < len; i++) {
    div.innerHTML = makeChatRow(data[i]) + div.innerHTML;
  }
  setTimeout(div.scrollTop = div.scrollHeight, 1);
});

var makeChatRow = function(data) {
  var date = new Date(data.timestamp);
  var display = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  
  if (data.photo !== "undefined" && data.photo.length > 0) {
    var message = '<div class="message">\
				<div class="messageHeader">\
					<h3>' + data.from + '</h3>\
					<span class="pull-right badge">\
						' + display + '\
					</span>\
				</div>\
				<div class="messageContent">\
					<div class="content">' + data.message + '</div>\
					<div class="photo">\
						<img src="' + data.photo + '">\
					</div>\
				</div>\
			</div>';

		return message;	
  }
	
	var message = '<div class="message">\
				<div class="messageHeader">\
					<h3>' + data.from + '</h3>\
					<span class="pull-right badge">\
						' + display + '\
					</span>\
				</div>\
				<div class="messageContent">\
					<div class="content">' + data.message + '</div>\
				</div>\
			</div>';
			
	return message;	 
}