var currentItem=d3.select('.item')
currentItem.on('click', function(obj){
    console.log(this);
    d3.select(this).classed("my-selector", !currentItem.classed("my-selector"));
})
