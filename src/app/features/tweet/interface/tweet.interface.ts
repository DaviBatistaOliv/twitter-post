export class Tweet {
  constructor(
    public id: string,
    public timestamp: Date,
    public avatar: string,
    public username: string,
    public nikename: string,
    public post: string
  ) {}
}
