export class ResponesHandler<T> {
  message: string;
  statusCode: number;
  data: T | undefined;
  status: string;
  //   jsonObject: {};

  constructor(message: string, statusCode: number, data?: T) {
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
    this.status = "success";
  }

  code() {
    return this;
  }
  error() {
    this.status = "error";
    return this;
  }
  //   status() {
  //     this.jsonObject = { ...this.jsonObject, message: this.message };
  //     return this;
  //   }
}
