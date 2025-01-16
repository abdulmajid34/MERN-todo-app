import axios from "axios";

export const deleteTodo = async (id: string): Promise<void> => {
  try {
    axios({
      method: "DELETE",
      url: `http://localhost:8080/api/remove-todos/${id}`,
    });
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to delete todo"
    );
  }
};
