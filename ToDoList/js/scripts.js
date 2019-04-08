function MasterList(){
  this.items = [],
  this.currentId = 0
}

MasterList.prototype.addItem = function(item){
  item.id = this.assignId();
  this.items.push(item);
}

//to cross out -- if "completed" box is checked

MasterList.prototype.strikethruItem= function()

//delete with delete button

MasterList.prototype.deleteItem = function(id){
  for (var i=0; i< this.items.length; i++){
    if (this.items[i]){
      if(this.items[i].id==id){
       delete this.items[i];
       return true;
      }
    }
  };
  return false;
}


// UI LOGIC //

var bigList = new MasterList();

function displayWholeList(listToDisplay){
  var itemsList = $("ul#items");
  var ???? = ""
  listToDisplay.items.forEach(function(item){
    itemsList += "<li id=" + item.id;
  });
  itemsList.html(???);
};

var bigList = $("ul#items");

$(document).ready(function(){
  attachItemListeners();
  $("form#enterTask").submit(function(event){
    event.preventDefault();

    // figure out how to strike when "done" is clicked
    var inputChecked = $("input#")




  })
}
