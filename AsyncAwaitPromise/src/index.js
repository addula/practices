import './index.css';
import './promise-async-await.js';
import './christmas-tree-problem.js';

const p = document.createElement('p')
p.textContent = 'Hello from DevServer!'
document.body.appendChild(p)

const p2 = document.createElement("p")
const nums1 = [1,2,3,4,5]
const nums2 = [6,7,8,9,10]
const nums3 = [...nums1, ...nums2]

p2.textContent = nums3.join(' ')
document.body.appendChild(p2)