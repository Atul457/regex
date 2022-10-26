const availableUsers = document.querySelector("#availableUsers");
const usersBox = document.querySelector("#usersBox");
const usersListDropdown = document.querySelector("#usersListDropdown");

const users = [
  {
    id: 0,
    name: "Anderson Hamilton",
  },
  {
    id: 1,
    name: "Destany Elliott",
  },
  {
    id: 2,
    name: "Melia McMahan",
  },
  {
    id: 3,
    name: "Courtney Miner",
  },
  {
    id: 4,
    name: "Alan Forman",
  },
  {
    id: 5,
    name: "Garret Andersen",
  },
  {
    id: 6,
    name: "Yamilet Quick",
  },
  {
    id: 7,
    name: "Roman Cheek",
  },
  {
    id: 8,
    name: "Javonte Bourne",
  },
  {
    id: 9,
    name: "Alexa Todd",
  },
  {
    id: 10,
    name: "Angel Skidmore",
  },
  {
    id: 11,
    name: "Vicky Vang",
  },
  {
    id: 12,
    name: "Christa Reardon",
  },
  {
    id: 13,
    name: "Margarita Layton",
  },
  {
    id: 14,
    name: "Jeffery Romo",
  },
  {
    id: 15,
    name: "Ariel Lockett",
  },
  {
    id: 16,
    name: "Andreas Dickinson",
  },
  {
    id: 17,
    name: "Arman Batista",
  },
  {
    id: 18,
    name: "Suzanne Forsythe",
  },
  {
    id: 19,
    name: "Uriah Silverman",
  },
  {
    id: 20,
    name: "Eileen Beckett",
  },
  {
    id: 21,
    name: "Celia Wilder",
  },
  {
    id: 22,
    name: "Mikaila Blanton",
  },
  {
    id: 23,
    name: "Greyson Kilgore",
  },
  {
    id: 24,
    name: "Iyana Meredith",
  },
  {
    id: 25,
    name: "Sydney Lewandowski",
  },
  {
    id: 26,
    name: "Arianna Kendall",
  },
  {
    id: 27,
    name: "Benjamin Gee",
  },
  {
    id: 28,
    name: "Hans Amaral",
  },
  {
    id: 29,
    name: "Blayne Broughton",
  },
  {
    id: 30,
    name: "Keyshawn Lipscomb",
  },
  {
    id: 31,
    name: "Maurice Andres",
  },
  {
    id: 32,
    name: "Sylvia McLain",
  },
  {
    id: 33,
    name: "Viviana Fraley",
  },
  {
    id: 34,
    name: "Rowan Becerra",
  },
  {
    id: 35,
    name: "Isiah Smyth",
  },
  {
    id: 36,
    name: "Pablo Charles",
  },
  {
    id: 37,
    name: "Kristyn Cardoza",
  },
  {
    id: 38,
    name: "Nickolas Jerome",
  },
  {
    id: 39,
    name: "Devante Musser",
  },
  {
    id: 40,
    name: "Demarcus Hundley",
  },
  {
    id: 41,
    name: "Paulina Clifford",
  },
  {
    id: 42,
    name: "Bridger Acevedo",
  },
  {
    id: 43,
    name: "Madelynn Seifert",
  },
  {
    id: 44,
    name: "Nikolas Le",
  },
  {
    id: 45,
    name: "Juwan Morales",
  },
  {
    id: 46,
    name: "Heather House",
  },
  {
    id: 47,
    name: "Harold Stone",
  },
  {
    id: 48,
    name: "Seth Braun",
  },
  {
    id: 49,
    name: "Yesica Fournier",
  },
  {
    id: 50,
    name: "Adriel Kerns",
  },
  {
    id: 51,
    name: "Presley Reeder",
  },
  {
    id: 52,
    name: "Marcel Bermudez",
  },
  {
    id: 53,
    name: "Alexzander Capps",
  },
  {
    id: 54,
    name: "Zackary Counts",
  },
  {
    id: 55,
    name: "Martha Long",
  },
  {
    id: 56,
    name: "Shemar Carl",
  },
  {
    id: 57,
    name: "Travon David",
  },
  {
    id: 58,
    name: "Joseline Angel",
  },
  {
    id: 59,
    name: "Don Parish",
  },
  {
    id: 60,
    name: "Magali Bronson",
  },
  {
    id: 61,
    name: "Ameer Peebles",
  },
  {
    id: 62,
    name: "Breann Davila",
  },
  {
    id: 63,
    name: "Yamilet Marcus",
  },
  {
    id: 64,
    name: "Asher Rich",
  },
  {
    id: 65,
    name: "Zakary Nickel",
  },
  {
    id: 66,
    name: "Yazmin New",
  },
  {
    id: 67,
    name: "Aiyana Vernon",
  },
  {
    id: 68,
    name: "Lorenzo Beach",
  },
  {
    id: 69,
    name: "Annika Coble",
  },
  {
    id: 70,
    name: "Joyce Webb",
  },
  {
    id: 71,
    name: "Dorian Fortin",
  },
  {
    id: 72,
    name: "Shelly Landers",
  },
  {
    id: 73,
    name: "Tanisha Varela",
  },
  {
    id: 74,
    name: "Tate Lind",
  },
  {
    id: 75,
    name: "Anya Dick",
  },
  {
    id: 76,
    name: "Kasandra Peter",
  },
  {
    id: 77,
    name: "Aubrey Chan",
  },
  {
    id: 78,
    name: "Chana Burrows",
  },
  {
    id: 79,
    name: "Mandy Culpepper",
  },
  {
    id: 80,
    name: "Micah Yeager",
  },
  {
    id: 81,
    name: "Terrance Sandlin",
  },
  {
    id: 82,
    name: "Jace Russ",
  },
  {
    id: 83,
    name: "Peyton Soria",
  },
  {
    id: 84,
    name: "Trenten Comer",
  },
  {
    id: 85,
    name: "Russell Hoang",
  },
  {
    id: 86,
    name: "Daron Knoll",
  },
  {
    id: 87,
    name: "Nicole Packer",
  },
  {
    id: 88,
    name: "Tania Blount",
  },
  {
    id: 89,
    name: "Austyn Hagan",
  },
  {
    id: 90,
    name: "Danny Bynum",
  },
  {
    id: 91,
    name: "Davis Cochran",
  },
  {
    id: 92,
    name: "Alora Milner",
  },
  {
    id: 93,
    name: "Jamari Keefe",
  },
  {
    id: 94,
    name: "Efrain Trujillo",
  },
  {
    id: 95,
    name: "Misael Acker",
  },
  {
    id: 96,
    name: "Brice Sorrell",
  },
  {
    id: 97,
    name: "Logan Galloway",
  },
  {
    id: 98,
    name: "Kristin Waterman",
  },
  {
    id: 99,
    name: "Antoine Briseno",
  },
];

