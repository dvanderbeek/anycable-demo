App.cable.subscriptions.create({
  channel: "ChatChannel"
}, {
  received: function(data) {
    var node = document.createElement("p")
    var textnode = document.createTextNode(data["message"])
    node.appendChild(textnode)
    document.body.appendChild(node)
  }
});
