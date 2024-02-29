import { useState, useEffect, useRef } from 'react';
import { useUserApi } from '../../api/user-api';
import './AdminPage.css';

const AdminPage = () => {
	const [model, setModel] = useState({ name: '', email: '' });
	const [editingModel, setEditingModel] = useState({ name: '', email: '' });
	const [users, setUsers] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const [editingUserId, setEditingUserId] = useState(null);
	const dialogRef = useRef(null);

	const { postUser, getAllUsers, deleteUser, updateUser } = useUserApi();

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			const { data: fetchedUsers } = await getAllUsers();
			setUsers(fetchedUsers);
		} catch (error) {
			console.error(error);
		}
	};

	const modelChanged = (e) => {
		const { id, value } = e.target;
		setModel((prevModel) => ({ ...prevModel, [id]: value }));
	};

	const editingModelChanged = (e) => {
		const { id, value } = e.target;
		setEditingModel((prevModel) => ({ ...prevModel, [id]: value }));
	};

	const submit = async () => {
		try {
			if (isEditing) {
				await updateUser(editingUserId, editingModel);
				setEditingModel({ name: '', email: '' });
			} else {
				await postUser(model);
				setModel({ name: '', email: '' });
			}
			fetchUsers();
			setIsEditing(false);
		} catch (error) {
			console.error(error);
		}
	};

	const handleDelete = async (id) => {
		try {
			await deleteUser(id);
			fetchUsers();
		} catch (error) {
			console.error(error);
		}
	};

	const handleModify = (user) => {
		setEditingModel({ name: user.name, email: user.email });
		setIsEditing(true);
		setEditingUserId(user._id);
		dialogRef.current.showModal();
	};

	const closeModal = () => {
		setEditingModel({ name: '', email: '' });
		dialogRef.current.close();
	};
	return (
		<div className="adminPage">
			<h2>AdminPage</h2>
			<label htmlFor="name">Name</label>
			<input id="name" type="text" value={model.name} onChange={modelChanged} />
			<label htmlFor="email">E-mail</label>
			<input id="email" type="email" value={model.email} onChange={modelChanged} />
			<button onClick={submit}>New user</button>

			<table>
				<thead>
					<tr>
						<th>Név</th>
						<th>E-mail</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((user, index) => (
						<tr key={index}>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>
								<button onClick={() => handleModify(user)}>Modify</button>
								<button onClick={() => handleDelete(user._id)}>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<dialog ref={dialogRef} className="edit-dialog">
				<form method="dialog">
					<h4>Edit User</h4>
					<label htmlFor="name">Name</label>
					<input id="name" type="text" value={editingModel.name} onChange={editingModelChanged} />
					<label htmlFor="email">E-mail</label>
					<input id="email" type="email" value={editingModel.email} onChange={editingModelChanged} />
					<menu>
						<button onClick={submit}>Update</button>
						<button onClick={closeModal}>Cancel</button>
					</menu>
				</form>
			</dialog>
		</div>
	);
};

export default AdminPage;
