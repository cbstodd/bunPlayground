export default class User {
  constructor(
    public bio: string | null,
    public createdAt: number = Date.now(),
    public firstName: string,
    public lastName: string,
    public uid: string,
    public password?: string | null,
    public updatedAt?: number | null,
  ) { }
}