let list = "";
users.forEach((curr, index) => {
  list += curr?.name + (users.length - 1 !== index ? ", " : "");
});

usersBox.onkeyup = (e) => {
  getUsers(e.target.innerText);
};

availableUsers.innerHTML = list;

function getUsers(string) {
  let strToSearch = null;
  let userRegex;
  let filteredUsers = [];
  const regex = /(@|(\s@))((\w+)?)$/;
  const result = regex.exec(string);
  let usersListDropdownHtml = "";

  if (result) strToSearch = result[0]?.trim().replace("@", "");
  else strToSearch = null;

  if (strToSearch || strToSearch === "") {
    userRegex = new RegExp(strToSearch, "i");
    filteredUsers = users.filter((user) => userRegex.test(user?.name));
    if (filteredUsers.length) {
      usersListDropdown.classList.remove("d-none");
      filteredUsers.forEach((user) => {
        usersListDropdownHtml += `<li class="list-group-item" onclick="replaceUser('${user?.id}', '${user?.name}', '${strToSearch}')">${user?.name?.trim()}</li>`;
      });
      usersListDropdown.innerHTML = usersListDropdownHtml;
    } else {
      usersListDropdown.innerHTML = "";
      usersListDropdown.classList.add("d-none");
    }
  } else {
    usersListDropdown.innerHTML = "";
    usersListDropdown.classList.add("d-none");
  }
}

function replaceUser(userId, username, searchedStr) {
  console.log(username);
  let actualStr = usersBox.innerHTML;
  let newStr = "";
  let regex = new RegExp("@" + searchedStr + "$");

  newStr = actualStr.replace(
    regex,
    `<span class="tagged_user user${userId?.trim()}" contenteditable="false">@${username}</span>  `
  );
  usersBox.innerHTML = newStr;

  usersListDropdown.innerHTML = "";
  usersListDropdown.classList.add("d-none");
}
