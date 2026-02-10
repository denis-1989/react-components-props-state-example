export default function ExampleMappingOverArrays() {
  // const teamMembers = ['Denis', 'Eranda', 'Eleni', 'Eranda'];
  // will cause issues with duplicated keys

  const teamMembers = [
    { id: 1, name: 'Denis' },
    { id: 2, name: 'Eranda' },
    { id: 3, name: 'Eleni' },
    { id: 4, name: 'Eranda' },
  ];

  return (
    // <ul>
    // <li>Denis</li>
    //<li>Eranda</li>
    //<li>Eleni</li>
    //</ul>
    <div>
      {teamMembers.map((teamMember) => {
        return (
          <div key={`teamMember-${teamMember.id}`}>
            <div>{teamMember.name}</div>
          </div>
        );
      })}
    </div>
  );
}
