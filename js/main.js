// Классная работа. Асинхронность, промисы и HTTP.

// Используя API списка всех стран
// выведите таблицу с информацией о
// всех странах наподобие такой:
// API: https://restcountries.com/v3.1/all
fetch("https://restcountries.com/v3.1/all")
  .then(result => result.json())
  .then(data => {
    data.forEach(item => {
      console.log(item);
      let elem = `
      <tr>
          <td>${item.cca2}</td>
          <td class = 'img' style = 'background: url(${item.flags.svg})'></td>
          <td>${item.name.official}</td>
          <td>${item.capital}</td>
          <td>${item.population}</td>
      </tr>
      `;
      $("tbody").append(elem);
      $(".img").css("background-size", "contain");
    });
  });
