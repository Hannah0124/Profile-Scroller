const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  },
  {
    name: 'Jen Williams',
    age: 29,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/84.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'male',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/81.jpg'
  },
  {
    name: 'Jing Smith',
    age: 33,
    gender: 'female',
    lookingfor: 'female',
    location: 'Newyork NY',
    image: 'https://randomuser.me/api/portraits/women/50.jpg'
  },
  {
    name: 'Kelly Kim',
    age: 31,
    gender: 'male',
    lookingfor: 'female',
    location: 'Seattle WA',
    image: 'https://randomuser.me/api/portraits/men/50.jpg'
  },
  {
    name: 'James White',
    age: 33,
    gender: 'male',
    lookingfor: 'female',
    location: 'Seattle WA',
    image: 'https://randomuser.me/api/portraits/men/51.jpg'
  },
  {
    name: 'Halter Lee',
    age: 31,
    gender: 'female',
    lookingfor: 'female',
    location: 'Seattle WA',
    image: 'https://randomuser.me/api/portraits/women/55.jpg'
  }
];


const profiles = profileIterator(data);

// Call first profile 
nextProfile();

// Next Event 
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // No more profiles 
    window.location.reload();
  }
}


// Profile Iterator 
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      { value: profiles[nextIndex++], done: false } :
      { done: true }
    }
  };
}