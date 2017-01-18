function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const items = document.querySelectorAll('.ranked-list li')
    for (let i = 0; i < items.length; i++) {
      var num = parseInt(items[i].innerHTML)
      items[i].innerHTML = (num + n)
    }
}

function deepestChild() {
  var element = document.getElementById('grand-node')
  debugger;
  while(element.children().length > 0) {
     element = element.children()
   }
   return element
}

function deepestChild() {
  var element = document.getElementById('grand-node')
  var elementChild = element.children[0]

  while (elementChild) {
    element = elementChild
    elementChild = element.children[0]
  }
  return element
