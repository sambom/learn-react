const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  const imageUrl = `${baseUrl}${person.imageId}${person.imageSize}.jpg`;
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img className="avatar"
      src={imageUrl}
      alt={person.name}
      />
    </div>
  );
}