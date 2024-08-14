export class CreateUserDto {
  _id?: string;
  email: string;
  password: string;
  role: number;
  constructor(data) {
    this._id = data._id || String(Math.floor(Math.random() * 1000000));
    this.email = data.email;
    this.password = data.password;
    this.role = data.role || 0;
  }
}
