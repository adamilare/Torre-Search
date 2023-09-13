class Person {
  ardaId;
  name;
  username;
  professionalHeadline;
  imageUrl;

  constructor(data) {
    this.ardaId = data.ardaId;
    this.name = data.name;
    this.username = data.username;
    this.professionalHeadline = data.professionalHeadline;
    this.imageUrl = data.imageUrl;
  }
}

export default Person;
