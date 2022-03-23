// select class=text1

var text1 = d3.select(".text1").text();
console.log("text1 says: ", text1);

d3.select(".text1").text("Wow!");

// select class =mylink
 var mylink = d3.select(".my-link").html();
 console.log("mylink says: ", mylink);

 // select link without anchor?
 var mylinkAnchor = d3.select(".my-link>a");
 console.log(mylinkAnchor);
