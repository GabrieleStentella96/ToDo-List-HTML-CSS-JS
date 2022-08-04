window.addEventListener('load', () => {
	const FORM = document.querySelector("#new-task-form");
	const INPUT = document.querySelector("#new-task-input");
	const ELEMENT_LIST = document.querySelector("#tasks");

	FORM.addEventListener('submit', (element) => {
		element.preventDefault();

		const TASK = INPUT.value;

		const ELEMENT_TASK = document.createElement('div');
		ELEMENT_TASK.classList.add('task');

		const ELEMENT_TASK_CONTENT = document.createElement('div');
		ELEMENT_TASK_CONTENT.classList.add('content');

		ELEMENT_TASK.appendChild(ELEMENT_TASK_CONTENT);

		const ELEMENT_TASK_INPUT = document.createElement('input');
		ELEMENT_TASK_INPUT.classList.add('text');
		ELEMENT_TASK_INPUT.type = 'text';
		ELEMENT_TASK_INPUT.value = TASK;
		ELEMENT_TASK_INPUT.setAttribute('readonly', 'readonly');

		ELEMENT_TASK_CONTENT.appendChild(ELEMENT_TASK_INPUT);

		const ELEMENT_TASK_ACTION = document.createElement('div');
		ELEMENT_TASK_ACTION.classList.add('actions');
		
		const ELEMENT_TASK_EDIT = document.createElement('button');
		ELEMENT_TASK_EDIT.classList.add('aggiungi');
		ELEMENT_TASK_EDIT.innerText = 'Modifica';

		const ELEMENT_TASK_DELETE = document.createElement('button');
		ELEMENT_TASK_DELETE.classList.add('delete');
		ELEMENT_TASK_DELETE.innerText = 'Rimuovi';

		ELEMENT_TASK_ACTION.appendChild(ELEMENT_TASK_EDIT);
		ELEMENT_TASK_ACTION.appendChild(ELEMENT_TASK_DELETE);

		ELEMENT_TASK.appendChild(ELEMENT_TASK_ACTION);

		ELEMENT_LIST.appendChild(ELEMENT_TASK);

		INPUT.value = '';

		ELEMENT_TASK_EDIT.addEventListener('click', (element) => {
			if (ELEMENT_TASK_EDIT.innerText.toLowerCase() == "aggiungi") {
				ELEMENT_TASK_EDIT.innerText = "Salva";
				ELEMENT_TASK_INPUT.removeAttribute("readonly");
				ELEMENT_TASK_INPUT.focus();
			} else {
				ELEMENT_TASK_EDIT.innerText = "Aggiungi";
				ELEMENT_TASK_INPUT.setAttribute("readonly", "readonly");
			}
		});

		ELEMENT_TASK_DELETE.addEventListener('click', (element) => {
			ELEMENT_LIST.removeChild(ELEMENT_TASK);
		});
	});
});