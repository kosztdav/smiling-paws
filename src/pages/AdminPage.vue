<template>
	<div class="adminPage">
		<h2>AdminPage</h2>
		<label for="name">Name</label>
		<input id="name" v-model="model.name" type="text" />
		<label for="email">E-mail</label>
		<input id="email" v-model="model.email" type="email" />
		<button @click="submit">New user</button>

		<table>
			<thead>
				<tr>
					<th>Név</th>
					<th>E-mail</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user, index) in users" :key="index">
					<td>{{ user.name }}</td>
					<td>{{ user.email }}</td>
					<td>
						<button @click="handleModify(user)">Modify</button>
						<button @click="handleDelete(user._id)">Delete</button>
					</td>
				</tr>
			</tbody>
		</table>
		<dialog ref="dialogRef" class="edit-dialog">
			<form method="dialog">
				<h4>Edit User</h4>
				<label for="name">Name</label>
				<input id="name" v-model="editingModel.name" type="text" />
				<label for="email">E-mail</label>
				<input id="email" v-model="editingModel.email" type="email" />
				<menu>
					<button @click="submit">Update</button>
					<button @click="closeModal">Cancel</button>
				</menu>
			</form>
		</dialog>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useUserApi } from '../api/user-api';

const model = ref({ name: '', email: '' });
const editingModel = ref({ name: '', email: '' });
const users = ref([]);
const isEditing = ref(false);
const editingUserId = ref(null);
const dialogRef = ref(null);

const { postUser, getAllUsers, deleteUser, updateUser } = useUserApi();

onMounted(async () => {
	await fetchUsers();
});

const fetchUsers = async () => {
	try {
		const fetchedUsers = await getAllUsers();
		users.value = fetchedUsers.data;
	} catch (error) {
		console.error(error);
	}
};

const submit = async () => {
	try {
		if (isEditing.value) {
			await updateUser(editingUserId.value, editingModel.value);
			editingModel.value = { name: '', email: '' };
		} else {
			await postUser(model.value);
			model.value = { name: '', email: '' };
		}
		await fetchUsers();
		isEditing.value = false;
	} catch (error) {
		console.error(error);
	}
};

const handleDelete = async (id) => {
	try {
		await deleteUser(id);
		await fetchUsers();
	} catch (error) {
		console.error(error);
	}
};

const handleModify = (user) => {
	editingModel.value = { name: user.name, email: user.email };
	isEditing.value = true;
	editingUserId.value = user._id;
	dialogRef.value.showModal();
};

const closeModal = () => {
	editingModel.value = { name: '', email: '' };
	dialogRef.value.close();
};
</script>

<style>
.adminPage {
	max-width: 600px;
	margin: auto;
	padding: 20px;
	background-color: #f9f9f9;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

	h2 {
		text-align: center;
		color: #333;
	}

	h4 {
		margin-bottom: 20px;
		color: #666;
	}

	label {
		display: block;
		margin-top: 20px;
		color: #333;
	}

	input {
		width: 100%;
		padding: 8px;
		margin-top: 5px;
		box-sizing: border-box;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		background-color: #007bff;
		color: white;
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-top: 20px;
		display: block;
	}

	button:hover {
		background-color: #0056b3;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 30px;
	}

	th,
	td {
		text-align: left;
		padding: 8px;
		border-bottom: 1px solid #ddd;
	}

	th {
		background-color: #f2f2f2;
	}

	td button {
		margin-right: 10px;
		padding: 5px 10px;
		font-size: 0.8rem;
	}

	.deleteButton {
		background-color: #dc3545;
	}

	.deleteButton:hover {
		background-color: #c82333;
	}

	.modifyButton {
		background-color: #ffc107;
	}

	.modifyButton:hover {
		background-color: #e0a800;
	}

	.edit-dialog {
		width: 350px;
		border: solid 1px #000;
		border-radius: 5px;
		padding: 20px;
	}
	.edit-dialog menu {
		display: flex;
		justify-content: space-between; /* Adjusts the space between the buttons */
		padding: 0;
		border: none;
		background: transparent;
		margin-top: 20px; /* Adds some space above the buttons */
	}

	.edit-dialog button {
		flex: 1; /* Makes the buttons share the available space */
		margin: 0 5px; /* Adds a little space between the buttons */
	}
}
</style>
