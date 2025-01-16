import axios from "axios";

export const postTodo = async (data: any): Promise<void> => {
  try {
    await axios({
      method: "POST",
      url: "http://localhost:8080/api/add-todos",
      data,
    });
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to post todo"
    );
  }
};
