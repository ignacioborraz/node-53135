const errors = {
  error: { message: "Error", statusCode: 400 },
  invalid: { message: "Invalid credentials", statusCode: 400 },  
  auth: { message: "Bad auth", statusCode: 401 },
  forbidden: { message: "Forbidden", statusCode: 403 },
  notFound: { message: "Not found", statusCode: 404 },
  fatal: { message: "Fatal", statusCode: 500 },
};

export default errors;
