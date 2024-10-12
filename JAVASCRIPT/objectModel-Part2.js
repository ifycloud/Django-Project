var p = document.querySelector("p")

console.log(p);

//Change textContent
p.textContent = "new world";

console.log(p);
//change in the text
p.innerHTML = "<Strong> I am good </strong>;

console.log(p);

var special = document.querySelector('#special')

console.log(special);

var specialA = special.querySelector('a')

specialA.getAttributes('href')
console.log(specialA);

specialA.setAttribute("href" , "https://amazon.com")
console.log(specialA);
