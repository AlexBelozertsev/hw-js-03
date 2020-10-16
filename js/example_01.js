// перебираем массив объектов
// 1. ищем друга по имени
// 2. получаем имена всех друзей
// 3. получаем имена лишь тех, кто онлайн

const friends = [
  { name: "Alex", age: 22, online: true },
  { name: "Andrey", age: 25, online: false },
  { name: "Alise", age: 12, online: true },
  { name: "Ashley", age: 24, online: false },
];

console.table(friends);
console.log(friends[2]); // пример поиска. задействовать .includes() нельзя - т.к. объект

// 1.
const nameToFind = "Andrey";

for (const friend of friends) {
  console.log(friend.name); // т.к. friend - ссылка, то возможно обращение к объекту через .key

  if (friend.name === "Andrey") {
    console.log(`name ${nameToFind} found!`);
    break; // отобразит список только до "Andrey", остальное отсечет
  }
}

// 1. пример поиска через функцию:
const findFriendByName = function (allFriends, name) {
  for (const friend of allFriends) {
    if (friend.name === name) {
      return `name ${name} found!`;
    }
  }
  return `name ${name} not found :(`;
};

console.log(findFriendByName(friends, "Alise"));
console.log(findFriendByName(friends, "Ajax"));

// 2.
const findAllFriends = function (allFriends) {
  let names = [];
  for (const friend of allFriends) {
    names.push(friend.name);
  }
  return names;
};

console.log(findAllFriends(friends));

//3.1
const findOnlineFriends = function (allFriends) {
  let names = [];
  for (const friend of allFriends) {
    if (friend.online) names.push(friend.name);
  }
  return names;
};
console.log(findOnlineFriends(friends));

// 3.2
const findOfflineFriends = function (allFriends) {
  let names = [];
  for (const friend of allFriends) {
    if (!friend.online) names.push(friend.name);
  }
  return names;
};
console.log(findOfflineFriends(friends));
