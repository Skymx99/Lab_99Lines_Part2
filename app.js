document.addEventListener('DOMContentLoaded', button);
function button() {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Sing!');
    button.appendChild(btnText);
    document.body.appendChild(button);
    document.addEventListener('click', click);
    function click() {
        sing();
        
    }
}


function appendText(div, text) {
    let p = document.createElement('p');
    let pText = document.createTextNode(text);
    p.appendChild(pText);
    div.appendChild(p);
}



let friends = ['Sabina', 'Blake', 'Cassie', 'Trevor', 'Kelby'];


function sing() {
    for (let i = 0; i < friends.length; i++) {

        
        let div = document.createElement('div');
        div.className = ('friend');
        let h3 = document.createElement('h3');
        let h3Text = document.createTextNode(friends[i]);
        h3.appendChild(h3Text);
        div.appendChild(h3)
        document.body.appendChild(div);


        for (let j = 99; j > 0; j--) {
            //console.log(j + ' lines of code in the file, ' + j + ' lines of code. ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file.');

            if (j === 1) {
                appendText(div, j + ' line of code in the file, ' + j + ' line of code. ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file.');
            }

            else if (j === 2) {
                appendText(div, j + ' lines of code in the file, ' + j + ' lines of code. ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' line of code in the file.');
            }

            else {
                appendText(div, j + ' lines of code in the file, ' + j + ' lines of code. ' + friends[i] + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file.');
            }
        }
    }
}


