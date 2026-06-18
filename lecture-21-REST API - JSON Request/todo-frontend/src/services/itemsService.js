export const addItem = async (task, date) => {
  const response = await fetch("http://localhost:5005/api/todo/item", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  });
  const { item } = await response.json();
  console.log("Item added to server:", item);
  return mapServerItemToLocalItem(item);
};

export const getItems = async () => {
  const response = await fetch("http://localhost:5005/api/todo/item");
  const { items } = await response.json();
  console.log("Items fetched from server:", items);
  return items.map(mapServerItemToLocalItem);
};

export const markItemAsCompleted = async (id) => {
  const response = await fetch(
    `http://localhost:5005/api/todo/item/${id}/complete`,
    {
      method: "PATCH",
    },
  );
  const { item } = await response.json();
  console.log("Item marked as completed on server:", item);
  return mapServerItemToLocalItem(item);
};

export const deleteItem = async (id) => {
  const response = await fetch(`http://localhost:5005/api/todo/item/${id}`, {
    method: "DELETE",
  });
  const { item } = await response.json();
  console.log("Item deleted from server:", item);
  return item._id; // Return the ID of the deleted item to remove it from the local state
};

const mapServerItemToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    name: serverItem.task,
    dueDate: serverItem.date,
    completed: serverItem.completed,
    createdAt: serverItem.createdAt,
    updatedAt: serverItem.updatedAt,
  };
};
