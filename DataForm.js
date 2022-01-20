let column;

export const DataForm = (arg) => {
  if (arg.Gools_1 === arg.Gools_2) {
    column =
      `
        <tr style="background: yellow;">
          <td>${arg.Team_1}</td>
          <td>${arg.Gools_1}-${arg.Gools_2}</td>
          <td>${arg.Team_2}</td>
        </tr>
      `
    // if win
  } else if (arg.Gools_1 > arg.Gools_2) {
    column =
      `
        <tr style="background: limegreen;">
          <td>${arg.Team_1}</td>
          <td>${arg.Gools_1}-${arg.Gools_2}</td>
          <td>${arg.Team_2}</td>
        </tr>
      `
    // else lost
  } else {
    column =
      `
        <tr style="background: red;">
          <td>${arg.Team_1}</td>
          <td>${arg.Gools_1}-${arg.Gools_2}</td>
          <td>${arg.Team_2}</td>
        </tr>
      `
  }
  return column
}