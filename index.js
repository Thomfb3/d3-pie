const form = document.querySelector('form');
const name = document.getElementById('name');
const cost = document.getElementById('cost');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (name.value && cost.value) {

        const item = {
            name: name.value,
            cost: parseInt(cost.value)
        };

        db.collection('expenses').add(item).then(res => {
            error.textContent = "";
            name.value = "";
            cost.value = "";
        })

    } else {
        if (!name.value && !cost.value) {
            error.textContent = 'Please enter values before submitting';
        } else if (!name.value) {
            error.textContent = 'Please enter a name before submitting';
        } else {
            error.textContent = 'Please enter cost before submitting';
        }
    }

})