const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingFor: 'female',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 32,
    gender: 'female',
    lookingFor: 'male',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 32,
    gender: 'male',
    lookingFor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

// Profile iterator 
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: () => {
      return nextIndex < profiles.length ?
      {value: profiles[nextIndex++], done: true} :
      {done: true}
    }
  }
}

const profiles = profileIterator(data);

// call first profile 
nextProfile();

// next event 
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileData').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `
      <img src="${currentProfile.image}">
    `;
  } else {
    // No more profiles 
    window.location.reload();
  }
}