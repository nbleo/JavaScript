window.onload = function  () {

  var testdiv = document.getElementById("testdiv");
  var para = document.createElement("P");
  var txt1 = document.createTextNode("This is ");
  var txt2 = document.createTextNode("content.");
  var em = document.createElement("em");
  var txt3 = document.createTextNode("my ");
  em.appendChild(txt3);
  para.appendChild(txt1);
  para.appendChild(em);
  para.appendChild(txt3);
  para.appendChild(txt2);
  testdiv.appendChild(para);

}





