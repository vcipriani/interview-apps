
console.log('Good Luck!!!');

///////////////////////////////////////////////////////////////
// Function Declarations
///////////////////////////////////////////////////////////////
async function fetchJsonData(url) {
    const response = await fetch(url);
    return response.json();
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return await response.json(); // parses JSON response into native JavaScript objects
}

function alertButtonHandler() {
    fetchJsonData('/api/getMessage').
        then((response) => {
            alert(response.message);
        });
}

async function submitForm() {
    const data = $('form').serializeArray();
    await postData('/api/createTask', data);

    refreshDom();
}

async function getTasks() {
    return fetchJsonData('/api/tasks');
}


function addTaskToDom(task) {
    $('#task-list').append(`<li>Name: ${task.name} - Description: ${task.description}</li>`);
}

async function refreshDom() {
    const data = await getTasks();
    
    for(var i = 0; i < data.length; i++) {
        addTaskToDom(data[i]);
    }
}


///////////////////////////////////////////////////////////////////////
// Executed code.
///////////////////////////////////////////////////////////////////////

// Initialize the UI.
refreshDom();