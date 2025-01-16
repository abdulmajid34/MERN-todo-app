import axios, { AxiosResponse } from "axios";

import { GetTodoResult } from "types/todos.type";

export const getTodo = async (
  id: string
): Promise<AxiosResponse<GetTodoResult>> => {
  try {
    const res = await axios({
      method: "GET",
      url: `http://localhost:8080/api/todos/${id}`,
    });

    return res;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Failed to get todo"
    );
  }
};
