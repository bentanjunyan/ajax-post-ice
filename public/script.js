const postForm = () => {
  const data = {
    problem: 'orange',
    error_text: 'zesty',
    commit: 'valentine',
  };

  // Make a request to create an item
  axios
    .post('/bugs', data)
    .then((response) => {
    // handle success
      console.log(response);
    })
    .catch((error) => {
    // handle error
      console.log(error);
    });
};

const showForm = () => {
  const formContainer = document.createElement('div');
  const submitButton = document.createElement('button');
  submitButton.innerHTML = 'Submit';
  submitButton.addEventListener('click', () => {
    postForm();
  });

  const problemFormField = document.createElement('input');
  problemFormField.setAttribute('type', 'text');
  problemFormField.setAttribute('placeholder', 'Describe the problem');

  const errorFormField = document.createElement('input');
  errorFormField.setAttribute('type', 'text');
  errorFormField.setAttribute('placeholder', 'Error output text, if any');

  const commitFormField = document.createElement('input');
  commitFormField.setAttribute('type', 'text');
  commitFormField.setAttribute('placeholder', 'Associated Git commit, if any.');

  formContainer.appendChild(problemFormField);
  formContainer.appendChild(errorFormField);
  formContainer.appendChild(commitFormField);
  formContainer.appendChild(submitButton);

  document.body.appendChild(formContainer);
  document.getElementById('createButton').style.display = 'none';
};

const createButton = document.createElement('button');
createButton.id = 'createButton';
createButton.innerHTML = 'Create a bug';
createButton.addEventListener('click', () => {
  showForm();
});

document.body.appendChild(createButton);
