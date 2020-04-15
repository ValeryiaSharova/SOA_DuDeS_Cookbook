import config from "config";
import { authHeader } from "@/helpers/auth-header";

export const recipesService = {
  getAll,
  getAllIngredientsName,
  getById,
  create,
  update,
  delete: _delete,
};

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${config.recipesApiUrl}/recipes`, requestOptions).then(
    handleResponse
  );
}

function getAllIngredientsName() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(
    `${config.recipesApiUrl}/recipes/getAllIngredientsName`,
    requestOptions
  ).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`${config.recipesApiUrl}/recipes/${id}`, requestOptions).then(
    handleResponse
  );
}

function create(recipe) {
  const requestOptions = {
    method: "POST",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(recipe),
  };

  return fetch(`${config.recipesApiUrl}/recipes/create`, requestOptions).then(
    handleResponse
  );
}

function update(recipe) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(recipe),
  };

  return fetch(
    `${config.recipesApiUrl}/recipes/${recipe.id}`,
    requestOptions
  ).then(handleResponse);
}

function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };

  return fetch(`${config.recipesApiUrl}/recipes/${id}`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem("token");
        window.location.href =
          config.authUrl + "/login?callbackUrl=" + window.location.href;
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
