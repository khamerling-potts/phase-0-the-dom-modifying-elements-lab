// Write your code here!
document.querySelector('#main').remove();

const newHeader = document.createElement('h1');
document.getElementsByTagName('body')[0].appendChild(newHeader);
newHeader.id = 'victory';
newHeader.textContent = 'Kyra is the champion';