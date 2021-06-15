export interface ResponseModel<T> {
  data: T[];
  links: {
    first: string;
    last: string;
  };
}
